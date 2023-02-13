import BasePage from './BasePage.js';
import JsonHandler from '../utils/jsonHandler.js';

export default new (class PrivacyPolPage extends BasePage {
    constructor() {
        super();
        this._languagesElemPath = '//div[@id="languages"]';
        this._allLanguagesPath = '//div[@id="languages"]//a';
    }

    async findLanguageElem() {
        return super.findElem(this._languagesElemPath);
    }

    async checkLanguages() {
        const languages = JsonHandler.getLanguagesList();
        let arrayOfLanguages = await super.findElems(this._allLanguagesPath);
        let isCorrect = false;
        let counter = 0;

        for (let elem of languages) {
            let languagesUrls = `https://store.steampowered.com/privacy_agreement/${elem}/`;

            languagesUrls ===
            (await arrayOfLanguages[counter].getAttribute('href'))
                ? (isCorrect = true)
                : (isCorrect = false);

            counter++;
        }

        return isCorrect;
    }

    async checkIsCurrentYear() {
        const currentYear = JsonHandler.getCurrentYear();
        const yearRevisionElemPath = `//div[@id="newsColumn"]//child::i[contains(text(), "${currentYear}")]`;

        return await super.findElem(yearRevisionElemPath);
    }
})();
