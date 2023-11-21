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
$password = $post["password"];
$query = "SELECT * FROM `usuarios` WHERE usuarios.email = :email";
$stmt = $conn->prepare($query);
$stmt->bindParam("email",$post["email"]);
$stmt->execute();
$user = $stmt->fetch();

if(!password_verify($password, $user["senha"])){
    $response = [
        "type" => "error",
        "message" => "Senha Incorreta!"
    ];
    echo json_encode($response);
    exit;

};


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

