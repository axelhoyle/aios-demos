/* Pure Mei — script.js
   Minimal parallax on hero background only.
   site-kit.js handles booking, reviews, opening hours, FAQ, reveal. */

(function () {
  'use strict';

  var hero = document.querySelector('.hero');
  var ticking = false;
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!hero || prefersReduced) return;

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(function () {
        var scrollY = window.scrollY;
        // Subtle parallax: move the cream hero bg slower than the page
        hero.style.backgroundPositionY = (scrollY * 0.35) + 'px';
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
})();
