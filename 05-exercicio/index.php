<!DOCTYPE html>
<html>
<head>
    <title>..:: Gerenciamento de Livros ::..</title>
    <link rel="stylesheet" href="assets/styles.css">
    <script type="module" src="assets/script.js" async></script>
</head>
<body>
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
<!-- Modal para editar Livro -->
<div id="edit-modal" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Editar Livro</h2>
        <form id="edit-form">
            <input type="hidden" id="bookId" name="bookId">
            <label for="title">Título:</label>
            <input type="text" id="title" name="title">
            <label for="category">Categoria:</label>
            <select id="categoryModal" name="category">
                <option value="">Selecione uma Categoria</option>
            </select>
            <label for="author">Autor:</label>
            <select id="authorModal" name="author">
                <option value="">Selecione um Autor</option>
            </select>
            <label for="price">Preço:</label>
            <input type="text" id="priceModal" name="price">
            <button type="submit">Salvar</button>
        </form>
    </div>
</div>
</body>
</html>
