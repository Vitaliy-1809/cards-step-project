import API from "./API.js";
import Component from "./Component.js";
import Select from "./Select.js";
import Input from "./Input.js";
import { cardClasses, searchDoctor, searchTitle, searchUrgency } from "./config.js";
import Card from "./Card.js";

export default class Filter extends Component {
    constructor(classes) {
        const elements = {
            parent: document.querySelector('.main'),
            self: document.createElement('div'),
            container: document.createElement('form'),
            searchBtn: document.createElement('button'),
            resetFilter: document.createElement('button')
        }

        super(elements, classes);
    }

    clearFilterFields() {
        searchByContent.value = '';
        searchByDoctor.value = 'Select doctor';
        searchByUrgency.value = 'Select urgency';
    }

    clearCards() {
        const cardContainer = document.querySelector('.card-container');
        while (cardContainer.firstChild) cardContainer.removeChild(cardContainer.firstChild);
    }

    async reset(e) {
        e.preventDefault();

        if (searchByContent.value !== '' || searchByDoctor.value !== 'Select doctor' || searchByUrgency.value !== 'Select urgency') {
            const allCards = await API.getAllCards();
            const defaultText = document.querySelector('.default-text');

            if (allCards.length === 0) {
                defaultText.textContent = 'No items have been added';
                this.clearFilterFields();
            } else {
                this.clearCards();
                allCards.forEach(card => new Card(cardClasses, card).render());
                defaultText.textContent = '';
                this.clearFilterFields();
            }
        }
    }

    showCards(result) {
        if (result.length === 0) {
            const defaultText = document.querySelector('.default-text');
            defaultText.textContent = 'No matches';
        } else {
            result.forEach(card => new Card(cardClasses, card).render());
        }
    }

    async filter(e) {
        e.preventDefault();

        const searchByContent = document.querySelector('#search-content');
        const searchByDoctor = document.querySelector('#search-doctor');
        const searchByUrgency = document.querySelector('#search-urgency');

        const allCards = await API.getAllCards();

        if (searchByContent.value !== '') {
            const result = allCards.filter(item => item.fullName.toLowerCase().indexOf(searchByContent.value.toLowerCase()) > -1);

            this.clearCards();
            this.showCards(result);
        }

        if (searchByDoctor.value !== 'Select doctor') {
            const result = allCards.filter(item => item.doctorType === searchByDoctor.value);

            this.clearCards();
            this.showCards(result);
        }

        if (searchByUrgency.value !== 'Select urgency') {
            const result = allCards.filter(item => item.urgencyType === searchByUrgency.value);

            this.clearCards();
            this.showCards(result);
        }
    }

    render() {
        const { self, container, searchBtn, resetFilter } = this.elements;

        searchBtn.textContent = 'Search';
        resetFilter.textContent = 'All cards';

        container.prepend(searchByContent, searchByDoctor, searchByUrgency, searchBtn, resetFilter);

        self.prepend(container);

        searchBtn.addEventListener('click', e => this.filter(e));
        resetFilter.addEventListener('click', e => this.reset(e));

        super.render();
    }
}

const searchByContent = new Input(searchTitle).render();
const searchByDoctor = new Select(searchDoctor).render();
const searchByUrgency = new Select(searchUrgency).render();