import "@babel/polyfill";
import debounce from "lodash.debounce";
import apiService from "./apiService.js";
import refs from "./refs.js";
import template from "../templates/template.hbs";
import singUp from "./singUp.js"

refs.searchInput.addEventListener("input", debounce(e => {
    refs.cocktailList.innerHTML = ""
    apiService.search = e.target.value;

    renderAdd();
    refs.searchInput.value = "";

}, 1000))





function renderAdd() {
    apiService.fetchGet().then(data => renderApi(data.drinks))

}
function renderApi(data) {
    const item = template(data)
    refs.cocktailList.insertAdjacentHTML("beforeend", item)
    const ingridients = document.querySelectorAll(".ingredient-item")
    ingridients.forEach(el => {
        if (el.textContent === "") {
            el.style.display = "none"
        }
    })
}


