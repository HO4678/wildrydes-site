// Get the body element
const body = document.body;

// Function to toggle themes
function toggleTheme(theme) {
    // Remove existing theme classes
    body.classList.remove('theme-default', 'theme-dark', 'theme-light');

    // Add the selected theme class
    body.classList.add(theme);
}

// Example: Toggle theme on button click
const themeButton = document.getElementById('theme-toggle-button');
themeButton.addEventListener('click', function() {
    // Toggle between themes
    if (body.classList.contains('theme-default')) {
        toggleTheme('theme-dark');
    } else if (body.classList.contains('theme-dark')) {
        toggleTheme('theme-light');
    } else {
        toggleTheme('theme-default');
    }
});
