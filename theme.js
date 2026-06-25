/* ── BRIGHT ENGMATH THEME JS ── */
'use strict';

/* ── HEADER: scroll shadow + sticky ── */
(function () {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const update = () => header.classList.toggle('scrolled', window.scrollY > 8);
  window.addEventListener('scroll', update, { passive: true });
  update();
})();

/* ── ANNOUNCEMENT BAR dismiss ── */
(function () {
  const btn = document.querySelector('.announcement-bar__close');
  const bar = document.querySelector('.announcement-bar');
  if (!btn || !bar) return;
  btn.addEventListener('click', () => {
    bar.style.maxHeight = bar.offsetHeight + 'px';
    requestAnimationFrame(() => {
      bar.style.transition = 'max-height 0.3s ease, opacity 0.3s ease';
      bar.style.maxHeight = '0';
      bar.style.opacity = '0';
      bar.style.overflow = 'hidden';
    });
    try { sessionStorage.setItem('be-announcement-dismissed', '1'); } catch (_) {}
  });
  try {
    if (sessionStorage.getItem('be-announcement-dismissed') === '1') {
      bar.style.display = 'none';
    }
  } catch (_) {}
})();

/* ── MOBILE MENU ── */
(function () {
  const hamburger = document.querySelector('.site-header__hamburger');
  const menu = document.querySelector('.mobile-menu');
  const overlay = document.querySelector('.mobile-menu__overlay');
  if (!hamburger || !menu) return;

  function openMenu() {
    menu.classList.add('is-open');
    if (overlay) overlay.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    menu.classList.remove('is-open');
    if (overlay) overlay.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    const isOpen = menu.classList.contains('is-open');
    isOpen ? closeMenu() : openMenu();
  });
  if (overlay) overlay.addEventListener('click', closeMenu);
  menu.querySelectorAll('.mobile-menu__link').forEach(l => l.addEventListener('click', closeMenu));
})();

/* ── FAQ ACCORDION ── */
(function () {
  document.querySelectorAll('.faq-item__btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('is-open');
      // close all
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('is-open'));
      // open this one if it was closed
      if (!isOpen) item.classList.add('is-open');
    });
  });
})();

/* ── PRODUCT TABS ── */
(function () {
  const navBtns = document.querySelectorAll('.product-tabs__btn');
  if (!navBtns.length) return;
  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      navBtns.forEach(b => b.classList.remove('is-active'));
      document.querySelectorAll('.product-tabs__panel').forEach(p => p.classList.remove('is-active'));
      btn.classList.add('is-active');
      const panel = document.querySelector(`.product-tabs__panel[data-tab="${target}"]`);
      if (panel) panel.classList.add('is-active');
    });
  });
})();

/* ── PRODUCT IMAGE THUMBNAILS ── */
(function () {
  const thumbs = document.querySelectorAll('.product-page__thumb');
  if (!thumbs.length) return;
  thumbs.forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
      thumbs.forEach(t => t.classList.remove('is-active'));
      thumb.classList.add('is-active');
      // Shopify handles image swap via data-index
      const mainImg = document.querySelector('.product-page__main-img img');
      const src = thumb.dataset.src;
      if (mainImg && src) mainImg.src = src;
    });
  });
})();

/* ── ADD TO CART (ajax) ── */
(function () {
  document.querySelectorAll('[data-add-to-cart]').forEach(btn => {
    btn.addEventListener('click', async function (e) {
      e.preventDefault();
      const form = this.closest('form[data-product-form]') || document.querySelector('form[data-product-form]');
      if (!form) return;
      const variantId = form.querySelector('[name="id"]')?.value;
      if (!variantId) return;

      const originalText = this.textContent;
      this.disabled = true;
      this.textContent = 'กำลังเพิ่ม...';

      try {
        const res = await fetch('/cart/add.js', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: variantId, quantity: 1 })
        });
        if (res.ok) {
          this.textContent = '✓ เพิ่มแล้ว!';
          updateCartCount();
          setTimeout(() => {
            this.textContent = originalText;
            this.disabled = false;
          }, 2000);
        }
      } catch (_) {
        this.textContent = originalText;
        this.disabled = false;
      }
    });
  });

  async function updateCartCount() {
    try {
      const res = await fetch('/cart.js');
      const data = await res.json();
      const badge = document.querySelector('.site-header__cart-count');
      if (badge) {
        badge.textContent = data.item_count;
        badge.style.display = data.item_count > 0 ? 'flex' : 'none';
      }
    } catch (_) {}
  }
  updateCartCount();
})();

/* ── SORT SELECT (collection) ── */
(function () {
  const sortSelect = document.querySelector('[data-sort-by]');
  if (!sortSelect) return;
  sortSelect.addEventListener('change', function () {
    const url = new URL(window.location.href);
    url.searchParams.set('sort_by', this.value);
    window.location.href = url.toString();
  });
  // Set current value
  const current = new URL(window.location.href).searchParams.get('sort_by');
  if (current) sortSelect.value = current;
})();

/* ── CONTACT FORM ── */
(function () {
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    // Shopify handles contact form natively
    // This just shows a success animation
    const btn = form.querySelector('[data-submit-btn]');
    if (btn) btn.textContent = 'กำลังส่ง...';
  });
})();

/* ── LAZY ANIMATION (IntersectionObserver) ── */
(function () {
  if (!('IntersectionObserver' in window)) return;
  const els = document.querySelectorAll('[data-animate]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeUp 0.6s ease both';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => io.observe(el));
})();
