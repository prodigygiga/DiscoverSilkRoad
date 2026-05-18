'use strict';

/* ── Nav: scroll state ─────────────────────────────────── */
const header = document.getElementById('site-header');

const updateHeaderState = () => {
  header.classList.toggle('is-scrolled', window.scrollY > 40);
};

window.addEventListener('scroll', updateHeaderState, { passive: true });
updateHeaderState();

/* ── Nav: mobile menu ──────────────────────────────────── */
const navToggle = document.getElementById('nav-toggle');
const navMenu   = document.getElementById('nav-menu');

const backdrop = document.createElement('div');
backdrop.className = 'nav__backdrop';
document.body.appendChild(backdrop);

const openMenu = () => {
  navMenu.classList.add('is-open');
  backdrop.classList.add('is-open');
  navToggle.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
};

const closeMenu = () => {
  navMenu.classList.remove('is-open');
  backdrop.classList.remove('is-open');
  navToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
};

navToggle.addEventListener('click', () => {
  navToggle.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu();
});

backdrop.addEventListener('click', closeMenu);

navMenu.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMenu();
});

/* ── Nav: active link on scroll ───────────────────────── */
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav__link[data-section]');

const activateLink = () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });

  navLinks.forEach(link => {
    link.classList.toggle('is-active', link.dataset.section === current);
  });
};

window.addEventListener('scroll', activateLink, { passive: true });
activateLink();

/* ── Scroll reveal ─────────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

const revealEls = [
  '.tour-card',
  '.dest-card',
  '.gallery__item',
  '.testimonial',
  '.about__content',
  '.about__media',
  '.section__header',
  '.contact__info',
  '.contact__form-wrap',
].join(', ');

document.querySelectorAll(revealEls).forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = `${(i % 4) * 80}ms`;
  revealObserver.observe(el);
});

/* ── Contact form ──────────────────────────────────────── */
const form = document.getElementById('contact-form');

form?.addEventListener('submit', async (e) => {
  e.preventDefault();

  const btn = form.querySelector('button[type="submit"]');
  const orig = btn.textContent;

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  btn.textContent = 'Sending…';
  btn.disabled = true;

  // Replace this with your actual form endpoint (e.g. Formspree, EmailJS, WP REST API)
  await new Promise(r => setTimeout(r, 1200));

  btn.textContent = 'Message Sent!';
  btn.style.background = '#2d6a35';

  setTimeout(() => {
    btn.textContent = orig;
    btn.disabled = false;
    btn.style.background = '';
    form.reset();
  }, 3500);
});

/* ── Footer year ───────────────────────────────────────── */
const yearEl = document.getElementById('footer-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ── Gallery lightbox (simple) ─────────────────────────── */
const galleryItems = document.querySelectorAll('.gallery__item img');

if (galleryItems.length) {
  const lightbox   = document.createElement('div');
  lightbox.id      = 'lightbox';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-label', 'Image lightbox');
  lightbox.style.cssText = `
    display:none; position:fixed; inset:0; z-index:200;
    background:rgba(10,16,10,0.95); align-items:center;
    justify-content:center; cursor:zoom-out; padding:2rem;
  `;

  const lbImg = document.createElement('img');
  lbImg.style.cssText = `
    max-width:90vw; max-height:90vh; object-fit:contain;
    border-radius:8px; box-shadow:0 24px 80px rgba(0,0,0,0.5);
  `;

  const lbClose = document.createElement('button');
  lbClose.innerHTML = '&times;';
  lbClose.setAttribute('aria-label', 'Close lightbox');
  lbClose.style.cssText = `
    position:absolute; top:1.5rem; right:1.5rem;
    font-size:2rem; color:#fff; background:none; border:none;
    cursor:pointer; line-height:1; opacity:0.7;
  `;

  lightbox.append(lbClose, lbImg);
  document.body.appendChild(lightbox);

  const openLightbox = (src, alt) => {
    lbImg.src = src;
    lbImg.alt = alt;
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  };

  const closeLightbox = () => {
    lightbox.style.display = 'none';
    document.body.style.overflow = '';
  };

  galleryItems.forEach(img => {
    img.parentElement.style.cursor = 'zoom-in';
    img.addEventListener('click', () => openLightbox(img.src, img.alt));
    img.addEventListener('keydown', e => e.key === 'Enter' && openLightbox(img.src, img.alt));
    img.tabIndex = 0;
  });

  lbClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && lightbox.style.display !== 'none') closeLightbox(); });
}
