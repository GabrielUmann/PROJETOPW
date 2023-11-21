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
            if(users.type != "error"){
                alertBox.innerHTML = `
                <p>${users.message}</p>
                <img src="img_pagina/check-icon.png"> <br>
                <button class="ok-button" onclick="closeAlert()" >OK</button>
            `
            alertBox.classList.add('show')
            alertBox.classList.add('sucess')
            
            setTimeout(() => {
                window.location.href = "html/principal.html"
            }, 1500)  

            }else{
                alertBox.innerHTML = `
                <p>${users.message}</p>
                <img src="img_pagina/x-mark-check.png"> <br>
                <button class="ok-button" onclick="closeAlert()" >OK</button>
            `
            alertBox.classList.add('show')
            alertBox.classList.add('error')

            }

            })
        })
    }) 
    function closeAlert(){
        alertBox.classList.remove('show')
    }