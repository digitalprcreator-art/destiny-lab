/* Destiny Laboratories — site scripts
   Mobile nav, sticky header, scroll reveal, stat counters,
   carousels, portfolio filter, FAQ accordion, footer reveal,
   submit state machine, sliding filter indicator.
   Progressive enhancement; pages work without JS. */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ── 1. MOBILE NAV TOGGLE ─────────────────────────────── */

  var navToggle = document.querySelector(".nav-toggle");
  var mainNav   = document.querySelector(".main-nav");

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

  /* ── 2. STICKY HEADER — SHRINK & GLASS ON SCROLL ─────── */

  var header = document.querySelector(".site-header");
  var lastScrollY = window.scrollY;
  var ticking = false;

  if (header) {
    function headerScroll() {
      var scrollY = window.scrollY;

      // Only update header class if we've scrolled past a threshold
      // and prevent excessive class toggling
      if (scrollY > 15 && !header.classList.contains("is-scrolled")) {
        header.classList.add("is-scrolled");
      } else if (scrollY <= 15 && header.classList.contains("is-scrolled")) {
        header.classList.remove("is-scrolled");
      }

      ticking = false;
    }

    window.addEventListener("scroll", function () {
      lastScrollY = window.scrollY;

      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(headerScroll);
      }
    }, { passive: true });

    // Initial check
    headerScroll();
  }

  /* ── 3. HERO AMBIENT ORBS — inject into .hero ────────── */

  var hero = document.querySelector(".hero");
  if (hero && !reduceMotion) {
    var ambient = document.createElement("div");
    ambient.className = "hero-ambient";
    ambient.setAttribute("aria-hidden", "true");
    ambient.innerHTML =
      '<div class="hero-ambient-orb hero-ambient-orb-1"></div>' +
      '<div class="hero-ambient-orb hero-ambient-orb-2"></div>' +
      '<div class="hero-ambient-orb hero-ambient-orb-3"></div>';
    hero.insertBefore(ambient, hero.firstChild);
  }

  /* ── 4. SCROLL REVEAL — sections, dividers, footer ────── */

  if ("IntersectionObserver" in window) {

    /* General .reveal elements */
    var revealEls = document.querySelectorAll(".reveal, .section-divider, hr.animated-rule, .text-reveal");

    if (revealEls.length) {
      var revealIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealIO.unobserve(entry.target);
          }
        });
      }, { threshold: 0.10, rootMargin: "0px 0px -40px 0px" });

      revealEls.forEach(function (el, i) {
        /* Only set auto stagger if no data-reveal attribute overrides it */
        if (!el.hasAttribute("data-reveal")) {
          el.style.setProperty("--reveal-delay", Math.min(i % 8, 6) * 55 + "ms");
        }
        revealIO.observe(el);
      });
    }

    /* Footer staggered reveal */
    var footer = document.querySelector(".site-footer");
    if (footer) {
      var footerIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            footerIO.unobserve(entry.target);
          }
        });
      }, { threshold: 0.06 });
      footerIO.observe(footer);
    }

  } else {
    /* No IO support — show everything immediately */
    document.querySelectorAll(".reveal, .section-divider, hr.animated-rule, .text-reveal").forEach(function (el) {
      el.classList.add("is-visible");
    });
    var footer2 = document.querySelector(".site-footer");
    if (footer2) footer2.classList.add("is-visible");
  }

  /* ── 5. STAT COUNTERS — count-up animation ───────────── */

  var counterEls = document.querySelectorAll(".counter-num[data-count]");

  function runCounter(el) {
    el.textContent = el.getAttribute("data-count");
  }

  function animateCounter(el) {
    var target   = parseFloat(el.getAttribute("data-count")) || 0;
    var duration = 1100;
    var start    = null;

    if (reduceMotion) { el.textContent = target; return; }

    function frame(ts) {
      if (start === null) start = ts;
      var p     = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if (p < 1) window.requestAnimationFrame(frame);
    }
    window.requestAnimationFrame(frame);
  }

  if (counterEls.length) {
    if ("IntersectionObserver" in window && !reduceMotion) {
      var counterIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterIO.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });
      counterEls.forEach(function (el) { counterIO.observe(el); });
    } else {
      counterEls.forEach(runCounter);
    }
  }

  /* ── 6. CAROUSELS (transform-based) ──────────────────── */

  document.querySelectorAll("[data-carousel]").forEach(function (carousel) {
    var viewport = carousel.querySelector(".carousel-viewport");
    var track    = carousel.querySelector(".carousel-track");
    var slides   = carousel.querySelectorAll(".carousel-slide");
    var prev     = carousel.querySelector("[data-carousel-prev]");
    var next     = carousel.querySelector("[data-carousel-next]");
    var dotsWrap = carousel.querySelector("[data-carousel-dots]");

    if (!viewport || !track || !slides.length) return;

    var index = 0;
    var step  = 0;

    function measure() {
      var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      step = slides[0].offsetWidth + gap;
    }

    function clamp(i) {
      return Math.max(0, Math.min(i, slides.length - 1));
    }

    function goTo(i) {
      index = clamp(i);
      track.style.transform = "translateX(" + (-index * step) + "px)";
      if (prev) prev.disabled = (index === 0);
      if (next) next.disabled = (index === slides.length - 1);
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
        dot.addEventListener("click", function () { goTo(i); });
        dotsWrap.appendChild(dot);
      });
    }

    if (prev) prev.addEventListener("click", function () { goTo(index - 1); });
    if (next) next.addEventListener("click", function () { goTo(index + 1); });

    measure();
    goTo(0);

    var resizeTimer;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () { measure(); goTo(index); }, 150);
    });
  });

  /* ── 7. PORTFOLIO FILTER with SLIDING PILL INDICATOR ── */

  var filterBar = document.querySelector("[data-filter-bar]");

  if (filterBar) {
    var pills  = filterBar.querySelectorAll("[data-filter]");
    var cards  = document.querySelectorAll("[data-cat]");
    var blocks = document.querySelectorAll("[data-cat-block]");

    /* Build sliding indicator */
    var indicator = document.createElement("span");
    indicator.className = "filter-indicator";
    filterBar.style.position = "relative";
    filterBar.insertBefore(indicator, filterBar.firstChild);

    function moveIndicator(pill) {
      var barRect  = filterBar.getBoundingClientRect();
      var pillRect = pill.getBoundingClientRect();
      var offset   = pillRect.left - barRect.left;
      indicator.style.width  = pillRect.width + "px";
      indicator.style.transform = "translateX(" + offset + "px)";
    }

    /* Position on first active pill */
    var firstActive = filterBar.querySelector("[data-filter].is-active") || pills[0];
    if (firstActive) {
      /* Defer until layout is settled */
      requestAnimationFrame(function () { moveIndicator(firstActive); });
    }

    pills.forEach(function (pill) {
      pill.addEventListener("click", function () {
        var value = pill.getAttribute("data-filter");

        pills.forEach(function (p) { p.classList.toggle("is-active", p === pill); });
        moveIndicator(pill);

        if (value === "all") {
          cards.forEach(function (c) { c.style.display = ""; });
          blocks.forEach(function (b) { b.style.display = ""; });
          var firstBlock = document.querySelector("[data-cat-block]");
          if (firstBlock) firstBlock.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }

        cards.forEach(function (c) {
          c.style.display = c.getAttribute("data-cat") === value ? "" : "none";
        });
        blocks.forEach(function (b) {
          var match = b.getAttribute("data-cat-block") === value;
          b.style.display = match ? "" : "none";
          if (match) b.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });
    });

    window.addEventListener("resize", function () {
      var active = filterBar.querySelector("[data-filter].is-active");
      if (active) moveIndicator(active);
    });
  }

  /* ── 8. FAQ ACCORDION ─────────────────────────────────── */

  document.querySelectorAll(".faq-item").forEach(function (item) {
    var question = item.querySelector(".faq-question");
    var answer   = item.querySelector(".faq-answer");
    var icon     = item.querySelector(".faq-icon");

    if (!question) return;

    question.addEventListener("click", function () {
      var isOpen = item.classList.contains("is-open");

      /* Close all other open items */
      document.querySelectorAll(".faq-item.is-open").forEach(function (openItem) {
        if (openItem !== item) {
          openItem.classList.remove("is-open");
        }
      });

      item.classList.toggle("is-open", !isOpen);
      question.setAttribute("aria-expanded", (!isOpen).toString());
    });

    /* Keyboard support */
    question.setAttribute("role", "button");
    question.setAttribute("tabindex", "0");
    question.setAttribute("aria-expanded", "false");
    question.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        question.click();
      }
    });
  });

  /* ── 9. SUBMIT BUTTON STATE MACHINE ───────────────────── */

  document.querySelectorAll("form[data-wa-form]").forEach(function (form) {
    var btn = form.querySelector(".btn-submit");
    if (!btn) return;

    /* Wrap existing text into state spans if not already done */
    if (!btn.querySelector(".state-default")) {
      var orig = btn.innerHTML;
      btn.innerHTML =
        '<span class="state-default">' + orig + '</span>' +
        '<span class="state-sending"><span class="spinner"></span>Sending\u2026</span>' +
        '<span class="state-done">' +
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>' +
          'Enquiry Sent' +
        '</span>';
    }

    form.addEventListener("submit", function () {
      btn.classList.add("is-sending");
      setTimeout(function () {
        btn.classList.remove("is-sending");
        btn.classList.add("is-done");
        /* Reset after 4s */
        setTimeout(function () { btn.classList.remove("is-done"); }, 4000);
      }, 1800);
    });
  });

})();
