import Driver from './Driver.js';
import { logger } from './Logger.js';

export default class BrowserHandler {
    static async openUrl(url) {
        logger.info(`Open ${url} URL.`)

        await Driver.getDriver().get(url);
    }

    static async getCurrentTab() {
        logger.info('Getting current tab.')
        return await Driver.getDriver().getWindowHandle();
    }

    static async switchToSpecTab(tab) {
        logger.info('Switching to specified tab.')
        await Driver.getDriver().switchTo().window(tab);
    }

    static async switchToNewTab() {
        logger.info('Switch to new tab.')
        const originalWindow = await Driver.getDriver().getWindowHandle();

        const tabs = await Driver.getDriver().getAllWindowHandles();

        tabs.forEach(async (tab) => {
            if (tab !== originalWindow) {
                await Driver.getDriver().switchTo().window(tab);
            }
        });
    }

    static async closeCurrentTab() {
        logger.info('Close current tab.')
        await Driver.getDriver().close();
    }

    static async switchToFrame(frameLocator) {

        /**
         * Хоть оказалось, что ожидание и не требуется, я не совсем понимаю, почему это не работает.
         * 
         * await Delay.waitForFrame(frameLocator);
         */

        logger.info('Switch to frame.')
        await Driver.getDriver().switchTo().frame(frameLocator);
    }

    static async switchToDefaultContent() {
        logger.info('Switched to default content.')
        await Driver.getDriver().switchTo().defaultContent();
    }

    static async quitBrowser() {
        logger.info('Quit browser.')
        Driver.quitDriver();
    }
}
