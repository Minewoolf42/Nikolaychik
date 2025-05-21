<?php
header("Access-Control-Allow-Origin: *");
$data = file_get_contents("vars.json");
echo $data
?>
