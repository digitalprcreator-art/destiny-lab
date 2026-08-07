# SEO Strategy — Destiny Laboratories Private Limited

Prepared: 2026-08-07 · Deliverable 1 of 5
Companion files: `COMPETITOR-ANALYSIS.md` · `SITE-STRUCTURE.md` · `CONTENT-CALENDAR.md` · `IMPLEMENTATION-ROADMAP.md`

---

## 1. Discovery

### 1.1 Business type
- **Industry:** Pharmaceutical / nutraceutical manufacturer, marketer and **PCD pharma franchisor** (B2B).
- **Template basis:** No dedicated pharma template exists in the skill library. `generic.md` is the base, blended with `ecommerce.md` product-page principles (Product schema, catalogue architecture) because the site carries a 21-product portfolio. (`local-service.md` patterns apply only to local franchise-recruitment landing pages.)
- **Offer:** 21 formulations across 8 therapeutic areas — Gynaecology & Maternal Health, Bone & Joint, Neurology, Men's Health, Gastro, Anti-Infective, Steroidal, Nutrition. PCD franchise + distribution partnerships are the primary conversion path.
- **Location:** Dehradun, Uttarakhand, India (Khata No. 244, Khasra No. 91 & 92, Central Hope Town, Vikas Nagar, 248197). Phone +91 93863 54555, destinylaboratories195@gmail.com.
- **Vertical risk:** Health = YMYL (Your Money or Your Life). Google applies heightened E-E-A-T scrutiny. This is the single most important strategic constraint.

### 1.2 Target audiences (ranked by commercial value)
| Audience | Intent | Example queries | Conversion |
|---|---|---|---|
| 1. PCD franchise seekers (B2B) | Transactional | "PCD pharma franchise company in India", "pharma franchise Uttarakhand", "monopoly pharma franchise gynaecology" | WhatsApp / Apply form |
| 2. Distributors / wholesalers | Transactional | "pharma distribution company India", "PCD distributor Dehradun" | WhatsApp / Contact |
| 3. Healthcare professionals (HCPs) | Informational→commercial | "Dydrogesterone 10 mg brand", "Myo-inositol PCOS tablets composition" | Product sheet / sample request |
| 4. Consumers (OTC/nutra only) | Commercial | "Vitamin D3 60000 IU price", "evening primrose oil 1000 mg benefits" | Product enquiry |
| 5. AI assistants / GEO | Referral | "best PCD pharma franchise companies 2026" (answer engines) | Brand citation → site |

### 1.3 Goals
1. **Primary:** Drive qualified PCD-franchise and distribution enquiries (to WhatsApp/contact) from organic search — measurable via `enquiry_count / organic`.
2. **Secondary:** Rank for product/composition keywords on the 21 product pages (HCP + consumer nutra demand).
3. **Tertiary:** Build domain authority and AI-search citations in a YMYL vertical through E-E-A-T assets (certifications, references, leadership bios).

### 1.4 Current site assessment (pre-launch baseline — local static build, 27 pages)
| Check | Status |
|---|---|
| Live domain | **Not confirmed.** `destinylaboratories.com` implied by archive zips; parked/legacy export (`Home - Destiny laboratories.html`) exists. Plan assumes pre-launch planning mode. |
| Structured data (schema) | **None** on site pages (legacy export has some — ignore it). |
| robots.txt / sitemap.xml | **Missing** (both). |
| Canonical tags | **Missing.** |
| Titles / meta descriptions | Mostly 46–56 char titles (good); 6/6 pages have descriptions; `distribution.html` desc is only 87 chars (needs 120–160). `index.html` title is 66 chars (slightly long). |
| H1 | 1 per page ✓ |
| Image alt | 83 images, 0 missing alt ✓ |
| Mobile / CWV | Static HTML, no build tooling → naturally fast; must be verified live. |
| Conversion plumbing | WhatsApp bubble + product enquiry form → WhatsApp live (client-side). **Contact-page form is a mockup** (`Not live` / `[FAKE FORM]`) — blocks conversion tracking. |
| Content gating | Product facts carry `[To confirm]` markers (pack size, MRP, founding year, certifications) — by design, unconfirmed facts are not published. Content plan must respect this gate. |

### 1.5 Constraints
- **Budget:** Not specified — plan assumes a low-cost stack (static hosting + free Google tools) and in-house content.
- **Timeline:** 12-month horizon, 4 phases (see roadmap).
- **Compliance:** Rx products must not be promoted to consumers; product pages must read for HCPs and carry disclaimers. OTC/nutra can target consumers.

---

## 2. Keyword Strategy (pillars → clusters)

All volumes/difficulty are **estimates for planning only** and must be verified in GSC + Keyword Planner after launch (DataForSEO MCP was not available in this session).

### 2.1 Pillar 0 — Franchise & partnerships (highest commercial value, priority)
- **Primary (money keywords):** pcd pharma franchise company in india · pharma franchise uttarakhand · pcd franchise dehradun · monopoly pharma franchise · pharma franchise company for gynaecology · pcd pharma franchise with low investment · pharma distribution partnership india
- **Supporting (blog/guide):** how to become pcd pharma franchise owner · pcd franchise profit margin · pharma franchise requirements in india · pcd pharma company list with monopoly rights

### 2.2 Pillar 1 — Gynaecology & Maternal Health (6 products, brand leader)
- Dydrogesterone 10 mg tablet uses/brand · progesterone sustained release 300 mg · myo-inositol d-chiro inositol pcos tablets · evening primrose oil 1000 mg benefits · ferrous ascorbate folic acid tablets · dydrogesterone vs progesterone pcos · luteal phase support supplements

