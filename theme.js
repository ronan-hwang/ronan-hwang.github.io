// Theme
const root = document.documentElement;
const toggle = document.getElementById('themeToggle');

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'dark';
root.setAttribute('data-theme', savedTheme);

// Toggle theme
if (toggle) {
    toggle.addEventListener('click', () => {
        const current = root.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';

        root.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });
}

// Animation delay every time you scroll through focus cards
const reveal = document.querySelectorAll('.card, .focus-card');

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {

    if (entry.isIntersecting) {
      // Add staggered animation
      setTimeout(() => entry.target.classList.add('in-view'), i * 90);
    } else {
      // Remove class so animation can replay
      entry.target.classList.remove('in-view');
    }

  });
}, { threshold: 0.2 });

reveal.forEach(c => io.observe(c));


//  Footer - Automatically insert the current year
document.getElementById("year").textContent = new Date().getFullYear();
