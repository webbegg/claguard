# Getting Started

ClaGuard is a lightweight desktop app that monitors your Claude Code usage by scraping data directly from claude.ai. It alerts you when you approach your cost or token limits.

## Requirements

- [Claude Code](https://claude.ai/code) installed and configured
- A claude.ai account (Team or Enterprise plan required for usage data)
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

### Step 2 — Connect to claude.ai

ClaGuard needs to sign in to your claude.ai account to scrape usage data. Click **Open Browser** to launch a browser window where you can sign in to Claude.

If you don't see your account, click **Refresh** after signing in. Select the account you want to track and click **Done**.

### Step 3 — Done

ClaGuard is now running. A small icon appears in your menu bar (macOS) or system tray (Windows/Linux).

ClaGuard will automatically sync your usage every 10 minutes.

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
