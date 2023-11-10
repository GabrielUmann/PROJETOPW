<?php 
require "connection.php";

$query = "SELECT * FROM produtos";
$stmt = $conn->query($query);

echo json_encode($stmt->fetchAll());