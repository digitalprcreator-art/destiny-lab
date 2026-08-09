/* Destiny Laboratories — static site scripts
   Mobile nav, sticky header, scroll reveal, stat counters,
   testimonial & product carousels, portfolio category filter.
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

  /* ---------- Sticky header shadow ---------- */
  var header = document.querySelector(".site-header");

  if (header) {
    var headerTicking = false;

    function headerScroll() {
      headerTicking = false;
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    }

    window.addEventListener(
      "scroll",
      function () {
        if (!headerTicking) {
          headerTicking = true;
          window.requestAnimationFrame(headerScroll);
        }
      },
      { passive: true }
    );

    headerScroll();
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

  /* ---------- Stat counters ---------- */
  var counterEls = document.querySelectorAll(".counter-num[data-count]");

  function runCounter(el) {
    var target = parseFloat(el.getAttribute("data-count")) || 0;
    el.textContent = target;
  }

  function animateCounter(el) {
    var target = parseFloat(el.getAttribute("data-count")) || 0;
    var duration = 1400;
    var start = null;

    if (reduceMotion) {
      el.textContent = target;
      return;
    }

    function frame(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if (p < 1) window.requestAnimationFrame(frame);
    }

    window.requestAnimationFrame(frame);
  }

  if (counterEls.length) {
    if ("IntersectionObserver" in window && !reduceMotion) {
      var counterIO = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              animateCounter(entry.target);
              counterIO.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.4 }
      );

      counterEls.forEach(function (el) {
        counterIO.observe(el);
      });
    } else {
      counterEls.forEach(runCounter);
    }
  }

  /* ---------- Carousels (transform-based) ---------- */
  document.querySelectorAll("[data-carousel]").forEach(function (carousel) {
    var viewport = carousel.querySelector(".carousel-viewport");
    var track = carousel.querySelector(".carousel-track");
    var slides = carousel.querySelectorAll(".carousel-slide");
    var prev = carousel.querySelector("[data-carousel-prev]");
    var next = carousel.querySelector("[data-carousel-next]");
    var dotsWrap = carousel.querySelector("[data-carousel-dots]");

    if (!viewport || !track || !slides.length) return;

    var index = 0;
    var step = 0;

    function measure() {
      var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      step = slides[0].offsetWidth + gap;
    }

    function clamp(i) {
      return Math.max(0, Math.min(i, slides.length - 1));
    }

    function goTo(i) {
      index = clamp(i);
      track.style.transform = "translateX(" + -index * step + "px)";
      if (prev) prev.disabled = index === 0;
      if (next) next.disabled = index === slides.length - 1;
      if (dotsWrap) {
        dotsWrap.querySelectorAll(".carousel-dot").forEach(function (d, di) {
          d.classList.toggle("is-active", di === index);
        });
      }
    }

    if (dotsWrap) {
      Array.prototype.forEach.call(slides, function (_, i) {
        var dot = document.createElement("button");
        dot.type = "button";
        dot.className = "carousel-dot" + (i === 0 ? " is-active" : "");
        dot.setAttribute("aria-label", "Go to slide " + (i + 1));
        dot.addEventListener("click", function () {
          goTo(i);
        });
        dotsWrap.appendChild(dot);
      });
    }

    if (prev) {
      prev.addEventListener("click", function () {
        goTo(index - 1);
      });
    }
    if (next) {
      next.addEventListener("click", function () {
        goTo(index + 1);
      });
    }

    measure();
    goTo(0);

    var resizeTimer;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        measure();
        goTo(index);
      }, 150);
    });
  });

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
