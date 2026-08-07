# WhatsApp Integration — Design

Date: 2026-08-07 · Project: Destiny Laboratories (static site, `D:\client project\destiny lab`)

## Purpose
Let visitors reach Destiny Laboratories on WhatsApp two ways:

1. A floating WhatsApp bubble on every page for general questions.
2. A per-product "Request Sample" form that, on submit, opens WhatsApp with the form data pre-filled (name, phone, quantity, message, product).

## Decisions (confirmed with client)
- WhatsApp number: **+91 93863 54555** (same as the published phone) → `919386354555`.
- Bubble placement: fixed bottom-right on all 27 pages.
- Form lives **inline on each product page** (product name known on-page; no URL plumbing). Both existing "Request Sample" buttons scroll to it.
- Client-side only: no backend, no storage, no email. Data goes straight into a `wa.me` deep link.
- Bubble pre-filled greeting: "Hello Destiny Laboratories! I'd like to ask about your products."

## Components

### 1. Floating bubble (all pages)
- Fixed button, bottom-right, 56px round, WhatsApp green `#25D366`, white WhatsApp glyph.
- Hover: lift + stronger shadow.
- Rendered by JS (`assets/js/whatsapp.js`) — pages only need the script tag.
- Link: `https://wa.me/919386354555?text=<greeting url-encoded>`, target `_blank`, `rel="noopener"`.

### 2. Product enquiry form (21 product pages)
- Form markup in the existing `#request` section, using existing form classes (`.form-block`, `.form-row`, `.field`).
- Fields:
  - Name (text, required)
  - Phone / WhatsApp (tel, required)
  - Quantity needed (select: Trial / Small lot / Bulk, optional)
  - Message (textarea, optional)
- Product name supplied via `data-wa-product="<Product Name>"` on the form; not an editable field.
- Both "Request Sample" buttons (`aside` panel + `#request` heading area) become `href="#request"` anchors.
- On submit (preventDefault): builds message, opens `https://wa.me/919386354555?text=<url-encoded>`, shows a confirmation note under the button. Page does not reload.
- Message format:
  ```
  Hello Destiny Laboratories!
  Product enquiry from the website:
  • Product: <product>
  • Name: <name>
  • Phone: <phone>
  • Quantity: <qty>     (if provided)
  • Message: <msg>      (if provided)
  ```

### 3. Files
- `assets/js/whatsapp.js` — new: bubble render + form submit handler + wa.me link builder (plain IIFE, matches `main.js` style).
- `assets/css/styles.css` — add `.wa-bubble` (fixed, green, hover) and `.wa-success` note styles.
- `index.html`, `about.html`, `portfolio.html`, `quality.html`, `distribution.html`, `contact.html` — add `<script src="assets/js/whatsapp.js"></script>` before `main.js`.
- 21 `product-*.html` — regenerated from the updated generator template (form in `#request`, aside CTA → `#request`, bubble script tag).
- `C:\Users\MOTILA~1\AppData\Local\Temp\opencode\gen-products.ps1` — template updated; favicon hex already blue.

## Error handling
- Native HTML5 required-attribute validation blocks empty Name/Phone.
- `wa.me` link is static-valid; failure modes are browser-level (new tab opens WhatsApp).
- No JS: bubble and form degrade gracefully (form falls back to the existing static CTA links are replaced by form — pages remain usable without JS since reveal/filter already degrade).

## Testing / verification
- Confirm all 27 pages include the whatsapp.js script tag.
- Confirm 21 product pages contain the form with correct `data-wa-product`.
- Click-through test on one product page: submit with sample data → WhatsApp link opens with pre-filled text (checked by inspecting the generated `wa.me` URL).
- No old gold favicon `%238a5b13` in regenerated files.
