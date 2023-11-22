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
        <title>Document</title>
        <script src="../assets/admin.js" async></script>
        <link rel="stylesheet" href="../assets/adm.css">
    </head>
    <body>
        <h1> CADASTRO DE PRODUTO </h1>
        <form id="registerProduct" method="post" enctype="multipart/form-data">
            <label for="name"> NOME </label>
            <input name="name" type="text">

            <label for="name"> PRECO </label>
            <input name="price" type="text">

            <label for="name"> IMAGEM </label>
            <input name="image" type="file" accept="image/*">

            <label for="name"> CATEGORIA </label>
            <select name="category" id="category">
                <option selected disabled value="0"> Selecione sua Categoria </option>
            </select>
            <button type="submit"> Adicionar </button><br>
        </form>

        <!-- EDITAR PRODUTOS -->

        <div class="container">
            <h1>Lista de Livros</h1>
            <div class="filter">
                <label for="category">Categoria:</label>
                <select id="category">
                    <option value="">Selecione uma categoria</option>
                </select>
                <label for="author">Autor:</label>
                <select id="author">
                </select>
                <label for="bookTitle">Título do Livro:</label>
                <input type="text" id="bookTitle">
            </div>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Preço</th>
                    <th>Apagar</th>
                </tr>
                </thead>
                <tbody id="bookList">
        
                </tbody>
            </table>
        </div>
    
    </body>
</html>

