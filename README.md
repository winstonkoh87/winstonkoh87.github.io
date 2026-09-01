# winstonkoh87.com

> **Last verified**: 2 September 2026 (Winston Koh · Singapore) <!-- 2026-09-02 -->
> **Purpose**: Portfolio. Proof of work on [Project Athena](https://github.com/winstonkoh87/Athena-Public) — not a lead-gen site.

[![Live Site](https://img.shields.io/badge/Live-winstonkoh87.com-00C853?style=flat-square)](https://winstonkoh87.com/)
[![Built with Athena](https://img.shields.io/badge/Built_with-Athena-CC785C?style=flat-square)](https://github.com/winstonkoh87/Athena-Public)
[![Astro](https://img.shields.io/badge/Framework-Astro_5.16-BC52EE?logo=astro&logoColor=white&style=flat-square)](https://astro.build/)
[![GitHub Pages](https://img.shields.io/badge/Hosting-GitHub_Pages-222222?logo=githubpages&logoColor=white&style=flat-square)](https://pages.github.com/)
[![Cloudflare DNS](https://img.shields.io/badge/DNS_+_CDN-Cloudflare-F38020?logo=cloudflare&logoColor=white&style=flat-square)](https://www.cloudflare.com/)

A statically-generated Astro site that documents what I've built. The centrepiece is Project Athena — an open-source operating system for AI agents — and the writing and case studies around it.

**What this site is for**: displaying proof of work. It is deliberately *not* optimised for commercial keyword capture; see [Deliberate non-goals](#deliberate-non-goals).

---

## Site Inventory

| Metric | Count | Source of truth |
|--------|-------|-----------------|
| Astro routes | 44 (+ 404) | `src/pages/**/*.astro` |
| Articles | 26 | `src/data/writing-taxonomy.ts` |
| Portfolio entries | 9 | `src/data/portfolio-taxonomy.ts` |
| Built HTML pages | 61 | `dist/**/*.html` |
| **Indexable** | **42** | no `robots` noindex |
| Noindexed (mock-client demos) | 19 | see [Demo pages](#demo-pages) |
| Sitemap entries | 40 | `dist/sitemap-0.xml` |
| Image payload | ~20 MB | down from 53 MB (Jul 2026) |

The sitemap and the indexable set are kept in exact agreement — 0 leaks, 0 orphans. Verified on every build.

---

## Project Athena (the thing this site is about)

| | |
|---|---|
| Repo | [winstonkoh87/Athena-Public](https://github.com/winstonkoh87/Athena-Public) |
| Version | v9.9.9 |
| Licence | MIT |
| Language | Python |
| Stars / forks | 544 / 74 (fetched live at build time) |
| Protocols | 452 (418 active) |
| Sessions logged | 2,100+ |

Every one of these numbers is checkable against the public repo, which is the point. They're surfaced through `src/data/site-stats.ts` — a single module every page imports, so a stat can't drift between pages. Stars and forks are fetched from the GitHub API at build time with a last-known floor, so a transient API failure can't make the numbers appear to go backwards.

The `/athena/` page carries `SoftwareApplication` + `SoftwareSourceCode` JSON-LD so search engines and AI answer engines can parse what Athena actually is, rather than inferring it from prose.

---

## Tech Stack

| Component | Technology |
|-----------|------------|
| Framework | Astro 5.16 (static output, zero JS by default) |
| Styling | Tailwind CSS v4 + scoped Astro `<style>` |
| Interactivity | Vanilla JS (islands only where needed) |
| Fonts | `@fontsource` — Outfit, Inter, JetBrains Mono (self-hosted) |
| Build | `npm run build` → Astro SSG, then an IndexNow ping (`postbuild`) |
| CI/CD | GitHub Actions (`withastro/action@v2` → `actions/deploy-pages@v4`) |
| Hosting | GitHub Pages |
| DNS / CDN | Cloudflare (proxied — so Cloudflare also fronts SSL) |
| Analytics | GA4 (`G-VG4XS3R5NV`), beacon-based CTA tracking |

Node 18.20.8, ^20.3.0, or >=22 required.

```bash
npm install
npm run dev      # local dev server
npm run build    # static build into dist/ + IndexNow ping
npm run preview  # serve the built output
```

See [ARCHITECTURE.md](ARCHITECTURE.md) for how the pieces fit together and where to change what.

---

## Pages

| Page | What it is |
|------|------------|
| [Home](https://winstonkoh87.com/) | Hero, Athena Live widget, featured work, FAQ |
| [Athena](https://winstonkoh87.com/athena/) | The product page — what Athena is and how it runs |
| [Framework](https://winstonkoh87.com/framework/) | Decision architecture and governing laws behind Athena |
| [Portfolio](https://winstonkoh87.com/portfolio/) | Projects, demos, case studies (3 clusters) |
| [Writing](https://winstonkoh87.com/writing/) | 26 articles across 4 clusters |
| [Services](https://winstonkoh87.com/services/) | Fixed-price engagements |
| [About](https://winstonkoh87.com/about/) | Background, philosophy, current stack |
| [Contact](https://winstonkoh87.com/contact/) | WhatsApp / Telegram / socials / recruiter line |

Plus `/sitemap/`, `/privacy/`, `/terms/`, `/disclaimer/`.

---

## Athena Live Widget

The homepage carries an interactive chat widget that demonstrates the Athena experience. It is a **smart mock**, not a live model call — keyword-matched, pre-authored responses with a simulated typing delay.

```
  "What is Athena?"  ──▶  keyword match: "athena"
                          ──▶ pre-authored response
                          ──▶ 800ms typing delay
```

Knowledge base: `public/data/athena_kb.json` (single source — there is no `src/data` duplicate).

- ~20 common questions covered, with a graceful "how to reach me" fallback
- `localStorage` persistence so chat state survives a refresh; `/reset` clears it
- Context-aware follow-up suggestions after each response

Live API integration was skipped deliberately: rate limits, latency, and key management for a demo widget that answers twenty fixed questions. The architecture supports swapping the mock for a real `fetch` if usage ever justifies it.

---

## Demo Pages

`/portfolio/` links to mock-client demo sites. **All 19 of those pages carry `noindex, follow` and are excluded from the sitemap.**

| Demo | Type | Real entity named? |
|------|------|--------------------|
| MathPro Tuition | Education | No — fictional brand |
| Brew & Bean | F&B | No — fictional brand |
| StickerLah | E-commerce | No — fictional brand |
| ThatBioTutor | Education | Yes — carries a demo banner |
| Coach Derrick Lim | Digital marketing | Yes — carries a demo banner |
| Melvin Lim Portfolio | Personal brand | Yes — carries a demo banner |

They're noindexed because they're spec work, not engagements: indexing them would put fabricated business pages into search results and dilute the domain's topical entity. They stay reachable from `/portfolio/` — they just aren't submitted for indexing.

Demos naming a real person or business also carry a visible "Design demo" banner and emit **no `Person` schema, no real contact details, and no links to real social profiles**. See [`/portfolio/`](https://winstonkoh87.com/portfolio/) for the standing disclaimer.

> **Open item**: the Melvin demo still uses real photographs of an identifiable individual. Tracked as TD-059 — pending consent, replacement imagery, or retirement.

---

## Brand Kit

`brand/` holds the Lambda (Λ) identity — see [BRAND_GUIDELINES.md](brand/BRAND_GUIDELINES.md).

| Asset | Location |
|-------|----------|
| Logo (Lambda Λ) | `brand/logo/` — 3 SVG variants + preview |
| Guidelines | `brand/BRAND_GUIDELINES.md` |
| CSS tokens (reference) | `brand/variables.css` |
| Open Graph card | `brand/social/og-image-1200x630.{png,svg}` |
| Apple touch icon | `brand/logo/apple-touch-icon.svg` |
| Email signature | `brand/collateral/email-signature.html` |
| Invoice / deck templates | `brand/collateral/` |

- **Logomark**: Lambda (Λ) — from Athena's `[Λ+XX]` latency signature
- **Colours**: Void `#0A0A0A` + the Bionic Gradient `#3B82F6 → #EC4899`
- **Type**: Outfit (display), Inter (body), JetBrains Mono (code)
- **Personality**: Sovereign · Precise · Bionic · Premium · No-Bullshit

> `brand/variables.css` is a **reference document**, not a build input. The live tokens are in `src/styles/style.css`; the two are kept in sync by hand. If you change a colour, change both.

---

## Built With Athena

This site is co-created with [Project Athena](https://github.com/winstonkoh87/Athena-Public) — the AI system that is also its subject.

| Layer | Role |
|-------|------|
| Human (Winston) | Vision, strategy, taste, final call |
| Athena | Execution, research, code, audit |

It isn't a portfolio *about* AI-augmented work so much as an artefact of it. See [CHANGELOG.md](CHANGELOG.md) for what shipped when.

---

## Deliberate Non-Goals

A July 2026 SEO audit found the site technically clean but ranking for essentially nothing, because **no page targets a query a buyer types**. That is a chosen trade-off, not a defect:

- **No commercial keyword pages.** One `/services/` page covers all offerings. There is no per-keyword service-page architecture, because the site's job is displaying proof of work, not capturing demand.
- **Article titles stay in-voice.** `Spec: Unit Formation (The Clinkz Doctrine)` has no search volume, and that's fine — the essays are written for readers who already arrived, not for SERPs.
- **No lead-gen scaffolding.** No gated content, no exit-intent capture, no nurture funnel.

If the site ever pivots to selling, that work is scoped in the private Athena tracker as TD-058. Until then, please don't file these as bugs.

---

## Deployment

Push to `main` → GitHub Actions builds and deploys to GitHub Pages. Nothing else is required.

```bash
git push origin main
# → withastro/action@v2 builds the Astro project
# → output in /dist
# → actions/deploy-pages@v4 publishes to GitHub Pages
# → served at winstonkoh87.com via Cloudflare DNS/CDN
```

`trailingSlash: 'always'` and `build.format: 'directory'` are both set — every route is served as `path/index.html`, which is what GitHub Pages expects for clean URLs.

> **Known issue**: Bing IndexNow submissions return `403 UserForbiddedToAccessSite` — the domain is not verified in Bing Webmaster Tools, so the `postbuild` ping reaches Bing and Yandex zero times. The key file itself is valid. Google is unaffected (different protocol; GSC verification is fine). Owner-side fix.

---

## Documentation

- [ARCHITECTURE.md](ARCHITECTURE.md) — how this repo is put together
- [CHANGELOG.md](CHANGELOG.md) — what changed, when
- [brand/BRAND_GUIDELINES.md](brand/BRAND_GUIDELINES.md) — identity system

Athena's own system docs live in the [Athena-Public repo](https://github.com/winstonkoh87/Athena-Public):

- [Architecture](https://github.com/winstonkoh87/Athena-Public/blob/main/docs/ARCHITECTURE.md)
- [Semantic Search](https://github.com/winstonkoh87/Athena-Public/blob/main/docs/SEMANTIC_SEARCH.md)
- [Getting Started](https://github.com/winstonkoh87/Athena-Public/blob/main/docs/GETTING_STARTED.md)

---

*Astro + [Project Athena](https://github.com/winstonkoh87/Athena-Public). 544 stars, 74 forks, MIT.*
