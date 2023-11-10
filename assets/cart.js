
  const product3 = document.querySelector(".product3")
  const cartItens = document.querySelector("#cart-items")
  const cartTotal = document.querySelector(".cart-total")
  let total = 0
    inicializarSite = () =>{
      productList.forEach((e, i) => {
        product3.innerHTML += `
        <div class="tds-prdts">
          <div class="prod">
            <img src="${e.img}" alt="PS5">
            <div class="prdt-inf">
                <h4 class="prdt-tit">${e.name}
                </h4>
                R$<i class="prtd-preco">${e.preco.toFixed(2)}</i> <br>
                <a class="prtd-btn" >Adicione ao Carrinho</a>
  
            </div>
          </div> 
        </div>
        `
      })    
    }
  window.addEventListener("load", inicializarSite())

const addCartButton = document.querySelectorAll(".prtd-btn")

const AddtoCart = () => {
    cartItens.innerHTML = ""
    //console.log("rodando"); 
    productList.forEach((e) => {
      if(e.quantidade > 0){
        cartItens.innerHTML +=`
        <li>${e.name} <span class="price">${e.preco}</span>
        </li>
        `
        total += e.preco
        cartTotal.innerHTML = `Total: <span class="price">R$${total.toFixed(2)}</span>`

      }
    })
  }

//console.log(addCartButton) //se o numero do index == numero do botao
addCartButton.forEach((e, i) => {
  e.addEventListener("click", () => {
    productList[i].quantidade++;
    AddtoCart()
    }
    )
}
)
