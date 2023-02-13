import { By, until } from 'selenium-webdriver';

export default new (class Delay {
    constructor(path, delay) {
        this.path = path;
        this.delay = delay;
    }

    async makeDelay(path, delay) {
        await driver.wait(until.elementLocated(By.xpath(`${path}`), delay));
    }
})();
