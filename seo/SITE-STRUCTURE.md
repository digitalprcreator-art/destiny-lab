# Site Structure & Architecture — Destiny Laboratories

Prepared: 2026-08-07 · Deliverable 3 of 5
**Status:** Current site is a flat 27-page static build. Target architecture below is the 12-month goal; Phase 1 introduces the folder scheme + clean URLs, and legacy `file.html` URLs are 301-redirected.

---

## 1. Content pillars

Nine pillars — eight therapeutic areas (product-driven) + one franchise pillar (revenue-driven). Every page belongs to exactly one pillar; the franchise pillar is top-priority for SEO.

1. **Franchise & Partnerships** (revenue)
2. **Gynaecology & Maternal Health** (6 products — brand leader)
3. **Bone & Joint Health** (3 products)
4. **Neurology & Cognition**
5. **Men's Health**
6. **Gastroenterology**
7. **Anti-Infective**
8. **Steroidal**
9. **Nutrition**

---

## 2. Target URL hierarchy

```
/                                            Home (Pillar 0 hub entry)
├── /franchise/                              FRANCHISE HUB  (was distribution.html)
│   ├── /franchise/why-destiny/              Why choose us (USP + portfolio + support)
│   ├── /franchise/faq/                      PCD franchise Q&A (FAQPage schema)
│   ├── /franchise/process/                  How to become a partner (steps)
│   └── /franchise/apply/                    Application + WhatsApp capture (was contact intent)
│       ├── /franchise/uttarakhand/          State landing: Uttarakhand (primary)
│       ├── /franchise/up/                   State: Uttar Pradesh (Phase 3)
│       └── /franchise/himachal-pradesh/     State: Himachal (Phase 3)
├── /products/                               PORTFOLIO HUB  (was portfolio.html)
│   ├── /products/gynaecology-maternal-health/   Category hub (Pillar 1)
│   ├── /products/bone-joint/                    Category hub (Pillar 2)
│   ├── /products/neurology/                     Category hub (Pillar 3)
│   ├── /products/mens-health/                   Category hub (Pillar 4)
│   ├── /products/gastro/                        Category hub (Pillar 5)
│   ├── /products/anti-infective/                Category hub (Pillar 6)
│   ├── /products/steroidal/                     Category hub (Pillar 7)
│   └── /products/nutrition/                     Category hub (Pillar 8)
│       ├── /products/<brand>/                   PRODUCT page (e.g. /products/adwistone-300-sr/)
│       └── … (21 product pages)
├── /about/                                 (existing about.html)
│   └── /about/team/                         Leadership bios (E-E-A-T, when confirmed)
├── /quality/                                (existing quality.html → certifications hub)
│   └── /quality/certifications/             GMP/WHO-GMP/DCGI (gated on confirmation)
├── /resources/                              BLOG / EDUCATION HUB (new)
│   ├── /resources/franchise-guides/         (Pillar 0 educational cluster)
│   ├── /resources/womens-health/            (Pillar 1 educational cluster)
│   ├── /resources/bone-joint/               (Pillar 2)
│   ├── /resources/neurology/                (Pillar 3)
│   ├── /resources/mens-health/              (Pillar 4)
│   ├── /resources/gastro/                   (Pillar 5)
│   ├── /resources/nutrition/                (Pillar 8)
│   └── /resources/faq/                      Site-wide FAQ (secondary to /franchise/faq/)
├── /contact/                                (existing contact.html)
├── /legal/
│   ├── /legal/privacy/
│   └── /legal/terms/                        + medical disclaimer page (YMYL compliance)
├── /llms.txt                                (AI-search entry point)
├── /robots.txt
└── /sitemap.xml
```

**URL rules:** lowercase, hyphenated, no extensions where the host supports clean URLs; every moved page gets a 301 from its legacy `.html` URL. If the chosen host does not support clean URLs, keep `.html` but adopt the folder hierarchy verbatim.

