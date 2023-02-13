import BasePage from './basePage.js';
import GameDataHandler from '../utils/gameDataHandler.js';

const unicPageElemPath = '//div[@id="sort_by_dselect_container"]';
const searchBoxElemPath = '//input[@id="term"]';
const firstGameElemPath =
    '//div[@id="search_resultsRows"]//a[contains(@class,"search_result_row")][1]//div[contains(@class,"search_name")]//span[@class="title"]';
const headerSearchBoxElemPath = '//input[@id="store_nav_search_term"]';

export default new (class SearchPage extends BasePage {
    constructor() {
        super();
        this.firstSearchData;
        this.secondSearchData;
    }

    async findUnicElem() {
        return await super.findElem(unicPageElemPath);
    }

    async isContains() {
        let textContainer = await super.findElem(searchBoxElemPath);
        return await textContainer.getAttribute('value');
    }

    async firstNameIsEqls() {
        let firstResultName = await super.findElem(firstGameElemPath);
        return await firstResultName.getText();
    }

    async getInformationAboutGame() {
        const firstGameDataHandler = new GameDataHandler(1);

        const secondGameDataHandler = new GameDataHandler(2);

        const firstElemData = {
            name: await firstGameDataHandler.findNameElem(),
            platforms: await firstGameDataHandler.findPlatformsElem(),
            release_date: await firstGameDataHandler.findReleaseDateElem(),
            review_result: await firstGameDataHandler.findReviewResultElem(),
            price: await firstGameDataHandler.findPriceElem(),
        };

        const secondElemData = {
            name: await secondGameDataHandler.findNameElem(),
            platforms: await secondGameDataHandler.findPlatformsElem(),
            release_date: await secondGameDataHandler.findReleaseDateElem(),
            review_result: await secondGameDataHandler.findReviewResultElem(),
            price: await secondGameDataHandler.findPriceElem(),
        };

        return [firstElemData, secondElemData];
    }

    async searchSecondGame() {
        let gamesData = await this.getInformationAboutGame();

        this.firstSearchData = gamesData;

        await super.enterTextAndSubmit(
            headerSearchBoxElemPath,
            gamesData[1].name
        );

        return gamesData[1].name;
    }

    async uglyFunciton(mod) {
        let isEqual = [];

        for (let item = 0; item < 2; item++) {
            for (let elem = 0; elem < 2; elem++) {
                if (
                    this.firstSearchData[item].name ===
                    this.secondSearchData[elem].name
                ) {
                    mod === 'json'
                        ? isEqual.push(
                              JSON.stringify(this.firstSearchData[item]) ===
                                  JSON.stringify(this.secondSearchData[elem])
                          )
                        : isEqual.push(true);
                }
            }
        }

        return isEqual.length;
    }

    async resultListIsContains() {
        let gamesData = await this.getInformationAboutGame();

        this.secondSearchData = gamesData;

        return await this.uglyFunciton();
    }

    async resultListIsMatches() {
        return await this.uglyFunciton('json');
    }
})();
