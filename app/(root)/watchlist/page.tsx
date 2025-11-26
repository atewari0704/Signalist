"use client"

import { getAllWatchlistSymbols } from '@/lib/watchlist/client'
import React, { useEffect, useState } from 'react'
import { Loader2, Star } from 'lucide-react'
import { removeFromWatchlist } from '@/lib/watchlist/client'
import { toast } from 'sonner';
import { FinnhubStockProfile, getStockProfile } from '@/lib/actions/finnhub.actions'
import { cn } from '@/lib/utils';
import {columns, type WatchListRow} from './columns'
import { DataTable } from './data-table'




const WatchlistPage = () => {
    const [symbols, setSymbols] = useState<string[]>([])
    const [watchlistRows, setWatchlistRows] = useState<WatchListRow[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [removingId, setRemovingId] = useState<string | null>(null)

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true)
                
                // 1. Fetch symbols first
                const symbolData = await getAllWatchlistSymbols()
                setSymbols(symbolData)
                console.log("Fetched symbols:", symbolData)

                // 2. Use the data DIRECTLY to fetch profiles (no waiting for state)
                // We use Promise.all to fetch all profiles in parallel
                const profilePromises = symbolData.map(symbol => getStockProfile(symbol))
                const profiles = await Promise.all(profilePromises)
                // Filter out any failed requests (nulls)
                const validProfiles = profiles.filter((p): p is FinnhubStockProfile => p !== null)

                const newRows = validProfiles.map(profile => ({
                    Company: profile.name ?? '',
                    Symbol: profile.ticker ?? '',
                    Price: profile.price ?? 0,
                    Change: profile.change ?? 0,
                    MarketCap: profile.marketCapitalization ?? 0,
                    peRatio: profile.peRatio ?? 0,
                }))

                setWatchlistRows(newRows)
            } catch (err) {
                console.error('Failed to load watchlist data:', err)
                setError('Failed to load watchlist')
            } finally {
                setLoading(false)
            }
        }
        loadData()
    }, [])

    // OnClick the symbol must be removed from the watchlist from mongodb and the watchlist state must be updated
    const removeFromWatchList = async (event: React.MouseEvent<HTMLButtonElement>, symbol: string) => {
        event.preventDefault()
        event.stopPropagation()

        if (removingId) return // Prevent multiple clicks while animating

        // Start animation
        setRemovingId(symbol)

        // Wait for animation to finish (500ms)
        await new Promise(resolve => setTimeout(resolve, 500))

        try {
            await removeFromWatchlist(symbol)

            // Toast saying symbol removed from watchlist
            toast.success(`${symbol} removed from watchlist`)

            // Update local state only after successful removal
            setSymbols(prev => prev.filter((s) => s !== symbol))
            setWatchlistRows(prev => prev.filter((row) => row.Symbol !== symbol))
        } catch (err) {
            console.error('Failed to remove from watchlist:', err)
            toast.error(`Failed to remove ${symbol} from watchlist`)
            setRemovingId(null) // Reset if failed so it reappears
        }
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <Loader2 className="h-8 w-8 animate-spin text-yellow-500" />
            </div>
        )
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <p className="text-red-500">{error}</p>
            </div>
        )
    }

    return (
        <>
        <div className="container mx-auto px-4 py-8">
            <DataTable columns={columns} data={watchlistRows} />
        </div>




        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">My Watchlist</h1>
            {!symbols.length ? (
                <div className="text-center py-12">
                    <p className="text-gray-400 text-lg">No symbols in watchlist</p>
                    <p className="text-gray-500 text-sm mt-2">Start adding stocks to your watchlist using the search feature</p>
                </div>
            ) : (
                <div className="grid gap-4">
                    {symbols.map((symbol) => (
                        <div 
                            key={symbol} 
                            className={cn(
                                "bg-gray-800 rounded-lg p-4 hover:bg-gray-600 transition-all duration-500 ease-in-out",
                                removingId === symbol ? "opacity-0 -translate-x-full scale-95 h-0 py-0 overflow-hidden margin-0" : "opacity-100 translate-x-0"
                            )}
                        >
                            <div className={cn("transition-opacity duration-300", removingId === symbol ? "opacity-0" : "opacity-100")}>
                                <div className="flex justify-between items-center">
                                    <h2 className="text-xl font-semibold">{symbol}</h2>
                                    <button
                                        type="button"
                                        onClick={(event) => removeFromWatchList(event, symbol)}
                                        className="group flex items-center justify-center rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-700 hover:text-yellow-400 disabled:cursor-not-allowed disabled:opacity-60"
                                        disabled={removingId === symbol}
                                    >
                                        <Star
                                            className="h-5 w-5 text-yellow-400 group-hover:fill-none"
                                            fill="currentColor"
                                            strokeWidth={2}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
        </>
    )
}

export default WatchlistPage
