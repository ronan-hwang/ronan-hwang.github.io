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