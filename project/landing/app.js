/* SapiensChess landing — interactivity */

// ===== Category filter (block 3) =====
(function() {
  const chips = document.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('.cat-card');
  if (!chips.length) return;

  function apply(filter) {
    chips.forEach(c => c.classList.toggle('active', c.dataset.filter === filter));
    if (filter === 'all') {
      cards.forEach(c => c.classList.remove('match'));
      return;
    }
    cards.forEach(c => {
      const tags = (c.dataset.tags || '').split(' ');
      c.classList.toggle('match', tags.includes(filter));
    });
  }
  chips.forEach(c => c.addEventListener('click', () => apply(c.dataset.filter)));
})();

// ===== Form: inline validation + mock submit =====
(function() {
  const form = document.getElementById('register-form');
  if (!form) return;

  const submitBtn = form.querySelector('.submit');
  const consent = form.querySelector('[name="consent"]');
  const required = form.querySelectorAll('[required]');

  function isFieldValid(el) {
    if (el.type === 'checkbox') return el.checked;
    if (el.type === 'email') return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value);
    if (el.type === 'tel') return /^\+?[\d\s\(\)\-]{10,}$/.test(el.value);
    if (el.name === 'fio') return el.value.trim().split(/\s+/).length >= 2 && el.value.trim().length >= 5;
    return el.value.trim().length > 0;
  }

  function checkSubmit() {
    const ok = Array.from(required).every(isFieldValid) && consent.checked;
    submitBtn.disabled = !ok;
  }

  required.forEach(el => {
    el.addEventListener('blur', () => {
      const wrap = el.closest('.field') || el.closest('.checkbox-row');
      if (!wrap) return;
      const valid = isFieldValid(el);
      wrap.classList.toggle('invalid', !valid && el.value !== '');
      checkSubmit();
    });
    el.addEventListener('input', checkSubmit);
    el.addEventListener('change', checkSubmit);
  });
  consent.addEventListener('change', checkSubmit);

  // Phone mask (simple)
  const phone = form.querySelector('[name="phone"]');
  phone && phone.addEventListener('input', e => {
    let v = e.target.value.replace(/\D/g, '');
    if (v.startsWith('8')) v = '7' + v.slice(1);
    if (v.length && !v.startsWith('7')) v = '7' + v;
    v = v.slice(0, 11);
    const parts = [
      v.length > 0 ? '+7' : '',
      v.length > 1 ? ' (' + v.slice(1, 4) : '',
      v.length > 4 ? ') ' + v.slice(4, 7) : '',
      v.length > 7 ? '-' + v.slice(7, 9) : '',
      v.length > 9 ? '-' + v.slice(9, 11) : '',
    ];
    e.target.value = parts.join('');
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    // Honeypot check
    if (form.querySelector('[name="company"]').value) return;
    // Mock submit — show thanks
    document.getElementById('form-block').style.display = 'none';
    document.getElementById('thanks-block').style.display = 'block';
    document.getElementById('thanks-block').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
})();

// ===== Header: shrink on scroll =====
(function() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    header.style.boxShadow = y > 40 ? '0 4px 20px rgba(0,0,0,0.25)' : 'none';
    lastY = y;
  }, { passive: true });
})();
