'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { addToMyWatchlist, removeFromMyWatchlist, getMyWatchlistStatus } from '@/lib/actions/watchlist.actions';
import { toast } from 'sonner';

type AddToWatchlistButtonProps = {
    symbol: string;
    exchange?: string;
    companyName: string;
};

const AddToWatchlistButton = ({ symbol, exchange, companyName }: AddToWatchlistButtonProps) => {
    const [added, setAdded] = useState(false);
    const [loading, setLoading] = useState(true);

    const labelSymbol = symbol ? symbol.toUpperCase() : 'SYMBOL';

    useEffect(() => {
        const checkStatus = async () => {
            if (!symbol) return;
            try {
                const { isInWatchlist } = await getMyWatchlistStatus(symbol);
                setAdded(isInWatchlist);
            } catch (error) {
                console.error('Failed to check watchlist status', error);
            } finally {
                setLoading(false);
            }
        };

        checkStatus();
    }, [symbol]);

    const handleToggle = async () => {
        setLoading(true);
        try {
            if (added) {
                await removeFromMyWatchlist(symbol);
                toast.success(`${labelSymbol} removed from watchlist`);
                setAdded(false);
            } else {
                await addToMyWatchlist(symbol, companyName);
                toast.success(`${labelSymbol} added to watchlist`);
                setAdded(true);
            }
        } catch (error) {
            console.error('Failed to update watchlist', error);
            toast.error('Failed to update watchlist');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Button
            className={`w-full rounded-xl px-6 py-6 text-lg font-bold transition-all ${added
                    ? '!bg-red-400 !text-black hover:!bg-red-500 border-red-400'
                    : '!bg-yellow-400 !text-black hover:!bg-yellow-500 border-yellow-400'
                }`}
            onClick={handleToggle}
            disabled={loading}
        >
            <span className="flex items-center justify-center gap-2">
                {loading ? 'Loading...' : added ? 'Remove from Watchlist' : 'Add to Watchlist'}
            </span>
        </Button>
    );
};

export default AddToWatchlistButton;

