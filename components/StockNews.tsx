"use client"

import React, { useEffect, useState } from 'react'
import { getNews } from '@/lib/actions/finnhub.actions'
import { formatTimeAgo } from '@/lib/utils'
import { Loader2, ExternalLink, Newspaper } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const StockNews = ({ symbols }: { symbols: string[] }) => {
    const [news, setNews] = useState<MarketNewsArticle[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setLoading(true)
                // If symbols is empty, getNews handles fallback to general news
                const newsData = await getNews(symbols)
                setNews(newsData)
            } catch (error) {
                console.error('Failed to fetch news:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchNews()
    }, [symbols])

    if (loading) {
        return (
            <div className="flex items-center justify-center py-12">
                <h2 className="text-2xl font-bold tracking-tight">Loading News...</h2>
                <Loader2 className="h-8 w-8 animate-spin text-yellow-500" />
            </div>
        )
    }

    if (news.length === 0) {
        return (
            <div className="text-center py-12 text-muted-foreground">
                <Newspaper className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No news available at the moment.</p>
            </div>
        )
    }

    return (
        <div className="space-y-6 mt-12">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight">Market News</h2>
                <span className="text-sm text-muted-foreground">
                    {symbols.length > 0 ? 'Relevant to your watchlist' : 'General Market News'}
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {news.map((article) => (
                    <Link
                        key={article.id}
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col border-gray-600 bg-gray-800  rounded-xl overflow-hidden hover:shadow-lg hover:bg-gray-700 transition-all duration-300 h-full hover:scale-105"
                    >
                        {/* <div className="relative h-48 w-full overflow-hidden bg-muted">
                            {article.image ? (
                                <Image
                                    src={article.image}
                                    alt={article.headline}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full text-muted-foreground">
                                    <Newspaper className="h-12 w-12" />
                                </div>
                            )}
                            <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
                                {formatTimeAgo(article.datetime)}
                            </div>
                        </div> */}

                        <div className="flex flex-col flex-grow p-5">
                            <div className="flex items-center gap-2 mb-3">
                                {article.symbol && (
                                    <span className="text-sm font-medium px-2 py-0.5 rounded-full bg-[#72EEA233] text-[#72EEA2] uppercase tracking-wider">
                                        {article.symbol}
                                    </span>
                                )}
                            </div>

                            <h3 className="font-semibold text-lg leading-tight mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                {article.headline}
                            </h3>

                            <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-grow">
                                {article.summary}
                            </p>

                            <div className="flex items-center text-sm font-medium text-primary mt-auto">
                                Read more <ExternalLink className="ml-1 h-3 w-3" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default StockNews
