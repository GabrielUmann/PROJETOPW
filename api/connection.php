<?php

$host = "localhost";
$user = "root";
$password = "";
$database = "db_projeto_pw";
$port = 3306;
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

$conn = new PDO(
    "mysql:host=$host;port=$port;dbname=$database",
    $user,
    $password,
    $options
);

try {
    $conn = new PDO("mysql:host=$host;port=$port;dbname=$database", $user, $password, $options);
} catch (PDOException $e) {
    echo "Erro de conexão: " . $e->getMessage();
}

