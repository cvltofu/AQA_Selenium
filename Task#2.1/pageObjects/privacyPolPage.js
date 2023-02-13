import BasePage from './basePage.js';
import jsonHandler from '../utils/jsonHandler.js';

const languagesElemPath = '//div[@id="languages"]';

export default new (class PrivacyPolPage extends BasePage {
    async openThisTab() {
        return super.openInNewTab();
    }

    async findLanguageElem() {
        return super.findElem(languagesElemPath);
    }

    async checkLanguages() {
        const languages = jsonHandler.getLanguagesList();
        let isCorrect = false;
        let counter = 0;

        languages.forEach((elem) => {
            let languagesUrls = `https://store.steampowered.com/privacy_agreement/${languages[counter]}/`;

            languagesUrls ===
            `https://store.steampowered.com/privacy_agreement/${elem}/`
                ? (isCorrect = true)
                : (isCorrect = false);

            counter++;
        });

        return isCorrect;
    }

    async checkIsCurrentYear() {
        const currentYear = jsonHandler.getCurrentyear();
        const yearRevisionElemPath = `//div[@id="newsColumn"]//child::i[contains(text(), "${currentYear}")]`;

        return await super.findElem(yearRevisionElemPath);
    }
})();
