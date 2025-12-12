"use server";

import { connectToDatabase } from "@/database/mongoose";
import { Watchlist } from "@/database/models/watchlist.model";
import { auth } from "@/lib/better-auth/auth";
import { headers } from "next/headers";

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

        // Query the Watchlist document by userId and return just the symbols
        const watchlist = await Watchlist.findOne(
            { userId },
            { 'items.symbol': 1, _id: 0 }
        ).lean();

        // Extract symbols as strings
        return watchlist?.items?.map((item) => item.symbol) ?? [];
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

    const existing = await Watchlist.exists({ userId, 'items.symbol': trimmedSymbol });

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

    const now = new Date();

    // Try to update existing entry first
    const updateExisting = await Watchlist.updateOne(
        { userId, 'items.symbol': trimmedSymbol },
        {
            $set: {
                'items.$.company': trimmedCompany,
                'items.$.addedAt': now,
            },
        }
    );

    if (updateExisting.matchedCount > 0) {
        return;
    }

    try {
        await Watchlist.findOneAndUpdate(
            { userId },
            {
                $setOnInsert: { userId },
                $push: {
                    items: {
                        symbol: trimmedSymbol,
                        company: trimmedCompany,
                        addedAt: now,
                    },
                },
            },
            { upsert: true, new: true, setDefaultsOnInsert: true },
        );
    } catch (error: any) {
        // Handle race condition where the symbol was inserted by another request
        if (error?.code === 11000) {
            await Watchlist.updateOne(
                { userId, 'items.symbol': trimmedSymbol },
                {
                    $set: {
                        'items.$.company': trimmedCompany,
                        'items.$.addedAt': now,
                    },
                }
            );
            return;
        }

        throw error;
    }
};

export const removeStockFromWatchlist = async ({ userId, symbol }: ModifyWatchlistParams) => {
    const trimmedSymbol = symbol?.trim().toUpperCase();

    if (!trimmedSymbol) {
        throw new Error('Symbol is required');
    }

    await connectToDatabase();

    await Watchlist.updateOne(
        { userId },
        {
            $pull: {
                items: { symbol: trimmedSymbol },
            },
        }
    );
};


export const getMyWatchlistSymbols = async (): Promise<string[]> => {
    try {
        const session = await auth.api.getSession({
            headers: await headers() // await headers() is required in newer next.js versions, safe to await
        });

        if (!session?.user?.email) {
            return [];
        }

        return await getWatchlistSymbolsByEmail(session.user.email);
    } catch (error) {
        console.error("Failed to fetch my watchlist symbols", error);
        return [];
    }
}

export const removeFromMyWatchlist = async (symbol: string) => {
    try {
        const session = await auth.api.getSession({
            headers: await headers()
        });

        if (!session?.user?.id) {
            throw new Error("Unauthorized");
        }

        await removeStockFromWatchlist({
            userId: session.user.id,
            symbol
        });

        return { success: true };
    } catch (error) {
        console.error("Failed to remove from watchlist", error);
        throw error;
    }
}

export const addToMyWatchlist = async (symbol: string, company: string) => {
    try {
        const session = await auth.api.getSession({
            headers: await headers()
        });

        if (!session?.user?.id) {
            throw new Error("Unauthorized");
        }

        await addStockToWatchlist({
            userId: session.user.id,
            symbol,
            company
        });

        return { success: true };
    } catch (error) {
        console.error("Failed to add to watchlist", error);
        throw error;
    }
}

export const getMyWatchlistStatus = async (symbol: string) => {
    try {
        const session = await auth.api.getSession({
            headers: await headers()
        });

        if (!session?.user?.id) {
            return { isInWatchlist: false };
        }

        const isInWatchlist = await isStockInWatchlist({
            userId: session.user.id,
            symbol
        });

        return { isInWatchlist };
    } catch (error) {
        console.error("Failed to check watchlist status", error);
        return { isInWatchlist: false };
    }
}
