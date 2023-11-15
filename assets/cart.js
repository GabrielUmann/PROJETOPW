const tbodyCart = document.querySelector("#tbodyCart")
var Cart = JSON.parse(localStorage.getItem("cart"))
if(Cart == null){
    Cart = []
}
console.log(Cart)
Cart.forEach((item) => {
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
                <button><i class="bx bx-minus" id="minus"></i></button>
                <span>${item.qtd}</span>
                <button><i class="bx bx-plus" id="plus"></i></button>
            </div>
        </td>
        <td>R$ ${total}</td>
        <td>
            <button class="remove"><i class="bx bx-x"></i></button>
        </td>
    </tr>
    `
    let btnMinus = document.querySelector("#minus")
    let btnPlus = document.querySelector("#plus")

    btnMinus.addEventListener("click", () => {
        //console.log("menos")
        item.qtd--
    })

    btnPlus.addEventListener("click", () => {
        //console.log("mais")
        item.qtd++
    })

})
//não funcionando