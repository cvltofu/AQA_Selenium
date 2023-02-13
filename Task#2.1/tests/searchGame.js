import { expect } from 'chai';
import homePage from '../pageobjects/homePage.js';
import searchPage from '../pageobjects/searchPage.js';
import jsonHandler from '../utils/jsonHandler.js';

describe('Game search test', () => {
    before('Open website.', async () => {
        await searchPage.openUrl(jsonHandler.getBaseUrl());
    });

    after('Quit from driver.', async () => {
        await searchPage.quitBrowser();
    });

    it('Main page is displayed.', async () => {
        expect(await homePage.findUnicElem()).to.exist;
    });

    it('Search "Dota 2" in the search field.', async () => {
        await homePage.searchGame();
        expect(await searchPage.findUnicElem()).to.exist;
        expect(await searchPage.isContains()).to.eqls(jsonHandler.getGame());
        expect(await searchPage.firstNameIsEqls()).to.eqls(
            jsonHandler.getGame()
        );
    });

    it('Search the second name from result list in the header search field.', async () => {
        expect(await searchPage.searchSecondGame()).to.eqls(
            await searchPage.isContains()
        );
        expect(await searchPage.resultListIsContains()).to.be.equal(2);
        expect(await searchPage.resultListIsMatches()).to.be.equal(2);
    });
});
