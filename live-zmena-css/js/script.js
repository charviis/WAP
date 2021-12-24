function toggleTheme() {
    
    var theme = document.getElementsByTagName('link')[0];

    if (theme.getAttribute('href') == 'light.css') {
        theme.setAttribute('href', 'dark.css');
    } else {
        theme.setAttribute('href', 'light.css');
    }
}