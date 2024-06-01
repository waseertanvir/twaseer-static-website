// Function to toggle between light and dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode"); // Toggle dark mode class on body
    const isDarkMode = body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode); // Save dark mode preference in local storage
}

// Function to initialize dark mode based on user preference
function initializeDarkMode() {
    const isDarkMode = JSON.parse(localStorage.getItem("darkMode"));
    if (isDarkMode) {
        document.body.classList.add("dark-mode");
    }
}

// Initialize dark mode
initializeDarkMode();
