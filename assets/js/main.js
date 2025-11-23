/**
 * AI Analyzer - Main Logic
 * Handles global functionality like Theme Toggle and Navbar
 */

document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggleBtn?.querySelector('i');

    // Check localStorage for saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark-mode';
    body.classList.add(savedTheme);
    updateIcon(savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            if (body.classList.contains('dark-mode')) {
                body.classList.replace('dark-mode', 'light-mode');
                localStorage.setItem('theme', 'light-mode');
                updateIcon('light-mode');
            } else {
                body.classList.replace('light-mode', 'dark-mode');
                localStorage.setItem('theme', 'dark-mode');
                updateIcon('dark-mode');
            }
        });
    }

    function updateIcon(theme) {
        if (!icon) return;
        if (theme === 'dark-mode') {
            icon.classList.remove('bi-moon-fill');
            icon.classList.add('bi-sun-fill');
        } else {
            icon.classList.remove('bi-sun-fill');
            icon.classList.add('bi-moon-fill');
        }
    }

    // Navbar Active State
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath.split('/').pop()) {
            link.classList.add('active');
        }
    });
});
