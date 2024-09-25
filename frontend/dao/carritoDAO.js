export default class CarrioDAO{

    guardarCarrito(carrito) {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }
    
    obtenerCarrito() {
        const guardarCarrito = localStorage.getItem('carrito');
        return guardarCarrito ? JSON.parse(guardarCarrito) : [];
    }

    limpiarCarrito() {
        localStorage.removeItem('carrito');
    }
    
}