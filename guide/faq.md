# FAQ

## General

### Is ClaGuard free?

Yes. ClaGuard is free to download and use. No accounts, no subscriptions.

### Does ClaGuard send my data anywhere?

No. All usage data is stored locally in a SQLite database on your machine. ClaGuard makes no network requests except to scrape usage data from claude.ai for your account.

### Does ClaGuard work with Claude Code (the CLI)?

ClaGuard monitors your claude.ai usage (Team/Enterprise plans). It does not directly track Claude Code CLI usage — it tracks what claude.ai shows in your account dashboard.

---

## Setup

### I signed in but no data is showing up.

A few things to check:

1. **Make sure you're on a Team or Enterprise plan.** Usage data is only available on paid plans.
2. **Check the sync status.** Go to Settings → Claude.ai Sync to see if the last sync was successful.
3. **Click "Sync Now"** to manually trigger a sync and see if data appears.

### I'm having trouble signing in.

If the browser window doesn't open or you can't sign in:

1. Try disabling **headless mode** in Settings → Claude.ai Sync
2. Make sure you grant browser permissions when prompted
3. Try logging out and back in through the ClaGuard settings

### Can I use a different sync interval?

Yes. Go to **Settings → Claude.ai Sync** and adjust the interval (default is 10 minutes).

---

## Limits & Notifications

### My notification fired but then didn't fire again for the same threshold.

By design — thresholds fire **once per window period**. If you want them to repeat, you can delete and re-add the limit, which resets its threshold state.

### I set a $5 daily limit but I'm at $6 and never got notified.

Make sure you have a threshold set at 100% (or lower). A limit with no thresholds defined does not fire any notifications. Edit the limit and add the thresholds you want.

### Can I silence notifications temporarily?

Not yet — snooze/do-not-disturb is planned for a future release. In the meantime, you can delete a limit's thresholds or increase the cap to stop notifications.

---

## Data & Privacy

### Where is my usage data stored?

In a SQLite file in your platform's app data directory:

| Platform | Path |
|----------|------|
| macOS | `~/Library/Application Support/ClaGuard/usage.db` |
| Windows | `%APPDATA%\ClaGuard\usage.db` |
| Linux | `~/.config/ClaGuard/usage.db` |

### Can I reset my usage history?

Quit ClaGuard, delete the `usage.db` file, and relaunch. Your limits and settings are stored separately and will be preserved.

### Where are my settings stored?

Settings (limits, thresholds, tray config, sync settings) are stored in:

| Platform | Path |
|----------|------|
| macOS | `~/Library/Application Support/ClaGuard/config.json` |
| Windows | `%APPDATA%\ClaGuard\config.json` |
| Linux | `~/.config/ClaGuard/config.json` |

---

## Troubleshooting

### The app won't launch on macOS ("damaged or can't be opened").

Run this in Terminal:

```bash
xattr -cr /Applications/ClaGuard.app
```

Then try opening it again.

### The tray icon is not visible on GNOME Linux.

Install the [AppIndicator and KStatusNotifierItem Support](https://extensions.gnome.org/extension/615/appindicator-support/) GNOME Shell extension, then log out and back in.

### The browser won't launch or gets blocked.

Try disabling **headless mode** in Settings → Claude.ai Sync. Some systems require the browser to be visible for claude.ai to work properly.

---

## Still stuck?

Open an issue on [GitHub](https://github.com/webbegg/claguard/issues) and include:
- Your OS and version
- ClaGuard version (visible in Settings)
- A description of what you expected vs. what happened
