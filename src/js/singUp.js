const { default: refs } = require("./refs.js");

refs.btnSingIn.addEventListener("click", () => {
    refs.divForm.classList.toggle("is-open")
})


refs.signUpForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let login = e.currentTarget.elements.login.value
    let password = e.currentTarget.elements.password.value
    // refs.divForm.classList.remove("is-open")
    refs.signUpForm.elements.login.value = ""
    refs.signUpForm.elements.password.value = ""
    if (localStorage.getItem("login") === login && localStorage.getItem("password") === password) {
        console.log("Проходите дальше уже есть");
    } else {
        localStorage.setItem('login', login)
        localStorage.setItem('password', password)
        console.log("Вы зарегестрированы!!!!!!!!!!!не было, но уже есть");
    }
})
refs.divForm.addEventListener("click", (e) => {
    if (e.target.nodeName === "DIV") {
        refs.divForm.classList.remove("is-open")
    }
})

