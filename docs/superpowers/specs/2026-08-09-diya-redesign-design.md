# Diya-Style Full Redesign — Design

Date: 2026-08-09 · Project: Destiny Laboratories (static site, `D:\client project\batch 1\destiny lab`)

## Purpose
Redesign the entire Destiny Laboratories static site (all 38 HTML pages) to mirror the layout, structure and energy of the client's new reference site — **Diya Healthcare** (WordPress/Elementor pharma-marketing homepage in `website refer/`) — while keeping Destiny's own brand palette, verified copy, filenames, and SEO schema so nothing is copyrighted and no links break.

## Decisions (confirmed with client)
- **Scope:** whole site — all 38 pages adopt the new design language (header, footer, hero, section patterns, floating widgets).
- **Color scheme:** keep the current blue palette (`#123054` navy-900, `#1E5AA8` navy-600, terracotta `#B45A32`, sage `#78A66A`, teal `#1AA6A6`, ink `#2B2B2B`, paper `#FAF8F5`). Re-role it the way Diya uses its orange/yellow/lavender.
- **Typography:** proposed in this doc (headings Roboto Slab, body Inter) — pending visual review by client at handoff.
- **Imagery:** placeholders / SVG / gradients only. Zero Diya photos or copied assets.
- **Floating widgets:** mirror Diya — right-edge floating menu (WhatsApp / Call / Download product list) + sticky bottom bar on mobile (Call / WhatsApp / Get a Quote popup). Reuses existing `whatsapp.js` wa.me logic.
- **Old reference files** (`Home - Destiny laboratories.html`, `_files/`, `destinylaboratories.com.zip`, `(1).zip`): keep for now; delete later after redesign is confirmed.
- **Approach:** rebuild the CSS design system + restructure page HTML to the new layout (not a fresh wholesale copy of Diya's markup). Content and filenames preserved.

## Design tokens

### Palette (existing brand, re-rolled)
| Role | Token | Value | Diya analogue |
|---|---|---|---|
| Primary (buttons, links, icons, active) | `--navy-600` | `#1E5AA8` | orange `#E27914` |
| Dark (headings, hero bg, footer bg) | `--navy-900` | `#123054` | near-black `#000` |
| Deep alt (hero overlay) | `--navy-800` | `#164177` | — |
| Accent (badges, counters, highlights) | terracotta | `#B45A32` | yellow `#EBC515` |
| Secondary accent | teal | `#1AA6A6` | — |
| Soft section background | `--slate-50` | `#F2F4F7` | lavender `#F0ECF7` |
| Hover tint (accordion/cards) | `--slate-100` | `#EDF0F4` | `#FFEBC3` |
| Cards / text | white / `--ink` / slate scale | existing | white / black |
| Focus ring | `--focus-ring` | `#1E5AA8` | — |

### Typography
- Google Fonts `<link>` (preconnect + css2): **Roboto Slab** (600, 700) for headings; **Inter** (400, 500, 600, 700) for body/UI.
- Font stacks:
  - `--font-display: "Roboto Slab", "Segoe UI", Georgia, serif`
  - `--font-body: "Inter", "Segoe UI", system-ui, sans-serif`
- Type scale (Clamp-based): hero H1 ~42–64px, section H2 ~30–44px, card H3 ~18–22px, body 16px, small 13–14px. Diya-style energy: tighter letter-spacing on eyebrows, uppercase kickers.

## Layout map (Diya → Destiny)

### Header (all pages)
Logo left (existing `assets/img/destiny-logo.png` + brand text), centered nav (Home / About / Portfolio / Quality / Partnerships / Contact), right-side "Get in Touch" button (`contact.html`), search icon omitted (static site). Mobile: hamburger → off-canvas menu.

### Hero (home)
Two-column split: left — eyebrow chip + H1 + supporting paragraph + 2 buttons ("Explore Portfolio" primary, "+91 93863 54555" ghost/tel). Right — soft blue gradient "stage" with floating badge chips (WHO–GMP, Trusted Partner Support) and an SVG product motif (no photos). Below: 3 trust chips (rating, standards, support) mirroring Diya's floating badges.

### Marquee band (home)
CSS-animated repeating strip: "Pharma & Nutraceutical Formulations · Dehradun · PCD Franchise · " — full-width navy band.

### Who We Are (home)
Split layout, existing about copy, image side = gradient/SVG panel.

### Therapeutic Range grid (home)
8 tiles (1:1 with Diya's dosage forms): the 8 existing category hubs —
Anti-Infective, Bone & Joint Health, Gastroenterology, Gynaecology & Maternal Health, Men's Health, Neurology & Cognition, Nutrition & Wellness, Steroidal & Anti-Inflammatory — each with an SVG icon, linking to `products-*.html`.

### Partnership CTA band (home)
Full-width blue gradient band "Let's Build Strong Healthcare Partnerships Together" + button to `distribution.html`.

### Vision, Mission & Values (home)
Three-card row using existing copy from `about.html`.

### Our Services (home)
Two/three cards from `distribution.html` copy: PCD Franchise, Distribution, (Quality/Third-party) with icon boxes + short descriptions.

### Quality & Compliance (home)
Split section from `quality.html` copy + trust checklist.

### Why Choose Us (home)
4 animated counters (IntersectionObserver): 21+ formulations, 8 therapeutic areas, WHO–GMP certified, years/quality metric (copy from existing pages).

### Testimonials (home)
Simple vanilla-JS carousel; placeholder quotes marked `[TO CONFIRM]`.

### Latest Products (home)
Horizontal scroll carousel (21 products) — card: product name, category chip, "Details" link to product page, "Enquire" → `contact.html`/WhatsApp.

### FAQ (home)
Native `<details>` accordion, 6–8 PCD/distribution FAQs from existing copy. FAQPage schema preserved.

### Footer (all pages)
4 columns: About + logo + blurb; Quick Links (core pages); Therapeutic Areas (8 category links); Get in Touch (phone +91 93863 54555, email, address from schema). Bottom bar: copyright + Terms & Privacy.

### Floating widgets (all pages)
- Right-edge floating menu (fixed, vertically centered): WhatsApp (green `#25D366`) → `wa.me`; Call (blue) → `tel:`; "Download Product List" (accent) → links to `portfolio.html` (no PDF on site yet).
- Mobile sticky bottom bar: Call / WhatsApp / Get a Quote (opens inline popup form that submits to WhatsApp via existing logic).
- Existing green `wa-bubble` removed/replaced by the floating menu (single widget system).

### Inner pages
- **Core pages** (about, portfolio, quality, distribution, contact): new page hero (breadcrumb + H1), section patterns from the design system.
- **Category hubs** (8): page hero + Diya-style tile grid of their products.
- **Product pages** (21): page hero + product spec card (composition, category, indication), description, request-section retained, CTA.
- **Legal pages** (terms, privacy, disclaimer): simple prose layout with the new header/footer.

## Components (CSS class contract)
`site-header`, `main-nav`, `.nav-toggle`, `.hero`/`.page-hero`, `.marquee`, `.section`, `.eyebrow`, `.badge-chip`, `.card`, `.tile-grid`, `.icon-box`, `.counters`, `.carousel`, `.faq`, `.site-footer`, `.float-menu`, `.mobile-bar`, `.popup`, `.btn`, `.btn-primary`, `.btn-ghost`, `.btn-light`.

## JavaScript (vanilla, matches existing IIFE style)
- `main.js` — extend: mobile nav, sticky header (scroll), scroll-reveal (existing), marquee is CSS-only, counters (IntersectionObserver), testimonial carousel, product carousel (scroll-snap + buttons), FAQ via native details, filter (existing portfolio logic kept).
- `whatsapp.js` — extend: keep bubble logic's wa.me builder; render floating menu + mobile bar + popup; keep `[data-wa-form]` handler for popup and existing forms.

## Copyright safeguards
- All copy stays Destiny's own (already written/verified; `[TO CONFIRM]` markers kept).
- Zero Diya images/fonts/markup copied; placeholders + SVG only.
- Section titles reworded where they'd be near-identical to the reference.
- Layout follows the generic marketing-page pattern; no Diya CSS/HTML reused.

## Implementation order
1. `assets/css/styles.css` — full design system rewrite (keeps old classes where shared, e.g. `.form-block`, `.wa-*`).
2. `index.html` — rebuilt to the new layout (content preserved).
3. Header/footer snippet — applied across all pages (38).
4. Core pages → category hubs → product pages → legal pages.
5. `main.js` + `whatsapp.js` extended.
6. Verify: open key pages, check nav/links/forms, `sitemap.xml`/`robots.txt` unchanged (filenames preserved).

## Files
- `assets/css/styles.css` — rewrite (design system).
- `assets/js/main.js` — extend.
- `assets/js/whatsapp.js` — extend.
- All 38 `*.html` — header/footer/hero/section markup updated.
- New: none required (no new pages; placeholders inline).

## Verification
- All 38 pages include updated header/footer + script tags.
- Links/nav functional; filenames unchanged; SEO schema intact in `index.html`.
- Mobile: nav, sticky bottom bar, floating menu collapse correctly.
- No Diya assets referenced anywhere (`grep` for `diyahealthcare`/`diya` in site files returns only reference-folder files).
