import mongoose from 'mongoose';

import { connectToDatabase } from '../database/mongoose';

type LegacyWatchlistDoc = {
    _id: mongoose.Types.ObjectId;
    userId: string;
    symbol?: string;
    company?: string;
    addedAt?: Date;
};

type WatchlistStock = {
    symbol: string;
    company: string;
    addedAt: Date;
};

async function migrateWatchlists() {
    await connectToDatabase();

    const collection = mongoose.connection.db?.collection<LegacyWatchlistDoc>('watchlists');

    if (!collection) {
        throw new Error('Watchlist collection not found');
    }

    const legacyDocs = await collection.find({ symbol: { $exists: true } }).toArray();

    if (legacyDocs.length === 0) {
        console.log('No legacy watchlist documents detected. Nothing to migrate.');
        process.exit(0);
    }

    const grouped = legacyDocs.reduce<Record<string, LegacyWatchlistDoc[]>>((acc, doc) => {
        if (!doc.userId) {
            return acc;
        }
        if (!acc[doc.userId]) {
            acc[doc.userId] = [];
        }
        acc[doc.userId].push(doc);
        return acc;
    }, {});

    let migratedUsers = 0;

    for (const [userId, docs] of Object.entries(grouped)) {
        if (docs.length === 0) continue;

        const deduped = new Map<string, WatchlistStock>();

        docs.forEach((doc) => {
            const symbol = doc.symbol?.trim().toUpperCase();
            const company = doc.company?.trim();
            if (!symbol || !company) return;

            deduped.set(symbol, {
                symbol,
                company,
                addedAt: doc.addedAt || new Date(),
            });
        });

        if (deduped.size === 0) continue;

        const items = Array.from(deduped.values());
        const [primaryDoc, ...others] = docs;

        await collection.updateOne(
            { _id: primaryDoc._id },
            {
                $set: {
                    userId,
                    items,
                },
                $unset: {
                    symbol: '',
                    company: '',
                },
            },
            { upsert: true }
        );

        if (others.length) {
            await collection.deleteMany({
                _id: {
                    $in: others.map((doc) => doc._id),
                },
            });
        }

        migratedUsers += 1;
    }

    console.log(`✅ Migrated watchlists for ${migratedUsers} users.`);
    process.exit(0);
}

migrateWatchlists().catch((error) => {
    console.error('❌ Watchlist migration failed:', error);
    process.exit(1);
});

