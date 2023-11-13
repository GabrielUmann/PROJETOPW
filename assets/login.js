// JavaScript para pegar a mensagem
 var alertBox = document.getElementById('alert');

const formSave = document.querySelector("#form-login")

formSave.addEventListener("submit", (event) => {
    event.preventDefault()
    
    let url = `api/users-login.php`
    let data = new FormData(formSave)
    let options = {
        method : "post",
        body: data
    }
    
    fetch(url, options).then((response) => {
        response.json().then((users) => {
            console.log(users)
            if(users.message != "error"){
                alertBox.innerHTML = `
                <p>${users.message}</p>
            `
            alertBox.classList.add('show sucess')
            }else{
                alertBox.innerHTML = `
                <p>${users.message}</p>
            `
            alertBox.classList.add('show error')
            }

        })
    })

    setTimeout(() => {
         window.location.href = "html/principal.html"
    }, 3000) 

}) 
