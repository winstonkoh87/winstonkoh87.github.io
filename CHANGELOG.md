# Changelog

All notable changes to winstonkoh87.com. Reconstructed from git history (395 commits, first commit 26 Dec 2025).

Format loosely follows [Keep a Changelog](https://keepachangelog.com/). This site has no released versions — it ships continuously on push to `main` — so entries are grouped by month.

---

## 2026-08

### Changed
- **Synchronized Portfolio & Freshness Pass (7 Aug 2026)**: Updated site-wide verification dates, sitemap timestamps, and Athena metrics (448 protocols, 43 active skills, 72 workflows, 260 scripts, 4,202 memory files) to 7 August 2026.
- **Synchronized Portfolio & Freshness Pass (5 Aug 2026)**: Updated site-wide verification dates, sitemap timestamps, and Athena metrics to 5 August 2026.
- **System-2 & Canonical Counts Sync (4 Aug 2026)**: Synced site-wide Athena metrics to 448 protocols (414 active), 72 slash command workflows, 260 scripts, and 4,197 memory files following the Athena v9.9.8 System-2 compute release.
- **Positioning Alignment**: Verified canonical description and governed AI agent positioning across Astro layout templates and Athena product pages.

---

## 2026-07

### Added
- `SoftwareApplication` + `SoftwareSourceCode` JSON-LD on `/athena/`. The site's centrepiece artefact previously had no software structured data at all, so nothing told search or AI answer engines what Athena actually is. Every value is checkable against the public repo.
- `extraSchema` prop on `Layout.astro` — pages can now extend the site-wide JSON-LD `@graph` without hand-rolling a second script tag.
- Open Graph card rebuilt at the correct **1200×630** (the previous card was 1024×1024, so every share on every platform was being cropped or thumbnailed). Rendered from SVG using the real Lambda polygon and brand palette; source kept at `brand/social/og-image-1200x630.svg`.
- `apple-touch-icon.png` (180×180) — documented in the brand kit since January, never actually shipped.
- `og:image:width` / `height` / `alt`, `og:site_name`, `og:locale` in the head.
- `ARCHITECTURE.md` and this changelog.
- GitHub forks surfaced alongside stars in `site-stats.ts`.
- Visible "Design demo" banner on the 12 demo pages that name a real person or business.

### Changed
- **Image payload 53 MB → 20 MB.** 48 images living in `public/` were bypassing Astro's image pipeline entirely and shipping as raw PNGs — sixteen article heroes at ~800 KB each, one at 6.6 MB. Converted to WebP and rewrote 62 references.
- `theme-color` corrected to `#0a0a0a`, matching brand Void (was `#0a0a0f`).
- Model references updated to the current lineup (Claude Opus 5). Historical references inside articles left as written — they recount past sessions, not the current stack.
- README rewritten for accuracy; the previous version claimed 1,900+ sessions, 396+ protocols, and v9.9.4 against actuals of 2,090+, 414, and v9.9.8.
- All Athena stats routed through `src/data/site-stats.ts`, ending the monthly cross-page drift sweeps that recur throughout this changelog.
- `scripts/indexnow.mjs` now reports `N/2 engines accepted` instead of an unconditional green tick — it had been claiming success on every build while submitting nothing.

### Fixed
- **Index bloat**: 19 mock-client demo pages were fully indexable — roughly a third of the crawlable surface was fabricated businesses. All now carry `noindex, follow` and are excluded from the sitemap.
- **Sitemap drift**: six live pages were missing from the sitemap. The sitemap and the indexable set now agree exactly — 40 entries, 0 leaks, 0 orphans.
- `/articles/clinkz-doctrine/` card image had pointed at a file that never existed — a 404 since launch.
- **The 404 page was hiding its own escape links.** `terminal.css` is imported globally for the homepage's interactive terminal and pins `.terminal-body` to `height: 220px; overflow-y: auto`. That rule leaked onto the 404, clipping "cd /home", "cd /portfolio", and "cd /writing" out of the visible box — on the one page whose entire job is showing the way out. Overridden in the page's scoped styles; the homepage terminal is unchanged.
- `<h1>` added to the 404 page (it had none, so the page offered no landmark heading to a screen reader).
- `favicon.ico` was an SVG file with an `.ico` extension — anything requesting the legacy path got something it couldn't parse. Replaced with a real 16/32/48 multi-resolution ICO.
- Four orphaned duplicate copies of the Melvin demo pages deleted (unlinked, superseded by the Astro routes).
- Preconnect hints added for googletagmanager and google-analytics.

### Security / Privacy
- **Removed all third-party PII from the output.** The Melvin demo emitted `Person` schema for a real, identifiable individual — with their actual LinkedIn and Instagram in `sameAs`, plus `worksFor` and `alumniOf` claims — alongside illustrative copy. Replaced with `WebPage` + `CreativeWork` authored by Winston. Real email address and social links stripped from the layout footer and contact page.
- Neutralised a real third-party WhatsApp number on the ThatBioTutor mock pricing page.

> **Open**: the Melvin demo still uses real photographs of an identifiable individual. Tracked as TD-059 — pending consent, replacement imagery, or retirement.

---

## 2026-06

### Changed
- Site-wide metric and version drift sweep — synced every current-state surface to verified-live values (v9.9.1, 1,900+ sessions, 396+ protocols, 498 stars).
- Model references bumped to Opus 4.8; Gemini naming unified to 3.1 Pro across articles.
- Infrastructure docs corrected: hosting is GitHub Pages, not Cloudflare *Pages* — the domain runs on Cloudflare DNS/CDN.
- Chatbot knowledge base consolidated to a single source (`public/data/athena_kb.json`); the unused `src/data` duplicate removed.

### Removed
- GraphRAG claims retired — the feature had been removed from Athena that month (TD-018), leaving the site advertising something that no longer existed.

---

## 2026-05

### Changed
- Two metric sync passes (v9.8.4, v9.8.5): sessions 1,700+ → 1,800+, protocols 380+, stars 470+ → 474, knowledge-base overhaul.

---

## 2026-04

### Added
- FAQ JSON-LD injected into all 26 articles.
- "Implications" sections added across the article set.

### Changed
- Version sync to v9.6.6 across index, athena, about, and layout.

---

## 2026-03

### Added
- Services page rebuilt around conversion patterns — persona section, capacity signal, in-card proof, bundle pricing, low-friction CTAs.
- `@astrojs/sitemap` added as an explicit dependency.

### Fixed
- Hero tagline was missing a word: "Linux OS for Agents" → "Linux OS for **AI** Agents".
- Misleading `trailingSlash` comment in the Astro config.

---

## 2026-02

### Added
- **SEO content engine**: automatic internal linking, `ArticleLayout`, IndexNow integration.
- Social proof marquee, enhanced testimonials, FAQ accordion.
- Custom domain — `CNAME` for winstonkoh87.com.
- JSON-LD enriched for sitelink eligibility (`SiteNavigationElement`, `Person`, `WebSite`).
- Brand kit v2.1 — Lambda identity, guidelines, collateral templates.

### Fixed
- Canonical URL mismatches, including on `/projects/gem-agent/`.
- Trailing slashes added to all internal links.
- Footer date forced to Asia/Singapore — builds run in UTC and were showing the wrong day.

### Changed
- Hard pricing anchors removed from the FAQ in favour of scope-based proposal language.

---

## 2026-01

### Added
- **Astro migration completed** — cluster architecture for both writing and portfolio, chronological article sorting, filter tabs.
- Hero images and card layouts on the writing page.
- Dual-CTA funnel and schema upgrades.
- New articles including "The Price of Ignoring Advice" and "Why the $200 Coder Broke Your App".
- StickerLah e-commerce demo.

### Changed
- Repeated model-reference and version-alignment passes as the underlying Athena system moved from alpha to v8.0-Stable.
- 404 page redesigned with the terminal aesthetic.

---

## 2025-12

### Added
- **Initial build** (26 Dec) — portfolio with leadership framework, then a multi-page personal brand site: Home, About, Framework, Writing, Contact.
- Interactive particle constellation background; floating WhatsApp button.
- Project Athena showcase section.
- CI/CD via GitHub Actions, sitemap, custom 404, canonical links.
- GA4 analytics.
- First article — "AI as a Bionic Layer".
- P6 Math Tuition demo (5-page SME portfolio piece) and the SME case-study article.
- Portfolio gallery with category filters.

### Changed
- Migrated from vanilla HTML/CSS/JS to Astro for maintainability without giving up static output.
- Terminology settled: Athena as system identity, distinct from the underlying model engines.

---

## A recurring pattern worth naming

Between January and July 2026 this repo absorbed roughly one *"sync metrics / fix drift"* commit per month — version numbers, session counts, protocol counts, and star counts hard-coded across a dozen pages and drifting out of agreement between releases.

That class of commit should now be extinct: every statistic routes through `src/data/site-stats.ts`, with GitHub counts fetched at build time. If a drift-sync commit appears in this log again, something has bypassed that module — find it and route it back through.
