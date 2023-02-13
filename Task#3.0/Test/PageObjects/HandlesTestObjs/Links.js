import BaseForm from '../../../Framework/Core/BaseForm.js';
import Button from '../../../Framework/Core/Elements/Button.js';
import BrowserHandler from '../../../Framework/Utils/BrowserHandler.js';

export default class Links extends BaseForm {
    constructor() {
        super('//div[@id="linkWrapper"]');
        this._currentTab = BrowserHandler.getCurrentTab();
        this._homeBtn = new Button('//a[@id="simpleLink"]', 'home link button');
    }

    async switchTo() {
        await BrowserHandler.switchToSpecTab(this._currentTab);
    }

    async clickOnHomeLink() {
        await this._homeBtn.clickOn();
    }
}
