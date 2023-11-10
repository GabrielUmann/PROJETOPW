<?php

require "connection.php";

$post = filter_input_array(INPUT_POST);

echo json_encode($post);