---

## 3. Current → target mapping (301 map)

| Legacy URL | Target URL |
|---|---|
| `/index.html` | `/` |
| `/portfolio.html` | `/products/` |
| `/product-adwistone.html` | `/products/adwistone-300-sr/` (×21 products) |
| `/distribution.html` | `/franchise/` |
| `/about.html` | `/about/` |
| `/quality.html` | `/quality/` |
| `/contact.html` | `/contact/` |

---

## 4. Internal linking strategy

**Pattern (hub-and-spoke):**
- **Home →** top 4 franchise links + top 4 product hubs + latest blog (pillar-0 bias).
- **Every product page →** its category hub, 2 related products in the same pillar, its composition's guide post, and the franchise/apply CTA + WhatsApp.
- **Every category hub →** all its products, its pillar guide, sibling hubs.
- **Every blog post →** 1 product (contextual), its pillar hub, 1 guide.
- **Franchise pages →** apply form, FAQ, phone/WhatsApp, quality page (trust).
- **Footer (all pages):** franchise, products, quality, about, contact + NAP.

**Density target:** every page receives ≥ 2 inbound internal links; every page emits ≥ 3 contextual outbound links. No orphan pages (the 21 product pages are currently linked only from `/portfolio.html`).

**Anchor-text discipline:** descriptive, varied anchors; brand anchor on home; avoid exact-match stuffing on franchise pages (YMYL/over-optimisation risk).

---

## 5. Sitemap structure (quality-gated)

`sitemap.xml` includes only pages that pass all gates:
- [x] No unconfirmed product facts presented as fact (`[To confirm]` items resolved or clearly staged)
- [x] ≥ minimum word count for its type (see CONTENT-CALENDAR.md)
- [x] Unique title + meta description (target lengths)
- [x] ≥ 1 canonical, 1 H1, valid internal links, no broken links
- [x] HTTPS + crawlable (no `noindex` leak, robots allowed)
- [x] Mobile-usable, CWV-passing

Split sitemaps (recommended): `sitemap-products.xml`, `sitemap-franchise.xml`, `sitemap-resources.xml`, `sitemap-pages.xml`, referenced from `sitemap.xml` + `/robots.txt` + Google Search Console.

---

## 6. Information architecture — user journeys

**Journey A — PCD franchise seeker (highest value):**
`Google "PCD pharma franchise Uttarakhand"` → `/franchise/` hub (value prop + portfolio + support) → `/franchise/process/` (trust-building steps) → `/franchise/faq/` (objections) → `/franchise/apply/` or WhatsApp bubble → enquiry → sales follow-up.
*Success: enquiry_start. Funnel pages must carry strong CTA + schema.*

**Journey B — HCP researching a formulation:**
`Google "Dydrogesterone 10 mg composition"` → product page (facts panel, indications, clinical reference) → related products in same pillar → product sheet/sample request → WhatsApp.
*Success: sample_request. Product pages must stay HCP-framed, disclaimered.*

**Journey C — Consumer (OTC/nutra only):**
`Google "vitamin d3 60000 price india"` → `/products/bone-joint/` hub → Det-60K product page → guide post ("vitamin d deficiency") → product enquiry via WhatsApp.
*Success: product_enquiry. Only OTC/nutra products participate.*

**Journey D — AI assistant (GEO):**
Answer engine cites Destiny from `/llms.txt`, guides, or schema → brand citation → click-through to `/about/` or `/products/`.
*Success: branded sessions / citations.*

---

## 7. Indexing & crawl budget notes

- 100-page scale — no crawl-budget pressure; still: no orphan pages, one canonical per URL, sitemap always fresh.
- `robots.txt`: allow all main crawlers (incl. GPTBot, PerplexityBot, ClaudeBot per AI-readiness) but not internal/utility paths.
- Keep the static build output deterministic so the sitemap can be regenerated on each deploy.
