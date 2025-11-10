import { connectToDatabase } from "@/database/mongoose";
import 'dotenv/config'; // Add this at the very top


export const getAllUsersForNewsEmail = async () => {
    try{    
    const mongoose = await connectToDatabase();
    const db = mongoose.connection.db;
    if(!db) throw new Error('Failed to connect to database');

    const users = await db.collection('user').find(
        { email: { $exists: true, $ne: null }},
        { projection: { _id: 1, id: 1, email: 1, name: 1, country:1 }}
    ).toArray();

    return users.filter((user) => user.email && user.name).map((user) => ({
            id: user.id || user._id?.toString() || '',
            email: user.email,
            name: user.name

    }));}
    catch(e){
        console.error('Failed to get all users', e);
        return [];
    }
}