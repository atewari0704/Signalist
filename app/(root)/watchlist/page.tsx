"use client"

import { getAllWatchlistSymbols } from '@/lib/watchlist/client'
import React, { useEffect, useState } from 'react'
import { Loader2, Star } from 'lucide-react'
import { removeFromWatchlist } from '@/lib/watchlist/client'
import { toast } from 'sonner';
import { FinnhubStockProfile, getStockProfile } from '@/lib/actions/finnhub.actions'
import { cn } from '@/lib/utils';
import { columns, type WatchListRow } from './columns'
import { DataTable } from './data-table'
import StockNews from '@/components/StockNews'




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
    const handleRemoveSymbol = async (symbol: string) => {
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

    const removeFromWatchList = async (event: React.MouseEvent<HTMLButtonElement>, symbol: string) => {
        event.preventDefault()
        event.stopPropagation()
        await handleRemoveSymbol(symbol)
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
                <DataTable columns={columns} data={watchlistRows} onRemove={handleRemoveSymbol} />
                <StockNews symbols={symbols} />
            </div>
        </>
    )
}

export default WatchlistPage
