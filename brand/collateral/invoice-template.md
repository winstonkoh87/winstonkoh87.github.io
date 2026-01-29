# Invoice Template Specification

> **Purpose**: Brand-consistent invoice template for client billing.

---

## Layout

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Λ  INVOICE                                                 │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  FROM:                              INVOICE #: INV-2026-001 │
│  Winston Koh                        DATE: 29 Jan 2026       │
│  AI Systems Architect               DUE: 12 Feb 2026        │
│  Singapore                                                  │
│  winstonkoh87.github.io                                     │
│                                                             │
│  TO:                                                        │
│  [Client Name]                                              │
│  [Client Company]                                           │
│  [Client Address]                                           │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  DESCRIPTION                              QTY    AMOUNT     │
│  ─────────────────────────────────────────────────────────  │
│  [Service Line Item 1]                      1    $X,XXX.00  │
│  [Service Line Item 2]                      1    $X,XXX.00  │
│  [Service Line Item 3]                      1    $X,XXX.00  │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│                                     SUBTOTAL    $X,XXX.00   │
│                                     GST (9%)      $XXX.XX   │
│                                     ─────────────────────   │
│                                     TOTAL       $X,XXX.XX   │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  PAYMENT DETAILS:                                           │
│  Bank: [Bank Name]                                          │
│  Account: [Account Number]                                  │
│  PayNow UEN: [UEN if applicable]                            │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  Thank you for your business.                               │
│                                                             │
│  winstonkoh87.github.io | +65 8358 1066                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Styling

### Header

- **Logo**: Lambda (Λ) — 24px, gradient
- **"INVOICE"**: Outfit Bold, 24px, Snow (#E8E8E8)
- **Background**: Void (#0A0A0A) or White (for print)

### Body

- **Section Titles**: Inter SemiBold, 12px, uppercase, Electric Blue (#3B82F6)
- **Body Text**: Inter Regular, 14px, Snow (dark mode) or #333 (light mode)
- **Amounts**: JetBrains Mono, 14px, right-aligned

### Table

- **Header Row**: Background Obsidian (#111111), text Ash (#A1A1AA)
- **Data Rows**: Alternating transparent / rgba(255,255,255,0.02)
- **Dividers**: 1px, Edge color (rgba(255,255,255,0.08))

### Footer

- **Tagline**: Inter Italic, 12px, Ash
- **Contact**: Inter Regular, 12px, Ash

---

## Color Modes

| Element | Dark Mode | Light Mode (Print) |
|---------|-----------|-------------------|
| Background | #0A0A0A | #FFFFFF |
| Primary Text | #E8E8E8 | #1A1A1A |
| Muted Text | #A1A1AA | #666666 |
| Accent | #3B82F6 | #3B82F6 |
| Dividers | rgba(255,255,255,0.08) | #E5E5E5 |

---

## Terms & Conditions (Standard Footer)

```
Payment due within 14 days of invoice date.
Late payments may incur a 1.5% monthly interest charge.
Please reference invoice number when making payment.
```

---

## File Formats

- **PDF**: Primary delivery format
- **Google Docs**: Editable template
- **Notion**: Database-linked template

---

# invoice #template #collateral
