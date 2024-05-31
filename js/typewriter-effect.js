var heading = document.getElementById('heading');

/**
 * TODO(Tanvir Waseer): I need to write a prioritization algorithm which displays the hello in the language based on the user's location
 */

var typewriter = new Typewriter(heading, {
    loop: true,
    strings: [
        "hello",
        "bonjour",         // French
        "नमस्ते",          // Hindi
        "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",    // Punjabi
        "hola",            // Spanish
        "你好",             // Chinese (Mandarin)
        "مرحبا",           // Arabic
        "Здравствуйте",    // Russian
        "olá",             // Portuguese
        "こんにちは",        // Japanese
        "hallo",           // German
        "ciao",            // Italian
        "안녕하세요",        // Korean
        "merhaba",         // Turkish
        "habari",          // Swahili
        "hallo"            // Dutch
    ],
    autoStart: true,
    pauseFor: 2500,
    cursor: '_'
});