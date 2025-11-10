import {inngest} from "@/lib/inngest/client";
import {NEWS_SUMMARY_EMAIL_PROMPT, PERSONALIZED_WELCOME_EMAIL_PROMPT} from "@/lib/inngest/prompts";
import { sendWelcomeEmail, sendNewsSummaryEmail } from "@/lib/nodemailer/index";
import { getAllUsersForNewsEmail } from "../actions/users.actions";
import { getWatchlistSymbolsByEmail } from "../actions/watchlist.actions";
import { getNews } from "../actions/finnhub.actions";
import 'dotenv/config'; 

//use the following to get inngest running: npx inngest-cli@latest dev 

export const sendDailyNewsSummary = inngest.createFunction(
    { id: 'daily-news-summary' },
    [ { event: 'app/send.daily.news' }, { cron: '0 12 * * *' } ],
    async ({ step }) => {
        // Step 1: Get all users from MongoDB
        const users = await step.run('get-all-users-for-news-email', getAllUsersForNewsEmail);

        if (!users || users.length === 0) return { success: false, message: 'No users found' };
        

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

        const results = await step.run('fetch-user-news', getNewsForUsers);

        console.log("Done with step 2")

        //step 3: Generate AI summary for each user
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


        //step 4: Send email to each user with their personalized news summary
        await step.run('send-news-emails', async() => {
            return await Promise.all(
                userNewsSummaries.map(async({user, newsContent}) => 
                     { 
                        if(!newsContent) return false;
                        return await sendNewsSummaryEmail({ user, newsContent }) 
                    }
                )
            );
        });

        return {
            success: true,
            message: `Processed ${users.length} users for daily news summary`
        };
    }
)




export const sendSignUpEmail = inngest.createFunction(
    { id: 'sign-up-email' },
    { event: 'app/user.created'},
    async ({ event, step }) => {
        const userProfile = `
            - Country: ${event.data.country}
            - Investment goals: ${event.data.investmentGoals}
            - Risk tolerance: ${event.data.riskTolerance}
            - Preferred industry: ${event.data.preferredIndustry}
        `

        const prompt = PERSONALIZED_WELCOME_EMAIL_PROMPT.replace('{{userProfile}}', userProfile)

        const response = await step.ai.infer('generate-welcome-intro', {
            model: step.ai.models.gemini({ model: 'gemini-2.5-flash-lite' }),
            body: {
                contents: [
                    {
                        role: 'user',
                        parts: [
                            { text: prompt }
                        ]
                    }]
            }
        })

        await step.run('send-welcome-email', async () => {
            const part = response.candidates?.[0]?.content?.parts?.[0];
            const introText = (part && 'text' in part ? part.text : null) ||'Thanks for joining Signalist. You now have the tools to track markets and make smarter moves.'

            const { data: { email, name } } = event;

            return await sendWelcomeEmail({ email, name, intro: introText });
        })

        return {
            success: true,
            message: 'Welcome email sent successfully'
        }
    }
)
