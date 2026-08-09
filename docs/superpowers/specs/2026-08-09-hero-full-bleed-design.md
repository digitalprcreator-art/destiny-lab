# Hero Full-Bleed Redesign — Design

**Date:** 2026-08-09
**Status:** Approved by client

## Context

Cross-checking the Destiny Laboratories homepage against the client reference
(Diya Healthcare) shows the hero deviates from the reference layout:

- The reference hero is a **full-bleed** band (edge-to-edge background) with a
  left text column, a right photo column carrying a single floating rating badge,
  and a 4-stat counter strip below.
- The current Destiny hero uses a light "split" background with a capsule/ECG
  SVG card and three floating stat chips ("oval graph with some text") that do
  not exist in the reference.

## Scope

This change is limited to the homepage (`index.html`) hero and its styles.

### Remove

1. `.hero-stage` block (capsule/ECG oval SVG card + 3 floating stat chips) —
   `index.html` lines 155–204.
2. Marquee band below the hero — `index.html` lines 260–274. Not present in the
   reference.
3. Related CSS: `.hero-stage`, `.hero-stage-card`, `.hero-stage-card::before`,
   `.hero-stage-icon`, `.badge-chip*`, `chip-float` keyframes, and the
   reduced-motion `.badge-chip` rule.

### Rework (full-bleed navy + photo placeholder)

- `.hero` becomes **full-bleed**: deep navy gradient edge-to-edge
  (`linear-gradient(150deg, var(--navy-800), var(--navy-900))`), white text on
  the left, soft white glow accents.
- Left column keeps: eyebrow chip (restyled for dark bg), H1 (white), supporting
  paragraph (light slate), and the 2 CTAs (primary + ghost restyled for dark bg).
- Right column becomes a **photo frame**: rounded navy-toned card with a
  "Facility / team photo pending" placeholder (icon + label), consistent with the
  About section's placeholder treatment. No fake product graphic.
- **One floating stat badge** over the placeholder (e.g. "8 Therapeutic Areas ·
  21 Formulations") — mirrors the reference's single floating rating badge.
- Keep the 4-stat trust strip below (matches the reference counter strip).

### CSS scope

- Restyle `.hero`, `.hero-inner`, `.hero-head`, `.hero-eyebrow`, `.hero h1`,
  `.hero-sub`, `.hero-ctas` for dark full-bleed.
- Replace `.hero-stage*`/`.badge-chip*` with `.hero-media` + `.hero-media-badge`.
- Delete the `.marquee` block (styles.css ~728–770).
- Update responsive rules (1024/768/560) for the new markup.
- Update the reduced-motion block to drop `.badge-chip`.

## Non-goals

- No other homepage sections change.
- No new photos are introduced (placeholder only).
- No other pages change.

## Acceptance criteria

- Hero spans the full viewport width edge-to-edge on all breakpoints.
- No oval/capsule SVG graph or stat chips remain in the hero.
- One floating stat badge remains over the photo frame.
- Marquee band removed.
- 4-stat trust strip still present and functional.
- No console errors; existing reveal animations still work.
