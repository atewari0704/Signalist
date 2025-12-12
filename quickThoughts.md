# Alerts Feature Specification

## 1. Overview
Allow users to set price-based alerts for stocks in their watchlist. Users will receive notifications when a stock's price meets specific conditions (e.g., crosses above/below a target price).

## 2. User Experience (UX)

### Entry Point
- The existing "Add Alert" button in the Watchlist table (`data-table.tsx`) will open a **Dialog/Modal** instead of setting a simple state.

### Alert Configuration Modal
A specialized "Add Alert" dialog (using Shadcn `Dialog` component) containing:
- **Header**: "Set Alert for [Symbol]" (e.g., AAPL)
- **Current Price Display**: Show the live price for reference.
- **Inputs**:
    - **Target Price**: Numeric input.
    - **Condition**: Dropdown/Radio group (e.g., "Goes Above", "Goes Below").
        - *Smart Default*: If Target > Current, default to "Goes Above". If Target < Current, default to "Goes Below".
- **Action Buttons**: "Cancel" (Ghost) and "Create Alert" (Primary).

### Notifications
- **In-App**: Toast notification (using `sonner`) when an alert is triggered while the user is online.
- **Email**: (Optional for MVP phase) Send an email via `nodemailer` if the user is offline.

## 3. Technical Architecture

### Database Schema (Mongoose)
We need a new `Alert` model in `database/models/alert.model.ts`:

```typescript
interface StockAlert {
  userId: ObjectId;       // Link to the user
  symbol: string;         // e.g., "AAPL"
  targetPrice: number;    // The price threshold
  condition: 'ABOVE' | 'BELOW';
  status: 'ACTIVE' | 'TRIGGERED';
  createdAt: Date;
  triggeredAt?: Date;
}
```

### Backend Logic (Inngest)
Leverage **Inngest** for reliable background processing.

1.  **Cron Job**: A function running every X minutes (e.g., 5 or 15 mins).
    *   `functions/check-alerts.ts`
2.  **Workflow**:
    *   **Step 1**: Fetch all `ACTIVE` alerts from MongoDB.
    *   **Step 2**: Group alerts by `symbol` to batch API requests.
    *   **Step 3**: Fetch current prices for all unique symbols (Finnhub or existing price provider).
    *   **Step 4**: Iterate through alerts and compare `currentPrice` vs `targetPrice` based on the `condition`.
    *   **Step 5**: If condition met:
        *   Update Alert status to `TRIGGERED`.
        *   Trigger a "Send Notification" event/function.

## 4. Implementation Steps

1.  **Database**: Create `Alert` Mongoose model.
2.  **Server Actions**:
    *   `createAlert(symbol, targetPrice, condition)`
    *   `getActiveAlerts()`
    *   `deleteAlert(alertId)`
3.  **UI**: 
    *   Create `AlertModal` component.
    *   Integrate into `data-table.tsx`.
4.  **Background Job**: 
    *   Setup Inngest function `checkStockAlerts` with a cron schedule.
    *   Implement price checking logic.
5.  **Testing**:
    *   Verify checking logic (ensure it handles slightly fluctuating prices correctly without spamming).

## 5. Open Questions
- **Frequency**: Is 5 minutes sufficient? Real-time would require webhooks or persistent connections which might be overkill for MVP.
- **Notification Method**: Just in-app toasts or email?
- **Persistence**: Should specific alerts be "one-time" (delete after trigger) or "recurring" (reset after some time)? *Recommendation: Start with One-time.*




