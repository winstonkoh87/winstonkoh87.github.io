# Architecture

> **Last verified**: 26 July 2026 · Astro 5.16.6 · Tailwind 4.1.18
> Companion to [README.md](README.md). This document is about *where things live and why* — read it before changing anything structural.

---

## 1. Shape of the thing

A static site. No server, no database, no runtime API calls. Astro renders everything to HTML at build time; GitHub Actions publishes `dist/` to GitHub Pages; Cloudflare fronts DNS and CDN.

```
src/pages/*.astro ──┐
src/data/*.ts ──────┤
public/** ──────────┤──▶  astro build  ──▶  dist/  ──▶  GitHub Pages  ──▶  Cloudflare  ──▶  visitor
brand/** (not built)┘         │
                              └─▶ postbuild: scripts/indexnow.mjs → Bing/Yandex ping
```

`brand/` is **not** part of the build. It is a reference kit for humans. Nothing in `src/` imports from it.

---

## 2. Directory map

```
.
├── astro.config.mjs        Site URL, trailing-slash policy, sitemap rules
├── src/
│   ├── layouts/
│   │   ├── Layout.astro        The main layout — head, meta, JSON-LD @graph, nav, footer
│   │   ├── ArticleLayout.astro Article chrome (built on Layout)
│   │   └── MelvinLayout.astro  Self-contained layout for one demo (does NOT use Layout)
│   ├── components/         Navigation, Footer, ArticleCTA, RelatedArticles
│   ├── data/               ← single sources of truth (see §4)
│   ├── pages/              File-based routes
│   ├── styles/             Live CSS tokens + page styles
│   └── assets/images/      Images imported through astro:assets (auto-optimised)
├── public/                 Copied verbatim to dist/ — NOT optimised (see §6)
│   ├── data/athena_kb.json Chat widget knowledge base
│   ├── robots.txt, CNAME, favicon.svg, apple-touch-icon.png
│   └── projects/, coach-derrick/, swim-coach-demo/   Static demo sites
├── brand/                  Identity kit — reference only, never built
├── scripts/indexnow.mjs    Postbuild search-engine ping
└── .github/workflows/deploy.yml
```

---

## 3. `Layout.astro` — the one file that matters most

Every real page routes through it. It owns:

| Concern | Detail |
|---|---|
| `<title>` / meta description | From props; description has a site-wide default |
| Canonical URL | Derived from `Astro.url.pathname`, overridable via `canonicalUrl` |
| Open Graph / Twitter | Including `og:image:width/height/alt`, `og:site_name`, `og:locale` |
| Icons | `favicon.svg` + `apple-touch-icon.png` |
| Analytics | GA4 tag and the `trackCTA()` beacon helper |
| **JSON-LD `@graph`** | The structured-data spine — see below |
| Chrome | `<Navigation/>`, `<Footer/>`, floating WhatsApp/Telegram buttons |
| Particle canvas | Respects `prefers-reduced-motion` |

### The JSON-LD graph

One `<script type="application/ld+json">` per page containing a `@graph` array. Nodes are stable-`@id`'d so they cross-reference instead of duplicating:

| Node | `@id` | Present on |
|---|---|---|
| `Person` | `#person` | every page |
| `WebSite` | `#website` | every page |
| `ProfessionalService` | `#service` | every page (services + offer catalogue) |
| `BreadcrumbList` | — | every non-home page (auto-derived from the path) |
| `Article` | — | when `articleData` prop is passed |
| `FAQPage` | — | when `faqData` prop is passed |
| `SiteNavigationElement` ×5 | `#nav-*` | every page |
| **`extraSchema` nodes** | caller-defined | pages that pass the prop |

**To add page-specific structured data**, pass the `extraSchema` prop — an array of JSON-LD nodes merged into the graph. `/athena/` uses this for `SoftwareApplication` + `SoftwareSourceCode`:

```astro
<Layout title="…" description={…} extraSchema={athenaSchema}>
```

Don't hand-roll a second `<script type="application/ld+json">` in a page — two graphs on one page is how contradictory entities get published.

### `MelvinLayout.astro` is deliberately separate

It does **not** extend `Layout.astro` — the demo needs its own visual identity, its own fonts, and critically its own `noindex` + demo banner + `WebPage`/`CreativeWork` schema. Keeping it separate means the demo can never accidentally inherit the site's `Person` schema or nav.

---

## 4. Data layer — single sources of truth

Three modules in `src/data/`. **Change data here, never in a page.**

| File | Owns | Consumed by |
|---|---|---|
| `site-stats.ts` | Athena version, protocol count, sessions, vector memories, GitHub stars/forks, repo URL, licence | Homepage, `/athena/`, `/framework/`, `/services/`, `/about/`, README badges |
| `writing-taxonomy.ts` | All 26 articles — slug, title, date, cluster, excerpt, card image | `/writing/`, `RelatedArticles` |
| `portfolio-taxonomy.ts` | All 9 portfolio entries + the 3 cluster definitions | `/portfolio/` |

### `site-stats.ts` deserves special care

It fetches GitHub stars and forks **at build time** — the site rebuilds on every push, so each deploy refreshes them. Two safeguards:

- 5-second `AbortSignal.timeout` so a slow API can't hang CI
- A last-known **floor** (`FALLBACK_STARS` / `FALLBACK_FORKS`) — a value below the floor is rejected, so an API blip can't make the proof numbers appear to go backwards

If you bump the real counts, raise the floors too.

---

## 5. Routing and URL policy

- **File-based**: `src/pages/about.astro` → `/about/`
- `trailingSlash: 'always'` + `build.format: 'directory'` → every route emits `path/index.html`

