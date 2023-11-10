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
//
// CONFERIR SE O EMAIL JA TA CADASTRADO
//

$query = "SELECT * FROM users WHERE email = :email";
$stmt = $conn->prepare($query);
$stmt->bindParam("email",$post["email"]);
$stmt->execute();
if($stmt->rowCount() == 1){
    $response = [
        "type" => "error",
        "message" => "E-mail já cadastrado!"
    ];
    echo json_encode($response);
    exit;
}

//
// INSERIR VALOR NO BANCO DE DADOS
//

$query = "INSERT INTO `usuarios` VALUES (NULL, :name, :email, :password)";
$stmt = $conn->prepare($query);
$stmt->bindParam("name", $post["name"]);
$stmt->bindParam("email",$post["email"]);
$password = password_hash($post["password"], PASSWORD_DEFAULT);
$stmt->bindParam("password",$password);
$stmt->execute();

//
// CONFERE SE O USUARIO FOI CADASDTRADO COM SUCESSO
//

if($stmt->rowCount() != 1){
    $response = [
        "type" => "error",
        "message" => "Erro no cadastro de usuário, tente novamente!"
    ];
    echo json_encode($response);
    exit;
}

$response = [
    "type" => "success",
    "message" => "Usuário cadastrado com sucesso!"
];
    
echo json_encode($response);