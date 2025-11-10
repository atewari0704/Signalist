import 'dotenv/config'; // Add this at the very top
import { getAllUsersForNewsEmail } from "./lib/actions/users.actions";
import { connectToDatabase } from "@/database/mongoose";
import mongoose from 'mongoose';
import {inngest} from "@/lib/inngest/client";
import {NEWS_SUMMARY_EMAIL_PROMPT, PERSONALIZED_WELCOME_EMAIL_PROMPT} from "@/lib/inngest/prompts";
import { sendWelcomeEmail, sendNewsSummaryEmail } from "@/lib/nodemailer/index";
import { getWatchlistSymbolsByEmail } from "@/lib/actions/watchlist.actions";
import { getNews } from "@/lib/actions/finnhub.actions";



 const sendDailyNewsSummary = async() => {
        // Step 1: Get all users from MongoDB
        const users = await getAllUsersForNewsEmail();

        if (!users || users.length === 0) return { success: false, message: 'No users found' };

        console.log("Step 1 Done.\nUsers:", users);
        

        // Step 2: For each user, get their watchlist symbols and fetch news
        const getNewsForUsers = async () => {
            const perUser: Array<{ user: User; news: MarketNewsArticle[] }> = [];

            for (const user of users) {
                const watchlistSymbols = await getWatchlistSymbolsByEmail(user.email);
                let news: MarketNewsArticle[] = [];

                if(watchlistSymbols.length === 0 || !watchlistSymbols ) {
                     news = await getNews();
                }else{
                    news = await getNews(watchlistSymbols);
                }

                news = (news || []).slice(0, 6); //only keep 6 articles max

                perUser.push({ user, news });
            }

            return perUser;
        }

        const results = await getNewsForUsers();

        console.log("\nStep 2 Done.\nNews for Users:\n",
             (results).map(({user, news}) => (
                {
                 user: user.email,
                 news: news.map((n) => n.headline)
                }
                )));

        // //step 3: Generate AI summary for each user
        const userNewsSummaries: { user: User; newsContent: string | null}[] = [];

        for (const { user, news } of results) {
                try {
                    const prompt = NEWS_SUMMARY_EMAIL_PROMPT.replace('{{newsData}}', JSON.stringify(news, null, 2));

                    const response = await step.ai.infer(`summarize-news-${user.email}`, {
                        model: step.ai.models.gemini({ model: 'gemini-2.5-flash-lite' }),
                        body: {
                            contents: [{ role: 'user', parts: [{ text:prompt }]}]
                        }
                    });

                    const part = response.candidates?.[0]?.content?.parts?.[0];
                    const newsContent = (part && 'text' in part ? part.text : null) || 'No market news.'

                    userNewsSummaries.push({ user, newsContent });
                } catch (e) {
                    console.error('Failed to summarize news for : ', user.email);
                    userNewsSummaries.push({ user, newsContent: null });
                }
        }


        // //step 4: Send email to each user with their personalized news summary
        // await step.run('send-news-emails', async() => {
        //     return await Promise.all(
        //         userNewsSummaries.map(async({user, newsContent}) => 
        //              { 
        //                 if(!newsContent) return false;
        //                 return await sendNewsSummaryEmail({ user, newsContent }) 
        //             }
        //         )
        //     );
        // });

        // return {
        //     success: true,
        //     message: `Processed ${users.length} users for daily news summary`
        // };
    }

sendDailyNewsSummary();
