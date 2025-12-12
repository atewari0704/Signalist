import { Schema, model, models, Document, Model } from 'mongoose';

export interface WatchlistStock {
    symbol: string;
    company: string;
    addedAt: Date;
}

export interface WatchlistItem extends Document {
    userId: string;
    items: WatchlistStock[];
}


// We make this more simple later on 
const WatchlistSchema = new Schema<WatchlistItem>({
    userId: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    items: {
        type: [
            new Schema<WatchlistStock>(
                {
                    symbol: {
                        type: String,
                        required: true,
                        uppercase: true,
                        trim: true,
                    },
                    company: {
                        type: String,
                        required: true,
                        trim: true,
                    },
                    addedAt: {
                        type: Date,
                        default: Date.now,
                    },
                },
                { _id: false }
            ),
        ],
        default: [],
    },
});

// Ensure each symbol appears at most once per user
WatchlistSchema.index({ userId: 1, 'items.symbol': 1 }, { unique: true });

export const Watchlist: Model<WatchlistItem> =
    (models?.Watchlist as Model<WatchlistItem>) || model<WatchlistItem>('Watchlist', WatchlistSchema);