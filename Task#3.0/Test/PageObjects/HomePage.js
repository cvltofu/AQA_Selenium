import BaseForm from '../../Framework/Core/BaseForm.js';
import Button from '../../Framework/Core/Elements/Button.js';
import BrowserHandler from '../../Framework/Utils/BrowserHandler.js';

export default class HomePage extends BaseForm {
    constructor() {
        super('//div[@class="home-banner"]');

        this._alertsBtn = new Button(
            '//div[@class="category-cards"]//div[@class="card mt-4 top-card"][3]',
            'alerts, frame and windows button'
        );
        this._elementsBtn = new Button(
            '//div[@class="category-cards"]//div[@class="card mt-4 top-card"][1]',
            'elements button'
        );
    }

    async switchToNewTab() {
        await BrowserHandler.switchToNewTab();
    }

    async clickOnAlertsFrameWindowsElem() {
        this._alertsBtn.clickOn();
    }

    async clickOnElementsElem() {
        this._elementsBtn.clickOn();
    }
}
