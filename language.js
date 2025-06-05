// Store the current language
let currentLang = 'ar';

// Function to switch language
function switchLanguage(lang) {
    // Update current language
    currentLang = lang;

    // Update HTML dir attribute
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    // Update all elements with data-ar and data-en attributes
    document.querySelectorAll('[data-ar][data-en]').forEach(element => {
        element.textContent = element.getAttribute(`data-${lang}`);
    });

    // Update button states
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Store language preference
    localStorage.setItem('preferredLanguage', lang);
}

// Check for saved language preference
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        switchLanguage(savedLang);
    }
}); 