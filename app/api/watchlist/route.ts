import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

import { auth } from '@/lib/better-auth/auth';
import { addStockToWatchlist, isStockInWatchlist, removeStockFromWatchlist, getWatchlistSymbolsByEmail } from '@/lib/actions/watchlist.actions';

type WatchlistPayload = {
    symbol?: string;
    company?: string;
};

const getSessionUserId = async () => {
    const requestHeaders = await headers();
    const session = await auth.api.getSession({
        headers: Object.fromEntries(requestHeaders.entries()),
    });

    return session?.user?.id ?? null;
};

const parseRequestBody = async (request: Request): Promise<WatchlistPayload> => {
    try {
        return await request.json();
    } catch {
        return {};
    }
};

export async function POST(request: Request) {
    try {
        const userId = await getSessionUserId();

        if (!userId) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        const { symbol, company } = await parseRequestBody(request);

        if (!symbol || !company) {
            return NextResponse.json({ message: 'Symbol and company are required' }, { status: 400 });
        }

        await addStockToWatchlist({
            userId,
            symbol,
            company,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Failed to add watchlist item:', error);
        return NextResponse.json({ message: 'Failed to add to watchlist' }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const userId = await getSessionUserId();

        if (!userId) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        const { symbol } = await parseRequestBody(request);

        if (!symbol) {
            return NextResponse.json({ message: 'Symbol is required' }, { status: 400 });
        }

        await removeStockFromWatchlist({ userId, symbol });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Failed to remove watchlist item:', error);
        return NextResponse.json({ message: 'Failed to remove from watchlist' }, { status: 500 });
    }
}

export async function GET(request: Request) {
    try {
        const requestHeaders = await headers();
        const session = await auth.api.getSession({
            headers: Object.fromEntries(requestHeaders.entries()),
        });

        const userId = session?.user?.id ?? null;
        const userEmail = session?.user?.email ?? null;

        if (!userId || !userEmail) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        const { searchParams } = new URL(request.url);
        const symbol = searchParams.get('symbol');

        // If no symbol provided, return all watchlist symbols
        if (!symbol) {
            const symbols = await getWatchlistSymbolsByEmail(userEmail);
            return NextResponse.json({ symbols });
        }

        // Otherwise, check if specific symbol is in watchlist
        const isInWatchlist = await isStockInWatchlist({ userId, symbol });

        return NextResponse.json({ isInWatchlist });
    } catch (error) {
        console.error('Failed to fetch watchlist status:', error);
        return NextResponse.json({ message: 'Failed to fetch watchlist status' }, { status: 500 });
    }
}


