<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import TerminalChrome from "./TerminalChrome.vue";

// ── Download platforms ────────────────────────────────────────────────────────
const platforms = [
  {
    id: "mac-arm",
    label: "macOS (Apple Silicon)",
    href: "https://github.com/claguard/claguard/releases/latest/download/ClaGuard-arm64.dmg",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.15 1.26-2.13 3.75.03 2.99 2.63 3.99 2.65 4l-.08.28zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>`,
  },
  {
    id: "mac-intel",
    label: "macOS (Intel)",
    href: "https://github.com/claguard/claguard/releases/latest/download/ClaGuard-x64.dmg",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.15 1.26-2.13 3.75.03 2.99 2.63 3.99 2.65 4l-.08.28zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>`,
  },
  {
    id: "windows",
    label: "Windows",
    href: "https://github.com/claguard/claguard/releases/latest/download/ClaGuard-Setup.exe",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3 5.557L10.333 4.5V11.5H3V5.557zm0 12.886L10.333 19.5V12.5H3v5.943zM11.167 4.371L21 3V11.5H11.167V4.371zm0 15.258L21 21V12.5H11.167v7.129z"/></svg>`,
  },
  {
    id: "linux",
    label: "Linux (AppImage)",
    href: "https://github.com/claguard/claguard/releases/latest/download/ClaGuard.AppImage",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489.303 1.998 1.514 3.199 3.216 3.9 1.354.54 3.065.854 4.972 1.099 3.956.517 8.107.152 8.107.152.498 0 1.315.652 1.315-.056 0-.065-.017-.13-.048-.19a.562.562 0 0 0-.13-.154l-.025-.017-5.517-4.116a.3.3 0 0 0-.175-.057h-.003a.282.282 0 0 0-.288.242.304.304 0 0 0 .112.29l5.518 4.119.003.002a.312.312 0 0 0 .064.04l.022.01c-.014-.003-4.15.36-8.054-.15a21.13 21.13 0 0 1-4.805-1.063c-1.537-.612-2.59-1.625-2.85-3.35-.105-.694-.003-1.476.265-2.29.567-1.66 1.778-3.32 2.634-4.339.877-1.142 1.133-2.083 1.21-3.262.057-1.305.051-5.12 2.79-5.34a5.27 5.27 0 0 1 .404-.017c1.75 0 3.354.938 5.03 3.154l4.293 5.817.002.002c.262.36.534.71.827 1.04.29.317.594.611.925.867.339.264.71.492 1.132.65.453.172.966.255 1.547.218l.003-.001c.386-.028.74-.1 1.063-.22l.051-.02c.247-.1.47-.224.664-.374l.015-.013a1.995 1.995 0 0 0 .439-.527c.225-.393.316-.884.25-1.4l-.003-.02-.004-.02-.006-.02c-.17-.53-.58-.997-1.114-1.371-.29-.2-.608-.366-.952-.5l-.026-.01c-.363-.133-.74-.22-1.128-.258a5.765 5.765 0 0 0-.624-.025c-.47 0-.92.06-1.33.176a4.83 4.83 0 0 0-.597.213l-.026.012-.024.012-.005.002-4.377-5.915.002.002C16.025.98 14.147 0 12.504 0z"/></svg>`,
  },
];

// ── FAQ ───────────────────────────────────────────────────────────────────────
const faqItems = [
  {
    question: "Is ClaGuard free?",
    answer:
      "Yes. ClaGuard is free. No accounts, no subscriptions, no limits on usage.",
  },
  {
    question: "How does ClaGuard get my usage data?",
    answer:
      "ClaGuard auto-configures Claude Code's built-in OpenTelemetry settings on first launch. No manual environment variables or API keys needed — just approve the permission on first run.",
  },
  {
    question: "Does my data leave my machine?",
    answer:
      "Never. All token and cost data is stored locally in a SQLite database on your device. ClaGuard has no backend, no cloud sync, and makes no network requests except the local OTLP receiver.",
  },
  {
    question: "Can I set limits in tokens instead of dollars?",
    answer:
      "Yes. Every limit can be defined in USD cost or raw token count. You can mix both — for example a daily cost limit plus a separate monthly token cap.",
  },
  {
    question: "What happens when I hit a limit?",
    answer:
      "You get a native desktop notification the moment you cross a configured threshold (e.g. 50%, 80%, 100%). The tray icon also changes color to reflect your budget health.",
  },
  {
    question: "Does it work on Windows and Linux?",
    answer:
      "Yes. ClaGuard is built with Electron and runs on macOS, Windows, and Linux. All features including tray icon, notifications, and the dashboard are fully cross-platform.",
  },
];

