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
$image = "../img/". $_FILES["image"]["name"];
move_uploaded_file($_FILES["image"]["tmp_name"], $image );

$query = "INSERT INTO `produtos` VALUES (NULL, :name, :price, '$image', :category )";
$stmt = $conn->prepare($query);
$stmt->bindParam("name", $post["name"]);
$stmt->bindParam("price",$post["price"]);
$stmt->bindParam("category", $post["category"]);
$stmt->execute();
 
if($stmt->rowCount() != 1){
    $response = [
        "type" => "error",
        "message" => "Erro no cadastro de cu do lucas preto produtos!"
    ];
    echo json_encode($response);
    exit;
}
$response = [
    "type" => "success",
    "message" => "Produto cadastrado com sucesso!"
];

echo json_encode($response);