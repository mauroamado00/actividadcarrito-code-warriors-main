import CompraDAO from "../../dao/compraDAO.js";
import ProductosDAO from "../../dao/productosDAO.js";

let carrito = [];
window.onload = async function() {
    let productos = await obtenerProductos();
     
    agregarEventos();
    mostrarProductos(productos);
}
async function obtenerProductos(){
    let productos = await new ProductosDAO().obtenerProductos();
    return productos.data;
}


function agregarEventos(){
    let btnComprar = document.getElementById("realizarCompra");
    btnComprar.onclick = async function(){
        if(carrito.length > 0){
           realizarCompra();
        }
    }
}

async function realizarCompra(){
    let request= await new CompraDAO().registrarCompra(carrito);
    if(request.status){
    }else{

    }
   
}

function mostrarProductos(productos){
    console.log(productos);
    let contenedor = document.getElementById("listaProductos");
    productos.forEach(producto => {
        let div = document.createElement("div");
        div.className = "producto";
        div.innerHTML = `
            <p>Nombre: ${producto.nombre}</p>
            <p>Precio: $${producto.precio}</p>  
        `;
        let inputCantidad = document.createElement("input");
        inputCantidad.type = "number";
        inputCantidad.required = true;
        inputCantidad.placeholder = "Ingresar cantidad";  
        let btnAgregar = document.createElement("button");

        btnAgregar.innerHTML = "Agregar";
        div.appendChild(inputCantidad);
        div.appendChild(btnAgregar);
        contenedor.appendChild(div);
        

        btnAgregar.onclick = function(){
            let cantidad = inputCantidad.value;
           if(cantidad > 0){
            agregarAlCarrito(producto,cantidad);
           }
            
        }
    });
}

function actualizarCarrito(){
    let listaCarrito = document.querySelector("#listaCarrito");
    listaCarrito.innerHTML = "";
    carrito.forEach(producto => {
        let div = document.createElement("div");
        div.innerHTML = `
            <p>Producto: ${producto.id_producto}</p>
            <p>Cantidad: ${producto.cantidad}</p>
        `;
        listaCarrito.appendChild(div);
    });
}

function agregarAlCarrito(producto,cantidad){
    let iniceProducto = carrito.findIndex(p => p.id_producto == producto.id);
    console.log(producto);
    if(iniceProducto != -1){
        carrito[iniceProducto].cantidad += parseInt(cantidad);
    }else{
        let productoCarrito = {
            id_producto: producto.id,
            cantidad: parseInt(cantidad),
        };
        carrito.push(productoCarrito);
    }
    actualizarCarrito();
    console.log(carrito);
}


