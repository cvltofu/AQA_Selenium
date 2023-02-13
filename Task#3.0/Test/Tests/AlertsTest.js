import { expect } from 'chai';
import HomePage from '../PageObjects/HomePage.js';
import AlertsWindows from '../PageObjects/AlertsWindows.js';
import Alerts from '../PageObjects/AlertsTestObjs/Alerts.js';

describe('Alerts test', () => {
    it(`Alerts test`, async () => {
        const homePage = new HomePage();
        const alertsWindows = new AlertsWindows();
        const alerts = new Alerts();

        await homePage.waitForFormOpen();
        expect(await homePage.isFormOpen(), 'Home page is opened').to.be.true;

        await homePage.clickOnAlertsFrameWindowsElem();
        await alertsWindows.waitForFormOpen();
        await alertsWindows.clickOnAlerts();
        await alerts.waitForFormOpen();
        expect(await alerts.isFormOpen(), 'Alerts page is opened.').to.be.true;

        await alerts.clickOnBtnToSeeAlert();
        expect(
            await alerts.getAlertText(),
            'Alert with text "You clicked a button" is opened.'
        ).to.be.equal('You clicked a button');
        await alerts.clickOkAlert();
        expect(await alerts.isAlertExist(), 'Alert is closed.').to.be.false;

        await alerts.waitForFormOpen();
        await alerts.clickOnBtnToSeeConfirmAlert();
        expect(
            await alerts.getAlertText(),
            'Alert with text "Do you confirm action?" is opened.'
        ).to.be.equal('Do you confirm action?');
        await alerts.clickOkAlert();
        expect(await alerts.isAlertExist(), 'Alert is closed.').to.be.false;
        expect(
            await alerts.getTextAfetrConfirm(),
            'Text "You selected OK" is appeared on page.'
        ).to.be.equal('You selected Ok');

        await alerts.clickOnBtnToSeePromtAlert();
        expect(
            await alerts.getAlertText(),
            'Alert with text "Please enter your name" is opened.'
        ).to.be.equal('Please enter your name');
        await alerts.inputTextIntoPromtAlert();
        await alerts.clickOkAlert();

        expect(
            await alerts.getTextAfterPrompt(),
            'Appeared text is equals to the entered one.'
        ).to.be.equal(alerts._randomText);
    });
});
