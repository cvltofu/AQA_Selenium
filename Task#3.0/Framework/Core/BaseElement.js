import Driver from '../Utils/Driver.js';
import Delay from '../Utils/Delay.js';
import { By } from 'selenium-webdriver';
import { logger } from '../Utils/Logger.js';

export default class BaseElement {
    constructor(selector, name) {
        this._uniqueSelector = selector;
        this._name = name;
    }

    async isElemDisplayed() {
        logger.info(`Check is ${this._name} displayed.`);
        return await Driver.getDriver()
            .findElement(By.xpath(this._uniqueSelector))
            .isDisplayed();
    }

    async getElement() {
        logger.info(`Get ${this._name}`);
        await Delay.waitForElemLocated(this._uniqueSelector);

        return await Driver.getDriver().findElement(
            By.xpath(this._uniqueSelector)
        );
    }

    async getElements() {
        logger.info(`Get elements of ${this._name}.`);
        await Delay.waitForElemLocated(this._uniqueSelector);

        return await Driver.getDriver().findElements(
            By.xpath(this._uniqueSelector)
        );
    }

    async clickOn() {
        logger.info(`Click on ${this._name}.`);
        let elem = await this.getElement();
        await elem.click();
    }

    async getText() {
        logger.info(`Get ${this._name} text.`);
        let elem = await this.getElement();
        return await elem.getText();
    }

    async getAttribute(attribute) {
        logger.info(`Get ${this._name} attribute.`);
        let elem = await this.getElement();
        return await elem.getAttribute(attribute);
    }
}
