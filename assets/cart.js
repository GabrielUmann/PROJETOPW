const tbodyCart = document.querySelector("#tbodyCart")
var Cart = JSON.parse(localStorage.getItem("cart"))
if(Cart == null){
    Cart = []
}
Cart.forEach((item, index) => {
    let total = Number(item.preco) * Number(item.qtd)
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
        <td>R$ ${total}</td>
        <td>
            <button class="remove"><i class="bx bx-x"></i></button>
        </td>
    </tr>
    `
})

Cart.forEach((item, index) => {
        let btnMinus = document.querySelectorAll(".btnMinus")
        let btnPlus = document.querySelectorAll(".btnPlus")
        const spanQtd = document.querySelectorAll(".spanQtd")
    
        btnMinus[index].addEventListener("click", () => {
            item.qtd -= 1
            spanQtd[index].textContent = item.qtd
            rewriteCartItem(item, item.qtd)
        })
        btnPlus[index].addEventListener("click", () => {
            item.qtd += 1
            spanQtd[index].textContent = item.qtd
            rewriteCartItem(item , item.qtd)
        })
})

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
console.log(Cart)