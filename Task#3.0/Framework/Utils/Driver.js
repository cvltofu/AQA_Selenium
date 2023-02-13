import BrowserFactory from './BrowserFactory.js';
import JsonHandler from './JsonHandler.js';

export default class Driver {
    _driver = null;

    static getDriver() {
        if (!this._driver) {
            this._driver = BrowserFactory.getDriver(JsonHandler.getBrowser());
        }

        return this._driver;
    }

    static quitDriver() {
        this._driver.quit();
        this._driver = null;
    }
}
