var heading = document.getElementById('heading');

/**
 * TODO(Tanvir Waseer): I need to write a prioritization algorithm which displays the hello in the language based on the user's location
 */

var typewriter = new Typewriter(heading, {
    loop: true,
    strings: [
        "Hello",     // English
        "Bonjour",   // French
        "你好",       // Mandarin Chinese
        "Hola",      // Spanish
        "Namaste",   // Hindi
        "Halo",      // Bengali
        "Olá",       // Portuguese
        "Привет"     // Russian
    ],
    autoStart: true,
    pauseFor: 2500,
    cursor: '_'
});