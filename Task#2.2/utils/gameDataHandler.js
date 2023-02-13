import BasePage from '../pageobjects/BasePage.js';
import StringHandler from './StringHandler.js';

export default class GameDataHandler extends BasePage {
    constructor(elem) {
        super();
        this._gameElementsMainPath = `//div[@id="search_resultsRows"]//a[contains(@class,"search_result_row")][${elem}]`;
        this._gameNameElemPath = `${this._gameElementsMainPath}//div[contains(@class,"search_name")]//span[@class="title"]`;
        this._gamePlatformsElemPath = `${this._gameElementsMainPath}//span[contains(@class,"platform_img")]`;
        this._gameReleaseDateElemPath = `${this._gameElementsMainPath}//div[contains(@class,"search_released")]`;
        this._gameReviewResultElemPath = `${this._gameElementsMainPath}//span[contains(@class,"search_review_summary")]`;
        this._gamePriceElemPath = `${this._gameElementsMainPath}//div[contains(@class,"search_price")]`;
    }

    async findNameElem() {
        let resultName = await super.findElem(this._gameNameElemPath);
        return await resultName.getText();
    }

    async findPlatformsElem() {
        let arrayOfPlatforms = await super.findElems(
            this._gamePlatformsElemPath
        );

        return StringHandler.editPlatformsElem(arrayOfPlatforms);
    }

    async findReleaseDateElem() {
        let releaseDate = await super.findElem(this._gameReleaseDateElemPath);

        return StringHandler.editReleaseDateElem(await releaseDate.getText());
    }

    async findReviewResultElem() {
        let reviewResult = await super.findElem(this._gameReviewResultElemPath);

        return StringHandler.editReviewElem(reviewResult);
    }

    async findPriceElem() {
        let gamePrice = await super.findElem(this._gamePriceElemPath);

        return StringHandler.editPriceElem(await gamePrice.getText());
    }
}