const openFaqIndex = ref(null);
const toggleFaq = (i) => {
  openFaqIndex.value = openFaqIndex.value === i ? null : i;
};

// ── Scroll-aware navbar + hero perspective ────────────────────────────────────
const screenshotRotate = ref(12);
const screenshotWrapRef = ref(null);

const onScroll = () => {
  const threshold = document.documentElement.scrollHeight * 0.05;
  document.documentElement.classList.toggle(
    "has-scrolled",
    window.scrollY > threshold,
  );

  // Drive perspective from the element's viewport position:
  // fully below viewport → 12deg, element top at viewport center → 0deg
  if (!screenshotWrapRef.value) return;
  const rect = screenshotWrapRef.value.getBoundingClientRect();
  const vh = window.innerHeight;
  // rect.top goes from vh (just entering) to 0 (top at viewport top)
  // we flatten over the range [vh * 0.9 → vh * 0.1]
  const start = vh * 0.85;
  const end = vh * 0.1;
  const progress = Math.min(Math.max((start - rect.top) / (start - end), 0), 1);
  screenshotRotate.value = 12 * (1 - progress);
};

const previousTheme = ref(null);

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  previousTheme.value = document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";
  document.documentElement.classList.add("dark");
  const toggle = document.querySelector(".VPSwitchAppearance");
  if (toggle) toggle.style.display = "none";
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
  document.documentElement.classList.remove("has-scrolled");
  if (previousTheme.value === "light")
    document.documentElement.classList.remove("dark");
  const toggle = document.querySelector(".VPSwitchAppearance");
  if (toggle) toggle.style.display = "";
});

// ── Terminal demo lines ───────────────────────────────────────────────────────
const demoLines = [
  { type: "cmd", text: '$ claude "refactor auth module"' },
  { type: "out", text: "Starting session..." },
  { type: "out", text: "Reading 12 files..." },
  { type: "out", text: "Tokens used: 14,320  Cost: $0.043" },
  { type: "blank", text: "" },
  { type: "cmd", text: '$ claude "add unit tests for all handlers"' },
  { type: "out", text: "Tokens used: 38,910  Cost: $0.117" },
  { type: "blank", text: "" },
  {
    type: "warn",
    text: "⚡ ClaGuard: 80% of daily limit reached ($4.00 / $5.00)",
  },
  { type: "blank", text: "" },
  { type: "cmd", text: '$ claude "write full E2E test suite"' },
  { type: "out", text: "Tokens used: 91,200  Cost: $0.274" },
  { type: "blank", text: "" },
  { type: "alert", text: "🔴 ClaGuard: Daily limit reached ($5.00 / $5.00)" },
];
</script>

