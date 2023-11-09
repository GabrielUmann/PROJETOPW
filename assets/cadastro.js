const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const formRegister = document.querySelector("#registerUser");

formRegister.addEventListener("submit", (event) => {
    event.preventDefault()

    let url = `../api/users-insert.php`
    let data = new FormData(formRegister)
    let options = {
        method : "post",
        body : data
    }
    fetch(url, options).then((response) =>{
        response.json().then((message) => {
            console.log(message)
        })
    })

    setTimeout(() => {
        window.location.href = "../index.html"
    }, 10) 
});
