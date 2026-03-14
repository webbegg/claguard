# How Limits Work

Limits are the core feature of ClaGuard. Each limit defines a budget — in USD or raw tokens — over a specific time window (daily or monthly), with one or more thresholds that trigger notifications.

## Creating a Limit

Open the **Limits** tab in the dashboard and click **Add Limit**.

| Field | Description |
|-------|-------------|
| **Name** | A human-readable label, e.g. "Daily spending" |
| **Type** | `cost` (USD) or `tokens` (raw token count) |
| **Window** | `daily` (resets at midnight) or `monthly` (resets on the 1st) |
| **Cap** | The maximum value — e.g. `5.00` for $5 or `100000` for 100k tokens |
| **Thresholds** | Percentage values at which to send a notification |

### Threshold Examples

A limit with cap `$10.00` and thresholds `[50, 80, 100]` sends:

- A **warning** at $5.00 (50%)
- An **alert** at $8.00 (80%)
- A **critical** notification at $10.00 (100%)

You can add as many thresholds as you want or as few as one.

## How Usage is Measured

ClaGuard receives usage data via OpenTelemetry from Claude Code. Each OTLP metric batch includes:

- Input tokens used
- Output tokens used
- Cost computed by Claude Code (in USD)

Usage is aggregated into daily and monthly windows and stored locally in a SQLite database in your app data folder.

## Window Reset

| Window | Resets |
|--------|--------|
| `daily` | Midnight in your local timezone |
| `monthly` | 00:00 on the 1st of each month |

## Notifications

When a threshold is crossed, ClaGuard fires a native desktop notification. The notification includes:

- The limit name
- The threshold that was hit
- Your current usage vs. the cap

Notifications are **fired once per threshold per window period**. If you restart the app or the window resets, thresholds reset too.

## Editing and Deleting Limits

Click the **⋯** menu on any limit card to edit or delete it. Deletions are permanent and remove the limit's threshold history.

## Tips

- Start with a generous daily cost limit (e.g. `$20`) to catch unexpected spikes.
- Add a separate monthly limit as a hard budget ceiling.
- Use token limits if you're on a subscription plan where cost isn't the primary concern.
