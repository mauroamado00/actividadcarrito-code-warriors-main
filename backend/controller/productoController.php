<?php

require_once __DIR__.'/../dao/productoDAO.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$request = $_GET['request'];
switch($request){
    case 'obtenerProductos':
        obtenerProductos();
        break;

}

function obtenerProductos(){
    $productoDAO = new ProductoDAO();
    $productos = $productoDAO->obtenerProductos();
    echo json_encode($productos);
}



?>