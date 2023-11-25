<?php
session_start();
require "connection.php";
$post = filter_input_array(INPUT_POST);

$query = "INSERT INTO `avaliacoes`(`usuario_id`, `pontuacao`, `comentario`, `pedido_id`) VALUES (:usuario_id , :pontuacao, :comentario, :pedido_id)";
$stmt = $conn->prepare($query);
$stmt->bindParam("usuario_id", $_SESSION["user"]["id"]);
$stmt->bindParam("pontuacao", $post["grade"]);
$stmt->bindParam("comentario", $post["ratingText"]);
$stmt->bindParam("pedido_id", $_SESSION["order"]);
$stmt->execute();

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
    "message" => "avaliação feita com sucesso",
    "url" => "principal.php"
];
echo json_encode($response);