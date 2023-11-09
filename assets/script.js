/* abrir e fechar carrinho e login */
const btnLogin = document.querySelector("#btnLogin")
const login = document.querySelector(".login")
const icons = document.querySelector(".icons")

btnLogin.addEventListener("click", () => {
    login.classList.toggle("remove")
    icons.classList.toggle("remove")
})

const btnCarrinho = document.querySelector(".btnCarrinho")
const cart = document.querySelector(".cart")
btnCarrinho.addEventListener("click", () => {
    cart.classList.toggle("remove")
})

// FUNCTION GET CATEGORIES

const formSave = document.querySelector("#form-login")

formSave.addEventListener("submit", (event) => {
    event.preventDefault()
    
    let url = `api/users-login.php`
    let data = new FormData(formSave)
    let options = {
        method : "post",
        body: data
    }
    
    fetch(url, options).then((response) => {
        response.json().then((users) => {
            console.log(users)
        })
    })

}) 
