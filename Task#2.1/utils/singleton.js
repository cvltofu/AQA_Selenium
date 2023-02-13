import { Builder } from 'selenium-webdriver';

export default class Singleton {
    static driver;

    static async getDriver() {
        if (driver === undefined) {
            driver = await new Builder().forBrowser('chrome').build();
        }

        return driver;

        // driver === null
        //     ? ((driver = new Builder().forBrowser('chrome').build()), driver)
        //     : driver;
    }
}
