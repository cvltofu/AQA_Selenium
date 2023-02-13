export default class StringHandler {
    constructor() {}

    static async editPlatformsElem(arrayOfPlatforms) {
        let newArrayOfPlatforms = [];

        for (let item of arrayOfPlatforms) {
            let classItem = await item.getAttribute('class');
            newArrayOfPlatforms.push(classItem.replace('platform_img ', ''));
        }

        return newArrayOfPlatforms;
    }

    static async editReleaseDateElem(releaseDate) {
        let range = releaseDate.length;
        return await releaseDate.slice(range - 4, range);
    }

    static async editReviewElem(reviewResult) {
        let indexOfPercent;
        reviewResult = await reviewResult.getAttribute('data-tooltip-html');
        indexOfPercent = reviewResult.indexOf('%');
        return await reviewResult.slice(indexOfPercent - 2, indexOfPercent + 1);
    }

    static async editPriceElem(gamePrice) {
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
