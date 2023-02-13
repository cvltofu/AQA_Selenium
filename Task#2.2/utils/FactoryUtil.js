import { Builder, Capabilities } from 'selenium-webdriver';

export default class FactoryUtil {
    static getDriver(browserName) {
        switch (browserName) {
            case 'chrome': {
                let chromeCapabilities;
                let driver;

                chromeCapabilities = Capabilities.chrome().set(
                    'goog:chromeOptions',
                    { args: ['--test-type', '--incognito'] }
                );

                driver = new Builder()
                    .forBrowser(browserName)
                    .withCapabilities(chromeCapabilities)
                    .build();

                return driver;
            }
            case 'firefox':
                return 1;
        }
    }
}
