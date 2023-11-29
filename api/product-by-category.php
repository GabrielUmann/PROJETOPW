<?php
require "connection.php";
$idCategory = filter_input(INPUT_GET, "categoryId");

$query = "SELECT * FROM produtos WHERE produtos.categoria_id = :categoryId";
$stmt = $conn->prepare($query);
$stmt->bindParam("categoryId", $idCategory);
$stmt->execute();

echo json_encode($stmt->fetchAll());