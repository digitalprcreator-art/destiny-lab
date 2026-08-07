/* Destiny Laboratories — static mockup scripts
   Light scroll-reveal, mobile nav toggle, portfolio category filter.
   All behaviour is progressive enhancement; pages work without JS. */
(function () {
  "use strict";

  /* ---------- Mobile nav toggle ---------- */
  var navToggle = document.querySelector(".nav-toggle");
  var mainNav = document.querySelector(".main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var open = mainNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    mainNav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        mainNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Light scroll reveal ---------- */
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reduceMotion && "IntersectionObserver" in window) {
    var revealEls = document.querySelectorAll(".reveal");

    if (revealEls.length) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );

      revealEls.forEach(function (el, i) {
        el.style.setProperty("--reveal-delay", Math.min(i % 8, 6) * 60 + "ms");
        io.observe(el);
      });
    }
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ---------- Portfolio category filter ---------- */
  var filterBar = document.querySelector("[data-filter-bar]");

  if (filterBar) {
    var pills = filterBar.querySelectorAll("[data-filter]");
    var cards = document.querySelectorAll("[data-cat]");
    var blocks = document.querySelectorAll("[data-cat-block]");

    pills.forEach(function (pill) {
      pill.addEventListener("click", function () {
        var value = pill.getAttribute("data-filter");

        pills.forEach(function (p) {
          p.classList.toggle("is-active", p === pill);
        });

        if (value === "all") {
          cards.forEach(function (c) {
            c.style.display = "";
          });
          blocks.forEach(function (b) {
            b.style.display = "";
          });
          return;
        }

        cards.forEach(function (c) {
          c.style.display = c.getAttribute("data-cat") === value ? "" : "none";
        });

        blocks.forEach(function (b) {
          b.style.display = b.getAttribute("data-cat-block") === value ? "" : "none";
        });
      });
    });
  }
})();
