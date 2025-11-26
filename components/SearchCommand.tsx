'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { CommandDialog, CommandEmpty, CommandInput, CommandList } from '@/components/ui/command';
import { Button } from './ui/button';
import { TrendingUp, Loader2, Star } from 'lucide-react';
import Link from 'next/link';
import { searchStocks } from '@/lib/actions/finnhub.actions';
import { useDebounce } from '@/hooks/useDebounce';
import { toast } from 'sonner';
import { addToWatchlist, getWatchlistStatus, removeFromWatchlist, getAllWatchlistSymbols } from '@/lib/watchlist/client';

type WatchlistLookup = Record<string, boolean>;

const normalizeSymbol = (value?: string) => value?.trim().toUpperCase() || '';

const buildLookup = (stocks: StockWithWatchlistStatus[] = []) => {
    const lookup: WatchlistLookup = {};
    stocks.forEach((stock) => {
        if (stock.isInWatchlist) {
            lookup[normalizeSymbol(stock.symbol)] = true;
        }
    });
    return lookup;
};

const formatStocks = (stocks: StockWithWatchlistStatus[] = [], lookup: WatchlistLookup = {}) =>
    stocks.map((stock) => {
        const symbol = normalizeSymbol(stock.symbol);
        return {
            ...stock,
            symbol,
            isInWatchlist: lookup[symbol] ?? !!stock.isInWatchlist,
        };
    });

