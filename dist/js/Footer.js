import Component from "./Component.js";
import { footerClasses } from "./config.js";

export default class Footer extends Component {
    constructor(classes) {
        const elements = {
            parent: document.querySelector('main'),
            self: document.createElement('footer'),
            textContainer: document.createElement('p')
        };

        super(elements, classes);
    }

    render() {
        const { parent, self, textContainer } = this.elements;

        textContainer.textContent = 'Copyright © 2021 Medical Company All rights reserved';
        self.append(textContainer);

        super.render();
        parent.after(self);
    }
}

const footer = new Footer(footerClasses);
footer.render();