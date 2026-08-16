// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

if (navToggle && navList) {
  navToggle.addEventListener('click', function () {
    const isOpen = navList.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close nav on link click
  navList.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navList.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Mobile card flip (tap to toggle)
if (window.matchMedia('(hover: none)').matches || window.innerWidth <= 480) {
  document.querySelectorAll('.card').forEach(function (card) {
    if (window.innerWidth > 480) {
      card.addEventListener('click', function () {
        card.classList.toggle('flipped');
      });
    }
  });
}

// Re-evaluate on resize
window.addEventListener('resize', function () {
  if (window.innerWidth > 480) {
    document.querySelectorAll('.card').forEach(function (card) {
      card.addEventListener('click', function () {
        card.classList.toggle('flipped');
      });
    });
  }
});
