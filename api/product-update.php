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

if(!isset($_FILES["image"])){
    $query = "UPDATE produtos 
              SET nome = :nome, preco = :preco, categoria_id = :categoria_id
              WHERE id = :id";
    $stmt = $conn->prepare($query);
    $stmt->bindParam("nome", $post["name"]);
    $stmt->bindParam("preco",$post["price"]);
    $stmt->bindParam("categoria_id",$post["category"]);
    $stmt->bindParam("id",$post["productId"]);
    
}else{
    $image = "../img/". $_FILES["image"]["name"];
    move_uploaded_file($_FILES["image"]["tmp_name"], $image );

    $query = "UPDATE produtos 
              SET nome = :nome, preco = :preco, img_path = '{$image}', categoria_id = :categoria_id
              WHERE id = :id";
    $stmt = $conn->prepare($query);
    $stmt->bindParam("nome", $post["name"]);
    $stmt->bindParam("preco",$post["price"]);
    $stmt->bindParam("categoria_id",$post["category"]);
    $stmt->bindParam("id",$post["productId"]);
}
$stmt->execute();

if($stmt->rowCount() != 1){
    $response = [
        "type" => "error",
        "message" => "Erro na alteração do Produto!"
    ];
    echo json_encode($response);
    exit;
}

$response = [
   "type" => "success",
   "message" => "Produto alterado com sucesso!"
];

echo json_encode($response);