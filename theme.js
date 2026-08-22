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


// Card reveal animation
const reveal = document.querySelectorAll('.card, .focus-card');

if (reveal.length > 0) {
    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, {
        threshold: 0.2
    });

    reveal.forEach((card) => io.observe(card));
}

//  Footer - Automatically insert the current year
document.getElementById("year").textContent = new Date().getFullYear();
