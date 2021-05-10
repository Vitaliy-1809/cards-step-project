export const headerClasses = {
    parent: 'body',
    self: 'header',
    nav: 'navbar navbar-expand-lg navbar-light bg-light',
    container: 'container-fluid',
    link: 'navbar-brand',
    logo: 'logo',
    loginBtn: 'btn btn-outline-primary',
    createVisitBtn: 'btn btn-outline-primary'
}

export const footerClasses = {
    parent: 'main',
    self: 'footer',
    textContainer: 'copyright'
}

export const mainClasses = {
    parent: 'header',
    self: 'main container',
    defaultText: 'display-6 default-text',
    cardContainer: 'card-container'
}

export const modalClasses = {
    parent: 'main container',
    self: 'shadow-bg',
    title: 'h3',
    modalDialog: 'modal-dialog modal-dialog-centered',
    modalContent: 'modal-content',
    modalHeader: 'modal-header',
    modalBody: 'modal-body',
    modalFooter: 'modal-footer',
    btnClose: 'btn-close',
}

export const loginFormClasses = {
    parent: 'modal-body',
    self: '',
    labelForEmail: 'form-label',
    wrapperEmail: 'mb-3',
    labelForPassword: 'form-label',
    wrapperPassword: 'mb-3',
    btnSubmit: 'btn btn-primary',
    error: 'invalid-feedback mb-3',
    inputEmail: 'form-control mb-3',
    inputPassword: 'form-control mb-3'
}

export const email = {
    classes: ['form-control'],
    dataAttr: [
        {
            title: 'id',
            value: 'email'
        },
        {
            title: 'placeholder',
            value: 'Enter your email'
        },
        {
            title: 'type',
            value: 'email'
        },
    ]
}

export const password = {
    classes: ['form-control'],
    dataAttr: [
        {
            title: 'id',
            value: 'pass'
        },
        {
            title: 'placeholder',
            value: 'Enter your password'
        },
        {
            title: 'type',
            value: 'password'
        },
    ]
}

export const selectDoctorType = {
    classes: ['form-select', 'select-doctor'],
    options: [
        {
            value: 'selected',
            title: 'Choose a doctor'
        },
        {
            value: 'cardiologist',
            text: 'Cardiologist'
        },
        {
            value: 'dentist',
            text: 'Dentist'
        },
        {
            value: 'therapist',
            text: 'Therapist'
        }
    ]
}

export const inputVisitPurpose = {
    classes: ['form-control'],
    dataAttr: [
        {
            title: 'required',
            value: ''
        },
        {
            title: 'id',
            value: 'visitPurpose'
        },
        {
            title: 'placeholder',
            value: 'visit purpose'
        },
        {
            title: 'type',
            value: 'text'
        },
    ]
}

export const selectUrgencyType = {
    classes: ['form-select', 'select-urgency'],
    options: [
        {
            value: '',
            text: ''
        },
        {
            value: 'normal',
            text: 'normal'
        },
        {
            value: 'priority',
            text: 'priority'
        },
        {
            value: 'urgent',
            text: 'urgent'
        }
    ]
}

export const inputFullName = {
    classes: ['form-control'],
    dataAttr: [
        {
            title: 'required',
            value: ''
        },
        {
            title: 'id',
            value: 'fullName'
        },
        {
            title: 'placeholder',
            value: 'enter full name'
        },
        {
            title: 'type',
            value: 'text'
        },
    ]
}

export const textareaVisitDescription = {
    classes: ['form-control'],
    dataAttr: [
        {
            title: 'id',
            value: 'visitDescription'
        },
        {
            title: 'placeholder',
            value: 'visit description'
        }
    ]
}

export const visitCardiologistFormClasses = {
    parent: 'mb-3 select-doctor-wrapper',
    self: 'form',
    labelForVisitPurpose: 'form-label',
    visitPurposeInput: 'form-control mb-3',
    labelForSelectUrgency: 'form-label',
    selectUrgencyType: 'form-select mb-3 select-urgency',
    labelForFullName: 'form-label',
    fullNameInput: 'form-control mb-3',
    labelForVisitDescription: 'form-label',
    visitDescriptionTextarea: 'form-control mb-3',
    btnSubmit: 'btn btn-primary create-visit',
    labelForRegularPressure: 'form-label',
    regularPressureInput: 'form-control mb-3',
    labelForBodyMassIndex: 'form-label',
    bodyMassIndex: 'form-control mb-3',
    labelForPastDiseases: 'form-label',
    pastDiseases: 'form-control mb-3',
    labelForAge: 'form-label',
    ageInput: 'form-control mb-3',
    error: 'invalid-feedback mb-3 visit-error'
}