<template>
  <div class="home-container">
    <!-- ══ HERO ══════════════════════════════════════════════════════════════ -->
    <section class="hero">
      <div class="hero-content">
        <span class="hero-overline">Desktop app for Claude Code</span>
        <span class="brand-claim"
          >Claude is powerful.<br /><span class="brand-highlight"
            >Your budget has limits.</span
          ></span
        >
        <p class="hero-sub">
          ClaGuard monitors every token and dollar you spend with Claude Code.
          Set limits, get notified, stay in control — all from your system tray.
        </p>
        <div class="hero-actions">
          <a href="#download" class="hero-btn-primary">Download Free</a>
          <a href="/guide/getting-started" class="hero-btn-secondary"
            >Read the docs →</a
          >
        </div>
        <p class="hero-note">macOS · Windows · Linux — free to download</p>
      </div>
    </section>

    <!-- ══ HERO SCREENSHOT ═══════════════════════════════════════════════════ -->
    <section class="hero-screenshot-section">
      <div
        ref="screenshotWrapRef"
        class="hero-screenshot-wrap"
        :style="`transform: perspective(1200px) rotateX(${screenshotRotate}deg)`"
      >
        <img
          src="/images/app-dashboard.png"
          alt="ClaGuard dashboard showing token and cost usage"
          class="hero-screenshot"
        />
      </div>
    </section>

    <!-- ══ HOW IT WORKS ══════════════════════════════════════════════════════ -->
    <section class="pillars">
      <div class="pillars-grid-bg" aria-hidden="true"></div>
      <h2 class="pillars-heading">
        Set it once.<br /><span class="brand-highlight"
          >Never overspend again.</span
        >
      </h2>
      <div class="pillars-grid">
        <div class="pillar-card">
          <span class="pillar-number">01</span>
          <h3 class="pillar-title">Install &amp; connect</h3>
          <p class="pillar-desc">
            Download ClaGuard for your platform and launch it. On first run it
            auto-configures Claude Code's OpenTelemetry settings — no manual
            setup.
          </p>
        </div>
        <div class="pillar-card">
          <span class="pillar-number">02</span>
          <h3 class="pillar-title">Set your limits</h3>
          <p class="pillar-desc">
            Define daily and monthly limits in USD or tokens. Configure
            thresholds at 50%, 80%, 100% — or any combination that fits your
            workflow.
          </p>
        </div>
        <div class="pillar-card">
          <span class="pillar-number">03</span>
          <h3 class="pillar-title">Get alerted</h3>
          <p class="pillar-desc">
            ClaGuard tracks every token in real time. Native desktop
            notifications fire the moment you cross a threshold. The tray icon
            shows your budget health at a glance.
          </p>
        </div>
      </div>
    </section>

    <!-- ══ TERMINAL DEMO ══════════════════════════════════════════════════════ -->

    <!-- ══ FEATURES ══════════════════════════════════════════════════════════ -->
    <div class="section-divider"></div>

    <section class="feature-section">
      <div class="feature-row">
        <div class="feature-text">
          <span class="feature-label">Dashboard</span>
          <h2 class="feature-title">Your usage, always visible.</h2>
          <p class="feature-description">
            A clean dashboard shows daily and monthly token + cost totals with
            progress bars toward each limit. Always one click away from your
            system tray.
          </p>
        </div>
        <div class="feature-visual">
          <img
            src="/images/app-dashboard.png"
            alt="ClaGuard Dashboard — daily and monthly cost and token usage"
            class="app-screenshot"
          />
        </div>
      </div>
    </section>

    <div class="section-divider"></div>

    <section class="feature-section feature-section--alt">
      <div class="feature-row feature-row--reversed">
        <div class="feature-text">
          <span class="feature-label">Limits &amp; thresholds</span>
          <h2 class="feature-title">
            Fine-grained control over every dimension.
          </h2>
          <p class="feature-description">
            Create limits in USD or tokens, scoped to daily or monthly windows.
            Each limit gets its own threshold steps — warn at 50%, alert at 80%,
            hard stop at 100%.
          </p>
        </div>
        <div class="feature-visual">
          <img
            src="/images/app-limits.png"
            alt="ClaGuard Limits — new limit modal with threshold configuration"
            class="app-screenshot"
          />
        </div>
      </div>
    </section>

    <div class="section-divider"></div>

    <section class="feature-section">
      <div class="feature-row">
        <div class="feature-text">
          <span class="feature-label">Tray icon</span>
          <h2 class="feature-title">Budget health at a glance.</h2>
          <p class="feature-description">
            The menu bar icon changes color based on your worst active
            threshold. Green means you're fine. Red means you've hit a limit. No
            need to open the app.
          </p>
        </div>
        <div class="feature-visual">
          <div class="mock-tray">
            <div class="mock-tray-row">
              <div class="mock-tray-icon mock-tray-icon--green">
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>
              <span class="mock-tray-label">Under 50% — all clear</span>
            </div>
            <div class="mock-tray-row">
              <div class="mock-tray-icon mock-tray-icon--yellow">
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>
              <span class="mock-tray-label">Over 50% — heads up</span>
            </div>
            <div class="mock-tray-row">
              <div class="mock-tray-icon mock-tray-icon--orange">
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>
              <span class="mock-tray-label">Over 80% — getting close</span>
            </div>
            <div class="mock-tray-row">
              <div class="mock-tray-icon mock-tray-icon--red">
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>
              <span class="mock-tray-label">100% — limit reached</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="section-divider"></div>

    <section class="feature-section feature-section--alt">
      <div class="feature-row feature-row--reversed">
        <div class="feature-text">
          <span class="feature-label">Local-first</span>
          <h2 class="feature-title">Fully private. No accounts. No cloud.</h2>
          <p class="feature-description">
            All data stays on your machine, stored in a local SQLite database.
            ClaGuard has no backend, no telemetry of its own, and makes no
            outbound requests.
          </p>
          <ul class="feature-checklist">
            <li>No account required</li>
            <li>No cloud sync or remote storage</li>
            <li>No usage tracking by ClaGuard itself</li>
            <li>Free to download, no subscription needed</li>
          </ul>
        </div>
        <div class="feature-visual">
          <TerminalChrome title="~/.local/share/claguard">
            <div class="demo-body demo-body--sm">
              <div class="demo-line demo-line--cmd">
                $ ls ~/.local/share/claguard/
              </div>
              <div class="demo-line demo-line--out">usage.db</div>
              <div class="demo-line demo-line--out">settings.json</div>
              <div class="demo-line demo-line--blank"></div>
              <div class="demo-line demo-line--cmd">
                $ sqlite3 usage.db "SELECT date, cost_usd FROM daily_totals
                LIMIT 5"
              </div>
              <div class="demo-line demo-line--out">2026-03-09|2.14</div>
              <div class="demo-line demo-line--out">2026-03-10|4.87</div>
              <div class="demo-line demo-line--out">2026-03-11|1.32</div>
              <div class="demo-line demo-line--out">2026-03-12|3.84</div>
            </div>
          </TerminalChrome>
        </div>
      </div>
    </section>

    <!-- ══ DOWNLOAD ══════════════════════════════════════════════════════════ -->
    <section id="download" class="download-section">
      <h2 class="download-heading">Download ClaGuard</h2>
      <p class="download-sub">Free to download. No account required.</p>
      <div class="download-grid">
        <a
          v-for="p in platforms"
          :key="p.id"
          :href="p.href"
          class="download-card"
        >
          <span class="download-card-icon" v-html="p.icon"></span>
          <span class="download-card-label">{{ p.label }}</span>
          <svg
            class="download-card-arrow"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
      <p class="download-github">
        Or view all releases on
        <a
          href="https://github.com/claguard/claguard/releases"
          target="_blank"
          rel="noopener"
          >GitHub</a
        >
      </p>
    </section>

    <!-- ══ FAQ ═══════════════════════════════════════════════════════════════ -->
    <section class="faq-section">
      <div class="section-inner">
        <h2 class="faq-heading">Frequently asked questions</h2>
        <div class="faq-list">
          <div
            v-for="(item, i) in faqItems"
            :key="i"
            class="faq-item"
            :class="{ 'faq-item--open': openFaqIndex === i }"
          >
            <button class="faq-question" @click="toggleFaq(i)">
              <span>{{ item.question }}</span>
              <svg
                class="faq-chevron"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <div class="faq-answer" v-show="openFaqIndex === i">
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ FOOTER CTA ════════════════════════════════════════════════════════ -->
    <section class="footer-cta">
      <div class="footer-cta-inner">
        <h2 class="footer-cta-heading">
          Stop guessing what Claude Code costs you.
        </h2>
        <a href="#download" class="hero-btn-primary">Download Free</a>
      </div>
    </section>

    <!-- ══ SITE FOOTER ════════════════════════════════════════════════════════ -->
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <span class="footer-name">ClaGuard</span>
          <span class="footer-tagline"
            >Claude is powerful. Your budget has limits.</span
          >
        </div>
        <div class="footer-links">
          <a href="/guide/getting-started">Docs</a>
          <a
            href="https://github.com/claguard/claguard"
            target="_blank"
            rel="noopener"
            >GitHub</a
          >
          <a
            href="https://github.com/claguard/claguard/releases"
            target="_blank"
            rel="noopener"
            >Releases</a
          >
          <a
            href="https://github.com/claguard/claguard/issues"
            target="_blank"
            rel="noopener"
            >Issues</a
          >
        </div>
        <div class="footer-copy">© 2025 ClaGuard — MIT License</div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* ── Reset / base ─────────────────────────────────────────────────────────── */
