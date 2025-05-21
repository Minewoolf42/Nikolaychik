<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/js");
$data = file_get_contents("vars.json");
echo $data
?>