"use server";

import { getDateRange, validateArticle, formatArticle } from "@/lib/utils";

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

