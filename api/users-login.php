<?php
require "connection.php";

$post = filter_input_array(INPUT_POST);

if(in_array("",$post)){
    $response = [
        "type" => "error",
        "message" => "Preencha todos os campos"
    ];
    echo json_encode($response);
    exit;
}

$query = "SELECT * FROM `usuarios` WHERE usuarios.senha = :password and usuarios.email = :email";
$stmt = $conn->prepare($query);
$stmt->bindParam("password", $post["password"]); 
$stmt->bindParam("email",$post["email"]);
$stmt->execute();

if($stmt->rowCount() != 1){
    $response = [
        "type" => "error",
        "message" => "Usuario não cadastrado!"
    ];
    echo json_encode($response);
    exit;
}

$response = [
   "type" => "success",
   "message" => "Bem vindo!"
];

echo json_encode($response);

