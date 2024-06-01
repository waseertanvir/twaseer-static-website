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

function toggleIcon() {
    const toggleBtn = document.getElementById("toggleBtn");
    const moonIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16"><path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/></svg>';
    const moonFillIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16"><path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/></svg>';

    let isMoonFilled = false; // Flag to track the state of the moon icon

    // Function to toggle the icon
    function toggleIcon() {
        if (isMoonFilled) {
            toggleBtn.innerHTML = moonIcon; // Change to outlined moon icon
        } else {
            toggleBtn.innerHTML = moonFillIcon; // Change to filled moon icon
        }
        isMoonFilled = !isMoonFilled; // Toggle the flag
    }
}

function enableDarkModeOnStart() {
    toggleIcon()
}

enableDarkModeOnStart();