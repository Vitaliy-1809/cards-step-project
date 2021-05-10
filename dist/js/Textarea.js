import Input from "./Input.js";

export default class Textarea extends Input {
    constructor(obj) {
        super(obj)
    }

    render() {
        const textarea = document.createElement('textarea');
        this.classes.forEach(elClass => textarea.classList.add(elClass));
        this.dataAttr.forEach(attr => textarea.setAttribute(attr.title, attr.value));
        return textarea;
    }
}