import chromedriver from 'chromedriver';
import BaseElement from './BaseElement.js';
import Delay from '../Utils/Delay.js';
import { logger } from '../Utils/Logger.js';

export default class BaseForm {
    constructor(locator, name) {
        this._uniqueLocator = locator;
        this._name = name;
    }

    async waitForFormOpen() {
        await Delay.waitForElemLocated(this._uniqueLocator);
    }

    async isFormOpen() {
        logger.info(`Chech is form ${this._name} open.`);
        try {
            const uniqueElem = new BaseElement(this._uniqueLocator);

            logger.info(`Form ${this._name} is open`);

            return await uniqueElem.isElemDisplayed();
        } catch (error) {
            logger.info(`Form ${this._name} is not open`);
            return false;
        }
    }
}