.home-container {
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: none;
  color: var(--cg-heading);
  background: var(--cg-bg);
}

/* ── Hero ─────────────────────────────────────────────────────────────────── */
.hero {
  position: relative;
  min-height: 620px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 140px 24px 100px;
  background: var(--cg-bg);
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 780px;
  margin: 0 auto;
}

.hero-overline {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--cg-accent);
  background: rgba(212, 149, 106, 0.1);
  border: 1px solid rgba(212, 149, 106, 0.2);
  border-radius: 100px;
  padding: 4px 14px;
  margin-bottom: 28px;
}

.brand-claim {
  display: block;
  font-size: clamp(2.4rem, 6vw, 4.2rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--cg-heading);
  margin-bottom: 24px;
}

.brand-highlight {
  color: var(--cg-accent);
}

.hero-sub {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--cg-text);
  max-width: 560px;
  margin: 0 auto 36px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.hero-btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  background: var(--cg-accent) !important;
  color: var(--cg-bg) !important;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 8px;
  text-decoration: none !important;
  transition:
    opacity 0.2s,
    transform 0.15s;
}
.hero-btn-primary:hover {
  opacity: 0.88;
  transform: translateY(-1px);
}

.hero-btn-secondary {
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 8px;
  color: var(--cg-text) !important;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none !important;
  transition:
    border-color 0.2s,
    color 0.2s;
  background: rgba(201, 185, 154, 0.04);
}
.hero-btn-secondary:hover {
  border-color: var(--cg-accent);
  color: var(--cg-accent) !important;
}

