export default class ProductosDAO{
   async obtenerProductos(){
        let url = "http://localhost/actividadcarrito-code-warriors-main/backend/controller/productoController.php?request=obtenerProductos";
        let response = await fetch(url);
        let productos = await response.json();
        console.log(productos);
        return productos;
    }
}