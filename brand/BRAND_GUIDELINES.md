# Winston Koh — Brand Guidelines

> **Version**: 1.0  
> **Created**: 2026-01-29  
> **Author**: Athena (AI-Generated, Human-Approved)

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
│    winstonkoh87.github.io           │
│    wa.me/6583581066                 │
│                                     │
└─────────────────────────────────────┘
```

### Email Signature

```
—
Winston Koh | AI Systems Architect
winstonkoh87.github.io | +65 8358 1066
```

---

## File Exports

| Asset | Format | Location |
|-------|--------|----------|
| Logo (Lambda) | SVG, PNG | `/brand/logo/` |
| Color Palette | CSS Variables | `/src/styles/variables.css` |
| Typography | CSS | `/src/styles/typography.css` |
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
