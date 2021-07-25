import templateCards from '../template/menu-template.hbs';
import cards from '../data/menu.json';


const refs = {
    menuList: document.querySelector('.js-menu'),
    themeSwitch: document.querySelector('.theme-switch__toggle'),
    body: document.body,
};

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

(function () {
    refs.body.classList.add(localStorage.getItem("theme") ? localStorage.getItem("theme") : Theme.LIGHT);
    refs.themeSwitch.checked = localStorage.getItem("theme") === Theme.DARK;
})();

refs.menuList.insertAdjacentHTML('beforeend', templateCards(cards));
refs.themeSwitch.addEventListener("change", onChengeTheme);

function toggleTheme(add, rem) {
    refs.body.classList.replace(rem, add);
    localStorage.setItem("theme", add)
};

function onChengeTheme(e) {
    e.target.checked ? toggleTheme(Theme.DARK, Theme.LIGHT) : toggleTheme(Theme.LIGHT, Theme.DARK);
};