.hero-note {
  font-size: 0.8rem;
  color: var(--cg-gray-1);
  margin: 0;
}

/* ── Hero screenshot ──────────────────────────────────────────────────────── */
.hero-screenshot-section {
  padding: 0 5vw;
  margin-top: -140px;
  margin-bottom: 0;
  position: relative;
  z-index: 0;
}

.hero-screenshot-wrap {
  width: 96vw;
  max-width: 1600px;
  margin: 0 auto;
  position: relative;
  transform-origin: 50% 100%;
  will-change: transform;
}

.hero-screenshot-wrap::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40%;
  background: linear-gradient(to bottom, transparent, var(--cg-bg));
  pointer-events: none;
  border-radius: 0 0 18px 18px;
}

.hero-screenshot {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 14px;
}

/* ── Section layout helpers ───────────────────────────────────────────────── */
.section-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 32px;
}

.section-divider {
  height: 1px;
  background: var(--cg-border);
  margin: 0 32px;
}

/* ── Pillars (how it works) ───────────────────────────────────────────────── */
.pillars {
  position: relative;
  padding: 0 32px 100px;
  max-width: 1100px;
  margin: 0 auto;
}

.pillars-grid-bg {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  background-size: 48px 48px;
  border-radius: 16px;
  pointer-events: none;
}

.pillars-heading {
  font-size: clamp(1.6rem, 3.5vw, 2.4rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  text-align: center;
  margin-bottom: 56px;
  color: var(--cg-heading);
  line-height: 1.2;
  position: relative;
}

.pillars-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  position: relative;
}

.pillar-card {
  background: var(--cg-bg-soft);
  border: 1px solid var(--cg-border);
  border-radius: 16px;
  padding: 32px 28px;
  transition:
    border-color 0.2s,
    transform 0.2s;
}
.pillar-card:hover {
  border-color: rgba(212, 149, 106, 0.3);
  transform: translateY(-2px);
}

.pillar-number {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--cg-accent);
  opacity: 0.8;
  margin-bottom: 16px;
  font-family: "SF Mono", "Fira Code", Menlo, monospace;
}

