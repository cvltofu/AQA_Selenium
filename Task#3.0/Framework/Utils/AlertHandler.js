import Delay from './Delay.js';
import Driver from './Driver.js';
import { logger } from './Logger.js';

export default class AlertHandler {
    constructor() {}

    static async waitForAlertAndGet() {
        try {
            logger.info('Get alert.');
            return await Delay.waitForAlertAndGet();
        } catch (error) {
            logger.info(`${error}`);
            await Driver.getDriver().switchTo().alert();
            return await Delay.waitForAlertAndGet();
        }
    }

    static async getAlertText() {
        logger.info('Get alert text.');
        return await (await Delay.waitForAlertAndGet()).getText();
    }

    static async enterText(text) {
        logger.info(`Enter text ${text} into alert.`);
        await (await Delay.waitForAlertAndGet()).sendKeys(text);
    }

    static async clickOk() {
        logger.info('Click on alert.');
        await (await Delay.waitForAlertAndGet()).accept();
    }

    static async isAlertExist() {
        logger.info('Ckeck is alert exits.');
        try {
            logger.info('Alert exist.');
            await Driver.getDriver().switchTo().alert();
            return true;
        } catch (error) {
            logger.info(`${error}`);
            return false;
        }
    }
}
