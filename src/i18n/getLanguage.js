// get Browser/OS language by navigator object
function getUserEnvironmentLanguage() {
    return navigator && navigator.language;
}

// get stored language
function getStoredLanguage() {
    return localStorage.getItem('language');
}

// this is actually used in a component to get customer language
function getLanguage() {
    const defaultLanguage = 'en_US';
    return getStoredLanguage() || getUserEnvironmentLanguage() || defaultLanguage;
}

export default getLanguage;