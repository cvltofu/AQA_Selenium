import { Builder, Capabilities } from 'selenium-webdriver';
import JsonHandler from './JsonHandler.js';

export default class BrowserFactory {
    static getDriver(browserName) {
        switch (browserName) {
            case 'chrome': {
                let chromeCapabilities;
                let driver;

                chromeCapabilities = Capabilities.chrome().set(
                    'goog:chromeOptions',
                    { args: JsonHandler.getBrowserArgs() }
                );

                driver = new Builder()
                    .forBrowser(browserName)
                    .withCapabilities(chromeCapabilities)
                    .build();
                return driver;
            }
            case 'firefox': {
                let chromeCapabilities;

                let driver;

                chromeCapabilities = Capabilities.chrome().set(
                    'moz:firefoxOptions',
                    { args: JsonHandler.getBrowserArgs() }
                );

                driver = new Builder().forBrowser(browserName).build();
                return driver;
            }
        }
    }
}
