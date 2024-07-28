document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');

    // Function to set the theme
    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };

    // Event listener for the theme toggle button
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

    // Retrieve the user's last theme preference from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        // Set the theme based on the user's system preference if no preference is saved
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const defaultTheme = prefersDarkScheme ? 'dark' : 'light';
        setTheme(defaultTheme);
    }
});

