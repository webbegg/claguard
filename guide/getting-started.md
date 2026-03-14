# Getting Started

ClaGuard is a lightweight desktop app that monitors your Claude Code usage in real time. It connects to Claude Code via OpenTelemetry and alerts you when you approach your cost or token limits.

## Requirements

- [Claude Code](https://claude.ai/code) installed and configured
- macOS 12+, Windows 10+, or a modern Linux distribution

## Installation

### macOS

1. Download the correct build for your machine:
   - **Apple Silicon (M1/M2/M3/M4):** `ClaGuard.dmg`
   - **Intel:** `ClaGuard-x64.dmg`
2. Open the `.dmg` and drag **ClaGuard** to your Applications folder.
3. Launch ClaGuard from Applications or Spotlight.

> **Gatekeeper prompt?** Right-click the app → Open → Open. This only happens once.

### Windows

1. Download `ClaGuard-Setup.exe`.
2. Run the installer and follow the prompts.
3. ClaGuard launches automatically after install and appears in the system tray.

### Linux

1. Download `ClaGuard.AppImage`.
2. Make it executable:

   ```bash
   chmod +x ClaGuard.AppImage
   ./ClaGuard.AppImage
   ```

3. Optionally integrate it with your desktop using `--install`.

## First Launch

When ClaGuard opens for the first time, the **Setup Wizard** walks you through three steps:

### Step 1 — Welcome

Read the overview of what ClaGuard does and click **Get Started**.

### Step 2 — Connect to Claude Code

ClaGuard needs to write a small configuration block to `~/.claude/settings.json` to enable Claude Code's built-in OpenTelemetry exporter.

The change looks like this:

```json
{
  "openTelemetry": {
    "enabled": true,
    "endpoint": "http://localhost:4318"
  }
}
```

Click **Allow** to apply it. ClaGuard handles this automatically — no shell exports or `.env` files needed.

### Step 3 — Done

ClaGuard is now running. A small icon appears in your menu bar (macOS) or system tray (Windows/Linux).

Start a Claude Code session and watch your usage appear in the dashboard.

## Opening the Dashboard

Click the tray icon and select **Open Dashboard**, or use the keyboard shortcut shown in the app.

The dashboard shows:
- **Today's usage** — cost (USD) and tokens consumed so far
- **This month's usage** — rolling 30-day totals
- **Limit status bars** — progress toward each limit you have configured

## What's Next?

- [Set up cost and token limits →](/guide/limits)
- [Understand tray icon colors →](/guide/tray)
- [Browse the FAQ →](/guide/faq)
