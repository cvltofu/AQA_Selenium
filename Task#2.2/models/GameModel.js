export default class GameModel {
    constructor(obj) {
        this.name = obj.name;
        this.platforms = obj.platforms;
        this.release_date = obj.release_date;
        this.review_result = obj.review_result;
        this.price = obj.price;
    }

    async getData() {
        return {
            name: this.name,
            platforms: this.platforms,
            release_date: this.release_date,
            review_result: this.review_result,
            price: this.price,
        };
    }
}
