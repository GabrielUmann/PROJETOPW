<?php

require "connection.php";

$bookId = filter_input(INPUT_GET, "bookId");

$query = "SELECT * FROM books WHERE books.id = :bookId";

$stmt = $conn->prepare($query);
$stmt->bindParam("bookId", $bookId);
$stmt->execute();

echo json_encode($stmt->fetch(), JSON_PRETTY_PRINT);