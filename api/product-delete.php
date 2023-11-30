<?php 

require "connection.php";

$productId = filter_input(INPUT_GET, "productId");

$query = "DELETE FROM `produtos` WHERE produtos.id = :productId";
$stmt = $conn->prepare($query);
$stmt->bindParam("productId", $productId);
$stmt->execute();
 
if($stmt->rowCount() != 1){
    $response = [
        "type" => "error",
        "message" => "Erro em remover o produto!"
    ];
    echo json_encode($response);
    exit;
}
$response = [
    "type" => "success",
    "message" => "Produto removido com sucesso!"
];

echo json_encode($response);