import { By, until } from 'selenium-webdriver';
import Driver from './Driver.js';
import JsonHandler from './JsonHandler.js';
import { logger } from './Logger.js';

export default class Delay {
    constructor() {
        this.delay = JsonHandler.getDelay();
    }

    static async waitForElemLocated(path) {
        logger.info('Waiting for elem located.')
        await Driver.getDriver().wait(
            until.elementLocated(By.xpath(`${path}`), this._delay)
        );
    }

    static async waitForElemLocatedAndGet(path) {
        logger.info('Wait for locate elem and get it.')
        return await Driver.getDriver().wait(
            until.elementLocated(By.xpath(`${path}`), this._delay)
        );
    }

    static async waitForAlertAndGet() {
        logger.info('Wait for locate alert and get it.')
        return await Driver.getDriver().wait(until.alertIsPresent());
    }

    static async waitForFrame(frameLocator) {
        logger.info('Wait for ablet to switch to frame.')
        await Driver.getDriver().wait(until.ableToSwitchToFrame(frameLocator));
    }
}