.pillar-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--cg-heading);
  margin-bottom: 12px;
}

.pillar-desc {
  font-size: 0.9rem;
  line-height: 1.65;
  color: var(--cg-text);
  margin: 0;
}

/* ── Terminal demo section ────────────────────────────────────────────────── */
.demo-section {
  padding: 0 32px 80px;
}

.demo-body {
  padding: 24px 20px;
  font-family: "SF Mono", "Fira Code", "Fira Mono", Menlo, Consolas, monospace;
  font-size: 0.82rem;
  line-height: 1.8;
  min-height: 300px;
}
.demo-body--sm {
  min-height: 180px;
}

.demo-line {
  white-space: pre-wrap;
}
.demo-line--cmd {
  color: rgba(255, 255, 255, 0.9);
}
.demo-line--out {
  color: var(--cg-gray-1);
}
.demo-line--blank {
  height: 0.9em;
}
.demo-line--warn {
  color: var(--cg-warn);
  font-weight: 600;
}
.demo-line--alert {
  color: var(--cg-danger);
  font-weight: 600;
}

/* ── Feature sections ─────────────────────────────────────────────────────── */
.feature-section {
  padding: 80px 32px;
  max-width: 1100px;
  margin: 0 auto;
}
.feature-section--alt {
  background: transparent;
}

.feature-row {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 48px;
  align-items: center;
}
.feature-row--reversed {
  grid-template-columns: 1.4fr 1fr;
}
.feature-row--reversed .feature-text {
  order: 2;
}
.feature-row--reversed .feature-visual {
  order: 1;
}

.feature-label {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--cg-accent);
  margin-bottom: 12px;
  font-family: "SF Mono", "Fira Code", Menlo, monospace;
}

.feature-title {
  font-size: clamp(1.4rem, 2.8vw, 2rem);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--cg-heading);
  margin-bottom: 16px;
}

.feature-description {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--cg-text);
  margin-bottom: 0;
}

.feature-checklist {
  list-style: none;
  padding: 0;
  margin: 20px 0 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.feature-checklist li {
  font-size: 0.9rem;
  color: var(--cg-text);
  padding-left: 20px;
  position: relative;
}
.feature-checklist li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--cg-accent);
  font-weight: 700;
}

.feature-visual {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ── App screenshots ──────────────────────────────────────────────────────── */
.app-screenshot {
  width: 100%;
  height: auto;
  border-radius: 14px;
  display: block;
}

/* ── Mock tray ────────────────────────────────────────────────────────────── */
.mock-tray {
  width: 100%;
  background: var(--cg-bg-soft);
  border: 1px solid var(--cg-border);
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.mock-tray-row {
  display: flex;
  align-items: center;
  gap: 14px;
}

.mock-tray-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.mock-tray-icon--green {
  background: rgba(142, 192, 124, 0.15);
  color: var(--cg-ok);
}
.mock-tray-icon--yellow {
  background: rgba(215, 153, 33, 0.15);
  color: var(--cg-warn);
}
.mock-tray-icon--orange {
  background: rgba(212, 149, 106, 0.15);
  color: var(--cg-accent);
}
.mock-tray-icon--red {
  background: rgba(224, 120, 102, 0.15);
  color: var(--cg-danger);
}

.mock-tray-label {
  font-size: 0.88rem;
  color: var(--cg-text);
}

/* ── Download ─────────────────────────────────────────────────────────────── */
.download-section {
  padding: 100px 32px;
  text-align: center;
  border-top: 1px solid var(--cg-border);
}

.download-heading {
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--cg-heading);
  margin-bottom: 12px;
}

.download-sub {
  color: var(--cg-gray-1);
  font-size: 1rem;
  margin-bottom: 48px;
}

.download-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  max-width: 900px;
  margin: 0 auto 24px;
}

.download-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 28px 20px;
  background: var(--cg-bg-soft);
  border: 1px solid var(--cg-border);
  border-radius: 14px;
  text-decoration: none !important;
  color: rgba(255, 255, 255, 0.8) !important;
  transition:
    border-color 0.2s,
    transform 0.15s,
    background 0.2s;
}
.download-card:hover {
  border-color: var(--cg-accent);
  transform: translateY(-2px);
  background: rgba(212, 149, 106, 0.05);
  color: var(--cg-heading) !important;
}

