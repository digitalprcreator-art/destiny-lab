/* Destiny Laboratories — WhatsApp integration & floating contact widgets
   Renders a right-edge floating menu (WhatsApp / Call / Download Product
   List), a mobile sticky bottom bar (Call / WhatsApp / Get a Quote), and
   a "Get a Quote" popup. Any [data-wa-form] form builds a wa.me deep link
   with its fields pre-filled. Client-side only; nothing is stored. */
(function () {
  "use strict";

  var WA_NUMBER = "919386354555";
  var WA_GREETING = "Hello Destiny Laboratories! I'd like to ask about your products.";

  function waLink(text) {
    return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(text);
  }

  var ICONS = {
    whatsapp:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
      '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>' +
      "</svg>",
    call:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>' +
      "</svg>",
    download:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>' +
      "</svg>",
    quote:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>' +
      "</svg>"
  };

  function makeLink(cls, href, icon, label, opts) {
    opts = opts || {};
    var a = document.createElement("a");
    a.className = cls;
    a.href = href;
    if (opts.external) {
      a.target = "_blank";
      a.rel = "noopener";
    }
    a.setAttribute("aria-label", label);
    a.innerHTML = icon + '<span class="float-label">' + label + "</span>";
    return a;
  }

  /* ---------- Right-edge floating menu (desktop) ---------- */
  var floatMenu = document.createElement("div");
  floatMenu.className = "float-menu";
  floatMenu.setAttribute("aria-label", "Quick contact");

  floatMenu.appendChild(
    makeLink("float-link float-wa", waLink(WA_GREETING), ICONS.whatsapp, "WhatsApp", { external: true })
  );
  floatMenu.appendChild(
    makeLink("float-link float-call", "tel:+919386354555", ICONS.call, "Call Us")
  );

  document.body.appendChild(floatMenu);

  /* ---------- Mobile sticky bottom bar ---------- */
  var mobileBar = document.createElement("div");
  mobileBar.className = "mobile-bar";

  var barGrid = document.createElement("div");
  barGrid.className = "mobile-bar-grid";

  var mCall = document.createElement("a");
  mCall.className = "mobile-bar-link";
  mCall.href = "tel:+919386354555";
  mCall.setAttribute("aria-label", "Call us");
  mCall.innerHTML = ICONS.call + "<span>Call</span>";

  var mWa = document.createElement("a");
  mWa.className = "mobile-bar-link is-wa";
  mWa.href = waLink(WA_GREETING);
  mWa.target = "_blank";
  mWa.rel = "noopener";
  mWa.setAttribute("aria-label", "Chat with us on WhatsApp");
  mWa.innerHTML = ICONS.whatsapp + "<span>WhatsApp</span>";

  var mQuote = document.createElement("button");
  mQuote.type = "button";
  mQuote.className = "mobile-bar-link";
  mQuote.setAttribute("data-popup-open", "");
  mQuote.setAttribute("aria-label", "Get a quote");
  mQuote.innerHTML = ICONS.quote + "<span>Get a Quote</span>";

  barGrid.appendChild(mCall);
  barGrid.appendChild(mWa);
  barGrid.appendChild(mQuote);
  mobileBar.appendChild(barGrid);
  document.body.appendChild(mobileBar);

  /* ---------- Get a Quote popup ---------- */
  var popup = document.createElement("div");
  popup.className = "popup-backdrop";
  popup.setAttribute("aria-hidden", "true");
  popup.innerHTML =
    '<div class="popup" role="dialog" aria-modal="true" aria-labelledby="waq-title">' +
    '<button class="popup-close" type="button" data-popup-close aria-label="Close">&times;</button>' +
    "<h3 id=\"waq-title\">Get a Quote</h3>" +
    '<p class="popup-sub">Tell us what you need &mdash; our team will reply on WhatsApp.</p>' +
    '<form data-wa-form data-wa-quote>' +
    '<div class="form-block">' +
    '<div class="field">' +
    '<label for="waq-name">Name</label>' +
    '<input id="waq-name" name="name" type="text" required>' +
    "</div>" +
    '<div class="field">' +
    '<label for="waq-phone">Phone / WhatsApp</label>' +
    '<input id="waq-phone" name="phone" type="tel" required>' +
    "</div>" +
    '<div class="field">' +
    '<label for="waq-message">Message</label>' +
    '<textarea id="waq-message" name="message" rows="3" placeholder="Products or areas you are interested in"></textarea>' +
    "</div>" +
    '<p class="wa-success" data-wa-note>Opening WhatsApp with your details&hellip;</p>' +
    '<button class="btn btn-primary btn-lg" type="submit">Send via WhatsApp</button>' +
    "</div>" +
    "</form>" +
    "</div>";
  document.body.appendChild(popup);

  var backdrop = popup;
  var closeBtn = popup.querySelector("[data-popup-close]");
  var popupForm = popup.querySelector("form");

  function openPopup() {
    backdrop.classList.add("is-open");
    backdrop.setAttribute("aria-hidden", "false");
    var first = popupForm.querySelector("input, select, textarea");
    if (first) first.focus();
  }

  function closePopup() {
    backdrop.classList.remove("is-open");
    backdrop.setAttribute("aria-hidden", "true");
  }

  document.querySelectorAll("[data-popup-open]").forEach(function (el) {
    el.addEventListener("click", openPopup);
  });

  if (closeBtn) closeBtn.addEventListener("click", closePopup);

  backdrop.addEventListener("click", function (e) {
    if (e.target === backdrop) closePopup();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closePopup();
  });

  /* ---------- Enquiry forms -> WhatsApp (all [data-wa-form]) ---------- */
  var forms = document.querySelectorAll("[data-wa-form]");

  Array.prototype.forEach.call(forms, function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var product = form.getAttribute("data-wa-product");

      var lines = ["Hello Destiny Laboratories!"];
      if (product) {
        lines.push("Product enquiry from the website:");
        lines.push("• Product: " + product);
      } else if (form.hasAttribute("data-wa-quote")) {
        lines.push("Quote request from the website:");
      } else {
        lines.push("Enquiry from the website contact form:");
      }

      var fields = [
        ["name", "Name"],
        ["organisation", "Organisation"],
        ["company", "Company"],
        ["email", "Email"],
        ["phone", "Phone"],
        ["quantity", "Quantity"],
        ["interest", "Interest"],
        ["territory", "Territory"],
        ["message", "Message"]
      ];

      fields.forEach(function (pair) {
        var el = form.querySelector('[name="' + pair[0] + '"]');
        if (el && el.value.trim()) {
          lines.push("• " + pair[1] + ": " + el.value.trim());
        }
      });

      var note = form.querySelector("[data-wa-note]");
      if (note) {
        note.style.display = "block";
      }

      window.open(waLink(lines.join("\n")), "_blank", "noopener");
    });
  });
})();
