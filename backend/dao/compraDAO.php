 <?php

    require_once __DIR__.'/conector.php';
    require_once __DIR__.'/../model/request.php';

    class CompraDAO{

        function registrarCompraProductos($productosCompra){
            $conexion = getConector();
            $requestCompra = $this->registrarCompra();
            if($requestCompra->status){
                $id_compra = $requestCompra->data;
                foreach($productosCompra as $producto){
                    $id_producto = $producto['id_producto'];
                    $cantidad = $producto['cantidad'];
                    $sql = "INSERT INTO productocompra (idProducto, idCompra, cantidad) VALUES ($id_producto,$id_compra,$cantidad)";
                    try{
                        $conexion->query($sql);
                    }catch(Exception $e){
                       return new Request(null, false, "Error al registrar la compra");
                    }     
                }
                return new Request(null, true, "productos de compra registrada correctamente");
            }else{
                return new Request(null, false, "No se registro la compra ");
            }
            
        }

        function registrarCompra(){
            $fecha = date('Y-m-d');
            $conexion = getConector();
            $sql = "INSERT INTO compra (fecha) VALUES ('$fecha')";
            try{
                $conexion->query($sql);
                $id_compra = $conexion->insert_id;
                return new Request($id_compra, true, "Compra  correctamente");
            }catch(Exception $e){
                return new Request(null, false, "Error al registrar la compra");
            }
        }
    }

 ?>