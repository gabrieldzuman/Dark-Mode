const DARK_MODE_CLASS = "dark-mode";
const LIGHT_MODE_CLASS = "light-mode";
const DARK_MODE_TEXT_ID = "DarkModetext";

function toggleMode() {
    var element = document.body;
    var content = document.getElementById(DARK_MODE_TEXT_ID);

    if (element.classList.contains(DARK_MODE_CLASS)) {
        enableLightMode(element, content);
    } else {
        enableDarkMode(element, content);
    }
}

function enableDarkMode(element, content) {
    element.classList.remove(LIGHT_MODE_CLASS);
    element.classList.add(DARK_MODE_CLASS);
    content.innerText = "Dark Mode is ON";
}

function enableLightMode(element, content) {
    element.classList.remove(DARK_MODE_CLASS);
    element.classList.add(LIGHT_MODE_CLASS);
    content.innerText = "Dark Mode is OFF";
}