export const inputRegularPressure = {
    classes: ['form-control'],
    dataAttr: [
        {
            title: 'required',
            value: ''
        },
        {
            title: 'id',
            value: 'regularPressure'
        },
        {
            title: 'placeholder',
            value: 'regular pressure'
        },
        {
            title: 'type',
            value: 'text'
        },
    ]
}

export const inputBodyMassIndex = {
    classes: ['form-control'],
    dataAttr: [
        {
            title: 'required',
            value: ''
        },
        {
            title: 'id',
            value: 'bodyMassIndex'
        },
        {
            title: 'placeholder',
            value: 'body mass index'
        },
        {
            title: 'type',
            value: 'text'
        },
    ]
}

export const inputPastDiseases = {
    classes: ['form-control'],
    dataAttr: [
        {
            title: 'required',
            value: ''
        },
        {
            title: 'id',
            value: 'pastDiseases'
        },
        {
            title: 'placeholder',
            value: 'past diseases of the cardiovascular system'
        },
        {
            title: 'type',
            value: 'text'
        },
    ]
}

export const inputAge = {
    classes: ['form-control'],
    dataAttr: [
        {
            title: 'required',
            value: ''
        },
        {
            title: 'id',
            value: 'age'
        },
        {
            title: 'placeholder',
            value: 'your age'
        },
        {
            title: 'type',
            value: 'text'
        },
    ]
}

export const visitDentistFormClasses = {
    parent: 'mb-3 select-doctor-wrapper',
    self: 'form',
    labelForVisitPurpose: 'form-label',
    visitPurposeInput: 'form-control mb-3',
    labelForSelectUrgency: 'form-label',
    selectUrgencyType: 'form-select mb-3 select-urgency',
    labelForFullName: 'form-label',
    fullNameInput: 'form-control mb-3',
    labelForVisitDescription: 'form-label',
    visitDescriptionTextarea: 'form-control mb-3',
    btnSubmit: 'btn btn-primary create-visit',
    labelForLastVisitDate: 'form-label',
    lastVisitDateInput: 'form-control mb-3',
    error: 'invalid-feedback mb-3 visit-error'
}

export const inputLastVisitDate = {
    classes: ['form-control'],
    dataAttr: [
        {
            title: 'required',
            value: ''
        },
        {
            title: 'id',
            value: 'visitDate'
        },
        {
            title: 'placeholder',
            value: 'date of last visit'
        },
        {
            title: 'type',
            value: 'date'
        },
    ]
}

export const visitTherapistFormClasses = {
    parent: 'mb-3 select-doctor-wrapper',
    self: 'form',
    labelForVisitPurpose: 'form-label',
    visitPurposeInput: 'form-control mb-3',
    labelForSelectUrgency: 'form-label',
    selectUrgencyType: 'form-select mb-3 select-urgency',
    labelForFullName: 'form-label',
    fullNameInput: 'form-control mb-3',
    labelForVisitDescription: 'form-label',
    visitDescriptionTextarea: 'form-control mb-3',
    btnSubmit: 'btn btn-primary create-visit',
    labelForAge: 'form-label',
    ageInput: 'form-control mb-3',
    error: 'invalid-feedback mb-3 visit-error'
}

export const searchTitle = {
    classes: ['form-control', 'col-sm', 'm-1'],
    dataAttr: [
        {
            title: 'type',
            value: 'search'
        },
        {
            title: 'placeholder',
            value: 'Search by name'
        },
        {
            title: 'id',
            value: 'search-content'
        },
    ]
}

export const searchDoctor = {
    id: 'search-doctor',
    classes: ['form-select', 'col-sm', 'm-1'],
    options: [
        {
            value: 'selected',
            title: 'Select doctor'
        },
        {
            value: 'cardiologist',
            text: 'cardiologist'
        },
        {
            value: 'dentist',
            text: 'dentist'
        },
        {
            value: 'therapist',
            text: 'therapist'
        }
    ]
}

export const searchUrgency = {
    id: 'search-urgency',
    classes: ['form-select', 'col-sm', 'm-1'],
    options: [
        {
            value: 'selected',
            title: 'Select urgency'
        },
        {
            value: 'normal',
            text: 'normal'
        },
        {
            value: 'priority',
            text: 'priority'
        },
        {
            value: 'urgent',
            text: 'urgent'
        }
    ]
}

