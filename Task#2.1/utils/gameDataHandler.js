import BasePage from '../pageobjects/basePage.js';

export default class GameDataHandler extends BasePage {
    constructor(elem) {
        super();
        this.elem = elem;
        this.gameElementsMainPath = `//div[@id="search_resultsRows"]//a[contains(@class,"search_result_row")][${this.elem}]`;
        this.gameNameElemPath = `${this.gameElementsMainPath}//div[contains(@class,"search_name")]//span[@class="title"]`;
        this.gamePlatformsElemPath = `${this.gameElementsMainPath}//span[contains(@class,"platform_img")]`;
        this.gameReleaseDateElemPath = `${this.gameElementsMainPath}//div[contains(@class,"search_released")]`;
        this.gameReviewResultElemPath = `${this.gameElementsMainPath}//span[contains(@class,"search_review_summary")]`;
        this.gamePriceElemPath = `${this.gameElementsMainPath}//div[contains(@class,"search_price")]`;
    }

    async findNameElem() {
        let resultName = await super.findElem(this.gameNameElemPath);
        return await resultName.getText();
    }

    async findPlatformsElem() {
        let arrayOfPlatforms = await super.findElems(
            this.gamePlatformsElemPath
        );
        let newArrayOfPlatforms = [];

        for (let i = 0; i < arrayOfPlatforms.length; i++) {
            let a = await arrayOfPlatforms[i].getAttribute('class');
            newArrayOfPlatforms.push(a.replace('platform_img ', ''));
        }

        /* 
        Как заставить работать асинхронный map?

        newArrayOfPlatforms = arrayOfPlatforms.map(async (elem) => {
            let a = await elem.getAttribute('class');
            a.replace('platform_img ', '');
        });
        */

        return newArrayOfPlatforms;
    }

    async findReleaseDateElem() {
        let releaseDate = await super.findElem(this.gameReleaseDateElemPath);
        releaseDate = await releaseDate.getText();
        let range = releaseDate.length;
        return (releaseDate = await releaseDate.slice(range - 4, range));
    }

    async findReviewResultElem() {
        let reviewResult = await super.findElem(this.gameReviewResultElemPath);
        let indexOfPercent;
        reviewResult = await reviewResult.getAttribute('data-tooltip-html');
        indexOfPercent = reviewResult.indexOf('%');
        return (reviewResult = await reviewResult.slice(
            indexOfPercent - 2,
            indexOfPercent + 1
        ));
    }

    async findPriceElem() {
        let gamePrice = await super.findElem(this.gamePriceElemPath);
        gamePrice = await gamePrice.getText();

        if (gamePrice.includes('$')) {
            let indexOfDollar = gamePrice.indexOf('$');
            gamePrice = gamePrice.substring(
                indexOfDollar + 1,
                gamePrice.length
            );
            indexOfDollar = gamePrice.indexOf('$');
            gamePrice = gamePrice.substring(indexOfDollar, gamePrice.length);
        }

        return gamePrice;
    }
}
