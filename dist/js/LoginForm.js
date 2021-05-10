import Component from "./Component.js";
import Input from "./Input.js";
import API from "./API.js";
import {cardClasses, email, filterClasses, headerClasses, password} from "./config.js";
import Filter from "./Filter.js";
import Header from "./Header.js";
import Card from "./Card.js";
import {clearDefaultText} from "./scripts.js";

export default class LoginForm extends Component {
    constructor(classes) {
        const elements = {
            parent: document.querySelector('#loginFormWrapper'),
            self: document.createElement('form'),
            labelForEmail: document.createElement('label'),
            labelForPassword: document.createElement('label'),
            btnSubmit: document.createElement('button'),
            error: document.createElement('div'),
            inputEmail: new Input(email).render(),
            inputPassword: new Input(password).render()
        }

        super(elements, classes);
    }

    validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    async loginSubmit(e) {
        e.preventDefault();

        const password = document.getElementById('pass');
        const email = document.getElementById('email');
        const correctEmail = this.validateEmail(email.value);
        const {error} = this.elements;

        try {
            if (!correctEmail || password.length < 4) {
                password.after(error);
                throw new Error('Incorrect email or password less than 4 characters');
            } else {
                const res = await API.login({email: email.value, password: password.value});
                API.saveToken(res);

                if (!res) {
                    password.after(error);
                    throw new Error('Invalid data');
                } else {
                    localStorage.setItem('token', res);
                    document.querySelector('#loginFormModal').classList.remove('active');
                    document.querySelector('#login').style.display = 'none';

                    const header = document.querySelector('.header');
                    header.remove();
                    new Header(headerClasses).render();

                    const filter = new Filter(filterClasses);
                    if (window.localStorage.getItem('token')) filter.render();

                    await clearDefaultText();

                    const cards = await API.getAllCards();
                    if (window.localStorage.getItem('token')) cards.forEach(card => new Card(cardClasses, card).render());
                }
            }
        } catch (e) {
            error.textContent = e.message;
            error.style.display = 'block';
        }
    };

    async render() {
        const {self, labelForEmail, labelForPassword, btnSubmit, inputEmail, inputPassword} = this.elements;

        await super.render();
        await self.append(labelForEmail, inputEmail);
        await self.append(labelForPassword, inputPassword);
        await self.append(btnSubmit);

        labelForEmail.textContent = 'Email address:';
        labelForPassword.textContent = 'Password:';
        btnSubmit.textContent = 'Log in';
        btnSubmit.type = 'submit';

        btnSubmit.addEventListener('click', (e) => this.loginSubmit(e));
    }
}