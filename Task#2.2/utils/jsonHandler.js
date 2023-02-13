import fs from 'fs';

export default new (class JsonHandler {
    constructor() {
        this._testData = JSON.parse(
            fs.readFileSync('testdata/testData.json', 'utf8')
        );
    }

    getBrowser() {
        return String(this._testData[0].browser);
    }

    getBaseUrl() {
        return String(this._testData[0].baseUrl);
    }

    getDelay() {
        return this._testData[0].delay;
    }

    getLanguagesList() {
        return this._testData[0].languages;
    }

    getCurrentYear() {
        return String(this._testData[0].year);
    }

    getGame() {
        return String(this._testData[0].game);
    }
})();
