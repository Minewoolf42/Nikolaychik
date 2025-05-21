<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/js");
$data = file_get_contents("php://input");
$file = fopen("vars.json", "w");
file_put_contents('vars.json', $data);
?>