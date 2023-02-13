import { expect } from 'chai';
import homePage from '../pageobjects/HomePage.js';
import privacyPolPage from '../pageobjects/PrivacyPolPage.js';
import JsonHandler from '../utils/jsonHandler.js';
import BrowserHandler from '../utils/BrowserHandler.js';

describe('Privacy policy test', () => {
    before('Open website.', async () => {
        await BrowserHandler.openUrl(JsonHandler.getBaseUrl());
    });

    after('Quit from driver.', async () => {
        await BrowserHandler.quitBrowser();
    });

    it(`Main page is displayed. 
        Privacy policy page is open in the new tab. 
        Switch language elements list displayed. 
        Check for supported languages. 
        Policy revision signed in the current year.`, async () => {
        expect(await homePage.findUnicElem()).to.exist;

        await homePage.findAndScrollToPrivacyElement();
        await homePage.clickOnPrivacyButton();
        await BrowserHandler.openInNewTab();
        expect(await privacyPolPage.findLanguageElem()).to.exist;

        expect(await privacyPolPage.findLanguageElem()).to.exist;
        expect(await privacyPolPage.checkLanguages()).to.be.true;

        expect(await privacyPolPage.checkIsCurrentYear()).to.exist;
    });
});
