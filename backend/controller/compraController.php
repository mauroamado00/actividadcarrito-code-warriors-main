<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require_once __DIR__.'/../dao/compraDAO.php';
$request = $_GET['request'];
switch($request){
    case 'registrarCompra':
        registrarCompra();
        break;
}
function registrarCompra(){
    $productosCompra = json_decode($_POST['productosCompra'], true);
    $compraDAO = new CompraDAO();
    $request = $compraDAO->registrarCompraProductos($productosCompra);
    echo json_encode($request);
}

?>