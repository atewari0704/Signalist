import nodemailer from "nodemailer";
import { WELCOME_EMAIL_TEMPLATE, NEWS_SUMMARY_EMAIL_TEMPLATE } from "./templates";
import { getFormattedTodayDate } from "@/lib/utils";

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
service: "gmail",
  auth: {
    user: process.env.NODEMAILER_EMAIL!,
    pass: process.env.NODEMAILER_PASSWORD!,
  },
});

export const sendWelcomeEmail = async ({ email, name, intro }: WelcomeEmailData) => {

    const html = WELCOME_EMAIL_TEMPLATE.replace('{{name}}', name).replace('{{intro}}', intro);

    const mailOptions = {
        from: '"Signalist" <signalist@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Welcome to Signalist", // Subject line
        text: "Thanks for joining Signalist. You now have the tools to track markets and make smarter moves.", // plain text body
        html: html, // html body
      }
    
    await transporter.sendMail(mailOptions);
}


export const sendNewsSummaryEmail = async ({ user, newsContent }: { user: User; newsContent: string | null}) => {

  const html = NEWS_SUMMARY_EMAIL_TEMPLATE
  .replace('{{date}}', getFormattedTodayDate())
  .replace('{{newsContent}}', newsContent || 'No market news.');


  const mailOptions = {
      from: '"Signalist" <signalist@gmail.com>', // sender address
      to: user.email, // list of receivers
      subject: "Your Daily Market News Summary", // Subject line
      text: "Hi " + user.name + ", here's your daily market news summary.", // plain text body
      html: html, // html body
    }

  await transporter.sendMail(mailOptions);
}