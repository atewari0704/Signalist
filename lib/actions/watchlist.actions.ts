"use server";

import { connectToDatabase } from "@/database/mongoose";
import { Watchlist } from "@/database/models/watchlist.model";

/**
 * Get watchlist symbols for a user by their email
 * @param email - User's email address
 * @returns Array of stock symbols (strings)
 */
export const getWatchlistSymbolsByEmail = async (email: string): Promise<string[]> => {
    try {
        // Connect to database
        const mongoose = await connectToDatabase();
        const db = mongoose.connection.db;
        
        if (!db) {
            console.error('Failed to connect to database');
            return [];
        }

        // Find user by email in the user collection (Better Auth)
        const user = await db.collection('user').findOne(
            { email },
            { projection: { id: 1, _id: 1 } }
        );

        // If no user found, return empty array
        if (!user) {
            console.log(`No user found with email: ${email}`);
            return [];
        }

        // Get userId (Better Auth uses 'id' field)
        const userId = user.id || user._id?.toString();

        if (!userId) {
            console.error('User found but no valid ID');
            return [];
        }

        // Query the Watchlist by userId and return just the symbols
        const items = await Watchlist.find(
            { userId },
            { symbol: 1, _id: 0 }
        ).lean();

        // Extract symbols as strings
        return items.map((i) => i.symbol);
    } catch (error) {
        console.error('Error fetching watchlist symbols:', error);
        return [];
    }
};

type ModifyWatchlistParams = {
    userId: string;
    symbol: string;
};

type AddToWatchlistParams = ModifyWatchlistParams & {
    company: string;
};

export const isStockInWatchlist = async ({ userId, symbol }: ModifyWatchlistParams): Promise<boolean> => {
    const trimmedSymbol = symbol?.trim().toUpperCase();

    if (!userId || !trimmedSymbol) {
        return false;
    }

    await connectToDatabase();

    const existing = await Watchlist.exists({ userId, symbol: trimmedSymbol });

    return Boolean(existing);
};

export const addStockToWatchlist = async ({
    userId,
    symbol,
    company,
}: AddToWatchlistParams) => {
    const trimmedSymbol = symbol?.trim().toUpperCase();
    const trimmedCompany = company?.trim();

    if (!trimmedSymbol) {
        throw new Error('Symbol is required');
    }

    if (!trimmedCompany) {
        throw new Error('Company name is required');
    }

    await connectToDatabase();

    await Watchlist.findOneAndUpdate(
        { userId, symbol: trimmedSymbol },
        {
            userId,
            symbol: trimmedSymbol,
            company: trimmedCompany,
            addedAt: new Date(),
        },
        { upsert: true, new: true, setDefaultsOnInsert: true },
    );
};

export const removeStockFromWatchlist = async ({ userId, symbol }: ModifyWatchlistParams) => {
    const trimmedSymbol = symbol?.trim().toUpperCase();

    if (!trimmedSymbol) {
        throw new Error('Symbol is required');
    }

    await connectToDatabase();

    await Watchlist.deleteOne({ userId, symbol: trimmedSymbol });
};

