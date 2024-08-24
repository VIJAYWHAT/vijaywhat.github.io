document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    // Store the theme in localStorage
    const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
});

// Apply the stored theme on page load
window.addEventListener('load', () => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        document.body.classList.add(storedTheme);
    }
});
