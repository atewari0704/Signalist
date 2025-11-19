"use server";

import { getDateRange, validateArticle, formatArticle } from '@/lib/utils';
import { POPULAR_STOCK_SYMBOLS } from '@/lib/constants';
import { cache } from 'react';


const FINNHUB_BASE_URL = "https://finnhub.io/api/v1";
const FINNHUB_API_KEY = process.env.NEXT_PUBLIC_FINNHUB_API_KEY;

/**
 * Generic fetch function with caching options
 * @param url - Full URL to fetch
 * @param revalidateSeconds - Optional cache revalidation time in seconds
 * @returns Parsed JSON response
 */
async function fetchJSON<T>(url: string, revalidateSeconds?: number): Promise<T> {
    const options: RequestInit = revalidateSeconds
        ? { cache: 'force-cache', next: { revalidate: revalidateSeconds } }
        : { cache: 'no-store' };

    const response = await fetch(url, options);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
}

/**
 * Get news articles for given symbols or general market news
 * @param symbols - Optional array of stock symbols to fetch news for
 * @returns Array of formatted news articles (max 6)
 */
export async function getNews(symbols?: string[]): Promise<MarketNewsArticle[]> {
    try {
        if (!FINNHUB_API_KEY) {
            throw new Error('Finnhub API key is not configured');
        }

        // Compute date range for last 5 days
        const { from, to } = getDateRange(5);

        // If symbols are provided, fetch company news
        if (symbols && symbols.length > 0) {
            // Clean and uppercase symbols
            const cleanSymbols = symbols
                .map(s => s.trim().toUpperCase())
                .filter(s => s.length > 0)
                .slice(0, 10); // Limit to 10 symbols max

            if (cleanSymbols.length === 0) {
                // Fallback to general news if no valid symbols
                return fetchGeneralNews(from, to);
            }

            const articles: MarketNewsArticle[] = [];
            const maxRounds = 6;
            let roundIndex = 0;

            // Round-robin through symbols, max 6 iterations
            while (articles.length < 6 && roundIndex < maxRounds) {
                for (const symbol of cleanSymbols) {
                    if (articles.length >= 6) break;

                    try {
                        const url = `${FINNHUB_BASE_URL}/company-news?symbol=${symbol}&from=${from}&to=${to}&token=${FINNHUB_API_KEY}`;
                        const newsData = await fetchJSON<RawNewsArticle[]>(url);

                        // Find first valid article not already collected
                        const validArticle = newsData.find((article) => {
                            if (!validateArticle(article)) return false;
                            // Check if we already have this article (by URL)
                            return !articles.some(a => a.url === article.url);
                        });

                        if (validArticle) {
                            const formatted = formatArticle(validArticle, true, symbol, articles.length);
                            articles.push(formatted);
                        }
                    } catch (error) {
                        console.error(`Error fetching news for ${symbol}:`, error);
                        // Continue to next symbol
                    }
                }
                roundIndex++;
            }

            // Sort by datetime (newest first) and return
            articles.sort((a, b) => b.datetime - a.datetime);
            
            // If we got articles, return them
            if (articles.length > 0) {
                return articles;
            }

            // Fallback to general news if no company news found
            console.log('No company news found, falling back to general news');
            return fetchGeneralNews(from, to);
        }

        // No symbols provided, fetch general market news
        return fetchGeneralNews(from, to);
    } catch (error) {
        console.error('Error in getNews:', error);
        throw new Error('Failed to fetch news');
    }
}

/**
 * Fetch general market news
 * @param from - Start date (YYYY-MM-DD)
 * @param to - End date (YYYY-MM-DD)
 * @returns Array of formatted news articles (max 6)
 */
async function fetchGeneralNews(from: string, to: string): Promise<MarketNewsArticle[]> {
    if (!FINNHUB_API_KEY) {
        throw new Error('Finnhub API key is not configured');
    }

    const url = `${FINNHUB_BASE_URL}/news?category=general&token=${FINNHUB_API_KEY}`;
    const newsData = await fetchJSON<RawNewsArticle[]>(url);

    // Filter and validate articles
    const validArticles = newsData.filter(validateArticle);

    // Deduplicate by id, url, and headline
    const seenIds = new Set<number>();
    const seenUrls = new Set<string>();
    const seenHeadlines = new Set<string>();
    
    const uniqueArticles = validArticles.filter((article) => {
        const isDuplicate = 
            seenIds.has(article.id) || 
            seenUrls.has(article.url!) || 
            seenHeadlines.has(article.headline!);

        if (!isDuplicate) {
            seenIds.add(article.id);
            seenUrls.add(article.url!);
            seenHeadlines.add(article.headline!);
            return true;
        }
        return false;
    });

    // Take top 6, format them
    const topArticles = uniqueArticles.slice(0, 6);
    
    return topArticles.map((article, index) => 
        formatArticle(article, false, undefined, index)
    );
}

