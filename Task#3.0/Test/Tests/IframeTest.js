import { expect } from 'chai';
import AlertsWindows from '../PageObjects/AlertsWindows.js';
import HomePage from '../PageObjects/HomePage.js';
import Frames from '../PageObjects/IframeTestObjs/Frames.js';
import NestedFrames from '../PageObjects/IframeTestObjs/NestedFrames.js';

describe('Iframe test', () => {
    it(`Iframe test`, async () => {
        const homePage = new HomePage();
        const alertsWindows = new AlertsWindows();
        const nestedFrames = new NestedFrames();
        const frames = new Frames();

        await homePage.waitForFormOpen();
        expect(await homePage.isFormOpen(), 'Home page is opened.').to.be.true;

        await homePage.clickOnAlertsFrameWindowsElem();
        await alertsWindows.waitForFormOpen();
        await alertsWindows.clickOnNestedFrames();
        await nestedFrames.waitForFormOpen();
        expect(await nestedFrames.isFormOpen(), 'Nested frames page is opened.')
            .to.be.true;

        expect(
            await nestedFrames.getOutsideFrameText(),
            'There are "Parent frame" present on page.'
        ).to.be.equal('Parent frame');
        expect(
            await nestedFrames.getInsideFrameText(),
            'There are "Child frame" present on page.'
        ).to.be.equal('Child Iframe');

        await alertsWindows.clickOnFrames();
        await frames.waitForFormOpen();

        expect(await frames.isFormOpen(), 'Frames page is opened.').to.be.true;

        expect(
            await frames.getUpperFrameText(),
            'Messages from upper and lower frame are equal.'
        ).to.be.equal(await frames.getLowerFrameText());
    });
});
