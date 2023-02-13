import { Builder, Browser, By, Key, until } from 'selenium-webdriver';
import { expect } from 'chai';

(async function example() {
    describe('Test scenario "Invalid login"', async () => {
        //launch the browser
        const driver = new Builder().forBrowser(Browser.CHROME).build();

        before('Navigate to website, make delay', async () => {
            await driver.get('https://store.steampowered.com/');
        });

        it('Navigate to login page', async () => {
            const unicPageElemPath = '//div[contains(@id, "foryou_tab")]';

            await makeDelay(unicPageElemPath, 10000);

            const unicPageElem = await driver.findElement(
                By.xpath(unicPageElemPath)
            );

            expect(unicPageElem).to.exist;
        });

        it('Click login button on main page, login page is open', async () => {
            const loginButtonMainPage = await driver.findElement(
                By.xpath('//a[contains(@class, "global_action_link")]')
            );

            loginButtonMainPage.sendKeys(Key.ENTER);

            const loginButtonLoginPagePath =
                '//button[contains(@class, "newlogindialog_SubmitButton")]';

            await makeDelay(loginButtonLoginPagePath, 10000);

            const loginButtonLoginPage = await driver.findElement(
                By.xpath(loginButtonLoginPagePath)
            );

            expect(loginButtonLoginPage).to.exist;
        });

        it('Input random strings as credentials. Click sign button', async () => {
            const loginButtonLoginPagePath =
                '//button[contains(@class, "newlogindialog_SubmitButton")]';
            const loadingElementPath =
                '//div[contains(@class, "newlogindialog_LoadingContainer")]';
            const errorElementPath =
                '//div[contains(@class, "newlogindialog_FormError")]';

            await makeDelay(loginButtonLoginPagePath, 10000);

            const loginButtonLoginPage = await driver.findElement(
                By.xpath(loginButtonLoginPagePath)
            );

            await driver
                .findElement(By.xpath('//input[contains(@type, "text")]'))
                .sendKeys('qweqwe');

            await driver
                .findElement(By.xpath('//input[contains(@type, "password")]'))
                .sendKeys('qweqwe');

            loginButtonLoginPage.sendKeys(Key.ENTER);

            await makeDelay(loadingElementPath, 10000);
            
            const loadingElement = await driver.findElement(
                By.xpath(loadingElementPath)
            );

            expect(loadingElement).to.exist;

            const errorElement = await driver.findElement(
                By.xpath(errorElementPath)
            );

            await driver
                .wait(until.elementIsEnabled(loginButtonLoginPage))
                .then(async () => {
                    expect(errorElement.getText()).to.not.eql(' ');
                });
        });

        after('Close browser', async () => {
            //close browser
            await driver.quit();
        });

        async function makeDelay(path, delay) {
            await driver.wait(until.elementLocated(By.xpath(`${path}`), delay));
        }
    });
})();
