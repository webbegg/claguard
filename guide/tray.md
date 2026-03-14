# Tray Icon Reference

The ClaGuard tray icon gives you an at-a-glance status of your current budget health without opening the dashboard.

## Icon Colors

The icon color reflects the **most urgent active limit** across all your configured limits.

| Color | Meaning |
|-------|---------|
| 🟢 **Green** | All limits are below your first threshold (or no limits set) |
| 🟡 **Yellow** | At least one limit has crossed its warning threshold |
| 🟠 **Orange** | At least one limit has crossed its alert threshold |
| 🔴 **Red** | At least one limit has reached or exceeded 100% of its cap |

The icon updates automatically as new usage data arrives from Claude Code.

## Tray Menu

Right-clicking (or clicking on some platforms) the tray icon opens a menu with:

| Item | Action |
|------|--------|
| **Open Dashboard** | Opens the ClaGuard window |
| **Today: $X.XX** | Shows today's cost — read only |
| **This month: $X.XX** | Shows monthly cost — read only |
| **Limits…** | Shortcut to the Limits tab |
| **Settings…** | Shortcut to the Settings tab |
| **Quit ClaGuard** | Exits the application |

## Indicator Dot

In addition to the color, the icon can display a small indicator dot when a threshold notification is pending acknowledgment. This is configurable in **Settings → Tray**.

## Configuring the Icon

Go to **Settings → Tray** to:

- Toggle whether the icon shows a **color indicator** (default: on)
- Toggle whether the icon shows a **status dot** when a limit is exceeded
- Choose the icon **style** — minimal or filled

## macOS Menu Bar

On macOS, ClaGuard lives in the menu bar (top-right area). If you have many menu bar items, it may be hidden by Bartender or similar apps. Add it to your allowed list if you don't see it.

## Windows System Tray

On Windows, ClaGuard appears in the system tray (bottom-right). If it's hidden, click the **^** arrow to reveal it, then drag it out to keep it visible.

## Linux

On Linux, ClaGuard uses the `Tray` API which requires a compatible system tray (most desktop environments include one). GNOME users may need the [AppIndicator extension](https://extensions.gnome.org/extension/615/appindicator-support/).
