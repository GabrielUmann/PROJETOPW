let bookList = document.querySelector("#bookList")
const selectCategories = document.querySelector("#category");
const selectCategoryModal = document.querySelector("#categoryModal")
const urlCategories = "api/categories-list.php";
const optionsCategories = {
       method : "get"
};
fetch(urlCategories, optionsCategories).then((response)=> {
    response.json().then((categories) => {
        //console.log(categories)
    

        categories.forEach((e) => {
            selectCategories.innerHTML += `<option value="${e.id}">${e.name}</option>`
            selectCategoryModal.innerHTML += `<option value="${e.id}">${e.name}</option>`
        })
    })
})

selectCategories.addEventListener("change", (event) => {
    bookList.innerHTML = " "
    let value = event.target.value
    let param = {
        "categoryId" : value
    }
    const query = new URLSearchParams(param);
    let url = `./api/books-by-category.php?${query.toString()}`
    fetch(url, {method : "get"}).then((response) => {
        response.json().then((categoriesFiltered)=>{
            categoriesFiltered.forEach((e) => {
                bookList.innerHTML += `
                <tr>
                <td id ="${e.id}">${e.id}</td><td>${e.title}</td><td>10</td><td><button>X</button></td>
                </tr>
                `
            })
        })
    })



})


let selectAuthor = document.querySelector("#author");
const selectAuthorModal = document.querySelector("#authorModal")
const selectPriceModal = document.querySelector("#priceModal")
const urlAuthor = "api/authors-list.php";
const optionsAuthor = {
       method : "get"
};
fetch(urlAuthor, optionsAuthor).then((response)=> {
    response.json().then((author) => {
        //console.log(author)
        author.forEach((e) => {
            selectAuthor.innerHTML += `<option value="${e.id}">${e.name}</option>`
            selectAuthorModal.innerHTML += `<option value="${e.id}">${e.name}</option>`
        })
    })
})
selectAuthor.addEventListener("change", (event) => {
    bookList.innerHTML = " "
    let value = event.target.value
    let param = {
        "authorId" : value
    }
    const query = new URLSearchParams(param);
    let url = `./api/books-by-author.php?${query.toString()}`
    fetch(url, {method : "get"}).then((response) => {
        response.json().then((booksFilteredAuthor)=>{
            booksFilteredAuthor.forEach((e) => {
                bookList.innerHTML += `
                <tr>
                <td id ="${e.id}">${e.id}</td><td>${e.title}</td><td>10</td><td><button>X</button></td>
                </tr>
                `
            })
        })
    })



})




const tableBooks = document.querySelector("table");

// Seletor para a modal
const modal = document.getElementById("edit-modal");

// Seletor para o botão de fechar a modal
const closeModalButton = document.querySelector(".close");

// Seletor para o formulário de edição
const editForm = document.getElementById("edit-form");

// Função para abrir a modal com dados do produto (vai receber por parâmetro o id do produto)
function openModal(bookId) {
    modal.style.display = "block";
    console.log(bookId);
    let param = {
        "bookId" : bookId
    }
    let query = new URLSearchParams(param) 
    let url = `api/book-get.php?${query.toString()}`
    let options = {
        method : "get"
    }
    fetch(url, options).then((response) => {
        //console.log(response)
        response.json().then((book) => {
            console.log(book)
            const title = document.querySelector("#title");
            title.value = book.title;
            selectCategoryModal.value = book.category_id
            selectAuthorModal.value = book.author_id
            selectPriceModal.value = "10"
            
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

tableBooks.addEventListener("click", (event) => {
    // mostrar no console o id do produto cliacado
    let tr = event.target.parentNode.children
    let bookId = tr[0].getAttribute("id")
    openModal(bookId);
});

const formSave = document.querySelector("form");

formSave.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(formSave);
    const urlUpdateBook = `api/book-update.php`;
    const options = {
        method: "post",
        body : data
    };

    fetch(urlUpdateBook, options).then((response) => {
        response.json().then((book) => {
            console.log(book);
        });
    });

});