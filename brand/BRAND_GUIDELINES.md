# Winston Koh — Brand Guidelines

> **Version**: 2.2 (Jul 2026 — asset + convention correction)  
> **Created**: 2026-01-29  
> **Updated**: 2026-07-26  
> **Author**: Athena (AI-Generated, Human-Approved)

> **Scope note**: this document and `variables.css` are a **reference kit for humans**.
> Nothing in `brand/` is imported by the build. The live design tokens are in
> `src/styles/style.css` — changing a colour means editing both files.

---

## Brand Origin

### The Story

Winston Koh is a Singaporean AI Systems Architect who built **Project Athena**—a sovereign strategic intelligence system—as his exo-cortex. The Lambda (Λ) logomark emerged from Athena's signature response format: `[Λ+XX]`, indicating processing depth.

### The Name

**Athena** — Greek goddess of wisdom, strategy, and skilled warfare. The brand channels this archetype: strategic, precise, and battle-tested.

### The Philosophy

> "Stop hiring tasks. Start building assets."

Every engagement creates permanent value—code, content, or systems that compound over time. The brand rejects hourly billing in favor of outcome-based pricing.

---

## Brand Essence

### Identity Statement

> **"I build systems that run themselves."**

Winston Koh is a **Sovereign Strategist** operating at the intersection of **Finance, Psychology, and Media**. The brand represents the **Bionic Unit**—human cognition enhanced by AI as an exo-cortex.

### Brand Personality (5 Adjectives)

| Trait | Meaning | Visual Expression |
|-------|---------|-------------------|
| **Sovereign** | Self-sufficient, not dependent on permission | Dark mode dominance, no corporate softness |
| **Precise** | No fluff, system-first thinking | Monospace accents, grid alignment |
| **Bionic** | Human + Machine synthesis | Gradient (organic → digital), tech typography |
| **Premium** | High-value positioning, not commoditized | Restraint, negative space, subtle animation |
| **No-Bullshit** | Direct, outcome-focused | Bold statements, minimal decoration |

### Anti-Goals (What We Avoid)

- ❌ Corporate blue (IBM, LinkedIn aesthetic)
- ❌ Minimalist white/light mode as primary
- ❌ Friendly/approachable startup vibes
- ❌ Busy gradients or excessive color
- ❌ Stock photography or generic illustrations
- ❌ "AI consultant" clichés (robot heads, neural network clipart)

---

## Logomark: The Lambda (Λ)

### Concept

The **Lambda (Λ)** symbol represents:

1. **Latency Indicator** — The Λ+XX signature used in every Athena response
2. **Greek Heritage** — Athena, the goddess of wisdom and strategy
3. **Mathematical Precision** — Lambda calculus, functional programming
4. **Wavelength** — Signal over noise (Physics: λ = wavelength)

### Usage

| Variant | Use Case |
|---------|----------|
| **Λ Glyph Only** | Favicon, app icon, watermark |
| **Λ + "WK"** | Compact logo for tight spaces |
| **"Winston Koh"** | Full wordmark for headers |

### Construction

```
   ▲
  / \
 /   \
/     \
-------
  Λ
```

- **Angle**: 60° apex (equilateral proportions)
- **Stroke**: 2px weight at 24px height
- **Clear Space**: Minimum 0.5× height on all sides

---

## Color System

### Primary Palette

| Name | HEX | RGB | Role |
|------|-----|-----|------|
| **Void** | `#0A0A0A` | 10, 10, 10 | Primary background |
| **Obsidian** | `#111111` | 17, 17, 17 | Secondary background, cards |
| **Smoke** | `#1A1A1A` | 26, 26, 26 | Elevated surfaces |
| **Ash** | `#A1A1AA` | 161, 161, 170 | Muted text, secondary |
| **Snow** | `#E8E8E8` | 232, 232, 232 | Primary text |
| **Pure** | `#FFFFFF` | 255, 255, 255 | High emphasis text |

### Accent Palette (The Bionic Gradient)

