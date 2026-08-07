# Content Calendar & Strategy — Destiny Laboratories

Prepared: 2026-08-07 · Deliverable 4 of 5
**Quality gate:** no health claim is published until confirmed by the client; blog content is reviewed by the client (and an external medical reviewer once engaged) before publishing. Rx products are framed for HCPs only.

---

## 1. Content gaps vs competitors

| Gap (today) | Competitor evidence | Action |
|---|---|---|
| No franchise hub depth | Aristo/Galpha rank on "PCD pharma franchise" with deep franchise pages | Build Pillar 0 first: hub, process, FAQ, apply |
| No category hubs | Alkem/Zydus rank category-level keywords | Add 8 therapeutic-area hubs |
| No blog/education | Zydus owns educational search share | Launch `/resources/` with 36 posts/12 mo |
| No FAQ schema | Galpha only | Add franchise FAQ (structured Q&A with FAQPage) |
| No leadership/E-E-A-T pages | Alkem/Zydus have bios + certifications | Add team + certifications pages (gated) |
| Product pages thin on context | Competitor product pages contextualise with guides | Link each product to a pillar guide post |

---

## 2. Page types & estimated counts (12-month target ≈ 100)

| Page type | Count | Min words* | Status |
|---|---|---|---|
| Home | 1 | 500 | exists → expand copy |
| Franchise hub + subpages | 4 (+2 state pages Phase 3) | 600 | distribution.html exists → restructure |
| Category hubs (8 pillars) | 8 | 400 | new |
| Product pages | 21 | 800 | exists → expand + confirm facts |
| About + Team | 2 | 400 | exists → add bios |
| Quality + Certifications | 2 | 400 | exists → add certs (gated) |
| Contact | 1 | 200 | exists |
| Franchise FAQ | 1 | 800 | new |
| Legal + Disclaimer | 3 | 300 | new (YMYL requirement) |
| Pillar guides (evergreen) | 6 | 1,500 | new |
| Blog posts | 36 | 1,500 | new |
| llms.txt, robots, sitemaps | 3 | — | new |

\*Min words per `generic.md`/`ecommerce.md` templates, health-adjusted.

---

## 3. Editorial cadence & ownership

- **Cadence:** 2 posts/month (Months 5–12) ramping to 4/month by Month 9. Guides are one-off evergreen builds.
- **Owner (in-house):** client confirms facts; writer drafts; reviewer (client + medical reviewer) approves; Destiny team publishes to the static repo.
- **Review SLA:** 5 working days; any post with a clinical claim requires a named reviewer credit line.

---

## 4. Blog topic pipeline (by pillar)

**Pillar 0 — Franchise (publish first; 6 posts)**
1. How to become a PCD pharma franchise owner in India (guide)
2. PCD franchise profit margin — realistic numbers (gated on confirmable data)
3. Monopoly PCD franchise — how monopoly rights work
4. Pharma franchise requirements & documents in India
5. PCD franchise vs. distribution — which model fits you
6. Why gynaecology-focused PCD portfolios outperform generalists

**Pillar 1 — Gynaecology & Maternal Health (8 posts)**
7. What is luteal phase support and why it matters (guide)
8. Dydrogesterone uses in threatened abortion — what HCPs should know
9. Myo-inositol vs D-chiro inositol for PCOS (guide)
10. Evening primrose oil — evidence for hormone & skin support
11. Iron deficiency anaemia in pregnancy — ferrous ascorbate vs ferrous sulphate
12. Prenatal nutrition: folic acid, DHA & arginine (guide)
13. Dydrogesterone vs natural progesterone — clinical perspective
14. PMS & dysfunctional uterine bleeding — management overview

**Pillar 2 — Bone & Joint (5 posts)**
15. Vitamin D3 60,000 IU — when HCPs prescribe weekly dosing
16. Vitamin D deficiency in India — prevalence & correction (guide)
17. Calcium + vitamin D3 combinations — which presentation to choose
18. Calcitriol vs cholecalciferol — clinical use
19. Joint health supplement ingredients — evidence review

