<!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <title>Cadastro</title>
        <link rel="stylesheet" href="../assets/cadastro.css">
        <script src="../assets/cadastro.js" async></script>
        
    </head>
    <body>
    <div class="alert-container" id="alert">
        <p>Logado com sucesso</p>
        <img src="../img_pagina/check-icon.png"> <br>
        <button class="ok-button" onclick="closeAlert()" >OK</button>
    </div>
    <section class="area-register">
        <div class="register">
            <h1>Crie a sua conta no melhor site do mundo!</h1>
            <form id="form-register" method="post">
                <input type="text" name="name" placeholder="Nome">
                <input type="email" name="email" placeholder="Email" > 
                <input type="password" name="password" placeholder="Senha"> 
                <input type="submit" value="Criar"></input>
            </form>
            <p>Já tem uma conta? <a href="../index.html">Entre!</a></p>
        </div>
    </section>
    </body>
</html>