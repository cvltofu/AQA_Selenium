import BaseForm from '../../../Framework/Core/BaseForm.js';
import Button from '../../../Framework/Core/Elements/Button.js';
import TextContainer from '../../../Framework/Core/Elements/TextContainer.js';
import AlertHandler from '../../../Framework/Utils/AlertHandler.js';
import JsonHandler from '../../../Framework/Utils/JsonHandler.js';
import RandomString from '../../../Framework/Utils/RandomString.js';

export default class Alerts extends BaseForm {
    constructor() {
        super('//button[@id="alertButton"]');

        this._btnToSeeAlert = new Button(
            '//button[@id="alertButton"]',
            'button to see alert'
        );
        this._btnToSeeConfirmAlert = new Button(
            '//button[@id="confirmButton"]',
            'button to see confirm alert'
        );
        this._btnToSeePromptAlert = new Button(
            '//button[@id="promtButton"]',
            'button to see promt alert'
        );
        this._textContainerAfterConfirm = new TextContainer(
            '//span[@id="confirmResult"]',
            'text container after confirm'
        );
        this._textContainerAfterPrompt = new TextContainer(
            '//span[@id="promptResult"]',
            'text container after prompt'
        );

        this._randomText = RandomString.getRandomString();
    }

    async clickOnBtnToSeeAlert() {
        await this._btnToSeeAlert.clickOn();
    }

    async clickOnBtnToSeeConfirmAlert() {
        await this._btnToSeeConfirmAlert.clickOn();
    }

    async clickOnBtnToSeePromtAlert() {
        await this._btnToSeePromptAlert.clickOn();
    }

    async getTextAfetrConfirm() {
        return await this._textContainerAfterConfirm.getText();
    }

    async getTextAfterPrompt() {
        return (await this._textContainerAfterPrompt.getText()).slice(
            JsonHandler.getPromptTextStarEndPos().start,
            JsonHandler.getPromptTextStarEndPos().end
        );
    }

    async inputTextIntoPromtAlert() {
        await AlertHandler.enterText(this._randomText);
    }

    async getAlertText() {
        return await AlertHandler.getAlertText();
    }

    async clickOkAlert() {
        await AlertHandler.clickOk();
    }

    async isAlertExist() {
        return await AlertHandler.isAlertExist();
    }
}
