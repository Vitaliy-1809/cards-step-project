import Component from "./Component.js";
import {mainClasses} from "./config.js";

export default class Main extends Component {
    constructor(classes) {
        const elements = {
            parent: document.querySelector('header'),
            self: document.createElement('main'),
            defaultText: document.createElement('p'),
            cardContainer: document.createElement('div')

        };

        super(elements, classes);
    }

    render() {
        const {parent, self, defaultText, cardContainer} = this.elements;

        defaultText.textContent = 'No items have been added';

        self.append(defaultText, cardContainer);

        super.render();
        parent.after(self);
    }
}

new Main(mainClasses).render();