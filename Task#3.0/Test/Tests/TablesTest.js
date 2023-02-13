import { expect } from 'chai';
import AlertsWindows from '../PageObjects/AlertsWindows.js';
import HomePage from '../PageObjects/HomePage.js';
import RegistrationForm from '../PageObjects/TablesTestObjs/RegistrationForm.js';
import WebTables from '../PageObjects/TablesTestObjs/WebTables.js';

describe('Tables test', () => {
    it(`Tables test`, async () => {
        const homePage = new HomePage();
        const alertsWindows = new AlertsWindows();
        const webTables = new WebTables();
        const registrationForm = new RegistrationForm();

        await homePage.waitForFormOpen();
        expect(await homePage.isFormOpen(), 'Home page is opened.').to.be.true;

        await homePage.clickOnElementsElem();
        await alertsWindows.waitForFormOpen();
        await alertsWindows.clickOnWebTables();
        await webTables.waitForFormOpen();
        expect(await webTables.isFormOpen(), 'Web tables page is opened.').to.be
            .true;

        await webTables.clickOnAddBtn();
        await registrationForm.waitForFormOpen();
        expect(
            await registrationForm.isFormOpen(),
            'Registration form is opened.'
        ).to.be.true;

        await registrationForm.enterDataToForm();
        await registrationForm.clickSubmit();
        await webTables.waitForFormOpen();

        const numberOfRecordsWithNewData = await webTables.getNumberOfRecords();

        expect(
            await registrationForm.isFormOpen(),
            'Registration form is close.'
        ).to.be.false;
        expect(
            await webTables.isDataAppeared(),
            'New data is appeared in table.'
        ).to.be.true;
        await webTables.clickOnDeleteBtn();

        const numberOfRecordsWithoutNewData =
            await webTables.getNumberOfRecords();

        expect(
            numberOfRecordsWithNewData,
            'Number of records in table has changed.'
        ).not.equal(numberOfRecordsWithoutNewData);
        expect(
            await webTables.isDataDeleted(),
            'Data of user has benn deleted from table.'
        ).to.be.true;
    });
});
