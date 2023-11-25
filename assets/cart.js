const tbodyCart = document.querySelector("#tbodyCart")
const subtotalPrice = document.querySelector("#subtotalPrice")
const totalPrice = document.querySelector("#totalPrice")
let totalCart = 0

// pega os itens do localstorage
var Cart = JSON.parse(localStorage.getItem("cart"))
if(Cart == null){
    Cart = []
}
function loadProducts(){
    tbodyCart.innerHTML = ""
    Cart.forEach((item, index) => {

        // bota os itens no carrinho 
        let totalItem = Number(item.preco) * Number(item.qtd)
        tbodyCart.innerHTML += `
        <tr>
            <td>
                <div class="product">
                    <img src="##" alt="" />
                    <div class="info">
                        <div class="name">${item.nome}</div>
                        <div class="category">ID: ${item.id}</div>
                    </div>
                </div>
            </td>
            <td>R$ ${item.preco}</td>
            <td>
                <div class="qty">
                    <button class= "btnMinus"><i class="bx bx-minus" id="minus"></i></button>
                    <span class="spanQtd">${item.qtd}</span>
                    <button class= "btnPlus"><i class="bx bx-plus" id="plus"></i></button>
                </div>
            </td>
            <td id= "totalItem">R$ ${totalItem.toFixed(2)}</td>
            <td>
                <button class="remove"><i class="bx bx-x"></i></button>
            </td>
        </tr>
        `
        totalCart += totalItem
        subtotalPrice.innerHTML = `R$ ${totalCart.toFixed(2)}`
        totalPrice.innerHTML =  `R$ ${totalCart.toFixed(2)}`
    })
}



loadProducts()
Cart.forEach((item, index) => {

        // aumenta e diminiu a quantidade do item

        let btnMinus = document.querySelectorAll(".btnMinus")
        let btnPlus = document.querySelectorAll(".btnPlus")
        let btnRemove = document.querySelectorAll(".remove")
        const spanQtd = document.querySelectorAll(".spanQtd")
        const total = document.querySelectorAll("#totalItem")
    
        btnMinus[index].addEventListener("click", () => {
            item.qtd -= 1
            if(item.qtd == 0){
                removeCartItem(item)
            }else{
                spanQtd[index].textContent = item.qtd
                total[index].textContent = (Number(item.preco) * Number(item.qtd)).toFixed(2)

                totalCart -= Number(item.preco)
                subtotalPrice.innerHTML = `R$ ${totalCart.toFixed(2)}`
                totalPrice.innerHTML =  `R$ ${totalCart.toFixed(2)}`
                rewriteCartItem(item, item.qtd)


            }
        })
        btnPlus[index].addEventListener("click", () => {
            item.qtd += 1
            spanQtd[index].textContent = item.qtd
            total[index].textContent = (Number(item.preco) * Number(item.qtd)).toFixed(2)
            totalCart += Number(item.preco)
            subtotalPrice.innerHTML = `R$ ${totalCart.toFixed(2)}`
            totalPrice.innerHTML =  `R$ ${totalCart.toFixed(2)}`
            rewriteCartItem(item , item.qtd)
        })
        btnRemove[index].addEventListener("click", () => {
            removeCartItem(item)
        })
})

    // reescreve o item e joga no localhost
function rewriteCartItem(temp, value){
    var Cart = JSON.parse(localStorage.getItem("cart"))
        if (Cart == null) {
            Cart = []
        }

        Cart.forEach((item) => {
            if (item.id == temp.id) {
                item.qtd = value
            }
        })

        localStorage.setItem("cart", JSON.stringify(Cart))
        console.log(value)
        //console.log(JSON.parse(localStorage.getItem("cart")))
}

    // remove o item do localhost
function removeCartItem(item){
    Cart.splice(Cart.indexOf(item), 1)
    //console.log(Cart)
    localStorage.setItem("cart", JSON.stringify(Cart))
    location.reload()
}

//console.log(Cart)
// PEDIDO
const btnFinish = document.querySelector("#btnFinish")

btnFinish.addEventListener("click", () => {

    //insere o pedido no bd
    let url = `../api/order-insert.php`
    let formdataCart = new FormData()
    formdataCart.append("CartProducts", JSON.stringify(Cart))
    console.log(Cart)
    let method = {
        method : "post",
        body : formdataCart
    }
    fetch(url, method).then((response) => {
        response.json().then((message) => {
            console.log(message)
        })
    })

    //insere os itens do pedido
    url = `../api/order-insert-products.php`
    formdataCart = new FormData()
    formdataCart.append("CartProducts", JSON.stringify(Cart))

    method = {
        method : "post",
        body : formdataCart
    }
    fetch(url, method).then((response) => {
        response.json().then((message) => {
            console.log(message)
            if(message.type == "success"){
                let ratingForm = document.querySelector("#ratingForm")
                let cartContent = document.querySelector(".content")
                ratingForm.style.display = "block"
                cartContent.classList.add("no-pointer")
            }else{
                alert("erro")
            }
    })



})
})
