# Destiny Laboratories — SEO Engagement Status & Handoff

Last updated: 2026-08-07 · Companion docs in `seo/` (SEO-STRATEGY, SITE-STRUCTURE, COMPETITOR-ANALYSIS, CONTENT-CALENDAR, IMPLEMENTATION-ROADMAP)

This document records everything done on the site so far, every change made, what is still left, and what we need from the client to continue.

---

## 1. Project at a glance

- **Site:** Static HTML/CSS/JS (no build tooling) at `D:\client project\destiny lab\`
- **Pages:** 38 real pages (6 core + 21 product + 8 category hub + 3 legal) — plus 1 ignored WordPress export `Home - Destiny laboratories.html`
- **Business:** Destiny Laboratories Private Limited — pharmaceutical & nutraceutical formulations, PCD franchise / distribution, Dehradun, Uttarakhand
- **Conversions:** Forms go to WhatsApp (no backend)
- **Guiding rule applied throughout:** nothing unconfirmed ships as fact → `[To confirm]` gates kept strict

---

## 2. Site inventory (current, verified)

**Core (6):** `index.html`, `about.html`, `portfolio.html`, `quality.html`, `distribution.html`, `contact.html`

**Products (21):** `product-adwistone.html`, `product-arufem.html`, `product-atharva.html`, `product-destigest.html`, `product-destipride.html`, `product-det-60k.html`, `product-detcal-ct.html`, `product-detcal-max.html`, `product-detcort.html`, `product-detflex.html`, `product-detzyme.html`, `product-ebate.html`, `product-fitogin.html`, `product-i-tinyzle.html`, `product-pod-cv.html`, `product-shreyacit-p.html`, `product-shreyacon.html`, `product-soryavit-2500.html`, `product-soryavit-lc.html`, `product-soryavit-pl.html`, `product-soryavit-xl.html`

**Category hubs (8):** `products-gynaecology-maternal-health.html`, `products-bone-joint-health.html`, `products-neurology-cognition.html`, `products-mens-health.html`, `products-gastroenterology.html`, `products-anti-infective.html`, `products-steroidal-anti-inflammatory.html`, `products-nutrition-wellness.html`

**Legal (3):** `disclaimer.html`, `privacy-policy.html`, `terms.html`

**SEO files:** `robots.txt`, `sitemap.xml` (38 URLs), `llms.txt`

---

## 3. What we did — all changes by area

### 3.1 Schema (JSON-LD) + canonicals
- **`seo-schema.ps1`** injected `Organization` + `WebSite` (home), `ContactPage` (contact), `BreadcrumbList` (all interiors incl. products/hubs/legal), `Product` on all 21 product pages.
  - No `offers`/price on products — **blocked until MRP confirmed**.
  - Manufacturer `Organization @id` reference wired across product pages.
- Canonical tags on all 38 pages → base `https://destinylaboratories.com/`.
- Index title fixed; product descriptions truncated to ≤160.
- Verified: every JSON-LD block parses; every page has a canonical (seo-full-verify: **38 pages, 0 issues**).

### 3.2 SEO files
- **`seo-files.ps1`** generated:
  - `robots.txt` — allows main + AI crawlers (GPTBot / PerplexityBot / ClaudeBot), blocks utility paths.
  - `sitemap.xml` — **38 URLs** (6 core + 3 legal + 21 product + 8 hub).
  - `llms.txt` — key pages for GEO/AI visibility.
- **Regenerate `sitemap.xml` (re-run `seo-files.ps1`) whenever a page is added.**

### 3.3 Category hub pages
- **`seo-hubs.ps1`** built all 8 hub pages from the product dataset (intro, description, product cards with composition/indications, position strings, pills).
- Hub data table (categories, intro/desc, per-product composition/position) lives inside the script — reuse it for edits.
- Each hub is a landing page for its therapeutic-area keyword cluster (franchise + product intent).
- `.filter-pill.hub-link` CSS rule added to `assets/css/styles.css`.

### 3.4 Internal linking
- **`seo-linking.ps1`** added:
  - Footer **"Therapeutic areas"** column → all 8 hubs on every page.
  - Product pages: **4-level breadcrumbs** (Home › Portfolio › [Category hub] › Product) with hub link.
  - **Related products** blocks on 19 product pages (skipped `detflex`, `detcort` — single-product categories).
  - Portfolio: **"View category"** buttons for all 8 categories.
- Zero orphan pages; every page reachable.

### 3.5 Legal pages
- **`seo-legal.ps1`** created `disclaimer.html`, `privacy-policy.html`, `terms.html` with `Organization` + `WebPage` + `BreadcrumbList` schema.
- Footer-legal links (`Disclaimer · Privacy Policy · Terms of Use`) added to all 38 pages.

