import BasePage from './BasePage.js';
import GameDataHandler from '../utils/gameDataHandler.js';
import GameModel from '../models/GameModel.js';
import Header from './Header.js';

export default new (class SearchPage extends BasePage {
    constructor() {
        super();
        this._unicPageElemPath = '//div[@id="sort_by_dselect_container"]';
        this._searchBoxElemPath = '//input[@id="term"]';
        this._firstGameElemPath =
            '//div[@id="search_resultsRows"]//a[contains(@class,"search_result_row")][1]//div[contains(@class,"search_name")]//span[@class="title"]';

        this._firstGameData;
        this._secondGameData;
        this._searchData = [];
    }

    async findUnicElem() {
        return await super.findElem(this._unicPageElemPath);
    }

    async isTextContainerContains() {
        let textContainer = await super.findElem(this._searchBoxElemPath);
        return await textContainer.getAttribute('value');
    }

    async firstNameIsEqls() {
        let firstResultName = await super.findElem(this._firstGameElemPath);
        return await firstResultName.getText();
    }

    async getInformationAboutGame() {
        const firstGameDataHandler = new GameDataHandler(1);

        const firstElemData = {
            name: await firstGameDataHandler.findNameElem(),
            platforms: await firstGameDataHandler.findPlatformsElem(),
            release_date: await firstGameDataHandler.findReleaseDateElem(),
            review_result: await firstGameDataHandler.findReviewResultElem(),
            price: await firstGameDataHandler.findPriceElem(),
        };

        const firstGameModel = new GameModel(firstElemData);

        this._firstSearchData = await firstGameModel.getData();

        const secondGameDataHandler = new GameDataHandler(2);

        const secondElemData = {
            name: await secondGameDataHandler.findNameElem(),
            platforms: await secondGameDataHandler.findPlatformsElem(),
            release_date: await secondGameDataHandler.findReleaseDateElem(),
            review_result: await secondGameDataHandler.findReviewResultElem(),
            price: await secondGameDataHandler.findPriceElem(),
        };

        const secondGameModel = new GameModel(secondElemData);

        this._secondGameData = await secondGameModel.getData();

        this._searchData.push([this._firstSearchData, this._secondGameData]);
    }

    async searchSecondGame() {
        await this.getInformationAboutGame();

        await super.enterTextAndSubmit(
            Header.getSearchElemPath(),
            this._secondGameData.name
        );

        return this._secondGameData.name;
    }

    async resultListIsContains() {
        await this.getInformationAboutGame();

        return await this.dataIterationAndReturnIsArrEqualLength();
    }

    async resultListIsMatches() {
        return await this.dataIterationAndReturnIsArrEqualLength('json');
    }

    async dataIterationAndReturnIsArrEqualLength(mod) {
        let isEqual = [];

        for (let item = 0; item < 2; item++) {
            for (let elem = 0; elem < 2; elem++) {
                if (
                    this._searchData[0][item].name ===
                    this._searchData[1][elem].name
                ) {
                    mod === 'json'
                        ? isEqual.push(
                              JSON.stringify(this._searchData[0][item]) ===
                                  JSON.stringify(this._searchData[1][elem])
                          )
                        : isEqual.push(true);
                }
            }
        }

        return isEqual.length;
    }
})();
