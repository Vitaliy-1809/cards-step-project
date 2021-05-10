export default class Select {
    constructor(obj) {
        const {id, classes, options} = obj;
        this.classes = classes;
        this.id = id;
        this.options = options;
    }

    render() {
        const select = document.createElement('select');

        if (this.id !== undefined) select.setAttribute('id', this.id);
        this.classes.forEach(elClass => select.classList.add(elClass));
        const options = this.options.map(({value, title, text}) => {
            if (value === 'selected') {
                return `<option ${value}>${title}</option>`
            } else {
                return `<option value="${value}">${text}</option>`
            }
        }).join("");
        select.insertAdjacentHTML('afterbegin', `${options}`);

        return select
    }
}
