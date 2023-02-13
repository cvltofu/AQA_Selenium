import BaseForm from '../../Framework/Core/BaseForm.js';
import Button from '../../Framework/Core/Elements/Button.js';

export default class ElementsWindows extends BaseForm {
    constructor() {
        super('//div[@class="left-pannel"]');

        this._linksBtn = new Button(
            '//div[@class="element-list collapse show"]//ul[@class="menu-list"]//li[@id="item-5"]',
            'links button'
        );
    }

    async clickOnLinks() {
        await this._linksBtn.clickOn();
    }
}
