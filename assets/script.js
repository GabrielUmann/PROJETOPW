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

// CARRINHO

const product3 = document.querySelector(".product3")
const cartItens = document.querySelector("#cart-items")
const cartTotal = document.querySelector(".cart-total")
let total = 0
let temp = 0
let AddtoCart = []

  inicializarSite = () =>{
    let options = {
        method : "get"
    }
    let url = `api/product-list.php`

    fetch(url, options).then((response) => {
        response.json().then((productList) => {
            //JOGA A LISTA DE PRODUTOS PRO HTML
            
            productList.forEach((e, i) => {
                console.log(productList)
                product3.innerHTML += `
                <div class="tds-prdts">
                  <div class="prod">
                    <img src="${e.img_path}" alt="PS5">
                    <div class="prdt-inf">
                        <h4 class="prdt-tit">${e.nome}
                        </h4>
                        R$<i class="prtd-preco">${Number(e.preco).toFixed(2)}</i> <br>
                        <a class="prtd-btn" >Adicione ao Carrinho</a>
          
                    </div>
                  </div> 
                </div>
                `
            })    

            //ADICIONA O PRODUTO NO CARRINHO 
            const addCartButton = document.querySelectorAll(".prtd-btn")
            function AddtoCart(){
                cartItens.innerHTML = ""
                productList.forEach((e) => {
                    if(temp ==! null){
                    cartItens.innerHTML +=`
                    <li>${e.nome} <span class="price">${e.preco}</span>
                    </li>
                    `
                    AddtoCart.push(e)
                    total += e.preco
                    cartTotal.innerHTML = `Total: <span class="price">R$${total.toFixed(2)}</span>`
                    
                }
            })
        }
            //ESPERA O BOTAO SER CLICADO
            addCartButton.forEach((e, i) => {
                e.addEventListener("click", () => {
                    temp = productList[i];
                    AddtoCart()

                })
            })

        })
    })
}

window.addEventListener("load", inicializarSite())