/* ============================================
   ECOTOUCH — Shared JavaScript
   ============================================ */

// ---------- Navbar scroll behavior ----------
const navbar = document.getElementById('navbar');
if (navbar) {
  const onScroll = () => {
    if (window.scrollY > 40) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ---------- Hamburger / mobile menu ----------
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// ---------- Intersection Observer: reveal + counters ----------
const animateCounter = (el, target, duration = 2000) => {
  const start = performance.now();
  const suffix = el.dataset.suffix || '';
  const update = (time) => {
    const elapsed = time - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const val = Math.floor(eased * target);
    el.textContent = val.toLocaleString('es-EC') + suffix;
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target.toLocaleString('es-EC') + suffix;
  };
  requestAnimationFrame(update);
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      if (entry.target.dataset.counter && !entry.target.dataset.counted) {
        entry.target.dataset.counted = '1';
        animateCounter(entry.target, parseInt(entry.target.dataset.counter, 10));
      }
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal, [data-counter]').forEach(el => observer.observe(el));

// ---------- Particles ----------
const initParticles = (container, count = 25) => {
  if (!container) return;
  const isMobile = window.innerWidth < 768;
  const n = isMobile ? Math.min(10, Math.round(count * 0.4)) : count;
  for (let i = 0; i < n; i++) {
    const p = document.createElement('span');
    p.className = 'particle';
    const size = 2 + Math.random() * 4;
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;
    p.style.left = `${Math.random() * 100}%`;
    p.style.top = `${Math.random() * 100}%`;
    p.style.background = Math.random() > 0.5 ? '#1CF799' : '#2B83ED';
    p.style.boxShadow = `0 0 ${size * 3}px ${Math.random() > 0.5 ? '#1CF799' : '#2B83ED'}`;
    p.style.animationDelay = `${Math.random() * 12}s`;
    p.style.animationDuration = `${8 + Math.random() * 8}s`;
    container.appendChild(p);
  }
};

document.querySelectorAll('[data-particles]').forEach(el => {
  initParticles(el, parseInt(el.dataset.particles, 10) || 25);
});

// ---------- Parallax (desktop only) ----------
if (window.innerWidth >= 1024 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const parallaxEls = document.querySelectorAll('[data-parallax]');
  if (parallaxEls.length) {
    const onParallax = () => {
      const y = window.scrollY;
      parallaxEls.forEach(el => {
        const speed = parseFloat(el.dataset.parallax) || 0.3;
        el.style.transform = `translateY(${y * speed}px)`;
      });
    };
    window.addEventListener('scroll', onParallax, { passive: true });
  }
}
