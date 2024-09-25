<?php
require_once __DIR__.'/conector.php';
require_once __DIR__.'/../model/Request.php';
    class ProductoDAO{

        function obtenerProductos(){
            $conexion = getConector();
            $sql = "SELECT * FROM producto";
            try{
                $result = $conexion->query($sql);
                return new Request($result->fetch_all(MYSQLI_ASSOC), true, "Productos obtenidos correctamente");
            }catch(Exception $e){
                return new Request(null, false, "Error al obtener los productos");
            }
            
        }
        
    }


?>