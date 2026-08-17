// ACTON ENERGY: shared behaviour: nav, reveals
(function () {
  'use strict';

  // mobile nav
  var toggle = document.querySelector('.nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = document.body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // mark current page in nav
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === here) a.setAttribute('aria-current', 'page');
  });

  // scroll reveals
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    // SMIL-Animationen (Hero-SVG) pausieren; CSS deckt nur animation/transition ab
    document.querySelectorAll('svg').forEach(function (s) {
      if (s.pauseAnimations) { try { s.pauseAnimations(); s.setCurrentTime(0); } catch (e) {} }
    });
  }
  var targets = document.querySelectorAll('.reveal, .reveal-stagger');
  if (reduced || !('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    targets.forEach(function (el) { io.observe(el); });
  }

  // footer year
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
