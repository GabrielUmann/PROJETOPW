// seleciona as categorias

const selectCategory = document.querySelectorAll("#category")


function getCategories(){
    const urlCategories = "../api/categories-list.php";
    const optionsCategories = {
    method : "get"
    };


    fetch(urlCategories, optionsCategories).then((response) => {
        response.json().then((categories) => {
            //console.log(categories)
            categories.forEach((category) => {
                selectCategory.forEach((item) => {
                    const option = document.createElement("option");
                    option.textContent = category.nome;
                    option.setAttribute("value", category.id);
                    item.appendChild(option);
                })
            })
        })
    })
}

getCategories()
//
//

// registra um produto novo
const formRegisterProduct = document.querySelector("#registerProduct")

formRegisterProduct.addEventListener("submit", (event) => {
    event.preventDefault()
    let data = new FormData(formRegisterProduct)
    data.append("category", selectCategory[0].value)
    let url = "../api/product-insert.php";
    let option = {
        method: "post",
        body : data
    }
    fetch(url, option).then((response) => {
        response.json().then((message) => {
            alert(`
            ${message.type}
            ${message.message}
            `)
        })
    })
    

})

// registra um novo usuario
const formRegisterUser = document.querySelector("#form-register")

formRegisterUser.addEventListener("submit", (event) => {
    event.preventDefault()
    let url = "../api/users-insert.php"
    let data = new FormData(formRegisterUser)
    let option = {
        method: "post",
        body: data
    }

    fetch(url, option).then((response) => {
        response.json().then((message) => {
            console.log(message)
            alert(`
            ${message.type}
            ${message.message}
            `)
        })
    })
    

})

// produtos por categorias

const productList = document.querySelector("#productList")
function ListarProdutos(e){
    productList.innerHTML += `
    <tr>
    <td id ="${e.id}">${e.id}</td><td>${e.nome}</td><td>${e.preco}</td><td><img width="20" src="${e.img_path}" alt="img"></td>
    </tr>
    `

}

selectCategory[1].addEventListener("change" , (event) => {
    productList.innerHTML = " "
    let value = event.target.value

    if(value == 0){
        let url = `../api/product-list.php`
        fetch(url, {method : "get"}).then((response) => {
            response.json().then((products)=>{
                //console.log(products)
                products.forEach((e) => {
                    ListarProdutos(e)
                    
                })
            })
        })
    return;
    }

    let param = {
        "categoryId" : value
    }
    const query = new URLSearchParams(param);
    let url = `../api/product-by-category.php?${query.toString()}`

    fetch(url, {method : "get"}).then((response) => {
        response.json().then((productFiltered)=>{
            //console.log(productFiltered)
            productFiltered.forEach((e) => {
                ListarProdutos(e)
                
            })
        })
    })
})

// produtos escrito

const inputProductName = document.querySelector("#productName")
inputProductName.addEventListener("keyup", () => {
    if(inputProductName.value.length < 2){
        return;
    }
    productList.innerHTML = " "
    let value = inputProductName.value
    let param = {
        "name" : value
    }
    const query = new URLSearchParams(param);
    let url = `../api/product-by-name.php?${query.toString()}`

    fetch(url, {method : "get"}).then((response) => {
        response.json().then((productFiltered)=>{
            //console.log(productFiltered)
            productFiltered.forEach((e) => {
                ListarProdutos(e)
                
            })
        })
    })
})


// MODAL 

const tableProduct = document.querySelector("table");

// Seletor para a modal
const modal = document.getElementById("edit-modal");

// Seletor para o botão de fechar a modal
const closeModalButton = document.querySelector(".close");

// Seletor para o formulário de edição
const editForm = document.getElementById("edit-form");

// Função para abrir a modal com dados do produto (vai receber por parâmetro o id do produto)
function openModal(productId) {
    modal.style.display = "block";
    console.log(productId);
    let param = {
        "productId" : productId
    }
    let query = new URLSearchParams(param) 
    let url = `../api/product-get.php?${query.toString()}`
    let options = {
        method : "get"
    }
    fetch(url, options).then((response) => {
        response.json().then((product) => {
            console.log(product)
            // const title = document.querySelector("#title");
            // title.value = book.title;
            // selectCategoryModal.value = book.category_id
            // selectAuthorModal.value = book.author_id
            // selectPriceModal.value = "10"
            
        })
    })


}

// Fechar a modal ao clicar no botão de fechar
closeModalButton.onclick = function() {
    modal.style.display = "none";
};

// Fechar a modal quando o usuário clicar fora dela
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

tableProduct.addEventListener("click", (event) => {
    // mostrar no console o id do produto cliacado
    let tr = event.target.parentNode.children
    let productId = tr[0].getAttribute("id")
    openModal(productId);
});

// const formSave = document.querySelector("form");

// formSave.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const data = new FormData(formSave);
//     const urlUpdateBook = `api/book-update.php`;
//     const options = {
//         method: "post",
//         body : data
//     };

//     fetch(urlUpdateBook, options).then((response) => {
//         response.json().then((book) => {
//             console.log(book);
//         });
//     });

// });