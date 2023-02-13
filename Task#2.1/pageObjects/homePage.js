import BasePage from './basePage.js';
import jsonHandler from '../utils/jsonHandler.js';

const unicPageElemPath = '//div[@id="foryou_tab"]';
const privacyElemPath = '//div[@id="footer_text"]//child::div[2]//child::a[1]';
const searchElementPath = '//input[@id="store_nav_search_term"]';

export default new (class HomePage extends BasePage {
    async findUnicElem() {
        return super.findElem(unicPageElemPath);
    }

    async findAndScrollToPrivacyElement() {
        super.findAndScrollTo(privacyElemPath);
    }

    async clickOnPrivacyButton() {
        super.clickOnSmth(privacyElemPath);
    }

    async searchGame() {
        super.enterTextAndSubmit(searchElementPath, jsonHandler.getGame());
    }
})();
