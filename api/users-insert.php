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
$query = "SELECT * FROM `usuarios` WHERE email = :email";
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
// Confere se a senha é menor que 7
//
if(mb_strlen($post["password"]) < 7){
    $response = [
        "type" => "error",
        "message" => "Sua senha tem que ser maior que 7!"
    ];
    echo json_encode($response);
    exit;
}

//
// INSERIR VALOR NO BANCO DE DADOS
//
if(!isset($post["role"])){
    $post["role"] = 'default';
}

$query = "INSERT INTO `usuarios` VALUES (NULL, :name, :email, :password, :role)";
$stmt = $conn->prepare($query);
$stmt->bindParam("name", $post["name"]);
$stmt->bindParam("email",$post["email"]);
$stmt->bindParam("role",$post["role"]);
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