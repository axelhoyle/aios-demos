(function(){
  'use strict';

  // ===== THEME TOGGLE =====
  var btn = document.getElementById('themeToggle');
  if(btn){
    btn.addEventListener('click', function(){
      var html = document.documentElement;
      var current = html.getAttribute('data-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }

  // ===== MOBILE NAV =====
  var navToggle = document.getElementById('navToggle');
  var siteNav = document.querySelector('.site-nav');
  if(navToggle && siteNav){
    navToggle.addEventListener('click', function(){
      var open = siteNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    // close on link click
    siteNav.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){
        siteNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ===== HERO PARALLAX =====
  var heroBg = document.getElementById('heroBg');
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if(heroBg && !prefersReduced){
    var ticking = false;
    var lastY = 0;
    var mouseX = 0, mouseY = 0;

    function applyTransform(){
      var scrollFactor = lastY * 0.25;
      var mx = (mouseX - window.innerWidth/2) * 0.015;
      var my = (mouseY - window.innerHeight/2) * 0.015;
      heroBg.style.transform = 'translate3d('+ (mx) +'px, '+ (scrollFactor + my) +'px, 0)';
      ticking = false;
    }

    window.addEventListener('scroll', function(){
      lastY = window.scrollY;
      if(!ticking){
        requestAnimationFrame(applyTransform);
        ticking = true;
      }
    }, {passive: true});

    window.addEventListener('mousemove', function(e){
      mouseX = e.clientX;
      mouseY = e.clientY;
      if(!ticking){
        requestAnimationFrame(applyTransform);
        ticking = true;
      }
    }, {passive: true});
  }

})();
