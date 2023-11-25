<?php
session_start();
require "connection.php";

$post = filter_input_array(INPUT_POST);

if(in_array("[]",$post)){
    $response = [
        "type" => "error",
        "message" => "carrinho vazio"
    ];
    echo json_encode($response);
    exit;
}

$query = "CALL insertPedido(:usuario_id, @pedidoId)";
$stmt = $conn->prepare($query);
$stmt->bindParam("usuario_id", $_SESSION["user"]["id"]);
$stmt->execute();

$stmt = $conn->query("SELECT @pedidoId AS pedidoID");
$row = $stmt->fetch(PDO::FETCH_ASSOC);

$_SESSION["order"] = $row['pedidoID'];

if($stmt->rowCount() != 1){
    $response = [
        "type" => "error",
        "message" => "Erro! tente novamente!"
    ];
    echo json_encode($response);
    exit;
}

$response = [
    "type" => "success",
    "message" => "pedido feito com sucesso"
];
echo json_encode($response);

