import { expect } from 'chai';
import AlertsWindows from '../PageObjects/AlertsWindows.js';
import ElementsWindows from '../PageObjects/ElementsWindows.js';
import BrowserWindows from '../PageObjects/HandlesTestObjs/BrowserWindows.js';
import Links from '../PageObjects/HandlesTestObjs/Links.js';
import SamplePage from '../PageObjects/HandlesTestObjs/SamplePage.js';
import HomePage from '../PageObjects/HomePage.js';
import SideBar from '../PageObjects/SideBar.js';

describe('Handles test', () => {
    it(`Handles test`, async () => {
        const homePage = new HomePage();
        const alertsWindows = new AlertsWindows();
        const browserWindows = new BrowserWindows();
        const samplePage = new SamplePage();
        const links = new Links();
        const sideBar = new SideBar();
        const elementsWindows = new ElementsWindows();

        await homePage.waitForFormOpen();
        expect(await homePage.isFormOpen(), 'Hhome page is opened.').to.be.true;

        await homePage.clickOnAlertsFrameWindowsElem();
        await alertsWindows.waitForFormOpen();
        await alertsWindows.clickOnBrowserWindows();
        await browserWindows.waitForFormOpen();
        expect(
            await browserWindows.isFormOpen(),
            'Browser windows page is opened.'
        ).to.be.true;

        await browserWindows.clickOnNewTab();
        await samplePage.switchToNewTab();
        await samplePage.waitForFormOpen();
        expect(await samplePage.isFormOpen(), 'Sample page is opened.').to.be
            .true;

        await samplePage.closeTab();
        await browserWindows.switchTo();
        await browserWindows.waitForFormOpen();
        expect(
            await browserWindows.isFormOpen(),
            'Browser windows page is opened.'
        ).to.be.true;

        await sideBar.clickOnElements();
        await elementsWindows.waitForFormOpen();
        await elementsWindows.clickOnLinks();
        await links.waitForFormOpen();
        expect(await links.isFormOpen(), 'Links page is opened').to.be.true;

        await links.clickOnHomeLink();
        await homePage.switchToNewTab();
        await homePage.waitForFormOpen();
        expect(await homePage.isFormOpen(), 'Home page is opened.').to.be.true;

        await links.switchTo();
        await links.waitForFormOpen();
        expect(await links.isFormOpen(), 'Links page is opened.').to.be.true;
    });
});
