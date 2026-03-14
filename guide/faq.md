# FAQ

## General

### Is ClaGuard free?

Yes. ClaGuard is free to download and use. No accounts, no subscriptions.

### Does ClaGuard send my data anywhere?

No. All usage data is stored locally in a SQLite database on your machine. ClaGuard makes no network requests except to receive OTLP data from Claude Code on `localhost`.

### Does ClaGuard work with Claude.ai (the web app)?

No — ClaGuard only works with **Claude Code** (the CLI). It relies on the OpenTelemetry metrics that Claude Code exports, which are not available from the web app.

---

## Setup

### I approved the OTel config but no data is showing up.

A few things to check:

1. **Restart Claude Code** after ClaGuard writes the config. Claude Code reads `~/.claude/settings.json` at startup.
2. **Check the port.** ClaGuard listens on port `4318` by default. If something else is on that port, go to **Settings → OTel** and change it — then update `~/.claude/settings.json` to match.
3. **Run a Claude Code command.** Usage data only flows when Claude Code is actively processing a prompt. Open a session and send a message.

### I see "Disconnected" in Settings but the config looks right.

The "Connected" indicator lights up when ClaGuard has received at least one OTLP payload. Send a message in Claude Code — after a moment the status should switch to **Connected**.

### Can I use a different port?

Yes. Go to **Settings → OTel**, change the port, and click **Save**. ClaGuard will update `~/.claude/settings.json` automatically.

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

Settings (limits, thresholds, tray config, OTel port) are stored in:

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

### Something else is on port 4318.

Find what's using it:

```bash
# macOS / Linux
lsof -i :4318

# Windows (PowerShell)
netstat -ano | findstr :4318
```

Then either stop that process or change ClaGuard's port in **Settings → OTel**.

---

## Still stuck?

Open an issue on [GitHub](https://github.com/claguard/claguard/issues) and include:
- Your OS and version
- ClaGuard version (visible in Settings)
- A description of what you expected vs. what happened
