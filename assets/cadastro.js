var alertBox = document.getElementById('alert');
const formRegister = document.querySelector("#form-register");

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
            if(message.type == "success"){
                    alertBox.innerHTML = `
                    <p>${message.message}</p>
                    <img src="../img_pagina/check-icon.png"> <br>
                    <button class="ok-button" onclick="closeAlert()" >OK</button>
                `
                alertBox.classList.add('show')
                alertBox.classList.add('sucess')
                
                setTimeout(() => {
                    window.location.href = "../index.html"
                }, 1500)  
    
            }else{
                alertBox.innerHTML = `
                <p>${message.message}</p>
                <img src="../img_pagina/x-mark-check.png"> <br>
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


