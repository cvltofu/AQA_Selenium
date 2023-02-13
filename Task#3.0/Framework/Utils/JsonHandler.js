import fs from 'fs';
import { logger } from './Logger.js';

export default new (class JsonHandler {
    constructor() {
        logger.info('Reading TestData.');
        this._testData = JSON.parse(
            fs.readFileSync('Framework/DataFiles/TestData.json', 'utf8')
        );
        logger.info('Reading ConfigData');
        this._configData = JSON.parse(
            fs.readFileSync('Framework/DataFiles/ConfigData.json', 'utf8')
        );
    }

    getBrowser() {
        logger.info('Get browser from test data.');
        return String(this._testData[0].browser);
    }

    getBaseUrl() {
        logger.info('Get base URL from test data.');
        return String(this._testData[0].baseUrl);
    }

    getDelay() {
        logger.info('Get delay from config data.');
        return this._configData[0].delay;
    }

    getBrowserArgs() {
        logger.info('Get browser arguments.');
        return this._configData[0].args;
    }

    getUserData(number) {
        switch (number) {
            case 1:
                logger.info('Get first user data.');
                return this._testData[0].firstUserData;
            case 2:
                logger.info('Get second user data.');
                return this._testData[0].secondUserData;
        }
    }

    getNumberOfTestUser() {
        logger.info('Get number of test user.');
        return this._testData[0].numberOfTestedUser;
    }

    getPromptTextStarEndPos() {
        logger.info('Get prompt text start or end pos.');
        return this._testData[0].promptTextStartEndtPos;
    }

    getRandomStringProps() {
        logger.info('Get random string props.');
        return this._testData[0].randomStringProps;
    }
})();
