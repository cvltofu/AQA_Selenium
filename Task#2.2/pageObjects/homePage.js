import BasePage from './BasePage.js';
import JsonHandler from '../utils/jsonHandler.js';
import Footer from './Footer.js';
import Header from './Header.js';

export default new (class HomePage extends BasePage {
    constructor() {
        super();
        this._unicPageElemPath = '//div[@id="foryou_tab"]';
    }

    async findUnicElem() {
        return super.findElem(this._unicPageElemPath);
    }

    async findAndScrollToPrivacyElement() {
        super.findAndScrollTo(Footer.getPrivacyElemPath());
    }

    async clickOnPrivacyButton() {
        super.clickOnSmth(Footer.getPrivacyElemPath());
    }

    async searchGame() {
        super.enterTextAndSubmit(
            Header.getSearchElemPath(),
            JsonHandler.getGame()
        );
    }
})();
