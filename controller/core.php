<?php

$decoded = json_decode(file_get_contents('php://input'), true);

$ctrl = $decoded['controller'];
require_once($ctrl . '.php');
$obj = new $ctrl();
if (array_key_exists('parameter', $decoded)) {
    $func = $decoded['method'];
    $param = $decoded['parameter'];
    $data = $obj->$func($param);
} else {
    $func = $decoded['method'];
    $data = $obj->$func();
}
$result = json_encode($data);
header("Content-Type: application/json; charset=UTF-8");
echo $result;
