import chromedriver from 'chromedriver';
import { Builder, By, Key, Capabilities } from 'selenium-webdriver';
import makeDelay from '../utils/delay.js';
import jsonHandler from '../utils/jsonHandler.js';

let driver;

export default class BasePage {
    constructor() {
        let chromeCapabilities;
        if (jsonHandler.getBrowser() === 'chrome') {
            chromeCapabilities = Capabilities.chrome().set(
                'goog:chromeOptions',
                { args: ['--test-type', '--incognito'] }
            );
        }

        driver !== undefined
            ? (global.driver = driver)
            : ((driver = new Builder()
                  .forBrowser(jsonHandler.getBrowser())
                  .withCapabilities(chromeCapabilities)
                  .build()),
              (global.driver = driver));
    }

    async openUrl(url) {
        await driver.get(url);
    }

    async findElem(unicPageElemPath, delay = 10000) {
        await makeDelay.makeDelay(unicPageElemPath, delay);

        return await driver.findElement(By.xpath(unicPageElemPath));
    }

    async findElems(unicPageElemPath, delay = 10000) {
        await makeDelay.makeDelay(unicPageElemPath, delay);

        return await driver.findElements(By.xpath(unicPageElemPath));
    }

    async findAndScrollTo(unicPageElemPath, delay = 10000) {
        await driver.executeScript(
            'window.scrollBy(0,document.body.scrollHeight)'
        );

        await driver.executeScript(
            'arguments[0].scrollIntoView(true);',
            unicPageElemPath
        );

        await makeDelay.makeDelay(unicPageElemPath, delay);
    }

    async clickOnSmth(unicPageElemPath) {
        await driver
            .findElement(By.xpath(unicPageElemPath))
            .sendKeys(Key.ENTER);
    }

    async enterTextAndSubmit(unicPageElemPath, text) {
        await driver
            .findElement(By.xpath(unicPageElemPath))
            .sendKeys(text, Key.ENTER);
    }

    async openInNewTab() {
        const originalWindow = await driver.getWindowHandle();

        await driver.wait(
            async () => (await driver.getAllWindowHandles()).length === 2,
            10000
        );

        const tabs = await driver.getAllWindowHandles();

        tabs.forEach(async (tab) => {
            if (tab !== originalWindow) {
                await driver.switchTo().window(tab);
            }
        });
    }

    async quitBrowser() {
        await driver.quit();
    }
}
