import chromedriver from 'chromedriver';
import { By, Key } from 'selenium-webdriver';
import Delay from '../utils/Delay.js';
import JsonHandler from '../utils/JsonHandler.js';
import Singleton from '../utils/Singleton.js';

export default class BasePage {
    _delay = JsonHandler.getDelay();

    async findElem(unicPageElemPath) {
        await Delay.makeDelay(unicPageElemPath, this._delay);

        return await Singleton.getDriver().findElement(
            By.xpath(unicPageElemPath)
        );
    }

    async findElems(unicPageElemPath) {
        await Delay.makeDelay(unicPageElemPath, this._delay);

        return await Singleton.getDriver().findElements(
            By.xpath(unicPageElemPath)
        );
    }

    async findAndScrollTo(unicPageElemPath) {
        await Delay.makeDelay(unicPageElemPath, this._delay);

        await scrollIntoView(unicPageElemPath);
    }

    async clickOnSmth(unicPageElemPath) {
        await Delay.makeDelay(unicPageElemPath, this._delay);

        await Singleton.getDriver()
            .findElement(By.xpath(unicPageElemPath))
            .sendKeys(Key.ENTER);
    }

    async enterTextAndSubmit(unicPageElemPath, text) {
        await Singleton.getDriver()
            .findElement(By.xpath(unicPageElemPath))
            .sendKeys(text, Key.ENTER);
    }
}