### 3.6 Titles & descriptions
- Index title trimmed to **53 chars**: `Destiny Laboratories | PCD Pharma Franchise, Dehradun`
- **`seo-fix-descs.ps1`** rewrote 11 over-long descriptions → all pages now 137–160 chars.
- Home copy = **576 words** (target ≥500). Confirmed-facts only.

### 3.7 WhatsApp integration (conversion plumbing)
- **`assets/js/whatsapp.js`** — rewritten as a **generic handler** for any `[data-wa-form]`:
  - Collects fields: name, organisation, company, email, phone, quantity, interest, territory, message.
  - Product branch when `data-wa-product` present; contact branch otherwise.
  - Opens `wa.me/919386354555` with pre-filled text; shows a `.wa-success` note.
  - `node --check` passes.
- **`contact.html`** — form wired: `data-wa-form`, required name/phone, "Send on WhatsApp" button + success note. Fake "Not live" removed.
- **`distribution.html`** — form wired same way (partnership type + territory fields). Fake `[FAKE FORM]` note and "Not live" button removed.

### 3.8 File hygiene / gotchas learned
- All HTML normalized to **UTF-8 no BOM, LF line endings** (was CRLF on products).
- **PowerShell 5.1 gotcha:** BOM-less `.ps1` files are read as ANSI — non-ASCII literals (`—` `·` `©` `’`) corrupt parsing (byte 0x94 → `"`) or emit mojibake (`â€”`). All scripts are ASCII-only and emit entities (`&mdash;`, `&#183;`, `&copy;`, `&rsquo;`).
- All scripts live in `C:\Users\MOTILAL PRASAD\AppData\Local\Temp\opencode\` — **move them into the repo** (e.g. `seo/scripts/`) for reproducibility.

---

## 4. What's left — and what it needs

| # | Task | Blocked on / needs | Phase |
|---|---|---|---|
| 1 | **Live domain + DNS + HTTPS** | Client picks host (Netlify/Vercel recommended) or configures rewrites | 1 — exit criteria |
| 2 | **GSC + Bing Webmaster + IndexNow + GA4** | Live domain | 1 |
| 3 | **301 redirect map** for legacy `.html` URLs | Live host / clean-URL capability | 1 |
| 4 | **Core Web Vitals baseline** (LCP/INP/CLS) | Live host | 1 |
| 5 | **MRP / offers on Product schema** | Client confirms MRPs | 1–2 |
| 6 | **Franchise FAQ page** (FAQPage schema) + 6 franchise blog posts | Copy approval (content can start now) | 2 |
| 7 | **`/resources/` + pillar guides** | Client fact flow | 2–3 |
| 8 | **Product pages → 800 words** | Confirmed composition/indication data | 2 |
| 9 | **Google Business Profile, LinkedIn, IndiaMART/Justdial/Pharmexcil** (consistent NAP) | Client + verification | 2 |
| 10 | **Uttarakhand franchise state page** | Client confirmation | 2 |
| 11 | **Certifications** (GMP/WHO-GMP etc.) → E-E-A-T, `Certification` schema, PR | Client confirmation | 2–4 |
| 12 | **Medical reviewer bylines** on health content | Client-appointed reviewer | 3–4 |
| 13 | **Link building + PR** | Cert/facility confirmations | 3–4 |
| 14 | **DataForSEO validation pass** | MCP/API access | 3 |

**Other known gates:** commercial terms for franchise partners (territory exclusivity, MOQ, support) are `[To confirm]` on the site; regulatory certifications show `[To confirm]` on the home trust strip and Quality page — intentional.

---

## 5. What we need from the client

1. **Live domain + hosting decision** (single biggest blocker — everything in Phase 1 exit depends on it).
2. **Contact person / WhatsApp owner** confirmation that the WhatsApp number `+91 93863 54555` and email `destinylaboratories195@gmail.com` are correct for lead routing.
3. **Certifications** (GMP, WHO-GMP, ISO, etc.) and facility details.
4. **MRP / pricing** per product (for schema `offers` + product pages).
5. **Franchise commercial terms** (territory rights, MOQ, samples, marketing support).
6. **Company facts** for depth: founding year, capacity, infrastructure, team.
7. **Medical reviewer** for YMYL health content.
8. Approval to publish **GBP/directory listings** and to start **blog + FAQ content**.

---

## 6. Suggested immediate next steps

1. **No external blockers:** draft the **Franchise FAQ page** (FAQPage schema) — copy can be written now from confirmed facts.
2. Move the `.ps1` scripts into `seo/scripts/` so sitemap/schema regeneration is reproducible.
3. Re-run `seo-full-verify.ps1` after any page change (checks: JSON-LD parse, canonical, broken links, title ≤62, desc 70–160).
4. When domain is live: DNS/HTTPS → GSC/GA4 → 301 map → CWV baseline (unblocks Phase 1 exit).
