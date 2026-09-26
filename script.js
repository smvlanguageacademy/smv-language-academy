const html = document.documentElement;
const langButton = document.querySelector('[data-action="language"]');
const menuButton = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

function applyLanguage(lang){
  html.dataset.lang = lang;
  html.lang = lang === 'si' ? 'si' : 'en';
  document.querySelectorAll('[data-si][data-en]').forEach(el => {
    el.textContent = el.dataset[lang];
  });
  langButton.textContent = lang === 'si' ? 'EN' : 'සිං';
}

langButton.addEventListener('click', () => {
  applyLanguage(html.dataset.lang === 'si' ? 'en' : 'si');
});

menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? '✕' : '☰';
});

document.querySelectorAll('.nav a').forEach(a => {
  a.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = '☰';
  });
});

document.getElementById('contactForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const level = document.getElementById('level').value;
  const message = document.getElementById('message').value.trim() || 'I want to join the Japanese course.';
  const text = `Hello SMV Language Academy,%0A%0AName: ${encodeURIComponent(name)}%0ALevel: ${encodeURIComponent(level)}%0AMessage: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/94772572396?text=${text}`, '_blank', 'noopener');
});

document.getElementById('year').textContent = new Date().getFullYear();
applyLanguage('si');
