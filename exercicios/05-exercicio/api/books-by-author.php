<?php
require "connection.php";
$idAuthor = filter_input(INPUT_GET, "authorId");

$query = "SELECT * FROM books WHERE books.author_id = :authorId";
$stmt = $conn->prepare($query);
$stmt->bindParam("authorId", $idAuthor);
$stmt->execute();

echo json_encode($stmt->fetchAll());