| Name | HEX | RGB | Role |
|------|-----|-----|------|
| **Electric** | `#3B82F6` | 59, 130, 246 | Primary accent, links, CTAs |
| **Neon** | `#60A5FA` | 96, 165, 250 | Hover states, highlights |
| **Orchid** | `#EC4899` | 236, 72, 153 | Secondary accent, emphasis |
| **Bloom** | `#F472B6` | 244, 114, 182 | Gradient endpoint |

### The Bionic Gradient

```css
background: linear-gradient(to right, #3B82F6, #EC4899);
```

**Usage**: Headlines, CTAs, brand moments. Never on body text.

### Border & Utility

| Name | HEX | Role |
|------|-----|------|
| **Edge** | `rgba(255, 255, 255, 0.08)` | Subtle borders |
| **Glow** | `rgba(59, 130, 246, 0.15)` | Focus rings |
| **Card** | `rgba(255, 255, 255, 0.02)` | Card backgrounds |

---

## Typography System

### Type Stack

| Role | Typeface | Weight | Fallback |
|------|----------|--------|----------|
| **Headlines** | Outfit | 600–700 | system-ui |
| **Body** | Inter | 400–500 | -apple-system |
| **Code/Data** | JetBrains Mono | 400 | monospace |

### Type Scale

| Level | Size | Weight | Use |
|-------|------|--------|-----|
| H1 | clamp(2.2rem, 5vw, 4rem) | 700 | Page titles |
| H2 | 1.5rem | 600 | Section headers |
| H3 | 1.25rem | 600 | Subsections |
| Body | 1rem (16px) | 400 | Paragraphs |
| Small | 0.9rem | 400 | Captions, meta |
| Mono | 0.85rem | 400 | Code, tags |

### Typography Rules

1. **Line height**: 1.7 for body, 1.2 for headlines
2. **Max width**: 700px for body text (65-75 characters)
3. **Letter spacing**: +3px for uppercase labels
4. **No italics** except for emphasis in quotes
5. **Gradient text**: Headlines only, never body

---

## Layout System

### Grid

- **Container**: 900px max-width
- **Padding**: 2rem horizontal
- **Card gap**: 1.5rem
- **Section spacing**: 4rem

### Border Radius Scale

| Size | Value | Use |
|------|-------|-----|
| None | 0 | Tables, code blocks |
| Small | 4px | Tags, pills |
| Medium | 8px | Inputs, small cards |
| Large | 12px | Cards, containers |
| Full | 9999px | Buttons, avatars |

### Elevation (Dark Mode)

| Level | Treatment |
|-------|-----------|
| Base | `#0A0A0A` |
| Raised | `#111111` + 1px border |
| Floating | `#111111` + border + shadow |
| Overlay | `rgba(0,0,0,0.8)` + blur |

---

## Iconography

### Style

- **Stroke icons** (not filled)
- **2px stroke weight**
- **24px default size**
- **Accent color** (`#3B82F6`) or muted (`#A1A1AA`)

### Recommended Sets

