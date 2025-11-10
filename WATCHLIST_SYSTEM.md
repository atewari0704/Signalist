# Watchlist System Documentation

## Overview

The watchlist system allows users to track specific stocks and receive personalized daily news summaries based on their watchlist. The system integrates with Finnhub for news data, Gemini AI for summarization, and Inngest for scheduled email delivery.

## Architecture

### 1. Database Layer (`/database/models/watchlist.model.ts`)

**Watchlist Model:**
- `userId` (string, required, indexed) - User ID from Better Auth
- `symbol` (string, required, uppercase, trimmed) - Stock symbol (e.g., "AAPL")
- `company` (string, required, trimmed) - Company name
- `addedAt` (date, default: now) - Timestamp when added

**Features:**
- Compound index on `userId + symbol` prevents duplicate stocks per user
- Uses Mongoose with hot-reload protection pattern

### 2. Action Layer

#### Watchlist Actions (`/lib/actions/watchlist.actions.ts`)

**`getWatchlistSymbolsByEmail(email: string): Promise<string[]>`**
- Finds user by email in Better Auth collection
- Queries watchlist by userId
- Returns array of stock symbols
- Gracefully handles errors (returns empty array)

#### Finnhub Actions (`/lib/actions/finnhub.actions.ts`)

**`fetchJSON<T>(url: string, revalidateSeconds?: number): Promise<T>`**
- Generic fetch wrapper with caching support
- Uses `force-cache` with revalidation when seconds provided
- Uses `no-store` for fresh data otherwise
- Throws on non-200 responses

**`getNews(symbols?: string[]): Promise<MarketNewsArticle[]>`**
- Fetches news for last 5 days
- **With symbols:** Round-robin through symbols (max 6 iterations)
  - Cleans and uppercases symbols
  - Takes one article per symbol per round
  - Deduplicates by URL
  - Sorts by datetime (newest first)
  - Falls back to general news if no company news found
- **Without symbols:** Fetches general market news
  - Validates all articles
  - Deduplicates by id, url, and headline
  - Returns top 6 articles
- Returns max 6 articles total

### 3. Email Layer (`/lib/nodemailer/index.ts`)

**`sendNewsSummaryEmail({ email, name, newsContent })`**
- Uses `NEWS_SUMMARY_EMAIL_TEMPLATE`
- Formats date using `getFormattedTodayDate()`
- Sends personalized news summary
- Subject: "Your Daily Market News - [Date]"

### 4. Inngest Function Layer (`/lib/inngest/functions.ts`)

**`sendDailyNewsSummary`**
- **Trigger:** Cron (12 PM UTC daily) OR event `app/send.daily.news`
- **Flow:**
  1. Get all users from database
  2. For each user:
     - Get watchlist symbols by email
     - Fetch personalized news (or general if no watchlist)
     - Generate AI summary using Gemini
     - Send email with summary
  3. Continues processing even if individual user fails
- **Returns:** Success status and count of processed users

## Utilities Used (`/lib/utils.ts`)

- `getDateRange(days)` - Returns date range for news queries
- `validateArticle(article)` - Checks for required article fields
- `formatArticle(article, isCompanyNews, symbol, index)` - Formats raw article data
- `getFormattedTodayDate()` - Returns formatted date string

## Data Flow

```
User Sign Up
    ↓
User adds stocks to watchlist
    ↓
Watchlist stored in MongoDB (userId + symbol)
    ↓
Daily at 12 PM UTC (Inngest Cron)
    ↓
1. Get all users
    ↓
2. For each user:
   - Get watchlist symbols
   - Fetch news from Finnhub
   - Generate AI summary
   - Send email
```

## API Endpoints

### Inngest Webhook
- **Path:** `/api/inngest`
- **Methods:** GET, POST, PUT
- **Functions:** `sendSignUpEmail`, `sendDailyNewsSummary`

## Environment Variables Required

```env
# Finnhub
NEXT_PUBLIC_FINNHUB_API_KEY=your_finnhub_key

# MongoDB
MONGODB_URI=your_mongodb_connection_string

# Nodemailer (Gmail)
NODEMAILER_EMAIL=your_email@gmail.com
NODEMAILER_PASSWORD=your_app_specific_password

# Inngest
INNGEST_EVENT_KEY=your_inngest_event_key

# Gemini AI
GEMINI_API_KEY=your_gemini_api_key

# Better Auth
BETTER_AUTH_SECRET=your_auth_secret
BETTER_AUTH_BASE_URL=your_base_url
```

## Testing

Run the test script:
```bash
npx tsx scripts/test-watchlist-system.ts
```

This tests:
- Database connection
- Watchlist model
- Getting watchlist symbols
- Fetching general news
- Fetching company news
- Environment variables

## Error Handling

All functions implement graceful error handling:
- **Database errors:** Return empty arrays, log errors
- **API errors:** Try fallbacks (general news), log errors
- **Email errors:** Continue to next user, log errors
- **User processing:** Individual failures don't stop batch

## Key Features

✅ **Personalized News:** Users with watchlists get relevant company news
✅ **Smart Fallback:** General market news if no watchlist or no company news
✅ **AI Summarization:** Gemini generates readable summaries
✅ **Efficient Querying:** Round-robin prevents over-querying single symbols
✅ **Deduplication:** Prevents sending duplicate articles
✅ **Max Articles:** Always returns exactly 6 articles (or fewer if unavailable)
✅ **Strong Typing:** No `any` types, full TypeScript support
✅ **Compound Index:** Prevents duplicate stocks per user
✅ **Cron Scheduling:** Automated daily delivery at 12 PM UTC

## Manual Triggering

You can manually trigger the daily news summary via Inngest:
```typescript
await inngest.send({
  name: 'app/send.daily.news',
  data: {}
});
```

## Future Enhancements

- Add user preferences for delivery time
- Support multiple news sources
- Allow users to configure article count
- Add news categories/filters
- Implement read/unread tracking
- Add email analytics

