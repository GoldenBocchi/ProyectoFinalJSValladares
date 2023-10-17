const contenedorTarjetas = document.getElementById("productos-container");

function crearProductosInicial(productos){
  productos.forEach(producto => {
    const nuevoProducto = document.createElement("div");
    nuevoProducto.classList = "tarjeta-producto"
    nuevoProducto.innerHTML = `
    <img src="./img/productos/${producto.id}.png" alt="Producto 1">
    <h3>${producto.nombre}</h3>
    <p class="precio">S/.${producto.precio}</p>
    <button>Agregar al carrito</button>`
    contenedorTarjetas.appendChild(nuevoProducto);
    nuevoProducto.getElementsByTagName("button")[0].addEventListener("click",() => agregarCarro(producto))
  });
}
crearProductosInicial(productos);