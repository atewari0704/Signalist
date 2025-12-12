"use server";

import { connectToDatabase } from "@/database/mongoose";
import { Alert, AlertItem } from "@/database/models/alert.model";
import { auth } from "../better-auth/auth";
import { headers } from "next/headers";

/**
 * Get all alerts for a specific user.
 * Each alert contains the stock symbol and condition.
 */
export const getStocksWithAlerts = async (): Promise<AlertItem[]> => {
    try {
        const session = await auth.api.getSession({
            headers: await headers() // Ensure headers are awaited properly
        });

        if (!session?.user?.id) {
            console.error("No userId provided to getStocksWithAlerts");
            return [];
        }

        await connectToDatabase();

        const userAlerts = await Alert.findOne({ userId: session.user.id });

        if (!userAlerts || !userAlerts.alerts) {
            return [];
        }

        // Serialize to ensure plain objects are returned to client components
        return JSON.parse(JSON.stringify(userAlerts.alerts));
    } catch (error) {
        console.error("Error fetching user alerts:", error);
        return [];
    }
};

type AlertParams = {
    symbol: string;
    targetPrice: number;
    condition: 'ABOVE' | 'BELOW';
};


/**
 * Add a new alert for a specific stock.
 * @param symbol - The stock symbol to add an alert for.
 * @param targetPrice - The target price for the alert.
 * @param condition - The condition for the alert (e.g., "ABOVE" or "BELOW").
 * @returns The updated user alerts object.
 */
export const addStockAlert = async ({
    symbol,
    targetPrice,
    condition,
}: AlertParams) => {
    try {
        const session = await auth.api.getSession({
            headers: await headers()
        });

        if (!session?.user?.id) {
            throw new Error("Unauthorized");
        }

        if (!symbol) {
            throw new Error('Symbol is required');
        }

        await connectToDatabase();

        const newAlert: AlertItem = {
            symbol: symbol,
            targetPrice,
            condition,
            status: 'ACTIVE',
            createdAt: new Date(),
        };

        const updated = await Alert.findOneAndUpdate(
            { userId: session.user.id },
            {
                $push: { alerts: newAlert },
                $setOnInsert: { userId: session.user.id }, // Ensure userId is set on insert
            },
            { upsert: true, new: true, setDefaultsOnInsert: true }
        );

        return JSON.parse(JSON.stringify(updated.alerts));
    } catch (error) {
        console.error('Error adding stock alert:', error);
        throw error; // Re-throw to handle in UI
    }
};


/**
 * Remove an alert for a specific stock.
 * Matches on symbol, targetPrice, and condition to remove the specific alert.
 * @param symbol - The stock symbol to add an alert for.
 * @param targetPrice - The target price for the alert.
 * @param condition - The condition for the alert (e.g., "ABOVE" or "BELOW").
 * @returns The updated user alerts object.
 */
export const removeStockAlert = async ({
    symbol,
    targetPrice,
    condition,
}: AlertParams) => {
    try {
        const session = await auth.api.getSession({
            headers: await headers()
        });

        if (!session?.user?.id) {
            throw new Error("Unauthorized");
        }

        if (!symbol) {
            throw new Error('Symbol is required');
        }

        await connectToDatabase();

        const updated = await Alert.findOneAndUpdate(
            { userId: session.user.id },
            {
                $pull: {
                    alerts: {
                        symbol: symbol,
                        targetPrice: targetPrice,
                        condition: condition,
                    },
                },
            },
            { new: true }
        );

        if (!updated) {
            return [];
        }

        return JSON.parse(JSON.stringify(updated.alerts));
    } catch (error) {
        console.error('Error removing stock alert:', error);
        throw error;
    }
};