Those two settings must agree. GitHub Pages resolves `/about/` to `/about/index.html`; the alternative (`format: 'file'`) would emit `/about.html` and break every trailing-slash link on the site.

### Sitemap

`@astrojs/sitemap` with a `filter` and a `serialize`:

- **`filter`** excludes `/404` and every mock-demo path. Any new demo directory must be added here *and* carry a `noindex` meta tag — the two go together.
- **`serialize`** assigns priority and changefreq by URL shape: home 1.0/daily, core pages 0.9/weekly, articles 0.8/monthly, projects 0.6/monthly.

**Invariant**: the sitemap and the set of indexable pages agree exactly. Verify after any routing change:

```bash
npm run build
# then: every dist page without a noindex should appear in dist/sitemap-0.xml, and vice versa
```

---

## 6. Images — the `public/` vs `src/assets/` split

This is the single most common way to regress performance here.

| Location | Build behaviour | Use for |
|---|---|---|
| `src/assets/images/` | Goes through `astro:assets` — auto-converted to WebP, hashed, responsive | **Default. Prefer this.** |
| `public/` | Copied **verbatim**. No optimisation, no hashing, no format conversion | Only files that must keep a fixed URL |

In July 2026, 48 images living in `public/` shipped as raw PNGs — some at 6.6 MB — because `public/` bypasses the pipeline entirely. Converting them cut the built payload from 53 MB to 20 MB.

**Rules**:
1. New images go in `src/assets/images/` and are imported, not referenced by string path.
2. If a file genuinely must live in `public/` (OG images, favicons, static demo assets), it must be pre-optimised — WebP where possible, and never over ~200 KB.
3. Card/hero images referenced from `src/data/*.ts` are string paths into `public/` by necessity — keep those as WebP.

---

## 7. Styling

| File | Role |
|---|---|
| `src/styles/style.css` | **Live design tokens** + global styles. The real source. |
| `src/styles/global.css`, `article.css`, `terminal.css`, `athena.css`, `gem-agent.css` | Scoped page/feature styles |
| `brand/variables.css` | **Reference only.** Not imported anywhere. |

Tailwind v4 is wired through the Vite plugin (`@tailwindcss/vite`) — there is no `tailwind.config.js`; v4 configures in CSS.

> The token values in `style.css` and `brand/variables.css` are intentionally identical but **not linked**. Changing a brand colour means editing both. This is a known manual sync point.

---

## 8. Indexing policy

Three mechanisms, all of which must agree for a page to be indexed:

1. **`noindex` meta tag** — absent on real pages, present on all 19 demo pages
2. **Sitemap `filter`** in `astro.config.mjs` — demos excluded
3. **`robots.txt`** — `Allow: /` plus the sitemap pointer; it does not do per-path blocking

Demo pages use `noindex, follow` (not `nofollow`) so link equity still flows back to the main site.

**Adding a new mock demo?** Do all three: `noindex` meta, sitemap `filter` entry, and — if it names a real person or business — a visible "Design demo" banner with no real contact details and no `Person` schema.

---

## 9. Build and deploy pipeline

```
git push origin main
  └─▶ .github/workflows/deploy.yml
       ├─ withastro/action@v2      npm ci && npm run build
       │    └─ postbuild: scripts/indexnow.mjs   (pings Bing + Yandex)
       └─ actions/deploy-pages@v4  publishes dist/ to GitHub Pages
```

`workflow_dispatch` is enabled, so a deploy can be triggered manually from the Actions tab without a commit.

`scripts/indexnow.mjs` reports `N/2 engines accepted` rather than an unconditional success — it previously printed a green tick while submitting nothing. Bing currently rejects with `403` (domain unverified in Bing Webmaster Tools); Yandex is unaffected by that.

---

## 10. Where to change what

| I want to… | Edit |
|---|---|
| Add an article | New `src/pages/articles/<slug>.astro` + an entry in `writing-taxonomy.ts` |
| Add a portfolio item | An entry in `portfolio-taxonomy.ts` |
| Update Athena's stats | `src/data/site-stats.ts` (raise the fallback floors too) |
| Change site-wide meta/schema | `src/layouts/Layout.astro` |
| Add page-specific structured data | Pass `extraSchema` to `Layout` |
| Change nav or footer | `src/components/Navigation.astro` / `Footer.astro` |
| Change a brand colour | `src/styles/style.css` **and** `brand/variables.css` |
| Add a mock demo | `public/` + `noindex` + sitemap `filter` + demo banner (§8) |
| Change sitemap priority | `serialize` in `astro.config.mjs` |
| Replace the OG card | `brand/social/og-image-1200x630.svg` → render → copy to `public/assets/images/og-image.png` |

---

## 11. Invariants worth protecting

These have each been broken at least once. A build that violates one is a regression:

1. **Sitemap ≡ indexable set.** No noindexed page in the sitemap; no indexable page missing from it.
2. **No broken image references.** Every `src`/`href` pointing at an image resolves in `dist/`.
3. **One `<h1>` per content page.** (`athena-demo-live.html` is an embedded widget
   fragment and the Google verification file is a stub — neither is a page.)
4. **Alt text on every `<img>`.**
5. **No third-party PII in the output** — no real emails, phone numbers, or social profile links belonging to anyone other than Winston.
6. **No `Person` schema for anyone but Winston.**
7. **Built image payload stays under ~25 MB.**

Quick check after a structural change:

```bash
npm run build
grep -rl 'noindex' dist --include="*.html" | wc -l     # expect 19
grep -o '<loc>' dist/sitemap-0.xml | wc -l             # expect 40
```
