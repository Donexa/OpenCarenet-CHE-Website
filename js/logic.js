import { NavBar, Footer, LandingBody } from './components.js';

const homePath = localStorage.getItem('home') ?? '/';
const cLocale = localStorage.getItem('locale') ?? 'en';


function innerHTML(key, html) {
    if (document.querySelector(key)) {
        document.querySelectorAll(key).forEach((element) => {
            element.innerHTML = html;
        });
    }
}

function insertTemplates({ locale = 'fr' }) {
    innerHTML('#nav', NavBar(locale, homePath));
    innerHTML('#footer', Footer(locale, homePath));
    innerHTML('#landingBody', LandingBody(locale, homePath));
    selectListener({
        key: "locale-changer", onChange: (value) => {
            insertTemplates({ locale: value });
        }
    });
}

function selectListener({ key = "", onChange = () => { } }) {
    if (document.getElementById(key)) {
        document.getElementById(key).onchange = function (e) {
            const { value } = e.target;
            localStorage.setItem("locale", value)
            onChange(value);
        }
    }
}

insertTemplates({ locale: cLocale });
