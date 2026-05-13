/* Tweaks panel logic + minimal form-step navigation */
(function() {
  const body = document.body;

  // --- Tweaks panel show/hide
  const trigger = document.getElementById('tweaks-trigger');
  const closeBtn = document.getElementById('tweaks-close');
  trigger.addEventListener('click', () => body.classList.add('tweaks-on'));
  closeBtn.addEventListener('click', () => body.classList.remove('tweaks-on'));

  // --- Tweak buttons
  function bindGroup(attr) {
    document.querySelectorAll(`[data-${attr}]`).forEach(el => {
      // Only the buttons inside the tweaks panel — they're the only ones with data-<attr> as a button
      if (el.tagName !== 'BUTTON') return;
      if (!el.closest('.tweaks')) return;
      el.addEventListener('click', () => {
        body.setAttribute(`data-${attr}`, el.dataset[attr]);
        // Mark active in the same group
        const group = el.parentElement;
        group.querySelectorAll('button').forEach(b => b.classList.remove('active'));
        el.classList.add('active');
      });
    });
  }
  bindGroup('mood');
  bindGroup('hero');
  bindGroup('density');
  bindGroup('checker');

  // --- Form step navigation
  const steps = Array.from(document.querySelectorAll('.form-step'));
  const progressSteps = Array.from(document.querySelectorAll('.progress-step'));
  const progressFill = document.getElementById('progress-fill');
  const thanks = document.querySelector('.thanks');

  function setStep(n) {
    if (n === 'thanks') {
      steps.forEach(s => s.classList.remove('active'));
      thanks.classList.add('active');
      progressFill.style.width = '100%';
      progressSteps.forEach(s => s.classList.add('done'));
      progressSteps.forEach(s => s.classList.remove('active'));
      return;
    }
    thanks.classList.remove('active');
    steps.forEach(s => s.classList.toggle('active', s.dataset.step === String(n)));
    progressSteps.forEach(s => {
      const sN = parseInt(s.dataset.step, 10);
      s.classList.toggle('active', sN === n);
      s.classList.toggle('done', sN < n);
    });
    progressFill.style.width = (n / 3 * 100) + '%';
  }

  document.querySelectorAll('[data-go]').forEach(b => {
    b.addEventListener('click', (e) => {
      e.preventDefault();
      const target = b.dataset.go;
      setStep(target === 'thanks' ? 'thanks' : parseInt(target, 10));
      // smooth scroll the form into view
      document.getElementById('register').scrollIntoView({behavior: 'smooth', block: 'start'});
    });
  });

  const payBtn = document.getElementById('pay-btn');
  if (payBtn) {
    payBtn.addEventListener('click', () => setStep('thanks'));
  }

  // --- Radio-pill visual sync
  document.querySelectorAll('.radio-group').forEach(group => {
    group.addEventListener('change', () => {
      group.querySelectorAll('.radio-pill').forEach(p => {
        p.classList.toggle('selected', p.querySelector('input').checked);
      });
    });
  });

  // --- Category recommender
  const recAge = document.getElementById('rec-age');
  const recRating = document.getElementById('rec-rating');
  const recResult = document.getElementById('rec-result-value');
  const catCards = document.querySelectorAll('#cat-grid .cat-card');

  // Mapping: [age, rating] -> recommended category letter
  const REC_TABLE = {
    'young:':    'F',
    'young:low': 'F',
    'young:mid': 'F',
    'young:high':'F',
    'young:top': 'F',
    'mid:':      'D',
    'mid:low':   'D',
    'mid:mid':   'C',
    'mid:high':  'B',
    'mid:top':   'A',
    'senior:':   'B',
    'senior:low':'D',
    'senior:mid':'C',
    'senior:high':'B',
    'senior:top':'A',
  };

  const CAT_NAMES = { A: 'A · Классика', B: 'B · Рапид старшие', C: 'C · Рапид средние', D: 'D · Рапид младшие', E: 'E · Блиц Open', F: 'F · Grand Baby Chess' };

  function updateRecommender() {
    if (!recAge || !recResult) return;
    const age = recAge.value;
    const rating = recRating ? recRating.value : '';

    if (!age) {
      recResult.textContent = 'Выберите параметры →';
      catCards.forEach(c => c.classList.remove('match', 'dim'));
      return;
    }

    const key = age + ':' + rating;
    const cat = REC_TABLE[key] || null;

    if (cat) {
      recResult.textContent = CAT_NAMES[cat] || cat;
      catCards.forEach(c => {
        const isCat = c.dataset.cat === cat;
        c.classList.toggle('match', isCat);
        c.classList.toggle('dim', !isCat);
      });
    } else {
      recResult.textContent = 'Выберите параметры →';
      catCards.forEach(c => c.classList.remove('match', 'dim'));
    }
  }

  if (recAge) recAge.addEventListener('change', updateRecommender);
  if (recRating) recRating.addEventListener('change', updateRecommender);
})();
