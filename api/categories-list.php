<?php 

require "connection.php";

$query = "SELECT * FROM categorias";
$stmt = $conn->query($query);

echo json_encode($stmt->fetchAll());