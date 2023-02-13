import BaseForm from '../../Framework/Core/BaseForm.js';
import Button from '../../Framework/Core/Elements/Button.js';

export default class AlertsWindows extends BaseForm {
    constructor() {
        super('//span[@class="group-header"]');

        this._alertsBtn = new Button(
            '//div[contains(@class, "element-list") and contains(@class, "collapse") and contains(@class, "show")]//ul[@class="menu-list"]//li[@id="item-1"]',
            'alerts button'
        );
        this._nestedFramesBtn = new Button(
            '//div[contains(@class, "element-list") and contains(@class, "collapse") and contains(@class, "show")]//ul[@class="menu-list"]//li[@id="item-3"]',
            'nested frames button'
        );
        this._framesBtn = new Button(
            '//div[contains(@class, "element-list") and contains(@class, "collapse") and contains(@class, "show")]//ul[@class="menu-list"]//li[@id="item-2"]',
            'frames button'
        );
        this._webTablesBtn = new Button(
            '//div[contains(@class, "element-list") and contains(@class, "collapse") and contains(@class, "show")]//ul[@class="menu-list"]//li[@id="item-3"]',
            'web tables button'
        );
        this._browserWindowsBtn = new Button(
            '//div[contains(@class, "element-list") and contains(@class, "collapse") and contains(@class, "show")]//ul[@class="menu-list"]//li[@id="item-0"]',
            'browser windows button'
        );
    }

    async clickOnAlerts() {
        await this._alertsBtn.clickOn();
    }

    async clickOnNestedFrames() {
        await this._nestedFramesBtn.clickOn();
    }

    async clickOnFrames() {
        await this._framesBtn.clickOn();
    }

    async clickOnWebTables() {
        await this._webTablesBtn.clickOn();
    }

    async clickOnBrowserWindows() {
        await this._browserWindowsBtn.clickOn();
    }
}
