import { connectToDatabase } from "@/database/mongoose";
import 'dotenv/config'; // Add this at the very top



const BACKEND_URL = (process.env.BACKEND_URL || "http://localhost:8080").replace(/\/+$/, "");


/**
 * Retrieves all users from the database who have a valid email and name for news email distribution.
 * 
 * @returns {Promise<{ id: string; email: string; name: string; }[]>} A promise that resolves to an array of User objects.
 */

export const getAllUsersForNewsEmail = async () => {
    try {
        const mongoose = await connectToDatabase();
        const db = mongoose.connection.db;
        if (!db) throw new Error('Failed to connect to database');

        const users = await db.collection('user').find(
            { email: { $exists: true, $ne: null } },
            { projection: { _id: 1, id: 1, email: 1, name: 1, country: 1 } }
        ).toArray();

        return users.filter((user) => user.email && user.name).map((user) => ({
            id: user.id || user._id?.toString() || '',
            email: user.email,
            name: user.name

        }));
    }
    catch (e) {
        console.error('Failed to get all users', e);
        return [];
    }
}


/**
 * Retrieves all users from the database who have a valid email and name for news email distribution.
 * 
 * @returns {Promise<{ id: string; email: string; name: string; }[]>} A promise that resolves to an array of User objects.
 */
export const getAllUsersWithEmail = async () => {
    try {
        const response = await fetch(`${BACKEND_URL}/users/withEmail`)
        const users: User[] = await response.json()
        return users
    }
    catch (error) {
        console.error('Error fetching watchlist symbols:', error);
        return [];
    }
}