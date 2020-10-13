
export default {
    _search: "",
    fetchGet() {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this._search}`;
        return fetch(url)
            .then(res => res.json())
    },
    get search() {
        return this._search
    },
    set search(newSearch) {
        this._search = newSearch
    }


}
