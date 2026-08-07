# Implementation Roadmap — Destiny Laboratories SEO

Prepared: 2026-08-07 · Deliverable 5 of 5
Guiding principle: **nothing unconfirmed ships as fact** (site already enforces `[To confirm]` gates). Roadmap stages every task on the client confirmations it needs.

---

## Phase 1 — Foundation (Weeks 1–4)

**Objective:** Legal/technical base + conversion plumbing + franchise architecture. Everything after this phase compounds on it.

### Technical & infrastructure
- [ ] Confirm live domain + DNS; deploy static build on clean-URL-capable host (Netlify/Vercel) **or** configure server rewrites. HTTPS on.
- [ ] Generate `robots.txt` (allow main + AI crawlers; block utility paths) and `sitemap.xml` (split: products, franchise, resources, pages).
- [ ] Add canonical tags + 301 map for legacy `.html` URLs (see SITE-STRUCTURE §3).
- [ ] Verify GSC (both domain + URL-prefix props), Bing Webmaster Tools, IndexNow (PowerShell/Sitecore-native alternative to legacy submit).
- [ ] GA4 + Consent Mode; events: `whatsapp_click`, `form_submit`, `franchise_apply_view`. **Wire the mockup contact form to a real handler** (blocks conversion tracking today).
- [ ] Core Web Vitals baseline recorded (LCP/INP/CLS on real host).

### Core pages
- [ ] Restructure `distribution.html` → `/franchise/` hub (why-destiny, process, apply) with WhatsApp CTA.
- [ ] Expand home copy ≥500 words (confirmed facts only).
- [ ] Legal: privacy, terms, **medical disclaimer** (HCP-only framing + not-medical-advice).

### Schema (server-rendered JSON-LD)
- [ ] Home: `Organization` + `WebSite` (+ sameAs). About: `AboutPage`. Contact: `ContactPage`. Interiors: `BreadcrumbList`. Product pages: `Product` (no `offers` until MRP confirmed). 
- [ ] Validate with Schema.org validator / Rich Results Test on every template.

### Analytics & tracking
- [ ] GA4 property live; GSC wired; conversion goals defined (journeys A–D).

### Dependencies / risks
- Depends on: domain + host decision; client confirmation of contact handler; legal copy approval.
- **Exit criteria:** live HTTPS site, GSC/GA4 receiving data, schema valid, all legacy URLs 301'd, contact/WhatsApp conversions tracked.

---

## Phase 2 — Expansion (Weeks 5–12)

**Objective:** Win the franchise keyword cluster (primary revenue) and launch education.

### Content
- [ ] Franchise FAQ page (FAQPage schema) + **6 franchise blog posts** (CONTENT-CALENDAR topics 1–6).
- [ ] Launch `/resources/`; category hub **Gynaecology & Maternal Health** + guides (topics 7, 9).
- [ ] Build remaining category hubs as product facts get confirmed (8 total).
- [ ] Expand product pages toward 800 words (composition, indications, references) — **confirmed data only**.

### Technical / on-page
- [ ] Internal linking pass: every product → hub + 2 related products + guide; no orphans.
- [ ] Title/desc refresh: `index.html` (≤60 chars), `distribution.html` desc ≥120 chars, one keyword intent per page.

### Local / franchise SEO
- [ ] Google Business Profile (manufacturer/franchisor profile), LinkedIn company page, IndiaMART/Justdial/Pharmexcil listings — **consistent NAP**.
- [ ] State landing page: Uttarakhand franchise (primary market).

### Dependencies / risks
- Depends on: content writer capacity (2–4 posts/mo), client fact-confirmation flow, GBP verification.
- **Exit criteria:** franchise cluster ranking by month 12 starts moving; ≥20 top-10 keywords; blog live with 6 posts; 100% CWV pass maintained.

---

## Phase 3 — Scale (Weeks 13–24)

**Objective:** Broaden thematic authority, add GEO/AI visibility, build links.

