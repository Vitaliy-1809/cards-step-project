import Component from "./Component.js";
import {headerClasses} from "./config.js";

export default class Header extends Component {
    constructor(classes) {
        const elements = {
            parent: document.body,
            self: document.createElement('header'),
            nav: document.createElement('nav'),
            container: document.createElement('div'),
            link: document.createElement('a'),
            logo: document.createElement('img'),
            loginBtn: document.createElement('button'),
            createVisitBtn: document.createElement('button'),
        };

        super(elements, classes);
    }

    async render() {
        const {self, nav, container, link, logo, loginBtn, createVisitBtn} = this.elements;

        link.href = '#';
        link.textContent = 'Medical';

        logo.src = './dist/img/logo.svg';
        logo.alt = 'logo';

        loginBtn.id = 'login';
        loginBtn.textContent = 'Log in';

        createVisitBtn.id = 'createVisit'
        createVisitBtn.textContent = 'Create visit';

        self.append(nav);
        nav.append(container);
        container.append(link);
        link.prepend(logo);

        if (window.localStorage.getItem('token')) {
            container.append(createVisitBtn);
        } else {
            container.append(loginBtn);
        }

        loginBtn.addEventListener('click', () => {
            document.querySelector('#loginFormModal').classList.add('active');
        });

        createVisitBtn.addEventListener('click', () => {
            document.querySelector('#visitFormModal').classList.add('active');
        });

        super.render();
    }
}

new Header(headerClasses).render();