document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    document.body.classList.toggle('dark-theme', currentTheme === 'dark');

    themeToggleButton.addEventListener('click', () => {
        const newTheme = document.body.classList.contains('dark-theme') ? 'light' : 'dark';

        document.body.classList.toggle('dark-theme', newTheme === 'dark');

        localStorage.setItem('theme', newTheme);

    });
});

