import VisitForm from "./VisitForm.js";
import Input from "./Input.js";
import { inputRegularPressure, inputBodyMassIndex, inputPastDiseases, inputAge, cardClasses } from "./config.js";
import API from "./API.js";
import Card from "./Card.js";

export default class VisitCardiologistForm extends VisitForm {
    constructor(classes, editFlag, cardObject, parent) {
        super(classes, editFlag, cardObject, parent);

        this.cardiologistElements = {
            labelForRegularPressure: document.createElement('label'),
            regularPressureInput: new Input(inputRegularPressure).render(),
            labelForBodyMassIndex: document.createElement('label'),
            bodyMassIndex: new Input(inputBodyMassIndex).render(),
            labelForPastDiseases: document.createElement('label'),
            pastDiseases: new Input(inputPastDiseases).render(),
            labelForAge: document.createElement('label'),
            ageInput: new Input(inputAge).render(),
            error: document.createElement('div'),
        };
    }

    async visitFormSubmitCreate(e) {
        e.preventDefault();

        const regularPressureInput = document.getElementById('regularPressure');
        const bodyMassIndex = document.getElementById('bodyMassIndex');
        const pastDiseases = document.getElementById('pastDiseases');
        const age = document.getElementById('age');

        const visitPurposeInput = document.getElementById('visitPurpose');
        const fullNameInput = document.getElementById('fullName');
        const visitDescriptionTextarea = document.getElementById('visitDescription');
        const selectUrgencyType = document.querySelector('.select-urgency');
        const selectDoctorType = document.querySelector('.select-doctor');

        if (fullNameInput.value && selectDoctorType.value && visitPurposeInput.value && selectUrgencyType.value && regularPressureInput.value && bodyMassIndex.value && pastDiseases.value && age.value) {
            let obj = {
                fullName: fullNameInput.value,
                doctorType: selectDoctorType.value,
                visitPurpose: visitPurposeInput.value,
                urgencyType: selectUrgencyType.value,
                visitDescription: visitDescriptionTextarea.value,
                regularPressure: regularPressureInput.value,
                BMI: bodyMassIndex.value,
                CVD: pastDiseases.value,
                age: age.value,
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

        const regularPressureInput = document.getElementById('regularPressure');
        const bodyMassIndex = document.getElementById('bodyMassIndex');
        const pastDiseases = document.getElementById('pastDiseases');
        const age = document.getElementById('age');

        const visitPurposeInput = document.getElementById('visitPurpose');
        const fullNameInput = document.getElementById('fullName');
        const visitDescriptionTextarea = document.getElementById('visitDescription');
        const selectUrgencyType = document.querySelector('.select-urgency');
        const selectDoctorType = document.querySelector('.edit-doctor');

        let obj = {
            id: this.id,
            fullName: fullNameInput.value,
            doctorType: selectDoctorType.value,
            visitPurpose: visitPurposeInput.value,
            urgencyType: selectUrgencyType.value,
            visitDescription: visitDescriptionTextarea.value,
            regularPressure: regularPressureInput.value,
            BMI: bodyMassIndex.value,
            CVD: pastDiseases.value,
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

        const { labelForRegularPressure, regularPressureInput, labelForBodyMassIndex, bodyMassIndex, labelForPastDiseases, pastDiseases, labelForAge, ageInput, error } = this.cardiologistElements;

        for (let prop in this.cardiologistElements) {
            const element = this.cardiologistElements[prop];
            element.className = this.classes[prop];
        }

        labelForRegularPressure.textContent = '*Regular pressure:';
        labelForBodyMassIndex.textContent = '*Body mass index:';
        labelForPastDiseases.textContent = '*Past diseases:';
        labelForAge.textContent = '*Age:';

        let { regularPressure, BMI, CVD, age } = this.cardObject;
        let btnSubmit;
        if (this.editFlag) {
            regularPressureInput.value = regularPressure;
            bodyMassIndex.value = BMI;
            pastDiseases.value = CVD;
            ageInput.value = age;
            btnSubmit = document.querySelector('.edit-visit');
        } else {
            btnSubmit = document.querySelector('.create-visit');
        }

        await btnSubmit.before(labelForRegularPressure, regularPressureInput, labelForBodyMassIndex, bodyMassIndex, labelForPastDiseases, pastDiseases, labelForAge, ageInput, error);
    }
}