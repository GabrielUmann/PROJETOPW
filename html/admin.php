<?php

session_start();

if(empty($_SESSION["user"])){
    header("Location: ../index.html");
}


if($_SESSION["user"]["role"] != "ADMIN"){
    header("Location: ../index.html");
}

?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Admin</title>
        <script src="../assets/admin.js" async></script>
        <link rel="stylesheet" href="../assets/admin.css">
    </head>
    <body>
         <!-- Adiciona  produtos -->
        <h1> CADASTRO DE PRODUTO </h1>
        <form id="registerProduct" method="post" enctype="multipart/form-data">
            <label for="name"> NOME </label>
            <input name="name" type="text">

            <label for="name"> PRECO </label>
            <input name="price" type="text">

            <label for="name"> IMAGEM </label>
            <input name="image" type="file" accept="image/*">

            <label for="name"> CATEGORIA </label>
            <select name="category" class="category">
                <option selected disabled value="0"> Selecione sua Categoria </option>
            </select>
            <button type="submit"> Adicionar </button><br>
        </form>

        <!-- Adiciona uysuarios -->

        <h1> CADASTRO DE USUARIOS</h1>
        <form id="form-register" method="post">
            <input type="text" name="name" placeholder="Nome">
            <input type="email" name="email" placeholder="Email" > 
            <input type="password" name="password" placeholder="Senha"> 
            <select name="role">
                <option value="" disabled selected>Selecione uma categoria</option>
                <option value="default">default</option>
                <option value="ADMIN">admin</option>
            </select>
            <input type="submit" value="Criar"></input>
        </form>

        <!-- mostra todos os produtos -->
        <div class="container">
            <h1>Lista de produtos</h1>
            <div class="filter">
                <label for="category">Categoria:</label>
                <select class="category">
                    <option selected disabled > Selecione sua Categoria </option>
                    <option value="0" > Todos </option>

                </select>

                <label for="productName">Nome do Produto:</label>
                <input type="text" id="productName">
            </div>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Image</th>
                </tr>
                </thead>
                <tbody id="productList">
                </tbody>
            </table>
        </div>

        <!-- Modal para editar produtos -->
        <div id="edit-modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>Editar produtos</h2>
                <form id="edit-form">
                    <input type="hidden" id="productIdModal" name="productId">

                    <label for="name">Nome:</label>
                    <input type="text" id="nameModal" name="name">

                    <label for="price">Preço:</label>
                    <input type="text" id="priceModal" name="price">

                    <label for="category">Categoria:</label>
                    <select class="category" name="category">
                        <option value="">Selecione uma Categoria</option>
                    </select>
                    <img src="" id="imageModal" alt="no image">
                    <input name="image" type="file" accept="image/*" >
                    <input type="button" id="eraseProduct" value="Excluir">
                    <button type="submit">Salvar</button> 
                </form>
            </div>
        </div>
    </body>
</html>

