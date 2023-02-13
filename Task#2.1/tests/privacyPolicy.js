import { expect } from 'chai';
import homePage from '../pageobjects/homePage.js';
import privacyPolPage from '../pageobjects/privacyPolPage.js';
import jsonHandler from '../utils/jsonHandler.js';

describe('Privacy policy test', () => {
    before('Open website.', async () => {
        await homePage.openUrl(jsonHandler.getBaseUrl());
    });

    after('Quit from driver.', async () => {
        await homePage.quitBrowser();
    });

    it('Main page is displayed.', async () => {
        expect(await homePage.findUnicElem()).to.exist;
    });

    it('Privacy policy page is open in the new tab.', async () => {
        await homePage.findAndScrollToPrivacyElement();
        await homePage.clickOnPrivacyButton();
        await privacyPolPage.openThisTab();
        expect(await privacyPolPage.findLanguageElem()).to.exist;
    });

    it('Switch language elements list displayed. Check for supported languages', async () => {
        expect(await privacyPolPage.findLanguageElem()).to.exist;
        expect(await privacyPolPage.checkLanguages()).to.be.true;
    });

    it('Policy revision signed in the current year.', async () => {
        expect(await privacyPolPage.checkIsCurrentYear()).to.exist;
    });
});
