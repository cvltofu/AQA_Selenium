export default class Footer {
    static _privacyElemPath =
        '//div[@id="footer_text"]//child::div[2]//child::a[1]';

    static getPrivacyElemPath() {
        return this._privacyElemPath;
    }
}
