const theme = document.querySelector('.theme-input');
const initialState = localStorage.getItem('themeState') == 'true';
theme.checked = initialState;
setTheme();

theme.addEventListener('change', function () {
    setTheme();
    localStorage.setItem('themeState', theme.checked);
});

function setTheme() {
    document.documentElement.setAttribute("data-theme", theme.checked ? "dark" : "light");
}