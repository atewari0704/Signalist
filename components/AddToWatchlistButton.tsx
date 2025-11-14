'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

type AddToWatchlistButtonProps = {
    symbol: string;
    exchange?: string;
};

const AddToWatchlistButton = ({ symbol, exchange }: AddToWatchlistButtonProps) => {
    const [added, setAdded] = useState(false);

    const labelSymbol = symbol ? symbol.toUpperCase() : 'SYMBOL';
    const labelExchange = exchange ? exchange.toUpperCase() : undefined;

    return (
        <Button
            className={`w-full rounded-xl px-6 py-6 text-lg font-bold transition-all ${
                added
                    ? '!bg-red-400 !text-black hover:!bg-red-500 border-red-400'
                    : '!bg-yellow-400 !text-black hover:!bg-yellow-500 border-yellow-400'
            }`}
            onClick={() => setAdded((prev) => !prev)}
        >
            <span className="flex items-center justify-center gap-2">
                {added ? 'Remove from Watchlist' : 'Add to Watchlist'}
            </span>
        </Button>
    );
};

export default AddToWatchlistButton;

