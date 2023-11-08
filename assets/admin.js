const selectCategory = document.querySelector("#category")

    const urlCategories = "../api/categories-list.php";
    const optionsCategories = {
    method : "get"
    };


    fetch(urlCategories, optionsCategories).then((response) => {
        response.json().then((categories) => {
            console.log(categories)
            categories.forEach((category) => {
            const option = document.createElement("option");
            option.textContent = category.nome;
            option.setAttribute("value", category.id);
            selectCategory.appendChild(option);
            })
        })
    })

