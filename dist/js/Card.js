import Component from "./Component.js";
import Select from "./Select.js";
import {
    selectEditType,
    editVisitDentistFormClasses,
    editVisitTherapistFormClasses,
    editVisitCardiologistFormClasses,
} from "./config.js";
import API from "./API.js";
import VisitCardiologistForm from "./VisitCardiologistForm.js";
import VisitTherapistForm from "./VisitTherapistForm.js";
import VisitDentistForm from "./VisitDentistForm.js";

export default class Card extends Component {
    constructor(classes, cardObj) {
        let elements = {
            parent: document.querySelector('.card-container'),
            self: document.createElement('div'),
            cardBody: document.createElement('div'),
            cardFooter: document.createElement('div'),
            cardFullName: document.createElement('h5'),
            cardDoctorType: document.createElement('h6'),
            cardVisitPurpose: document.createElement('p'),
            cardUrgencyType: document.createElement('p'),
            cardRegularPressure: document.createElement('p'),
            cardBMI: document.createElement('p'),
            cardCVD: document.createElement('p'),
            cardAge: document.createElement('p'),
            cardLastVisitDate: document.createElement('p'),
            cardDescription: document.createElement('p'),
            btnShowMore: document.createElement('button'),
        }

        super(elements, classes);

        const { id, fullName, doctorType, visitPurpose, urgencyType, visitDescription, regularPressure, BMI, CVD, age, lastVisitDate } = cardObj;

        this.cardObj = cardObj;
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
        this.lastVisitDate = lastVisitDate;
    }

    async showMore() {
        const { cardBody, cardVisitPurpose, cardUrgencyType, cardDescription, cardRegularPressure, cardBMI, cardCVD, cardAge,
        cardLastVisitDate, btnShowMore } = this.elements;

        if (this.doctorType === 'cardiologist') {
            await cardBody.append(cardVisitPurpose, cardUrgencyType, cardDescription, cardRegularPressure, cardBMI, cardCVD, cardAge);
        } else if (this.doctorType === 'therapist') {
            await cardBody.append(cardVisitPurpose, cardUrgencyType, cardDescription, cardAge);
        } else if (this.doctorType === "dentist") {
            await cardBody.append(cardVisitPurpose, cardUrgencyType, cardDescription, cardLastVisitDate);
        }

        await btnShowMore.remove();
    }

    async render() {
        let { self, cardFooter, cardBody, cardFullName, cardDoctorType, cardVisitPurpose, cardUrgencyType, cardDescription, cardRegularPressure, cardBMI, cardCVD, cardAge, cardLastVisitDate, btnShowMore } = this.elements;

        const selectEdit = new Select(selectEditType).render();

        self.id = this.id;
        cardFullName.textContent = `${this.fullName}`;
        cardDoctorType.textContent = `Doctor: ${this.doctorType}`;
        cardVisitPurpose.textContent = `Visit purpose: ${this.visitPurpose}`;
        cardUrgencyType.textContent = `Urgency: ${this.urgencyType}`;
        if (this.visitDescription) cardDescription.textContent = `Visit description: ${this.visitDescription}`;

        cardRegularPressure.textContent = `Blood pressure: ${this.regularPressure}`;
        cardBMI.textContent = `Body Mass Index: ${this.BMI}`;
        cardCVD.textContent = `Cardiovascular disease: ${this.CVD}`;
        cardAge.textContent = `Age: ${this.age}`;
        cardLastVisitDate.textContent = `Date of last visit: ${this.lastVisitDate}`;

        await cardBody.append(cardFullName, cardDoctorType);

        btnShowMore.textContent = "Show more";
        await btnShowMore.addEventListener('click', () => this.showMore());


        await selectEdit.addEventListener('change', () => {
            const editDoctor = document.querySelector('.edit-doctor');
            const wrapperEditDoctor = document.querySelector('.edit-doctor-wrapper');

            if (selectEdit.value === 'Edit') {
                document.querySelector('#editFormModal').classList.add('active')
                editDoctor.setAttribute('disabled', '');

                if (wrapperEditDoctor.nextSibling !== null) wrapperEditDoctor.nextSibling.remove();

                if (this.doctorType === 'cardiologist') {
                    editDoctor.value = 'cardiologist';
                    new VisitCardiologistForm(editVisitCardiologistFormClasses, true, this.cardObj, '.edit-doctor-wrapper').render();
                } else if (this.doctorType === 'dentist') {
                    editDoctor.value = 'dentist';
                    new VisitDentistForm(editVisitDentistFormClasses, true, this.cardObj, '.edit-doctor-wrapper').render();
                } else if (this.doctorType === 'therapist') {
                    editDoctor.value = 'therapist';
                    new VisitTherapistForm(editVisitTherapistFormClasses, true, this.cardObj, '.edit-doctor-wrapper').render();
                }
                selectEdit.value = 'Choose option';
            } else if (selectEdit.value === 'Delete') {
                API.deleteCard(this.id);
                self.remove();
            }
        })

        cardFooter.append(btnShowMore, selectEdit);

        self.append(cardBody, cardFooter);
        super.render();
    }
}

