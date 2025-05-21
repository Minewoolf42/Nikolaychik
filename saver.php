<?php
header("Access-Control-Allow-Origin: *");
$data = file_get_contents("php://input");
$file = fopen("vars.json", "w");
file_put_contents('vars.json', $data);
?>
