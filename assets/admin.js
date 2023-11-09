// fetch do categories

const selectCategory = document.querySelector("#category")

function getCategories(){
    const urlCategories = "../api/categories-list.php";
    const optionsCategories = {
    method : "get"
    };


    fetch(urlCategories, optionsCategories).then((response) => {
        response.json().then((categories) => {
            //console.log(categories)
            categories.forEach((category) => {
            const option = document.createElement("option");
            option.textContent = category.nome;
            option.setAttribute("value", category.id);
            selectCategory.appendChild(option);
            })
        })
    })
}

getCategories()
//
//


const formRegisterProduct = document.querySelector("#registerProduct")

formRegisterProduct.addEventListener("submit", (event) => {
    event.preventDefault()
    let data = new FormData(formRegisterProduct)
    data.append("category", selectCategory.value)
    let url = "../api/product-insert.php";
    let option = {
        method: "post",
        body : data
    }
    fetch(url, option).then((response) => {
        response.json().then((message) => {
            console.log(message)
        })
    })
    

})