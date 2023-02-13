import BaseElement from '../BaseElement.js';

export default class TextField extends BaseElement {
    constructor(selector, name) {
        super(selector, name);
    }

    async setText(text) {
        let elem = await this.getElement();
        elem.sendKeys(text);
    }
}
