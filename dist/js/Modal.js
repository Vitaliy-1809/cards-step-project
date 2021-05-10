import Component from "./Component.js";

export default class Modal extends Component {
    constructor(titleText, idForModal, idForForm, classes) {
        const elements = {
            parent: document.querySelector('.main'),
            self: document.createElement('div'),
            title: document.createElement('h3'),
            modalDialog: document.createElement('div'),
            modalContent: document.createElement('div'),
            modalHeader: document.createElement('div'),
            modalBody: document.createElement('div'),
            btnClose: document.createElement('button'),
        };

        super(elements, classes);

        this.titleText = titleText;
        this.idForModal = idForModal;
        this.idForForm = idForForm;
    }

    closeWindow({ target }) {
        if (target.classList.contains('btn-close') || target.classList.contains('shadow-bg')) {
            document.querySelector(`#${this.idForModal}`).classList.remove('active')
            document.getElementById('email').value = '';
            document.getElementById('pass').value = '';
            const selectDoctor = document.querySelector('.select-doctor');
            const wrapperSelectDoctor = document.querySelector('.select-doctor-wrapper');
            if (wrapperSelectDoctor.nextSibling !== null) wrapperSelectDoctor.nextSibling.remove();
            selectDoctor.value = 'Choose a doctor'
        }
    }

    render() {
        const { self, title, modalDialog, modalContent, modalHeader, modalBody, btnClose } = this.elements;

        self.append(modalDialog);
        modalDialog.append(modalContent);
        modalContent.append(modalHeader);
        modalHeader.prepend(title);
        modalHeader.append(btnClose);
        modalContent.append(modalBody);

        modalBody.id = this.idForForm;
        self.id = this.idForModal;

        title.textContent = this.titleText;
        self.addEventListener('click', (e) => this.closeWindow(e));

        super.render();
    }
}