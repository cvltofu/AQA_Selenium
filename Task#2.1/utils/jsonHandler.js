import fs from 'fs';

let testData = undefined;
let newTestData = undefined;

export default new (class jsonHandler {
    constructor() {
        this.testData = testData;
        this.newTestData = newTestData;
        this.fileParsing();
    }

    fileParsing() {
        testData = JSON.parse(
            fs.readFileSync('testdata/testData.json', 'utf8')
        );
    }

    getBrowser() {
        return String(testData[0].browser);
    }

    getBaseUrl() {
        return String(testData[0].baseUrl);
    }

    getLanguagesList() {
        return testData[0].languages;
    }

    getCurrentyear() {
        return String(testData[0].year);
    }

    getGame() {
        return String(testData[0].game);
    }
})();