.download-card-icon {
  color: var(--cg-accent);
}
.download-card-icon :deep(svg) {
  display: block;
}

.download-card-label {
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
}

.download-card-arrow {
  color: var(--cg-gray-1);
  transition: color 0.2s;
}
.download-card:hover .download-card-arrow {
  color: var(--cg-accent);
}

.download-github {
  font-size: 0.85rem;
  color: var(--cg-gray-1);
  margin: 0;
}
.download-github a {
  color: var(--cg-accent);
  text-decoration: none;
}
.download-github a:hover {
  text-decoration: underline;
}

/* ── FAQ ──────────────────────────────────────────────────────────────────── */
.faq-section {
  padding: 80px 32px;
  border-top: 1px solid var(--cg-border);
}

.faq-heading {
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--cg-heading);
  margin-bottom: 40px;
  text-align: center;
}

.faq-list {
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.faq-item {
  border: 1px solid var(--cg-border);
  border-radius: 10px;
  overflow: hidden;
  background: var(--cg-bg-soft);
  transition: border-color 0.2s;
}
.faq-item--open {
  border-color: rgba(212, 149, 106, 0.3);
}
.faq-item + .faq-item {
  margin-top: 8px;
}

.faq-question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 18px 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--cg-heading);
  text-align: left;
  transition: color 0.2s;
}
.faq-question:hover {
  color: var(--cg-heading);
}
.faq-item--open .faq-question {
  color: var(--cg-heading);
}

.faq-chevron {
  flex-shrink: 0;
  transition: transform 0.25s ease;
  color: var(--cg-gray-1);
}
.faq-item--open .faq-chevron {
  transform: rotate(180deg);
  color: var(--cg-accent);
}

.faq-answer {
  padding: 0 20px 18px;
}
.faq-answer p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--cg-text);
}

/* ── Footer CTA ───────────────────────────────────────────────────────────── */
.footer-cta {
  border-top: 1px solid var(--cg-border);
  padding: 80px 32px;
  text-align: center;
}

.footer-cta-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
}

.footer-cta-heading {
  font-size: clamp(1.6rem, 3.5vw, 2.4rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--cg-heading);
  max-width: 560px;
  margin: 0;
  line-height: 1.2;
}

/* ── Site footer ──────────────────────────────────────────────────────────── */
.site-footer {
  border-top: 1px solid var(--cg-border);
  padding: 40px 32px;
  background: var(--cg-bg);
}

.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
  justify-content: space-between;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.footer-name {
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--cg-heading);
}
.footer-tagline {
  font-size: 0.78rem;
  color: var(--cg-gray-1);
}

.footer-links {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}
.footer-links a {
  font-size: 0.88rem;
  color: var(--cg-gray-1);
  text-decoration: none;
  transition: color 0.2s;
}
.footer-links a:hover {
  color: var(--cg-accent);
}

.footer-copy {
  font-size: 0.78rem;
  color: var(--cg-gray-1);
}

/* ── Responsive ───────────────────────────────────────────────────────────── */
@media (max-width: 768px) {
  .hero-screenshot-section {
    display: none;
  }
  .hero {
    padding: 120px 20px 80px;
  }

  .feature-row {
    grid-template-columns: 1fr;
    gap: 36px;
  }
  .feature-row--reversed .feature-text {
    order: 0;
  }
  .feature-row--reversed .feature-visual {
    order: 0;
  }

  .feature-section {
    padding: 60px 20px;
  }
  .pillars {
    padding: 60px 20px;
  }
  .demo-section {
    padding: 0 20px 60px;
  }
  .download-section {
    padding: 60px 20px;
  }
  .faq-section {
    padding: 60px 20px;
  }
  .footer-cta {
    padding: 60px 20px;
  }
  .site-footer {
    padding: 32px 20px;
  }

  .download-grid {
    grid-template-columns: 1fr 1fr;
  }
  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .download-grid {
    grid-template-columns: 1fr;
  }
}
</style>
