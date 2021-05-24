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
            resetFilter: document.createElement('button')
        }

        super(elements, classes);
    }

    filter = {
        name: '',
        doctor: '',
        urgency: ''
    }

    filteredCards = [];

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
        const cardContainer = document.querySelector('.card-container');

        if (searchByContent.value !== '' || searchByDoctor.value !== 'Select doctor' || searchByUrgency.value !== 'Select urgency' || !cardContainer.firstChild) {
            const defaultText = document.querySelector('.default-text');
            const allCards = await API.getAllCards();

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

    showCards() {
        if (this.filteredCards.length === 0) {
            const defaultText = document.querySelector('.default-text');
            defaultText.textContent = 'No matches';
        } else {
            this.filteredCards.forEach(card => new Card(cardClasses, card).render());
        }
    }

    filterByName(item) {
        if (this.filter.name !== '') {
            return item.fullName.includes(this.filter.name)
        } else {
            return true
        }

    }

    filterByDoctor(item) {
        if (this.filter.doctor !== '') {
            return item.doctorType === this.filter.doctor
        } else {
            return true
        }
    }

    filterByUrgency(item) {
        if (this.filter.urgency !== '') {
            return item.urgencyType === this.filter.urgency
        } else {
            return true
        }
    }

    async filterData() {
        const allCards = await API.getAllCards();
        this.filteredCards = allCards

            .filter(item => {
                if (this.filterByName(item) === true) return item
            })

            .filter(item => {
                if (this.filterByDoctor(item) === true) return item
            })

            .filter(item => {
                if (this.filterByUrgency(item) === true) return item
            })

        this.clearCards();
        this.showCards();
    }

    render() {
        const { self, container, resetFilter } = this.elements;
        resetFilter.textContent = 'Reset filter';
        container.prepend(searchByContent, searchByDoctor, searchByUrgency, resetFilter);
        self.prepend(container);

        searchByContent.addEventListener('input', e => {
            if (searchByContent.value === '') this.filter.name = ''
            this.filter.name = e.target.value
            this.filterData()
        });

        searchByDoctor.addEventListener('change', e => {
            this.filter.doctor = e.target.value
            this.filterData()
        });

        searchByUrgency.addEventListener('change', e => {
            this.filter.urgency = e.target.value
            this.filterData()
        });

        resetFilter.addEventListener('click', e => {
            this.reset(e)
        });

        super.render();
    }
}

const searchByContent = new Input(searchTitle).render();
const searchByDoctor = new Select(searchDoctor).render();
const searchByUrgency = new Select(searchUrgency).render();