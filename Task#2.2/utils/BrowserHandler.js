import Singleton from './Singleton.js';

export default class BrowserHandler {
    static async openUrl(url) {
        await Singleton.getDriver().get(url);
    }

    static async openInNewTab() {
        const originalWindow = await Singleton.getDriver().getWindowHandle();
        const prevNumberOfWindows = (
            await Singleton.getDriver().getAllWindowHandles()
        ).length;

        await Singleton.getDriver().wait(
            async () =>
                (await Singleton.getDriver().getAllWindowHandles()).length ===
                prevNumberOfWindows + 1,
            this.delay
        );

        const tabs = await Singleton.getDriver().getAllWindowHandles();

        tabs.forEach(async (tab) => {
            if (tab !== originalWindow) {
                await Singleton.getDriver().switchTo().window(tab);
            }
        });
    }

    static async quitBrowser() {
        Singleton.quitDriver();
    }
}