- [Lucide Icons](https://lucide.dev/) — Primary
- [Heroicons](https://heroicons.com/) — Fallback

---

## Motion & Animation

### Principles

1. **Subtle > Flashy**: Micro-animations only
2. **Purpose**: Motion should aid comprehension, not decorate
3. **Reduced motion**: Respect `prefers-reduced-motion`

### Standard Curves

| Type | Value | Use |
|------|-------|-----|
| Default | `ease` | General transitions |
| Enter | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Elements appearing |
| Exit | `cubic-bezier(0.4, 0.0, 1, 1)` | Elements leaving |
| Emphasis | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Hover states |

### Standard Durations

| Type | Duration |
|------|----------|
| Instant | 100ms |
| Fast | 200ms |
| Normal | 300ms |
| Slow | 500ms |

---

## Voice & Tone

### Writing Style

| Do | Don't |
|----|-------|
| "I build systems that run themselves" | "I help clients with their AI needs" |
| "Fixed pricing. Fast delivery." | "Competitive rates and timely service" |
| "Stop hiring tasks. Start building assets." | "Let me help you grow your business" |
| Direct statements | Questions in headlines |
| Active voice | Passive voice |
| Specific numbers | Vague claims |

### Headline Formulas

- **[Outcome] + [Mechanism]**: "Systems that run themselves"
- **[Pain Point] + [Resolution]**: "Stop hiring tasks. Start building assets."
- **[What I Do] + [How]**: "Strategic AI. Business Systems."

---

## Application Examples

### Website Header

```
┌─────────────────────────────────────────────────┐
│  WK                    Portfolio  Services  About │
└─────────────────────────────────────────────────┘
```

### Business Card

```
┌─────────────────────────────────────┐
│                                     │
│    Λ                                │
│                                     │
│    Winston Koh                      │
│    AI Systems Architect             │
│                                     │
│    winstonkoh87.com                 │
│    wa.me/6583581066                 │
│                                     │
└─────────────────────────────────────┘
```

### Email Signature

```
—
Winston Koh | AI Systems Architect
winstonkoh87.com | +65 8358 1066
```

---

## Social Media Specs

### Image Sizes

| Platform | Dimensions | File | Use |
| -------- | ---------- | ---- | --- |
| **OG Image** | 1200×630 | `social/og-image-1200x630.png` | Facebook, LinkedIn, X — the live card |
| **OG Image (source)** | vector | `social/og-image-1200x630.svg` | Edit here, re-render to PNG |
| **Twitter Card** | 1200×628 | Same as OG | Twitter/X large card |
| **LinkedIn Square** | 1024×1024 | `social/og-image.png` | Legacy square variant |
| **Twitter Banner** | 1500×500 | `social/twitter-banner.png` | Twitter/X profile |
| **Favicon** | SVG | `public/favicon.svg` | Browser tab |
| **Apple Touch** | 180×180 | `public/apple-touch-icon.png` | iOS bookmark |

> **1200×630 is not optional.** Until July 2026 the live OG image was 1024×1024
> and `social/og-image-1200x630.png` was a 640×640 file with a misleading name —
> so every share on every platform was cropped or shown as a small square. The
> card is now generated from `og-image-1200x630.svg`:
>
> ```bash
> rsvg-convert -w 1200 -h 630 brand/social/og-image-1200x630.svg \
>   -o brand/social/og-image-1200x630.png
> cp brand/social/og-image-1200x630.png public/assets/images/og-image.png
> ```
>
> After changing it, re-scrape the card in the LinkedIn Post Inspector and
> Facebook Sharing Debugger — both cache aggressively.

### Social Post Voice

- Same No-BS brand voice as website
- Always include a URL or CTA
- Prefer dark-background screenshots over generic thumbnails
- Use terminal/code screenshots for tech content

---

## Accessibility

### WCAG 2.1 AA Compliance

| Combination | Ratio | Status |
| ----------- | ----- | ------ |
| Snow (#E8E8E8) on Void (#0A0A0A) | 17.4:1 | ✅ AAA |
| Ash (#A1A1AA) on Void (#0A0A0A) | 7.2:1 | ✅ AAA |
| Electric (#3B82F6) on Void (#0A0A0A) | 4.6:1 | ✅ AA |
| Orchid (#EC4899) on Void (#0A0A0A) | 4.5:1 | ✅ AA |
| Pure (#FFFFFF) on Electric (#3B82F6) | 3.9:1 | ⚠️ AA Large only |

### Accessibility Rules

1. **Focus states**: All interactive elements must have visible focus rings (`--glow-color`)
2. **Skip links**: Always include "Skip to main content" link
3. **Alt text**: Descriptive, not decorative. "Terminal showing Athena output" not "screenshot"
4. **Reduced motion**: Respect `prefers-reduced-motion: reduce`
5. **Minimum touch target**: 44×44px for mobile interactive elements

---

## Photography & Imagery

### What TO Use

| Type | When | Example |
| ---- | ---- | ------- |
| **Terminal screenshots** | Technical/AI content | Dark terminal with Athena output |
| **Code as art** | Articles, hero backgrounds | Syntax-highlighted code snippets |
| **Dark product shots** | Portfolio, case studies | Screenshots on dark backgrounds |
| **Data visualizations** | Case studies, metrics | Charts with brand accent colors |
| **Singapore context** | Location-relevant content | Skyline, MBS, hawker culture (authentic, not stock) |

### What to AVOID

- ❌ Stock photography of any kind
- ❌ AI-generated "person" images
- ❌ Robot/neural network clipart
- ❌ Generic office/computer stock photos
- ❌ Light-mode screenshots

### Image Treatment

- Apply slight dark overlay for consistency: `rgba(0, 0, 0, 0.3)`
- Border radius: 12px (match card radius)
- Always optimize: WebP format, compressed

---

## SEO & Meta Voice

### Meta Description Formula

```
[Role/Expertise]. [Value Proposition]. [Freshness Tag].
```

**Example**:

```
AI Systems Architect. I build autonomous bionic workflows that scale your output 10x. [Feb 2026 Portfolio].
```

### Freshness Tag Convention — RETIRED (Jul 2026)

**Do not put a `[Mon YYYY]` tag in the homepage `<title>`.** The convention backfired:
Google cached `Winston Koh | AI Systems Architect [May 2026 Portfolio]` and was still
serving that title in July, so the tag intended to signal freshness was actively
advertising a stale page. Titles are cached far longer than they are re-crawled.

Signal freshness where crawlers actually read it:

- `dateModified` in the JSON-LD `@graph` (already emitted site-wide)
- `article:modified_time` meta (already emitted)
- The footer's build-stamped date

### Alt Text Voice

- Descriptive, functional, brand-aligned
- ✅ "Terminal screenshot showing Athena AI processing a diagnostic query"
- ❌ "image1.png" or "screenshot"

### URL Slug Convention

- Lowercase, hyphenated: `/articles/anti-slop-protocol/`
- No dates in URLs (dates belong in schema, not URLs)
- **Trailing slashes are required** — `astro.config.mjs` sets `trailingSlash: 'always'`
  with `build.format: 'directory'`, so every route is served as `path/index.html`.
  Internal links must include the trailing slash or they take a redirect hop.

---

## Responsive Breakpoints

| Name | Width | Target |
| ---- | ----- | ------ |
| **Mobile** | ≤480px | Small phones |
| **Tablet** | ≤768px | Tablets, large phones |
| **Desktop** | ≤1024px | Laptops, small monitors |
| **Wide** | ≤1280px | Large monitors |

### Media Query Convention

```css
/* Mobile-first: start with mobile styles, then override */
@media (min-width: 481px)  { /* Tablet+ */ }
@media (min-width: 769px)  { /* Desktop+ */ }
@media (min-width: 1025px) { /* Wide+ */ }
```

---

## File Exports

| Asset | Format | Location |
| ----- | ------ | -------- |
| Logo (Lambda) | SVG, PNG | `/brand/logo/` |
| Color Palette | CSS Variables | `/brand/variables.css` |
| Typography | CSS | `/brand/variables.css` |
| Social Assets | PNG | `/brand/social/` |
| Email Signature | HTML | `/brand/collateral/email-signature.html` |
| Invoice Template | MD | `/brand/collateral/invoice-template.md` |
| Presentation | MD | `/brand/collateral/presentation-template.md` |
| This Document | MD | `/brand/BRAND_GUIDELINES.md` |

---

## CSS Variables Reference

```css
:root {
  /* Colors - Primary */
  --bg-color: #0a0a0a;
  --bg-secondary: #111111;
  --bg-elevated: #1a1a1a;
  --text-color: #e8e8e8;
  --text-muted: #a1a1aa;
  --text-pure: #ffffff;
  
  /* Colors - Accent */
  --accent-primary: #3b82f6;
  --accent-hover: #60a5fa;
  --accent-secondary: #ec4899;
  --accent-secondary-hover: #f472b6;
  
  /* Colors - Utility */
  --border-color: rgba(255, 255, 255, 0.08);
  --card-bg: rgba(255, 255, 255, 0.02);
  --glow: rgba(59, 130, 246, 0.15);
  
  /* Typography */
  --font-display: 'Outfit', system-ui, sans-serif;
  --font-body: 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  /* Spacing */
  --container-max: 900px;
  --padding-x: 2rem;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;
}
```

---

# brand #guidelines #identity #winston