export const filterClasses = {
    parent: 'main container',
    self: 'container mt-4 mb-4 filter',
    container: 'row',
    searchBtn: 'btn btn-outline-primary col-sm m-1',
    resetFilter: 'btn btn-success col-sm m-1 reset-filter'
}

export const cardClasses = {
    parent: "card-container mb-4",
    self: "card",
    cardBody: "card-body",
    cardFooter: "card-body",
    cardFullName: "mb-3 card-title",
    cardDoctorType: "mb-3 card-text card-subtitle",
    cardVisitPurpose: "mb-3 card-text",
    cardUrgencyType: "mb-3 card-text",
    cardRegularPressure: "mb-3 card-text",
    cardBMI: "mb-3 card-text",
    cardCVD: "mb-3 card-text",
    cardAge: "mb-3 card-text",
    cardLastVisitDate: "mb-3 card-text",
    cardDescription: "mb-3 card-text",
    btnShowMore: "btn btn-primary mb-3",
    error: 'invalid-feedback mb-3 visit-error'
}

export const selectEditType = {
    classes: ['form-select', 'select-edit'],
    options: [
        {
            value: 'selected',
            title: 'Choose option'
        },
        {
            value: 'Edit',
            text: 'Edit'
        },
        {
            value: 'Delete',
            text: 'Delete'
        },
    ]
}

export const editDoctorType = {
    classes: ['form-select', 'edit-doctor'],
    options: [
        {
            value: 'selected',
            title: 'Choose a doctor'
        },
        {
            value: 'cardiologist',
            text: 'Cardiologist'
        },
        {
            value: 'dentist',
            text: 'Dentist'
        },
        {
            value: 'therapist',
            text: 'Therapist'
        }
    ]
}

export const editVisitDentistFormClasses = {
    parent: 'mb-3 edit-doctor-wrapper',
    self: 'form',
    labelForVisitPurpose: 'form-label',
    visitPurposeInput: 'form-control mb-3',
    labelForSelectUrgency: 'form-label',
    selectUrgencyType: 'form-select mb-3 select-urgency',
    labelForFullName: 'form-label',
    fullNameInput: 'form-control mb-3',
    labelForVisitDescription: 'form-label',
    visitDescriptionTextarea: 'form-control mb-3',
    btnSubmit: 'btn btn-primary edit-visit',
    labelForLastVisitDate: 'form-label',
    lastVisitDateInput: 'form-control mb-3',
    error: 'invalid-feedback mb-3 visit-error'
}

export const editVisitCardiologistFormClasses = {
    parent: 'mb-3 edit-doctor-wrapper',
    self: 'form',
    labelForVisitPurpose: 'form-label',
    visitPurposeInput: 'form-control mb-3',
    labelForSelectUrgency: 'form-label',
    selectUrgencyType: 'form-select mb-3 select-urgency',
    labelForFullName: 'form-label',
    fullNameInput: 'form-control mb-3',
    labelForVisitDescription: 'form-label',
    visitDescriptionTextarea: 'form-control mb-3',
    btnSubmit: 'btn btn-primary edit-visit',
    labelForRegularPressure: 'form-label',
    regularPressureInput: 'form-control mb-3',
    labelForBodyMassIndex: 'form-label',
    bodyMassIndex: 'form-control mb-3',
    labelForPastDiseases: 'form-label',
    pastDiseases: 'form-control mb-3',
    labelForAge: 'form-label',
    ageInput: 'form-control mb-3',
    error: 'invalid-feedback mb-3 visit-error'
}

export const editVisitTherapistFormClasses = {
    parent: 'mb-3 edit-doctor-wrapper',
    self: 'form',
    labelForVisitPurpose: 'form-label',
    visitPurposeInput: 'form-control mb-3',
    labelForSelectUrgency: 'form-label',
    selectUrgencyType: 'form-select mb-3 select-urgency',
    labelForFullName: 'form-label',
    fullNameInput: 'form-control mb-3',
    labelForVisitDescription: 'form-label',
    visitDescriptionTextarea: 'form-control mb-3',
    btnSubmit: 'btn btn-primary edit-visit',
    labelForAge: 'form-label',
    ageInput: 'form-control mb-3',
    error: 'invalid-feedback mb-3 visit-error'
}