import Input from "./Input.js";
import Textarea from "./Textarea.js";
import Select from "./Select.js";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import {
    modalClasses,
    loginFormClasses,
    selectDoctorType,
    visitCardiologistFormClasses,
    visitDentistFormClasses,
    visitTherapistFormClasses,
    filterClasses,
    cardClasses,
    editDoctorType
} from "./config.js";
import Modal from "./Modal.js";
import LoginForm from "./LoginForm.js";
import Filter from "./Filter.js";
import VisitForm from "./VisitForm.js";
import VisitCardiologistForm from "./VisitCardiologistForm.js";
import VisitDentistForm from "./VisitDentistForm.js";
import VisitTherapistForm from "./VisitTherapistForm.js";
import Card from "./Card.js";
import API from "./API.js";

async function globalRender() {
    await clearDefaultText()

    const loginModal = new Modal('Please, log in', 'loginFormModal', 'loginFormWrapper', modalClasses);
    await loginModal.render();

    const loginForm = new LoginForm(loginFormClasses);
    await loginForm.render();

    const visitModal = new Modal('Create visit', 'visitFormModal', 'visitFormWrapper', modalClasses);
    await visitModal.render();

    const editModal = new Modal('Edit your visit', 'editFormModal', 'editFormWrapper', modalClasses);
    await editModal.render();

    const selectDoctor = new Select(selectDoctorType).render();
    const editDoctor = new Select(editDoctorType).render();
    const visitFormWrapper = document.querySelector('#visitFormWrapper');

    const wrapperEditDoctor = document.createElement('div');
    wrapperEditDoctor.className = 'mb-3 edit-doctor-wrapper';
    wrapperEditDoctor.append(editDoctor);
    document.querySelector('#editFormWrapper').append(wrapperEditDoctor);

    const wrapperselectDoctor = document.createElement('div');
    wrapperselectDoctor.className = 'mb-3 select-doctor-wrapper';


    const doctorsImage = document.createElement('img');
    doctorsImage.src = './dist/img/choose_doctor.jpeg';
    doctorsImage.className = 'img-fluid';

    wrapperselectDoctor.append(selectDoctor);
    visitFormWrapper.append(wrapperselectDoctor, doctorsImage);

    await chooseDoctor();

    const filter = new Filter(filterClasses);
    if (window.localStorage.getItem('token')) filter.render();


    if (window.localStorage.getItem('token')) {
        const cards = await API.getAllCards()
        cards.forEach(card => new Card(cardClasses, card).render());
    }
}

globalRender();

export async function clearDefaultText() {
    await setInterval(() => {
        const cardCheck = document.querySelector('.card-container')
        const defaultText = document.querySelector('.display-6')
        if (cardCheck.hasChildNodes()) {
            defaultText.style.display = 'none'
        } else {
            defaultText.style.display = 'block'
        }
    }, 0);
}

async function chooseDoctor() {
    const wrapperSelectDoctor = document.querySelector('.select-doctor-wrapper');
    const selectDoctor = document.querySelector('.select-doctor');
    await selectDoctor.addEventListener('change', () => {
        if (selectDoctor.value === 'cardiologist') {
            new VisitCardiologistForm(visitCardiologistFormClasses).render();
            if (wrapperSelectDoctor.nextSibling !== null) wrapperSelectDoctor.nextSibling.remove();
        } else if (selectDoctor.value === 'dentist') {
            new VisitDentistForm(visitDentistFormClasses).render();
            if (wrapperSelectDoctor.nextSibling !== null) wrapperSelectDoctor.nextSibling.remove();
        } else if (selectDoctor.value === 'therapist') {
            new VisitTherapistForm(visitTherapistFormClasses).render();
            if (wrapperSelectDoctor.nextSibling !== null) wrapperSelectDoctor.nextSibling.remove();
        } else if (selectDoctor.value === 'Choose a doctor') {
            if (wrapperSelectDoctor.nextSibling !== null) wrapperSelectDoctor.nextSibling.remove();

            const visitFormWrapper = document.querySelector('#visitFormWrapper');
            const doctorsImage = document.createElement('img');
            doctorsImage.src = './dist/img/choose_doctor.jpeg';
            doctorsImage.className = 'img-fluid';
            visitFormWrapper.append(doctorsImage);
        }
    });
}