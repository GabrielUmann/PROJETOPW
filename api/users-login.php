<?php
session_set_cookie_params(['lifetime' => 0, 'httponly' => true]);

session_start();

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
$userDB = $stmt->fetch();

if($stmt->rowCount() != 1){
    $response = [
        "type" => "error",
        "message" => "Usuario não cadastrado!"
    ];
    echo json_encode($response);
    exit;
}

if(!password_verify($password, $userDB["senha"])){
    $response = [
        "type" => "error",
        "message" => "Senha Incorreta!"
    ];
    echo json_encode($response);
    exit;

};

$_SESSION["user"] = $userDB;
if($_SESSION["user"]["role"] == "ADMIN"){
    $response = [
        "type" => "ADMINISTRATION",
        "url" => "html/admin.php"
    ];
    echo json_encode($response);
    exit;
}

$response = [
    "type" => "success",
    "message" => "Login efetuado com sucesso!",
    "url" => "html/principal.php",
    "user" => [
                "id" => $userDB["id"],
                "name" => $userDB["nome"],
                "email" => $userDB["email"]
              ]
];
echo json_encode($response);

