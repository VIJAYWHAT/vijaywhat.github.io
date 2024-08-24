document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    document.body.classList.toggle('dark-theme', currentTheme === 'dark');

    updateIcon(currentTheme);

    themeToggleButton.addEventListener('click', () => {
        const newTheme = document.body.classList.contains('dark-theme') ? 'light' : 'dark';

        document.body.classList.toggle('dark-theme', newTheme === 'dark');

        localStorage.setItem('theme', newTheme);

        updateIcon(newTheme);
    });
});

function updateIcon(theme) {
    const icon = document.querySelector('#theme-toggle i');
    if (theme === 'dark') {
        icon.classList.remove('fa-toggle-off');
        icon.classList.add('fa-toggle-on');
    } else {
        icon.classList.remove('fa-toggle-on');
        icon.classList.add('fa-toggle-off');
    }
}
