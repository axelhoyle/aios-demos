/* ============================================================
   Salon Van Cleef — script.js
   ============================================================ */

(function () {
  'use strict';

  /* ---- Footer year ---- */
  var yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ---- Mobile nav toggle ---- */
  var toggle = document.querySelector('.nav-toggle');
  var nav    = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    /* Close nav when a link is clicked */
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    /* Close nav on outside click */
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---- Sticky header shadow on scroll ---- */
  var header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.25)';
      } else {
        header.style.boxShadow = 'none';
      }
    }, { passive: true });
  }

  /* ---- Flip cards: tap-to-flip on touch devices (no hover) ---- */
  var flipCards = document.querySelectorAll('.service-card--flip');
  if (window.matchMedia && window.matchMedia('(hover: none)').matches) {
    flipCards.forEach(function (card) {
      card.addEventListener('click', function () {
        card.classList.toggle('is-flipped');
      });
    });
  }

  /* ---- Simple scroll-reveal for sections ---- */
  var revealEls = document.querySelectorAll(
    '.service-card, .review-card, .om-text, .oppettider-text, .oppettider-address-block, .kontakt-block, .kontakt-map'
  );

  if ('IntersectionObserver' in window && revealEls.length) {
    /* Set initial state via JS so non-JS users still see content */
    revealEls.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(18px)';
      el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  }

}());
