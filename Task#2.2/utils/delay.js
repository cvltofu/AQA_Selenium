import { By, until } from 'selenium-webdriver';
import Singleton from './Singleton.js';

export default class Delay {
    constructor(path, delay) {
        this.path = path;
        this.delay = delay;
    }

    static async makeDelay(path, delay) {
        await Singleton.getDriver().wait(
            until.elementLocated(By.xpath(`${path}`), delay)
        );
    }
}
