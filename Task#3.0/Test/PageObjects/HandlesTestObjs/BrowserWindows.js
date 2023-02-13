import BaseForm from '../../../Framework/Core/BaseForm.js';
import Button from '../../../Framework/Core/Elements/Button.js';
import BrowserHandler from '../../../Framework/Utils/BrowserHandler.js';

export default class BrowseerWindows extends BaseForm {
    constructor() {
        super('//div[@id="tabButtonWrapper"]');
        this._currentTab = BrowserHandler.getCurrentTab();
        this._tabBtn = new Button(
            '//button[@id="tabButton"]',
            'new tab button'
        );
    }

    async switchTo() {
        await BrowserHandler.switchToSpecTab(this._currentTab);
    }

    async clickOnNewTab() {
        await this._tabBtn.clickOn();
    }
}
