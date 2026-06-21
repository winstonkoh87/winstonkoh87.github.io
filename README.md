# Building a Portfolio Website (Astro v5)

> **Last Updated**: 21 June 2026
> **Status**: Docs + Metrics Refresh — 1,900+ Sessions, 396+ Protocols, v9.9.4 ⚡

[![Live Site](https://img.shields.io/badge/Live-winstonkoh87.com-00C853?style=flat-square)](https://winstonkoh87.com/)
[![Built with Athena](https://img.shields.io/badge/Built_with-Athena-CC785C?style=flat-square)](https://github.com/winstonkoh87/Athena-Public)
[![Astro](https://img.shields.io/badge/Framework-Astro_5.0-BC52EE?logo=astro&logoColor=white&style=flat-square)](https://astro.build/)
[![GitHub Pages](https://img.shields.io/badge/Hosting-GitHub_Pages-222222?logo=githubpages&logoColor=white&style=flat-square)](https://pages.github.com/)
[![Cloudflare DNS](https://img.shields.io/badge/DNS_+_CDN-Cloudflare-F38020?logo=cloudflare&logoColor=white&style=flat-square)](https://www.cloudflare.com/)

A personal portfolio website built with **Astro**, focusing on performance, component reusability, and zero-JavaScript defaults.

This documents how I built (and evolved) a complete portfolio website with AI-augmented execution using [Project Athena](https://github.com/winstonkoh87/Athena-Public).

---

## 📊 Site Overview

| Metric | Count |
|--------|-------|
| **Pages** | 45 |
| **Articles** | 26 |
| **Live Demo Sites** | 6 |
| **AI Widget** | ✅ Athena Live |
| **Framework** | Astro 5.0 (Vite-powered) |
| **Brand Kit** | ✅ Lambda (Λ) Identity |
| **Athena Kernel** | v9.9.4 |
| **Sessions Logged** | 1,900+ |
| **Protocols** | 396+ |

---

## 🎨 Brand Kit

The site includes a complete **$10K-equivalent brand package**:

| Asset | Location |
|-------|----------|
| **Logo (Lambda Λ)** | `brand/logo/` — 4 variants (SVG + PNG) |
| **Brand Guidelines** | `brand/BRAND_GUIDELINES.md` |
| **CSS Variables** | `brand/variables.css` |
| **Email Signature** | `brand/collateral/email-signature.html` |
| **Presentation Template** | `brand/collateral/presentation-template.md` |
| **Invoice Template** | `brand/collateral/invoice-template.md` |
| **Business Card Mockup** | `brand/mockups/business-card.png` |
| **OG Image** | `public/assets/images/og-image.png` |

### Brand Identity

- **Logomark**: Lambda (Λ) — represents Athena, precision, the Λ+XX signature
- **Colors**: Void (#0A0A0A) + Bionic Gradient (#3B82F6 → #EC4899)
- **Typography**: Outfit (display) + Inter (body) + JetBrains Mono (code)
- **Personality**: Sovereign • Precise • Bionic • Premium • No-Bullshit

---

## ⚡ Featured: Athena Live Widget

The homepage includes an **interactive AI chat widget** that demonstrates the Athena experience.

### The Smart Mock Story

API integration with Gemini was too much hassle — rate limits, latency, key management. So we built a **Smart Mock system** instead: keyword-matched, pre-authored responses with simulated typing delay. Same UX, zero cost, instant responses.

```
               ┌──────────────────────────────────────┐
   User Query  │  "What is Athena?"                   │
               └──────────────┬───────────────────────┘
                              ▼
               ┌──────────────────────────────────────┐
               │  Keyword Match: "athena" detected    │
               │  → Return pre-authored response      │
               │  → 800ms simulated typing delay      │
               └──────────────────────────────────────┘
```

### What It Does

- **Smart Mock System** — Rule-based responses covering ~20 common questions
- **localStorage Persistence** — Chat state survives page refresh for seamless UX
- **Reset Command** — `/reset` command allows users to clear cache and restart the flow
- **Dynamic Suggestions** — Context-aware follow-up prompts after each response
- **Graceful Fallback** — Unknown queries get a helpful "how to reach me" response

> **Future**: If usage justifies it, we'll add live API. The architecture already supports it — just swap the mock for a real fetch.

Try it: [winstonkoh87.com](https://winstonkoh87.com/) → Click the chat icon

---

## 🛠 Tech Stack

| Component | Technology |
|-----------|------------|
| **Framework** | **Astro 5.0** |
| **Styling** | Tailwind CSS v4 + Scoped Astro `<style>` |
| **Interactivity** | Vanilla JavaScript (Islands Architecture) |
| **Build** | `npm run build` — Astro SSG + IndexNow ping (postbuild) |
| **CI/CD** | GitHub Actions (Astro Build + Deploy) |
| **Hosting** | GitHub Pages |
| **DNS / CDN** | Cloudflare (proxied) |

### Philosophy: Evolution to Astro

We started with pure HTML/CSS/JS to prove a point about simplicity. But as the site grew (blogs, components, layouts), we needed a **maintainable architecture** without sacrificing performance.

**Enter Astro.**

- **Zero JS by Default**: Ships pure HTML unless interactivity is explicitly requested.
- **Component Architecture**: Reusable `.astro` components for Headers, Footers, and Cards.
- **Content Collections**: Markdown/MDX support for the blog (coming soon).
- **Same Performance**: Still ~40KB initial load, but now with better developer experience.

We didn't sell out. We **leveled up**.

---

## 🤖 Built by a Bionic Unit

> **This entire site was co-created with [Project Athena](https://github.com/winstonkoh87/Athena-Public)** — my AI-Powered Digital Personal Assistant.

### The Workflow

| Layer | Role | Example |
|-------|------|---------|
| **Human (Winston)** | Vision, strategy, taste | "I need a portfolio that positions me as someone who builds reliable systems" |
| **AI (Athena)** | Execution, research, code | Astro migration, component extraction, SEO audit |

This isn't just a portfolio *about* AI-augmented work — it's a **living demonstration** of the workflow itself.

### What Athena Did (January–February 2026)

- **Migrated** entire site from Vanilla HTML to Astro v5
- **Refactored** repeated UI into reusable Components (`<Navigation/>`, `<Footer/>`)
- **Built** the Athena Live AI widget with Smart Mock response system
- **Implemented** localStorage caching for instant responses
- **Designed** dark mode aesthetic, glassmorphism cards, particle constellation
- **Audited** codebase for SEO, accessibility, broken links
- **Cleaned** 230+ lines of duplicate code (January 2026 Audit)
- **Optimized** GA4 event tracking with beacon-based outbound CTA tracking
- **Refreshed** homepage content — outcome-first project cards, testimonial attributions, 380+ protocols, 1,323 sessions, v9.2.4
- **Corrected** model references to Claude Opus 4.6 and Gemini 3.1 Pro
- **Added** CSS metric-glow animation and fulltime mode resume CTA

### What Athena Did (June 2026)

- **Swept** site-wide metric/version drift — synced every current-state surface to verified-live values (1,900+ sessions, 396+ protocols, v9.9.4, 509★ / 69 forks)
- **Surfaced** open-source traction (500+ GitHub stars) on the portfolio as a verifiable proof point
- **Bumped** model references to Claude Opus 4.8 (current stack)
- **Clarified** infra — hosting is GitHub Pages (not Cloudflare *Pages*); the domain runs on Cloudflare DNS/CDN
- **Consolidated** the chatbot KB to a single source (`public/data/athena_kb.json`); removed the unused `src/data` duplicate
- **Audited** every project link, brand asset, and article entry for accuracy

### The Operating Model

```
┌─────────────────────────────────────────────────────────────┐
│  Human Intent (Top 1% nuance)   +   AI Scale (99% execution) │
│                        =                                      │
│                  1000% Leverage                               │
└─────────────────────────────────────────────────────────────┘
```

> *"Athena is a digital extension of me. It executes in my voice, with my principles."*

---

## 📄 Pages

| Page | Description |
|------|-------------|
| [Home](https://winstonkoh87.com/) | Hero + Athena Live widget + Featured projects |
| [About](https://winstonkoh87.com/about/) | Identity, philosophy, Bionic Operating Model |
| [Writing](https://winstonkoh87.com/writing/) | Blog with 26 published articles |
| [Portfolio](https://winstonkoh87.com/portfolio/) | 6 live demo sites |
| [Athena](https://winstonkoh87.com/athena/) | Product page: What Athena is and how it works |
| [Services](https://winstonkoh87.com/services/) | Fixed pricing. Fast delivery. Systems that work. |
| [Contact](https://winstonkoh87.com/contact/) | WhatsApp CTA + social links |

---

## ✍️ Articles (26 Published)

| Cluster | Articles |
|---------|----------|
| **Sovereign Systems** | Athena 5 Pillars, Trilateral Feedback Loop, AI Bionic Layer, Iterative Layer, AI Second Brain, Athena Public Launch |
| **Strategic Engineering** | The Price of Ignoring Advice, Anti-Slop Protocol, Soulful Stoic Protocol, Net Life Hour Protocol, First Principles Design |
| **Economics of Leverage** | Why the $200 Coder Broke Your App, The Pricing Trap, Vibe Coding Trap, 2-Day Efficiency Trap |
| **Case Files** | Alteryx 24 Hours, Gemini Gem Agent, AI Marketing Workflow, Case Study P6 Math Tuition, SME AI Marketing Guide |
| **Tactical Guides** | Debugging with AI, Giving AI Jobs, Pair Programming with AI, The Ballast Friend, Guardian Protocol, Clinkz Doctrine |

---

## 🎨 Live Demo Sites

| Project | Type | Link |
|---------|------|------|
| **P6 Math Tuition** | Education | [View Site](https://winstonkoh87.com/projects/p6-math-tuition/) |
| **Brew & Bean** | F&B | [View Site](https://winstonkoh87.com/projects/brew/) |
| **Sticker Shop** | E-commerce | [View Site](https://winstonkoh87.com/projects/sticker-shop/) |
| **That Bio Tutor** | Education | [View Site](https://winstonkoh87.com/projects/thatbiotutor/) |
| **Melvin Lim Portfolio** | Personal | [View Site](https://winstonkoh87.com/projects/melvin/) |
| **Coach Derrick Lim** | Digital Marketing | [View Case Study](https://winstonkoh87.com/articles/ai-marketing-workflow/) |

---

## ✨ Features

- 🎆 Interactive particle constellation background
- 💬 Athena Live AI chat widget
- 📱 Mobile responsive
- 🌙 Dark mode aesthetic
- ⚡ Fast load (~40KB total) — Powered by Astro Island Architecture
- 🔍 JSON-LD structured data (SEO)
- ♿ Accessibility: skip-links, focus-visible states
- 💾 localStorage caching for AI responses
- 📊 GitHub Actions: CI/CD Build & Deploy

---

## 🚀 Deployment

Built and deployed to **GitHub Pages** via GitHub Actions. The domain (`winstonkoh87.com`) runs on **Cloudflare DNS** — proxied, so Cloudflare also fronts the site as CDN/SSL.

```bash
git push origin main
# → GitHub Actions builds the Astro project (withastro/action@v2)
# → Output generated in /dist
# → Deployed to GitHub Pages (actions/deploy-pages@v4)
# → Served at winstonkoh87.com via Cloudflare DNS/CDN
```

---

## 📚 Documentation

System architectures and strategic frameworks are hosted on the **[Athena-Public Repo](https://github.com/winstonkoh87/Athena-Public)**:

- [Architecture](https://github.com/winstonkoh87/Athena-Public/blob/main/docs/ARCHITECTURE.md) — System design
- [Trilateral Feedback](https://github.com/winstonkoh87/Athena-Public/blob/main/docs/TRILATERAL_FEEDBACK.md) — Multi-AI validation
- [Getting Started](https://github.com/winstonkoh87/Athena-Public/blob/main/docs/GETTING_STARTED.md) — Build your own

---

*Built with Astro + [Project Athena](https://github.com/winstonkoh87/Athena-Public). 1,900+ sessions. 396+ protocols. Ships fast.*