export const searchStocks = cache(async (query?: string): Promise<StockWithWatchlistStatus[]> => {
  try {
    const token = process.env.FINNHUB_API_KEY ?? process.env.NEXT_PUBLIC_FINNHUB_API_KEY;
    if (!token) {
      // If no token, log and return empty to avoid throwing per requirements
      console.error('Error in stock search:', new Error('FINNHUB API key is not configured'));
      return [];
    }

    const trimmed = typeof query === 'string' ? query.trim() : '';

    let results: FinnhubSearchResult[] = [];
    const profileMap = new Map<string, FinnhubStockProfile | null>();

    if (!trimmed) {
      const top = POPULAR_STOCK_SYMBOLS.slice(0, 10);
      const enriched = await Promise.all(
        top.map(async (sym) => {
          const uppercaseSymbol = sym.toUpperCase();
          const profile = await getStockProfile(uppercaseSymbol);
          profileMap.set(uppercaseSymbol, profile);

          const description = profile?.name ?? profile?.ticker ?? uppercaseSymbol;

          const entry: FinnhubSearchResult = {
            symbol: uppercaseSymbol,
            description,
            displaySymbol: uppercaseSymbol,
            type: 'Common Stock',
          };

          return entry;
        })
      );

      results = enriched.filter((entry) => Boolean(entry?.symbol));
    } else {
      const url = `${FINNHUB_BASE_URL}/search?q=${encodeURIComponent(trimmed)}&token=${token}`;
      const data = await fetchJSON<FinnhubSearchResponse>(url, 1800);
      results = Array.isArray(data?.result) ? data.result.slice(0, 15) : [];

      const uniqueSymbols = Array.from(
        new Set(
          results
            .map((r) => (r.symbol || '').trim().toUpperCase())
            .filter((sym) => sym.length > 0)
        )
      );

      await Promise.all(
        uniqueSymbols.map(async (sym) => {
          if (profileMap.has(sym)) return;
          const profile = await getStockProfile(sym);
          profileMap.set(sym, profile);
        })
      );
    }

    const formatExchange = (value?: string) => {
      if (!value) return undefined;
      return value.trim().toUpperCase();
    };

    const inferExchangeFromSymbol = (value?: string) => {
      if (!value) return undefined;
      const candidate = value.trim().toUpperCase();
      if (!candidate) return undefined;
      if (candidate.includes(':')) {
        return candidate.split(':')[0];
      }
      return undefined;
    };

    const mapped: StockWithWatchlistStatus[] = results
      .map((r) => {
        const upper = (r.symbol || '').toUpperCase();
        if (!upper) return null;

        const profile = profileMap.get(upper) ?? null;

        const exchange =
          formatExchange(profile?.exchange) ??
          inferExchangeFromSymbol(r.displaySymbol) ??
          inferExchangeFromSymbol(r.symbol) ??
          'US';

        const name = r.description?.trim() || profile?.name || upper;
        const type = r.type?.trim() || 'Stock';

        const item: StockWithWatchlistStatus = {
          symbol: upper,
          name,
          exchange,
          type,
          isInWatchlist: false,
        };
        return item;
      })
      .filter((item): item is StockWithWatchlistStatus => Boolean(item))
      .slice(0, 15);

    return mapped;
  } catch (err) {
    console.error('Error in stock search:', err);
    return [];
  }
});




export type FinnhubStockProfile = {
    country?: string;
    currency?: string;
    exchange?: string;
    ipo?: string;
    logo?: string;
    marketCapitalization?: number;
    name?: string;
    phone?: string;
    shareOutstanding?: number;
    ticker?: string;
    weburl?: string;
};

export const getStockProfile = cache(async (symbol: string): Promise<FinnhubStockProfile | null> => {
    try {
        const token = process.env.FINNHUB_API_KEY ?? process.env.NEXT_PUBLIC_FINNHUB_API_KEY;
        if (!token) {
            console.error('Error fetching stock profile:', new Error('FINNHUB API key is not configured'));
            return null;
        }

        const trimmed = typeof symbol === 'string' ? symbol.trim().toUpperCase() : '';
        if (!trimmed) {
            return null;
        }

        const url = `${FINNHUB_BASE_URL}/stock/profile2?symbol=${encodeURIComponent(trimmed)}&token=${token}`;
        const profile = await fetchJSON<FinnhubStockProfile>(url, 1800);
        return profile;
    } catch (error) {
        console.error(`Error fetching stock profile for ${symbol}:`, error);
        return null;
    }
});


