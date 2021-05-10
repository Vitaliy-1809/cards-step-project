import VisitForm from "./VisitForm.js";
import Input from "./Input.js";
import { cardClasses, inputLastVisitDate } from "./config.js";
import API from "./API.js";
import Card from "./Card.js";

export default class VisitDentistForm extends VisitForm {
    constructor(classes, editFlag, cardObject = {}, parent) {
        super(classes, editFlag, cardObject, parent);

        this.dentistElements = {
            labelForLastVisitDate: document.createElement('label'),
            lastVisitDateInput: new Input(inputLastVisitDate).render(),
            error: document.createElement('div')

        };
    }

    async visitFormSubmitCreate(e) {
        e.preventDefault();

        const visitPurposeInput = document.getElementById('visitPurpose');
        const fullNameInput = document.getElementById('fullName');
        const visitDescriptionTextarea = document.getElementById('visitDescription');
        const selectUrgencyType = document.querySelector('.select-urgency');
        const selectDoctorType = document.querySelector('.select-doctor');

        const lastVisitDateInput = document.getElementById('visitDate');
        if (fullNameInput.value && selectDoctorType.value && visitPurposeInput.value && selectUrgencyType.value && lastVisitDateInput.value) {
            let obj = {
                fullName: fullNameInput.value,
                doctorType: selectDoctorType.value,
                visitPurpose: visitPurposeInput.value,
                urgencyType: selectUrgencyType.value,
                visitDescription: visitDescriptionTextarea.value,
                lastVisitDate: lastVisitDateInput.value
            }

            super.clearWrapper();

            document.querySelector('#visitFormModal').classList.remove('active');
            const res = await API.saveCard(obj);
            await new Card(cardClasses, res).render();
        } else {
            const error = document.querySelector('.visit-error');
            error.style.display = 'block';

            const btnSubmit = document.querySelector('.create-visit');
            btnSubmit.before(error);

            error.textContent = "Please fill in required * fields";
        }
    }

    async visitFormSubmitEdit(e) {
        e.preventDefault();

        const visitPurposeInput = document.getElementById('visitPurpose');
        const fullNameInput = document.getElementById('fullName');
        const visitDescriptionTextarea = document.getElementById('visitDescription');
        const selectUrgencyType = document.querySelector('.select-urgency');
        const selectDoctorType = document.querySelector('.edit-doctor');
        const lastVisitDateInput = document.getElementById('visitDate');

        let obj = {
            id: this.id,
            fullName: fullNameInput.value,
            doctorType: selectDoctorType.value,
            visitPurpose: visitPurposeInput.value,
            urgencyType: selectUrgencyType.value,
            visitDescription: visitDescriptionTextarea.value,
            lastVisitDate: lastVisitDateInput.value
        }

        super.clearWrapper();

        document.getElementById(`${this.cardObject.id}`).remove();
        document.querySelector('#editFormModal').classList.remove('active');

        const res = await API.editCard(obj);

        await new Card(cardClasses, res).render();
    }

    async render() {
        await super.render();

        const { labelForLastVisitDate, lastVisitDateInput, error } = this.dentistElements;

        for (let prop in this.dentistElements) {
            const element = this.dentistElements[prop];
            element.className = this.classes[prop];
        }

        labelForLastVisitDate.textContent = '*Last visit date:';

        let { lastVisitDate } = this.cardObject;
        let btnSubmit;

        if (this.editFlag) {
            lastVisitDateInput.value = lastVisitDate;
            btnSubmit = document.querySelector('.edit-visit');
        } else {
            btnSubmit = document.querySelector('.create-visit');
        }

        await btnSubmit.before(labelForLastVisitDate, lastVisitDateInput, error);
    }
}
