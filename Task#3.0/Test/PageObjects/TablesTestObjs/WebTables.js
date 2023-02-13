import BaseElement from '../../../Framework/Core/BaseElement.js';
import BaseForm from '../../../Framework/Core/BaseForm.js';
import Button from '../../../Framework/Core/Elements/Button.js';
import JsonHandler from '../../../Framework/Utils/JsonHandler.js';

export default class WebTables extends BaseForm {
    constructor() {
        super('//input[@id="searchBox"]');
        this._addedElementElemPath =
            '//div[@class="rt-tr-group"][4]//div[@class="rt-tr -even"]//div[@class="rt-td"]';
        this._deletedElementElemPath =
            '//div[@class="rt-tr-group"][4]//div[@class="rt-tr -padRow -even"]//div[@class="rt-td"]';
        this._tableElemPath =
            '//div[@class="rt-tbody"]//div[@class="rt-tr-group"]';

        this._addBtn = new Button(
            '//button[@id="addNewRecordButton"]',
            'add button'
        );
        this._deleteBtn = new Button(
            '//span[@id="delete-record-4"]',
            'delete button'
        );
    }

    async clickOnAddBtn() {
        await this._addBtn.clickOn();
    }

    async clickOnDeleteBtn() {
        await this._deleteBtn.clickOn();
    }

    async getNumberOfRecords() {
        const tableElement = new BaseElement(
            this._tableElemPath,
            'table element'
        );
        const arrayOfRows = await tableElement.getElements();
        let counterOfRecords = 0;

        for (const elem of arrayOfRows) {
            if ((await elem.getText()).length > 7) counterOfRecords++;
        }

        return counterOfRecords;
    }

    async isDataAppeared() {
        const userData = await JsonHandler.getUserData(
            await JsonHandler.getNumberOfTestUser()
        );

        const tableRowElement = new BaseElement(
            this._addedElementElemPath,
            'table row element'
        );
        const dataOfAddedElement = await tableRowElement.getElements();
        let isСoincidence = true;
        let iterator = 0;

        for (const elem in userData) {
            if (
                !(
                    userData[elem] ===
                    (await dataOfAddedElement[iterator].getText())
                )
            )
                isСoincidence = false;

            iterator++;
        }

        return isСoincidence;
    }

    async isDataDeleted() {
        const tableRowElement = new BaseElement(
            this._deletedElementElemPath,
            'table row element'
        );
        const arrayOfRows = await tableRowElement.getElements();
        let isDataDeleted = false;

        (await arrayOfRows[0].getText()) === ' '
            ? (isDataDeleted = true)
            : (isDataDeleted = false);

        return isDataDeleted;
    }
}
