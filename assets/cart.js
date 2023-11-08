const productList = [
  {
    img: "img/ps5.png",
    name: "PlayStation 5",
    preco: 3799.99,
    quantidade: 0
  },
  {
    img: "img/psvr.png",
    name: "PS VR",
    preco: 599.99,
    quantidade: 0
  },
  {
    img: "img/2.jpg",
    name: "Controle de PS5",
    preco: 404.00,
    quantidade: 0
  },
  {
    img: "img/ps4.webp",
    name: "Playstation 4",
    preco: 2599.99,
    quantidade: 0
  },
  {
    img: "img/controle de ps4.webp",
    name: "Controle de PS4",
    preco: 399.99,
    quantidade: 0
  },
  {
    img: "img/god.webp",
    name: "God Of War PS5",
    preco: 299.99,
    quantidade: 0
  },
  {
    img: "img/Horizon.jpg",
    name: "HZ Dawn PS4",
    preco: 250.00,
    quantidade: 0
  },
  {
    img: "img/assa.webp",
    name: "AC Valhalla PS4",
    preco: 400.00,
    quantidade: 0
  },
  {
    img: "img/Miles.jpg" ,
    name: "Miles Morales PS4",
    preco: 220.00,
    quantidade: 0
  },
  {
    img: "img/cod.webp" ,
    name: "Call Of Duty Mw2",
    preco: 299.00,
    quantidade: 0
  },
  {
    img: "img/r6.jpg" ,
    name: "Rainbow Six Ps5",
    preco: 199.99,
    quantidade: 0
  },
  {
    img: "img/ring.webp" ,
    name: "Elden Ring PS4",
    preco: 220.00,
    quantidade: 0
  },

]
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
