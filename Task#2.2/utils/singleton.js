import FactoryUtil from './FactoryUtil.js';
import JsonHandler from './JsonHandler.js';

export default class Singleton {
    _driver = null;

    static getDriver() {
        if (!this._driver) {
            this._driver = FactoryUtil.getDriver(JsonHandler.getBrowser());
        }

        return this._driver;
    }

    static quitDriver() {
        this._driver.quit()
        this._driver = null;
    }
}