### Content
- [ ] Women's-health + bone-joint cluster posts (topics 8, 10–19); cadence 2–4/mo.
- [ ] State pages: Uttar Pradesh, Himachal Pradesh (Phase-2 template reuse).
- [ ] 2–3 more pillar guides.

### GEO / AI-readiness
- [ ] `llms.txt` maintained; quotable facts + stats in guides; consistent entity data (brand, address, products) across site + listings.
- [ ] Monitor AI citations (ChatGPT, Perplexity, AI Overviews) quarterly; feed high-citation topics into calendar.

### Performance & links
- [ ] CWV re-verify; image format/lazy-load audit.
- [ ] Link building: pharma/B2B directories, contributor posts on trade blogs, digital PR on certifications/facility milestones (gated on confirmations).
- [ ] DataForSEO validation pass (competitors domain, domain intersection, bulk traffic) when MCP available.

### Dependencies / risks
- Depends on: link outreach effort, cert/facility confirmations for PR, GEO tooling access.
- **Exit criteria:** ≥80 top-10 keywords; first AI citations; DA trending 15–20; franchise enquiries ≥15/mo.

---

## Phase 4 — Authority (Months 7–12)

**Objective:** Compound authority — become the referenced women's-health PCD manufacturer.

### Content
- [ ] Complete all 6 pillar guides; publish original data/thought leadership (topics 34–36 + client data releases).
- [ ] Medical-reviewer bylines live on health content; certifications page live.
- [ ] Blog → 36 posts; all 8 category hubs; ~100 quality-gated pages indexed.

### Authority / schema
- [ ] Advanced schema: `Certification` on products (when certs confirmed), `FAQPage` refresh, `Article`/`BlogPosting` with author + reviewer `Person`.
- [ ] PR & media mentions wave (pharma trade press, women's-health publications); backlink QA (disavow farm links).

### Continuous optimization
- [ ] Quarterly competitor re-analysis (COMPETITOR-ANALYSIS §8); monthly GSC content-gap mining; CTR/label improvements from GSC query data.

### Dependencies / risks
- Depends on: sustained in-house content capacity, PR/outreach effort, certification confirmations.
- **Exit criteria (12-month targets):** 6,000 organic sessions/mo; 250 top-10 keywords; DA 25–30; 40 franchise/distribution enquiries/mo; AI-citation presence; zero manual actions.

---

## Resource requirements

| Role | Effort | Source |
|---|---|---|
| Content writer (pharma-savvy) | 2–4 posts/mo + page copy | In-house / freelance |
| Fact confirmations | Rolling | Client (owner) |
| Medical reviewer | Per post (health topics) | External (Phase 2+, or client-appointed) |
| Technical (schema, redirects, sitemaps) | ~2 days/mo | In-house or one-off contractor |
| Link building / PR | 4–8 hrs/wk Phase 3–4 | In-house or agency |
| SEO monitoring | 1–2 hrs/wk | In-house |

## Key dependencies
1. **Live domain + host** (blocks Phase 1 exit).
2. **Contact form wiring** (blocks conversion tracking).
3. **Fact confirmations** (block product/franchise content depth).
4. **Certifications** (block E-E-A-T and PR phases).
5. **Medical reviewer** (blocks YMYL content scale in Phase 3–4).

## Risk mitigation
| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Confirmation delays stall content | High | Med | Ship non-clinical content first (franchise process, logistics, company story); keep `[To confirm]` gates strict |
| YMYL penalty from thin health content | Low | High | Medical-reviewer model; HCP framing; cited references; disclaimers from Phase 1 |
| Franchise keyword spam association | Med | Med | Differentiate by compliance/trust; avoid exact-match anchor stuffing; earn editorial links |
| Static-site sitemap drift | Med | Low | Generate sitemap/robots deterministically on every deploy |
| Legacy `.html` redirect errors | Low | Med | 301 map tested before DNS switchover |
| AI crawlers blocked by robots misconfig | Low | Med | Explicit allow rules for GPTBot/PerplexityBot/ClaudeBot; test after deploy |
