// ── Nav effet du scroll ────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// ──  decouverte du scroll ────────────────────────────────
const revealElements = document.querySelectorAll(
  '.service-card, .gallery-item, .hero-card, .about-card, .about-text, .booking-form, .booking-text'
);

revealElements.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => observer.observe(el));

// ── Smooth scroll ────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ── carnet form ─────────────────────────────────
//logic du carnet de commande
function submitBooking() {
  const name    = document.getElementById('bookName').value.trim();
  const phone   = document.getElementById('bookPhone').value.trim();
  const service = document.getElementById('bookService').value;
  const date    = document.getElementById('bookDate').value;
  const confirm = document.getElementById('bookingConfirm');

  if (!name || !phone || !service || !date) {
    confirm.textContent = '⚠ Veuillez remplir tous les champs.';
    confirm.style.color = '#c0392b';
    return;
  }

  const dateFormatted = new Date(date).toLocaleDateString('fr-FR', {
    weekday: 'long', day: 'numeric', month: 'long'
  });

  confirm.textContent = `✓ RDV confirmé pour ${name} — ${service} — ${dateFormatted}`;
  confirm.style.color = '#2e7d32';

  document.getElementById('bookName').value    = '';
  document.getElementById('bookPhone').value   = '';
  document.getElementById('bookService').value = '';
  document.getElementById('bookDate').value    = '';
}

// ── Active nav link on scroll ────────────────────
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

    if (navLink) {
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-links a').forEach(l => l.style.color = '');
        navLink.style.color = '#1a1a18';
      }
    }
  });
});
// ── Back to top ──────────────────────────────────
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
