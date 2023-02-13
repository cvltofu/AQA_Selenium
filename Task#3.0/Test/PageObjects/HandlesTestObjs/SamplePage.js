import BaseForm from '../../../Framework/Core/BaseForm.js';
import BrowserHandler from '../../../Framework/Utils/BrowserHandler.js';

export default class SamplePage extends BaseForm {
    constructor() {
        super('//h1[@id="sampleHeading"]');
    }

    async switchToNewTab() {
        await BrowserHandler.switchToNewTab();
    }

    async closeTab() {
        await BrowserHandler.closeCurrentTab();
    }
}
