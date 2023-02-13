import JsonHandler from './JsonHandler.js';
import { logger } from './Logger.js';

export default class RandomText {
    constructor() {}

    static getRandomString() {
        logger.info('Get random string.');

        return Math.random()
            .toString(JsonHandler.getRandomStringProps().base)
            .substring(
                JsonHandler.getRandomStringProps().start,
                JsonHandler.getRandomStringProps().end
            );
    }
}
