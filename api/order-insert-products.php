<?php
session_start();
require "connection.php";

$post = filter_input_array(INPUT_POST);
$CartProducts = json_decode($post["CartProducts"], true);
if(in_array("[]",$post)){
    $response = [
        "type" => "error",
        "message" => "carrinho vazio"
    ];
    echo json_encode($response);
    exit;
};


foreach ($CartProducts as $item) {
    $query = "INSERT INTO `itenspedido` VALUES (Null,:pedido_id, :produto_id, :quantidade, :preco)";
    $stmt = $conn->prepare($query);
    $stmt->bindParam("pedido_id", $_SESSION["order"]);
    $stmt->bindParam("produto_id", $item["id"]);
    $stmt->bindParam("quantidade", $item["qtd"]);
    $stmt->bindParam("preco", $item["preco"]);
    $stmt->execute();
}


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
    "message" => "Pedido feito com sucesso!"
];
echo json_encode($response); 
