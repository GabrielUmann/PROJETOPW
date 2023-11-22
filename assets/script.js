
const btnCarrinho = document.querySelector(".btnCarrinho")
btnCarrinho.addEventListener("click", () => {
    window.location.href = "cart.php"
})



// CARRINHO
const contadorText = document.querySelector("#contador")
const product3 = document.querySelector(".product3")
const cartItens = document.querySelector("#cart-items")
const priceCart = document.querySelector("#priceCart")
let count = 0
let total = 0
let temp

const inicializarSite = () => {
    let options = {
        method: "get"
    }
    let url = `../api/product-list.php`

    fetch(url, options).then((response) => {
        response.json().then((productList) => {
            //JOGA A LISTA DE PRODUTOS PRO HTML

            productList.forEach((e, i) => {
                //console.log(productList)
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
            function AddtoCart(temp) {
                var Cart = JSON.parse(localStorage.getItem("cart"))
                if (Cart == null) {
                    Cart = []
                }
                let boolean = true
                Cart.forEach((item) => {
                    if (item.id == temp.id) {
                        item.qtd += 1
                        boolean = false
                    }

                })
                if (boolean) {
                    temp.qtd = 1
                    Cart.push(temp)
                }
                contadorText.textContent = Cart.length
                localStorage.setItem("cart", JSON.stringify(Cart))
                console.log(JSON.parse(localStorage.getItem("cart")))
            }
            //ESPERA O BOTAO SER CLICADO
            addCartButton.forEach((e, i) => {
                e.addEventListener("click", () => {
                    temp = productList[i];
                    AddtoCart(temp)

                })
            })

        })
    })
}

window.addEventListener("load", inicializarSite())