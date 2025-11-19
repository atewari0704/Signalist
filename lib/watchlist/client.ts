"use client";

type WatchlistRequestResult = {
    success: boolean;
    message?: string;
};

const WATCHLIST_ENDPOINT = '/api/watchlist';

const parseResponse = async (response: Response) => {
    try {
        return await response.json();
    } catch {
        return {};
    }
};

const handleResponse = async (response: Response) => {
    const body = await parseResponse(response);

    if (!response.ok) {
        throw new Error(body?.message || 'Watchlist request failed');
    }

    return body as WatchlistRequestResult;
};

export const addToWatchlist = async (symbol: string, company: string) => {
    const payload = {
        symbol,
        company,
    };

    const response = await fetch(WATCHLIST_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    return handleResponse(response);
};

export const removeFromWatchlist = async (symbol: string) => {
    const payload = {
        symbol,
    };

    const response = await fetch(WATCHLIST_ENDPOINT, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    return handleResponse(response);
};

export const getWatchlistStatus = async (symbol: string): Promise<{ isInWatchlist: boolean }> => {
    const url = `${WATCHLIST_ENDPOINT}?${new URLSearchParams({
        symbol,
    }).toString()}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const body = await parseResponse(response);

    if (!response.ok) {
        throw new Error(body?.message || 'Failed to fetch watchlist status');
    }

    return {
        isInWatchlist: Boolean(body?.isInWatchlist),
    };
};