### 2.3 Pillar 2 — Bone & Joint (3 products)
- vitamin d3 60000 iu price india · calcium vitamin d3 supplement · vitamin d3 cholecalciferol softgel · calcitriol tablets india · joint care / bone health supplements

### 2.4 Pillar 3 — Neurology & Cognition
- methylcobalamin alpha lipoic acid capsules · mecobalamin for neuropathy · pramipexole brand india · cognitive support supplements

### 2.5 Pillar 4 — Men's Health
- tadalafil / men's wellness formulation · male health supplements india (position as HCP product info)

### 2.6 Pillars 5–8 — Gastro, Anti-Infective, Steroidal, Nutrition
- enzyme supplements for digestion (detzyme) · serratiopeptidase uses · antibiotic combination brands (pcd) · deflazacort steroid brand · multivitamin / prenatal nutrition brands

### 2.7 Informational/education (blog → all pillars)
- what is luteal phase support · pcos myo-inositol dosage · vitamin d deficiency symptoms india · how pcd pharma franchise works · pharma franchise profit margin · first-line iron deficiency anaemia treatment india

---

## 3. Competitive Summary (full detail in COMPETITOR-ANALYSIS.md)

Top 5 (DA = estimated, verify post-launch):
1. **Alkem Laboratories** (~DA 75) — brand authority + franchise arm.
2. **Mankind Pharma** (~DA 72) — mass-market PCD franchise recruitment content.
3. **Aristo Pharmaceuticals** (~DA 58) — dedicated PCD franchise microsites + state pages.
4. **Galpha Laboratories** (~DA 50) — franchise-first content marketing.
5. **Zydus Lifesciences** (~DA 78) — therapeutic-area authority benchmark (women's health).
Plus a niche reference: **Abbott India** (Duphaston) for women's-health brand recognition.

**Headline gap:** Smaller PCD players rank on franchise keywords with heavy, keyword-stuffed content; national players have authority but poor on-theme franchise depth. Destiny can win franchise + product-composition keywords through **depth, compliance, and credible E-E-A-T** — no competitor combines franchise content with a documented women's-health portfolio.

---

## 4. Content Strategy (summary — full in CONTENT-CALENDAR.md)

- **Page types & counts (target 12-month):** 27 current + ~8 category hubs + ~5 franchise pages + ~6 pillar guides + ~36 blog posts + legal/FAQ/llms → ≈ 100 crawlable, quality-gated pages.
- **Cadence:** 2–4 posts/month after Phase-2 blog launch.
- **Quality gate:** every product/health claim must pass client confirmation (site already enforces `[To confirm]`); blog content gets medical-reviewer approval before publishing.
- **E-E-A-T plan:** leadership bios, medical reviewer, GMP/DCGI certification pages (once confirmed), cited references on product pages, disclaimers, consistent NAP + entity data across GBP/LinkedIn/directories.

---

## 5. Technical Foundation (summary — full in roadmap)

- **Stack:** Keep the static, no-build approach (fast, cheap, secure). Host on a clean-URL-capable static host (Netlify/Vercel) or configure server rewrites for the new URL scheme.
- **Schema:** Organization+WebSite (home), ContactPage, BreadcrumbList (all interiors), Product (+ProductGroup where presentations exist, no `offers` until MRP confirmed), FAQPage (franchise FAQ), Article/BlogPosting (blog), LocalBusiness not used (manufacturer, not retail).
- **CWV targets:** LCP < 2.5 s, INP < 200 ms, CLS < 0.1 — must be verified live; static site should pass with margin.
- **AI readiness:** `llms.txt`, quotable facts, consistent entity info, XML sitemap, GPTBot/PerplexityBot/etc. allowed in robots.txt (with sensible crawler allowances), schema in server-rendered HTML.

---

## 6. KPI Targets

| Metric | Baseline | 3 Month | 6 Month | 12 Month |
|---|---|---|---|---|
| Organic sessions / mo | 0 (pre-launch) | 500 | 2,000 | 6,000 |
| Keywords in top-10 (non-branded) | 0 | 20 | 80 | 250 |
| Pages indexed | 27 | 40 | 60 | 100 |
| Domain authority (est.) | new | 5–10 | 15–20 | 25–30 |
| Franchise / distribution enquiries per mo (organic) | 0 | 5 | 15 | 40 |
| Core Web Vitals pass rate | — | 100% | 100% | 100% |
| AI citations (brand mentions in answer engines) | 0 | monitor | 10 | 40 |

Baselines assume a pre-launch site; if a live domain exists with history, adjust baselines from GSC.

---

## 7. Success Criteria & Risks

**Success criteria:** ≥ 40 qualified franchise/distribution enquiries/mo from organic by month 12; ≥ 25% of product pages in top-10 for their target composition keyword; zero Google manual actions; AI-citation presence across ChatGPT/Perplexity/AI Overviews.

**Key risks & mitigation:**

| Risk | Mitigation |
|---|---|
| YMYL health content without certifications | Publish nothing health-claiming until confirmed; add HCP-only disclaimers; medical-reviewer model; cited references |
| Rx products positioned to consumers | Product pages framed for HCPs; no consumer targeting on Rx |
| Franchise keyword space is competitive/spammy | Differentiate with compliance + women's-health depth; brand + long-tail clusters |
| Mockup contact form blocks conversion tracking | Wire real form handler + GA4 events in Phase 1 |
| No confirmed domain/certifications | Everything pending confirmation is gated; roadmap stages on client confirmations |

---

*Note: DataForSEO MCP tools were not available in this session; all competitor domain metrics, search volumes and difficulty scores are planning estimates to be validated with Google Search Console, Keyword Planner and (optionally) DataForSEO after launch.*
