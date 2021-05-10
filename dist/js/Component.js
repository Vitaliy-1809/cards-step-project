export default class Component {
    constructor(DOMElements, classes) {
        this.elements = DOMElements;
        this.classes = classes;
    }

    render() {
        const {self, parent} = this.elements;

        for (let prop in this.elements) {
            const element = this.elements[prop];
            element.className = this.classes[prop];
        }

        parent.prepend(self);
    }
}