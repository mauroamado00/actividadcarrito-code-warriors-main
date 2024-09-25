<?php 

 function getConector() {
        $conexion = new mysqli("localhost", "root", "", "producto");
        return $conexion;
 }