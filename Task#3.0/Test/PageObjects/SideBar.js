import BaseForm from '../../Framework/Core/BaseForm.js';
import Button from '../../Framework/Core/Elements/Button.js';

export default class SideBar extends BaseForm {
    constructor() {
        super('//div[@class="left-pannel"]');

        this._elementsBtn = new Button(
            '//div[@class="accordion"]//div[@class="element-group"][1]',
            'elements button'
        );
    }

    async clickOnElements() {
        await this._elementsBtn.clickOn();
    }
}
