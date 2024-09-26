export default class carritoDAO {

    guardarCarrito(carrito) {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    obtenerCarrito() {
        try {
            const carrito = localStorage.getItem('carrito');
            return carrito ? JSON.parse(carrito) : [];
        } catch (error) {
            console.error('Error al obtener el carrito:', error);
            return []; 
        }
    }

    limpiarCarrito() {
        localStorage.removeItem('carrito');
    }
}
