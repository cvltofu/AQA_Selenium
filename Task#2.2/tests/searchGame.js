import { expect } from 'chai';
import homePage from '../pageobjects/HomePage.js';
import searchPage from '../pageobjects/SearchPage.js';
import JsonHandler from '../utils/jsonHandler.js';
import BrowserHandler from '../utils/BrowserHandler.js';

describe('Game search test', () => {
    before('Open website.', async () => {
        await BrowserHandler.openUrl(JsonHandler.getBaseUrl());
    });

    after('Quit from driver.', async () => {
        await BrowserHandler.quitBrowser();
    });

    it(`Main page is displayed. 
    Search "Dota 2" in the search field.
    Search the second name from result list in the header search field.
    `, async () => {
        expect(await homePage.findUnicElem()).to.exist;

        await homePage.searchGame();
        expect(await searchPage.findUnicElem()).to.exist;
        expect(await searchPage.isTextContainerContains()).to.eqls(
            JsonHandler.getGame()
        );
        expect(await searchPage.firstNameIsEqls()).to.eqls(
            JsonHandler.getGame()
        );

        expect(await searchPage.searchSecondGame()).to.eqls(
            await searchPage.isTextContainerContains()
        );
        expect(await searchPage.resultListIsContains()).to.be.equal(2);
        expect(await searchPage.resultListIsMatches()).to.be.equal(2);
    });
});
