/* abrir e fechar carrinho */

const btnCarrinho = document.querySelector(".btnCarrinho")
const cart = document.querySelector(".cart")
btnCarrinho.addEventListener("click", () => {
    cart.classList.toggle("remove")
})

// LOGIN


// CARRINHO

const product3 = document.querySelector(".product3")
const cartItens = document.querySelector("#cart-items")
const priceCart = document.querySelector("#priceCart")
let total = 0
let temp
let Cart = []

  inicializarSite = () =>{
    let options = {
        method : "get"
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
            function AddtoCart(){   
                cartItens.innerHTML +=`
                <li>${temp.nome} <span class="price">${temp.preco}</span>
                </li>
                `
                Cart.push(temp)
                console.log(Cart)
                total += Number(temp.preco)
                priceCart.innerHTML = `R$${total.toFixed(2)}`
                    
                
            
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