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
            if(users.type == "ADMINISTRATION"){
                setTimeout(() => {
                    window.location.href = users.url
                }, 1) 
            }else if(users.type == "success"){
                alertBox.innerHTML = `
                <p>${users.message}</p>
                <img src="img_pagina/check-icon.png"> <br>
                <button class="ok-button" onclick="closeAlert()" >OK</button>
            `
            alertBox.classList.add('show')
            alertBox.classList.add('sucess')

            setTimeout(() => {
                window.location.href = users.url
            }, 1) 
            

 
          
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