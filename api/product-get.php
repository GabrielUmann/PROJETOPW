<?php

require "connection.php";

$productId = filter_input(INPUT_GET, "productId");

$query = "SELECT * FROM produtos WHERE produtos.id = :productId";

$stmt = $conn->prepare($query);
$stmt->bindParam("productId", $productId);
$stmt->execute();

echo json_encode($stmt->fetch(), JSON_PRETTY_PRINT);