export default function SearchCommand({
    renderAs = 'button',
    label = 'Add stock',
    initialStocks,
}: SearchCommandProps) {
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);

    const initialLookup = useMemo(() => buildLookup(initialStocks), [initialStocks]);

    const [watchlistLookup, setWatchlistLookup] = useState<WatchlistLookup>(initialLookup);
    const [pendingSymbol, setPendingSymbol] = useState<string | null>(null);
    const [stocks, setStocks] = useState<StockWithWatchlistStatus[]>(() =>
        formatStocks(initialStocks, initialLookup)
    );

    const mapStocksWithWatchlist = useCallback(
        (items: StockWithWatchlistStatus[] = []) =>
            items.map((item) => {
                const symbol = normalizeSymbol(item.symbol);
                return {
                    ...item,
                    symbol,
                    isInWatchlist: watchlistLookup[symbol] ?? !!item.isInWatchlist,
                };
            }),
        [watchlistLookup]
    );

    useEffect(() => {
        setWatchlistLookup(initialLookup);
        setStocks(formatStocks(initialStocks, initialLookup));
    }, [initialLookup, initialStocks]);

    const isSearchMode = !!searchTerm.trim();
    const displayStocks = isSearchMode ? stocks : stocks?.slice(0, 10);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((prevOpen) => !prevOpen);
            }
        };

        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, []);

    // Refresh watchlist status when dialog opens
    useEffect(() => {
        if (!open) return;

        const refreshWatchlistStatus = async () => {
            try {
                const symbols = await getAllWatchlistSymbols();
                const newLookup: WatchlistLookup = {};
                symbols.forEach((symbol) => {
                    newLookup[normalizeSymbol(symbol)] = true;
                });

                setWatchlistLookup(newLookup);
                
                // Update the displayed stocks with fresh watchlist status
                setStocks((prev) =>
                    prev.map((stock) => ({
                        ...stock,
                        isInWatchlist: newLookup[normalizeSymbol(stock.symbol)] ?? false,
                    }))
                );
            } catch (error) {
                console.error('Failed to refresh watchlist status:', error);
                // Silently fail - we'll just use the existing state
            }
        };

        refreshWatchlistStatus();
    }, [open]);

    const handleSearch = useCallback(async () => {
        if (!isSearchMode) {
            setStocks(mapStocksWithWatchlist(initialStocks));
            return;
        }

        setLoading(true);
        try {
            const results = await searchStocks(searchTerm.trim());
            setStocks(mapStocksWithWatchlist(results));
        } catch {
            setStocks([]);
        } finally {
            setLoading(false);
        }
    }, [initialStocks, isSearchMode, mapStocksWithWatchlist, searchTerm]);

    const debouncedSearch = useDebounce(handleSearch, 300);

    useEffect(() => {
        debouncedSearch();
    }, [debouncedSearch, searchTerm]);

    const handleSelectStock = () => {
        setOpen(false);
        setSearchTerm('');
        setStocks(mapStocksWithWatchlist(initialStocks));
    };

    /*
    * This function is used to toggle the watchlist status of a stock.
    * It is used to add a stock to the watchlist and remove a stock from the watchlist.
    * It is used to update the watchlist lookup and the stocks list.
    * It is used to show a success or error toast message.
    * It is used to set the pending symbol to the symbol of the stock that is being toggled.
    * It is used to set the pending symbol to null when the toggle is complete.
    */
    const handleToggleWatchlist = async (
        event: React.MouseEvent<HTMLButtonElement>,
        stock: StockWithWatchlistStatus
    ) => {
        event.preventDefault();
        event.stopPropagation();

        const symbol = normalizeSymbol(stock.symbol);

        if (pendingSymbol) return;

        setPendingSymbol(symbol);

        try {
            const { isInWatchlist: currentlyInWatchlist } = await getWatchlistStatus(symbol);

            if (currentlyInWatchlist) {
                await removeFromWatchlist(symbol);
            } else {
                await addToWatchlist(symbol, stock.name);
            }

            const nextLookup: WatchlistLookup = { ...watchlistLookup };

            if (currentlyInWatchlist) {
                delete nextLookup[symbol];
            } else {
                nextLookup[symbol] = true;
            }

            setWatchlistLookup(nextLookup);
            setStocks((prev) =>
                prev.map((item) =>
                    item.symbol === symbol ? { ...item, isInWatchlist: !currentlyInWatchlist } : item
                )
            );

            toast.success(
                currentlyInWatchlist
                    ? `${symbol} removed from watchlist`
                    : `${symbol} added to watchlist`
            );
        } catch (error) {
            console.error('Watchlist toggle failed', error);
            toast.error('Could not update watchlist. Please try again.');
        } finally {
            setPendingSymbol(null);
        }
    };

    return (
        <>
            {renderAs === 'text' ? (
                <span onClick={() => setOpen(true)} className="search-text hover:text-yellow-500 transition-colors">
                    {label}
                </span>
            ) : (
                <Button onClick={() => setOpen(true)} className="search-btn">
                    {label}
                </Button>
            )}

            <CommandDialog open={open} onOpenChange={setOpen} className="search-dialog">
                <div className="search-field">
                    <CommandInput value={searchTerm} onValueChange={setSearchTerm} placeholder="Search stocks..." className="search-input" />
                    {loading && <Loader2 className="search-loader" />}
                </div>
                <CommandList className="search-list">
                    {loading ? (
                        <CommandEmpty className="search-list-empty">Loading stocks...</CommandEmpty>
                    ) : displayStocks?.length === 0 ? (
                        <div className="search-list-indicator">
                            {isSearchMode ? 'No results found' : 'No stocks available'}
                        </div>
                    ) : (
                        <ul>
                            <div className="search-count">
                                {isSearchMode ? 'Search results' : 'Popular stocks'}
                                {` `}({displayStocks?.length || 0})
                            </div>
                            {displayStocks?.map((stock) => {
                                const isPending = pendingSymbol === stock.symbol;
                                const isDisabled = Boolean(pendingSymbol);

                                return (
                                    <li key={stock.symbol} className="search-item">
                                        <div className="search-item-link">
                                            <Link
                                                href={`/stocks/${encodeURIComponent(stock.symbol)}?${new URLSearchParams({ exchange: stock.exchange }).toString()}`}
                                                onClick={handleSelectStock}
                                                className="flex flex-1 items-center gap-3"
                                            >
                                                <TrendingUp className="h-4 w-4 text-gray-500" />
                                                <div className="flex-1">
                                                    <div className="search-item-name">
                                                        {stock.name}
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        {stock.symbol} | {stock.exchange} | {stock.type}
                                                    </div>
                                                </div>
                                            </Link>
                                            <button
                                                type="button"
                                                onClick={(event) => handleToggleWatchlist(event, stock)}
                                                className="ml-auto flex items-center justify-center rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-700 hover:text-yellow-400 disabled:cursor-not-allowed disabled:opacity-60"
                                                aria-pressed={stock.isInWatchlist}
                                                aria-label={
                                                    stock.isInWatchlist
                                                        ? `Remove ${stock.symbol} from watchlist`
                                                        : `Add ${stock.symbol} to watchlist`
                                                }
                                                aria-busy={isPending}
                                                disabled={isDisabled}
                                            >
                                                <Star
                                                    className={`h-4 w-4 ${stock.isInWatchlist ? 'text-yellow-400' : ''}`}
                                                    fill={stock.isInWatchlist ? 'currentColor' : 'none'}
                                                    strokeWidth={2}
                                                />
                                            </button>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </CommandList>
            </CommandDialog>
        </>
    );
}
