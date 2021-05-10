import VisitForm from "./VisitForm.js";
import Input from "./Input.js";
import { cardClasses, inputAge } from "./config.js";
import API from "./API.js";
import Card from "./Card.js";

export default class VisitTherapistForm extends VisitForm {
    constructor(classes, editFlag, cardObject = {}, parent) {
        super(classes, editFlag, cardObject, parent);

        this.therapistElements = {
            labelForAge: document.createElement('label'),
            ageInput: new Input(inputAge).render(),
            error: document.createElement('div'),

        };
    }

    async visitFormSubmitCreate(e) {
        e.preventDefault();

        const visitPurposeInput = document.getElementById('visitPurpose');
        const fullNameInput = document.getElementById('fullName');
        const visitDescriptionTextarea = document.getElementById('visitDescription');
        const selectUrgencyType = document.querySelector('.select-urgency');
        const selectDoctorType = document.querySelector('.select-doctor');
        const age = document.getElementById('age')

        if (fullNameInput.value && selectDoctorType.value && visitPurposeInput.value && selectUrgencyType.value && age.value) {
            let obj = {
                fullName: fullNameInput.value,
                doctorType: selectDoctorType.value,
                visitPurpose: visitPurposeInput.value,
                urgencyType: selectUrgencyType.value,
                visitDescription: visitDescriptionTextarea.value,
                age: age.value,
            }

            super.clearWrapper();

            document.querySelector('#visitFormModal').classList.remove('active')
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
        const age = document.getElementById('age');

        let obj = {
            id: this.id,
            fullName: fullNameInput.value,
            doctorType: selectDoctorType.value,
            visitPurpose: visitPurposeInput.value,
            urgencyType: selectUrgencyType.value,
            visitDescription: visitDescriptionTextarea.value,
            age: age.value,
        }

        document.getElementById(`${this.cardObject.id}`).remove();
        document.querySelector('#editFormModal').classList.remove('active');

        super.clearWrapper();

        const res = await API.editCard(obj);
        await new Card(cardClasses, res).render();
    }

    async render() {
        await super.render();

        const { labelForAge, ageInput, error } = this.therapistElements;

        for (let prop in this.therapistElements) {
            const element = this.therapistElements[prop];
            element.className = this.classes[prop];
        }

        labelForAge.textContent = '*Age:';

        let { age } = this.cardObject;
        let btnSubmit
        if (this.editFlag === true) {
            ageInput.value = age;
            btnSubmit = document.querySelector('.edit-visit');
        } else {
            btnSubmit = document.querySelector('.create-visit');
        }

        await btnSubmit.before(labelForAge, ageInput, error);
    }
}