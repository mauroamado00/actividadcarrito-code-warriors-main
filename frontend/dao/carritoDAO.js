export default class CarrioDAO{

    guardarCarrito(carrito) {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }
    
    obtenerCarrito(){
        
    }

    limpiarCarrito() {
        localStorage.removeItem('carrito');
    }
    

}