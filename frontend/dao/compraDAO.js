export default class CompraDAO{

    async registrarCompra(comprasCarrito){
        let url = "http://localhost/actividadcarrito-code-warriors-main/backend/controller/compraController.php?request=registrarCompra";
        let formData = new FormData();
        formData.append("productosCompra", JSON.stringify(comprasCarrito));
        let config = {
            method: 'POST',
            body: formData
        }
        let consulta = await fetch(url,config);
        let response = await consulta.json();
        return response;

    }

}