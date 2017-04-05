document.getElementById('light-theme-button').addEventListener('click', function(event) {
    swapTheme('indigo_light.css')
})

document.getElementById('dark-theme-button').addEventListener('click', function(event) {
    swapTheme('indigo_dark.css')
})

function swapTheme(newThemeFileName) {
    document.getElementById('theme').setAttribute('href', 'css/themes/' + newThemeFileName);
}
