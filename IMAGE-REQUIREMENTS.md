# Destiny Laboratories — Image Requirements

Every image the site needs, and the exact place it will be used. Line numbers are current as of 2026-08-09 (design refresh). Add files to `assets/img/` and reference them as `assets/img/<file>`.

The design intentionally ships with **SVG/gradient placeholders** (zero borrowed assets). Replacing them with real photos is the remaining visual upgrade — everything below is currently a placeholder.

---

## A. Shared assets (used on every page — already present)

| Image | File | Used in | Details |
|---|---|---|---|
| Logo (header + footer) | `assets/img/destiny-logo.png` | Header and footer `<a class="brand">` on **all 38 pages** | `<img class="brand-logo" src="assets/img/destiny-logo.png" width="40" height="40">`. Already live; keep. |
| Favicon | inline SVG data-URI | `<link rel="icon">` in `<head>` of all 38 pages | Already live; keep. |

---

## B. Home page (`index.html`)

| # | Image | Exact location | Current state | Suggested spec |
|---|---|---|---|---|
| 1 | **Hero image** | `.hero-media-frame` — `index.html:155` | `role="img" aria-label="Facility or team photo placeholder"`; SVG photo icon + "Facility / team photo pending" | Hero visual for the right column of the full-bleed navy hero. ~420×525 (4:5), rounded panel, white photo frame over navy gradient. One floating stat badge (`8 Therapeutic Areas`) stays overlaid. |
| 2 | **Company / facility image** (Who We Are) | `.split-media` — `index.html:307` | `aria-label="Placeholder for company image"`; SVG photo icon | Real company/facility or product photography. ~640×480 (4:3), rounded panel. |
| 3 | **Quality image** (Quality & Compliance section) | `.split-media` — `index.html:541` | `aria-label="Placeholder for quality image"`; SVG photo icon | Lab/manufacturing/QC imagery. ~640×480 (4:3). |
| 4 | **Testimonial avatars ×3** | `.testimonial-avatar` — `index.html:671` (P), `:685` (D), `:699` (F) | Letter-initial circles (`P` / `D` / `F`) | Client profile photos or monogram avatars. 48×48 circular crop. Optional — initials are acceptable. |
| 5 | **Product pack shots ×21** (Latest Products carousel) | `.carousel-slide` in `#products` — `index.html:744–912` | Text-only cards (name + category + Details/Enquire links) | Optional: a photo per product card. Cards are horizontal scroll-snap slides; ~360×260 pack shot. Add only if product pack photos exist. |

---

## C. Core pages

| # | Page | Image | Exact location | Current state | Suggested spec |
|---|---|---|---|---|---|
| 6 | `about.html` | **Company image** | `.split-media` — `about.html:98` | `aria-label="Placeholder for company image"` | Company/facility photo. ~640×480 (4:3). |
| 7 | `about.html` | **Manufacturing image** | `.split-media` — `about.html:198` | `aria-label="Placeholder for manufacturing image"`; copy next to it is `[TO CONFIRM]` | Manufacturing/facility photo. ~640×480 (4:3). Wait until manufacturing model is confirmed. |
| 8 | `quality.html` | **Certification badges** | `.cert-card` ×3 — `quality.html:82–93` | Text placeholders `[Certification name]` / `[Issuing body & number — pending confirmation]` | Logo/badge per held certification (ISO, WHO-GMP, FSSAI…). Only after certs confirmed. |
| 9 | `contact.html` | **Map** | `.split-media` — `contact.html:115` | `aria-label="Map placeholder — address shown below"`; SVG map icon + caption | Google Maps embed (iframe) or static map image of Central Hope Town, Vikas Nagar, Dehradun. |
| 10 | `distribution.html` | none | — | Section uses icon-boxes (SVG), no photo slot | Not needed. |

---

## D. Product pages (21 files)

| # | Image | Exact location | Current state | Suggested spec |
|---|---|---|---|---|
| 11 | **Product pack shots** (optional, per product) | `.product-fact-panel` — e.g. `product-adwistone.html:75` | No image slot yet — panel is text (facts + Request buttons) | If pack photos exist, add a photo at the top of the fact panel. Would require a small markup change on all 21 pages. |

Product pages intentionally show **no image today**; everything is text/CTAs. Adding pack shots is a content decision (needs real product photos).

---

## E. SEO / social (recommended additions)

| # | Image | Exact location | Current state | Suggested spec |
|---|---|---|---|---|
| 12 | **OG image (social share)** | `<meta property="og:image">` in `<head>` of all 38 pages | **Missing** — no `og:image` anywhere | 1200×630, brand-blue, logo + tagline. Add `<link>` + `<meta>` to the shared head block. |
| 13 | **Favicon (static)** (optional) | `<link rel="icon">` | Inline SVG data-URI | Optional: replace with `assets/img/favicon.png` for wider browser support. |

---

## Summary — what to actually source

| Priority | Image | Count |
|---|---|---|
| High | Hero product image | 1 |
| High | Company/facility photo (Who We Are) | 1 |
| High | Quality/QC photo | 1 |
| Medium | OG share image | 1 |
| Low | Testimonial avatars | 3 |
| Low | Map embed (contact) | 1 |
| Waiting on client | Manufacturing photo (about) | 1 |
| Waiting on client | Certification badges | 3 |
| Decision | Product pack shots | up to 21 |

**Install note:** for each image, drop the file into `assets/img/`, then replace the placeholder `<div class="split-media" role="img" ...>` / SVG with `<img src="assets/img/<file>" alt="..." loading="lazy">`. The `split-media` CSS already sizes the panel; give the `<img>` `width:100%;height:100%;object-fit:cover` (already handled if you keep the `.split-media img` pattern).
