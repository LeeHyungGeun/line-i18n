function getUserEnvironmentLanguage() {
    return navigator && navigator.language;
}

function getStoredLanguage() {
    return localStorage.getItem('language');
}

function getLanguage() {
    const defaultLanguage = 'en_US';
    return getStoredLanguage() || getUserEnvironmentLanguage() || defaultLanguage;
}

export default getLanguage;