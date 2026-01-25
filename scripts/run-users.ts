import { getAllUsersWithEmail } from '../lib/actions/users.actions';

async function main() {
    console.log('--- Calling getAllUsersWithEmail ---');
    try {
        const users = await getAllUsersWithEmail();
        console.log('Result:', JSON.stringify(users, null, 2));
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

main();
