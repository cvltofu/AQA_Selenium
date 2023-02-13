export default class Header {
    static _searchElementPath = '//input[@id="store_nav_search_term"]';

    static getSearchElemPath() {
        return this._searchElementPath;
    }
}
