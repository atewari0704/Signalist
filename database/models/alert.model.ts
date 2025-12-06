import { Schema, model, models, Document, Model } from 'mongoose';

export interface AlertItem {
    symbol: string;
    targetPrice: number;
    condition: 'ABOVE' | 'BELOW';
    status: 'ACTIVE' | 'TRIGGERED';
    createdAt: Date;
    triggeredAt?: Date;
    _id?: string; // Subdocument ID
}

export interface UserAlerts extends Document {
    userId: string;
    alerts: AlertItem[];
}

const AlertItemSchema = new Schema<AlertItem>({
    symbol: {
        type: String,
        required: true,
        uppercase: true,
        trim: true,
    },
    targetPrice: {
        type: Number,
        required: true,
    },
    condition: {
        type: String,
        enum: ['ABOVE', 'BELOW'],
        required: true,
    },
    status: {
        type: String,
        enum: ['ACTIVE', 'TRIGGERED'],
        default: 'ACTIVE',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    triggeredAt: {
        type: Date,
    },
});

const UserAlertsSchema = new Schema<UserAlerts>({
    userId: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    alerts: {
        type: [AlertItemSchema],
        default: [],
    },
});

export const Alert: Model<UserAlerts> =
    (models?.Alert as Model<UserAlerts>) || model<UserAlerts>('Alert', UserAlertsSchema);
