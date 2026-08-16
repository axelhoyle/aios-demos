// ===========================
// Mobile nav toggle
// ===========================
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var navList = document.querySelector('.nav-list');

  if (!toggle || !navList) return;

  toggle.addEventListener('click', function () {
    var isOpen = navList.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close on link click
  navList.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navList.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

// ===========================
// Touch/tap flip for service cards (mobile — no hover)
// ===========================
(function () {
  var cards = document.querySelectorAll('.card-flip-wrapper');

  cards.forEach(function (card) {
    // Keyboard: Enter / Space toggles flip
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.classList.toggle('flipped');
      }
    });

    // Touch: toggle on tap only on touch devices
    var touchMoved = false;

    card.addEventListener('touchstart', function () {
      touchMoved = false;
    }, { passive: true });

    card.addEventListener('touchmove', function () {
      touchMoved = true;
    }, { passive: true });

    card.addEventListener('touchend', function (e) {
      if (!touchMoved) {
        e.preventDefault();
        card.classList.toggle('flipped');
      }
    });
  });
})();
