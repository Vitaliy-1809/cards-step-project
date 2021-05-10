import Component from "./Component.js";
import Input from "./Input.js";
import Textarea from "./Textarea.js";
import Select from "./Select.js";
import { inputVisitPurpose, selectUrgencyType, inputFullName, textareaVisitDescription } from "./config.js";

export default class VisitForm extends Component {
    constructor(classes, editFlag, cardObject = {}, parent = '.select-doctor-wrapper') {
        const elements = {
            parent: document.querySelector(parent),
            self: document.createElement('form'),
            labelForVisitPurpose: document.createElement('label'),
            visitPurposeInput: new Input(inputVisitPurpose).render(),
            labelForSelectUrgency: document.createElement('label'),
            selectUrgencyType: new Select(selectUrgencyType).render(),
            labelForFullName: document.createElement('label'),
            fullNameInput: new Input(inputFullName).render(),
            labelForVisitDescription: document.createElement('label'),
            visitDescriptionTextarea: new Textarea(textareaVisitDescription).render(),
            btnSubmit: document.createElement('button')
        };

        super(elements, classes);

        this.editFlag = editFlag;
        this.cardObject = cardObject;

        let { id, fullName, doctorType, visitPurpose, urgencyType, visitDescription, regularPressure, BMI, CVD, age, dateOfLastVisit } = cardObject;

        this.id = id;
        this.fullName = fullName;
        this.doctorType = doctorType;
        this.visitPurpose = visitPurpose;
        this.urgencyType = urgencyType;
        this.visitDescription = visitDescription;
        this.regularPressure = regularPressure;
        this.BMI = BMI;
        this.CVD = CVD;
        this.age = age;
        this.dateOfLastVisit = dateOfLastVisit;
    }

    clearWrapper() {
        const wrapperEditDoctor = document.querySelector('.edit-doctor-wrapper');
        if (wrapperEditDoctor.nextSibling !== null) wrapperEditDoctor.nextSibling.remove();
        
        const selectDoctor = document.querySelector('.select-doctor');
        const wrapperSelectDoctor = document.querySelector('.select-doctor-wrapper');
        if (wrapperSelectDoctor.nextSibling !== null) wrapperSelectDoctor.nextSibling.remove();
        selectDoctor.value = 'Choose a doctor';
    }
    async render() {
        const { parent, self, labelForVisitPurpose, visitPurposeInput, labelForSelectUrgency, selectUrgencyType, labelForFullName, fullNameInput, labelForVisitDescription, visitDescriptionTextarea, btnSubmit } = this.elements;

        let { fullName, visitDescription, visitPurpose, urgencyType } = this.cardObject;

        labelForVisitPurpose.textContent = '*Visit purpose:';
        labelForSelectUrgency.textContent = '*Choose urgency:';
        labelForFullName.textContent = '*Full name:';
        labelForVisitDescription.textContent = 'Visit description:';

        if (this.editFlag) {
            fullNameInput.value = fullName;
            selectUrgencyType.value = urgencyType;
            visitPurposeInput.value = visitPurpose;
            visitDescriptionTextarea.value = visitDescription;
        }

        if (this.editFlag) {
            btnSubmit.textContent = 'Edit';
            btnSubmit.addEventListener('click', (e) => this.visitFormSubmitEdit(e));
        } else {
            btnSubmit.textContent = 'Create';
            btnSubmit.addEventListener('click', (e) => this.visitFormSubmitCreate(e));
        }

        selectUrgencyType.setAttribute('required', '');
        btnSubmit.type = 'submit';

        await self.append(labelForVisitPurpose, visitPurposeInput, labelForSelectUrgency, selectUrgencyType, labelForFullName, fullNameInput, labelForVisitDescription, visitDescriptionTextarea, btnSubmit);

        await super.render();
        parent.after(self);
    }
}