**Pillar 3 — Neurology (4 posts)**
20. Mecobalamin & alpha-lipoic acid in diabetic neuropathy
21. B-vitamin complex for cognition support
22. Pramipexole — use in Parkinson's (HCP info)
23. Neuropathy management — an overview for practitioners

**Pillar 4 — Men's Health (2 posts)**
24. Men's wellness formulations — HCP overview
25. Testosterone support & ED management overview

**Pillars 5–8 — Gastro / Anti-Infective / Steroidal / Nutrition (8 posts)**
26. Digestive enzyme supplements — when they're clinically useful
27. Serratiopeptidase — uses in inflammation & oedema
28. Antibiotic combination brands — stewardship considerations (HCP)
29. Deflazacort — steroid with bone-sparing profile (HCP)
30. Multivitamin formulations — what clinicians look for
31. Probiotics & gut health — evidence overview
32. Protein & nutrition supplementation — clinical context
33. Branded vs generic formulations — quality considerations (HCP)

**Cross-pillar / trust (3 posts)**
34. Inside Destiny Laboratories: our quality process
35. PCD pharma — how to evaluate a manufacturer's credentials (franchise trust)
36. Understanding pharmaceutical regulation in India (DCGI/GMP overview)

---

## 5. E-E-A-T build plan (YMYL-critical)

| Asset | Type | Dependencies | Status |
|---|---|---|---|
| Leadership bios | People/AboutPage | Names, roles, qualifications | Pending confirmation |
| Medical reviewer | Person (blog bylines) | Reviewer identity + credentials | Pending |
| Certifications page | WebPage + Certification schema | GMP/WHO-GMP/DCGI evidence | Pending confirmation |
| Company registration details | Organization schema | Already on site (Khata no.) | ✓ |
| Clinical references on product pages | Product page citations | Catalogue references | ✓ partial |
| Disclaimers (HCP-only, not medical advice) | Legal pages + page footers | Copy approval | New — Phase 1 |
| Consistent NAP + directory presence | GBP, LinkedIn, IndiaMART, Pharmexcil, Justdial | Contact + address confirmed | Phase 1 |
| Original data (women's-health portfolio stats) | Guide/listicle | Client data release | Phase 3–4 |

---

## 6. 12-month content calendar (priorities by phase)

**Phase 1 (Weeks 1–4) — Foundation**
- Restructure `distribution.html` → `/franchise/` (hub, process, apply). 
- Expand home copy to ≥500 words; expand product pages toward 800 words **with confirmed facts only**.
- Add legal/disclaimer pages. Write `llms.txt`.

**Phase 2 (Weeks 5–12) — Expansion (blog launch)**
- Franchise FAQ + **6 franchise posts** (topics 1–6) — highest priority.
- Launch `/resources/` with category-hub 1 (Gynae & Maternal) + 2 guide posts (topics 7, 9).
- Begin category hubs: build 8 hubs as products allow.

**Phase 3 (Weeks 13–24) — Scale**
- Continue blog: women's-health + bone posts (topics 8, 10–19). 2–4 posts/month.
- Add state franchise pages (Uttarakhand → UP, Himachal).
- GEO pass: quotable stats, schema, llms.txt refresh.

**Phase 4 (Months 7–12) — Authority**
- Complete pillar guides (all 6 evergreen guides).
- Original data/thought-leadership (topic 34–36 + data releases).
- Medical-reviewer bylines; certifications page live; link-building PR wave.
- Blog reaches 36 posts; all 8 category hubs live; ~100 quality-gated pages indexed.

---

## 7. Conversion content

Every content piece above routes to a conversion point:
- Franchise content → `/franchise/apply/` + WhatsApp bubble (pre-filled "I'd like to know more about the PCD franchise")
- Product/composition content → product page → WhatsApp sample request
- Guides → contextual product + category hub links (never hard-pitch)

**Tracking (Phase 1):** GA4 events on WhatsApp bubble clicks, form submits, franchise-apply visits; goals wired per journey (A/B/C/D in SITE-STRUCTURE.md).
