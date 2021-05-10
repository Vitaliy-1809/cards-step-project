export default class Input {
    constructor(obj) {
        const {classes, dataAttr} = obj;
        this.classes = classes;
        this.dataAttr = dataAttr;
    }

    render() {
        const input = document.createElement('input');
        this.classes.forEach(elClass => input.classList.add(elClass));
        this.dataAttr.forEach(attr => input.setAttribute(attr.title, attr.value));
        return input;
    }
}
