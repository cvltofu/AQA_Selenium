import BrowserHandler from '../../Framework/Utils/BrowserHandler.js';
import JsonHandler from '../../Framework/Utils/JsonHandler.js';

beforeEach('Open website.', async () => {
    await BrowserHandler.openUrl(JsonHandler.getBaseUrl());
});

afterEach('Quit from driver.', async () => {
    await BrowserHandler.quitBrowser();
});