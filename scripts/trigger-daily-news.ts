/**
 * Manual trigger for daily news summary
 * 
 * This script manually triggers the daily news summary Inngest function
 * Useful for testing without waiting for the cron schedule
 */

import { inngest } from "../lib/inngest/client";

async function triggerDailyNews() {
    console.log('🚀 Triggering daily news summary...\n');

    try {
        const result = await inngest.send({
            name: 'app/send.daily.news',
            data: {}
        });

        console.log('✅ Successfully triggered daily news summary!');
        console.log('Event IDs:', result.ids);
        console.log('\n📧 Emails will be sent to all users with news summaries.');
        console.log('Check your Inngest dashboard to monitor progress.');
        
    } catch (error) {
        console.error('❌ Error triggering daily news:', error);
        process.exit(1);
    }
}

// Run the trigger
triggerDailyNews();

