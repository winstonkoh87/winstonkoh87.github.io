# Digital Assets Inventory

> **Generated**: 2026-01-29
> **Updated**: 2026-07-26 (dimensions verified against the actual files)
> **Location**: `brand/`

> Every dimension below was read from the file, not from its name. The previous
> revision of this inventory listed `og-image-1200x630.png` as 1200×630 when the
> file was in fact 640×640.

---

## Logo Files

| File | Format | Size | Use |
| ---- | ------ | ---- | --- |
| `logo/lambda-gradient.svg` | SVG | 466B | Primary logo (web) |
| `logo/lambda-blue.svg` | SVG | 218B | Monochrome blue |
| `logo/lambda-white.svg` | SVG | 234B | White on dark |
| `logo/lambda-preview.png` | PNG | ~411KB | AI-generated preview |
| `logo/apple-touch-icon.svg` | SVG | — | Source for `public/apple-touch-icon.png` (180×180) |

The Lambda polygon is a single `<polygon points="50,10 85,90 70,90 50,45 30,90 15,90">`
on a 100×100 viewBox. Reuse that exact path when composing new assets — don't redraw it.

---

## Mockups

| File | Description |
| ---- | ----------- |
| `mockups/business-card.png` | Premium card mockup on marble |

---

## Social Media

| File | Dimensions | Use |
| ---- | ---------- | --- |
| `social/og-image-1200x630.svg` | vector | **Source of truth** — edit here |
| `social/og-image-1200x630.png` | 1200×630 | **Live Open Graph card** (rendered from the SVG) |
| `social/og-image.png` | 1024×1024 | Legacy square variant |
| `social/twitter-banner.png` | 1500×500 | Twitter/X profile banner |

The live card is also copied to `public/assets/images/og-image.png`, which is what
`Layout.astro` references. Re-render and re-copy after any edit:

```bash
rsvg-convert -w 1200 -h 630 brand/social/og-image-1200x630.svg \
  -o brand/social/og-image-1200x630.png
cp brand/social/og-image-1200x630.png public/assets/images/og-image.png
```

---

## Icons (shipped in `public/`)

| File | Dimensions | Use |
| ---- | ---------- | --- |
| `public/favicon.svg` | vector | Browser tab (modern) |
| `public/favicon.ico` | 16/32/48 multi-res | Legacy fallback — real ICO container |
| `public/apple-touch-icon.png` | 180×180 | iOS home-screen bookmark |

> `favicon.ico` was an SVG file with an `.ico` extension until July 2026 — browsers
> and crawlers requesting the legacy path got something they couldn't parse. It is
> now a genuine multi-resolution ICO. Regenerate with:
>
> ```bash
> for s in 16 32 48; do rsvg-convert -w $s -h $s brand/logo/apple-touch-icon.svg -o /tmp/fav-$s.png; done
> magick /tmp/fav-16.png /tmp/fav-32.png /tmp/fav-48.png public/favicon.ico
> ```

---

## Collateral

| File | Description |
| ---- | ----------- |
| `collateral/email-signature.html` | HTML email signature (Lambda + brand styling) |
| `collateral/invoice-template.md` | Invoice markdown template |
| `collateral/presentation-template.md` | Presentation framework template |

---

## Design System

| File | Description |
| ---- | ----------- |
| `BRAND_GUIDELINES.md` | Complete brand bible (v2.2) |
| `variables.css` | CSS design tokens (v1.1) — **reference only, not a build input** |

The live tokens are `src/styles/style.css`. The two files hold identical values but
are not linked; changing a colour means editing both.

---

## Usage Notes

### SVG Logos

- Use for web, favicons, and anywhere vector is needed
- Gradient definitions are already inline

### Social Assets

- Use `og-image-1200x630.png` for all web metadata (FB, LinkedIn, X cards)
- Use `twitter-banner.png` strictly for profile headers
- After replacing the card, re-scrape it in the LinkedIn Post Inspector and the
  Facebook Sharing Debugger — both cache the old image aggressively

### Email Signature

- Copy table content from `email-signature.html` to Gmail/Outlook
- Inline styles required (email clients strip external CSS)
- Domain: `winstonkoh87.com`
