"use server";

import { connectToDatabase } from "@/database/mongoose";
import { Alert, AlertItem } from "@/database/models/alert.model";

/**
 * Get all alerts for a specific user.
 * Each alert contains the stock symbol and condition.
 */
export const getStocksWithAlerts = async (userId: string): Promise<AlertItem[]> => {
    try {
        if (!userId) {
            console.error("No userId provided to getStocksWithAlerts");
            return [];
        }

        await connectToDatabase();

        const userAlerts = await Alert.findOne({ userId });

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
    userId: string;
    symbol: string;
    targetPrice: number;
    condition: 'ABOVE' | 'BELOW';
};

/**
 * Add a new alert for a specific stock.
 * @param userId - The ID of the user adding the alert.
 * @param symbol - The stock symbol to add an alert for.
 * @param targetPrice - The target price for the alert.
 * @param condition - The condition for the alert (e.g., "ABOVE" or "BELOW").
 * @returns The updated user alerts object.
 */
export const addStockAlert = async ({
    userId,
    symbol,
    targetPrice,
    condition,
}: AlertParams) => {
    try {
        if (!userId) {
            throw new Error('User ID is required');
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
            { userId },
            {
                $push: { alerts: newAlert },
                $setOnInsert: { userId }, // Ensure userId is set on insert
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
 * @param userId - The ID of the user adding the alert.
 * @param symbol - The stock symbol to add an alert for.
 * @param targetPrice - The target price for the alert.
 * @param condition - The condition for the alert (e.g., "ABOVE" or "BELOW").
 * @returns The updated user alerts object.
 */
export const removeStockAlert = async ({
    userId,
    symbol,
    targetPrice,
    condition,
}: AlertParams) => {
    try {
        if (!userId) {
            throw new Error('User ID is required');
        }

        if (!symbol) {
            throw new Error('Symbol is required');
        }

        await connectToDatabase();

        const updated = await Alert.findOneAndUpdate(
            { userId },
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