const contenedorTarjetas = document.getElementById("cart-container");
const cantidadElement = document.getElementById("cantidad");
const precioElement = document.getElementById("precio");
const carritoVacioElement = document.getElementById("carrito-vacio");
const totalesContainer = document.getElementById("totales");

function crearInicioProd() {
  contenedorTarjetas.innerHTML = "";
  const productos = JSON.parse(localStorage.getItem("prodAlimentos"));
  if (productos && productos.length > 0) {
    productos.forEach((producto) => {
      const nuevoProducto = document.createElement("div");
      nuevoProducto.classList = "tarjeta-producto";
      nuevoProducto.innerHTML = `<img src="./img/productos/${producto.id}.png" alt="Producto 1">
    <h3>${producto.nombre}</h3>
    <span>S/.${producto.precio}</span>
    <div>
    <button>-</button>
    <span class="cantidad">${producto.cantidad}</span>
    <button>+</button>
    </div>`;
      contenedorTarjetas.appendChild(nuevoProducto);
      nuevoProducto
        .getElementsByTagName("button")[0].addEventListener("click", (e) => {
          const cantidadElement = e.target.parentElement.getElementsByClassName("cantidad")[0];
          cantidadElement.innerText = restarCarro(producto);
          crearInicioProd();
          totalesCarro();
        });
      nuevoProducto
        .getElementsByTagName("button")[1].addEventListener("click", (e) => {
          const cantidadElement = e.target.parentElement.getElementsByClassName("cantidad")[0];
          cantidadElement.innerText = agregarCarro(producto);
          totalesCarro();
        });
    });
  }
  mensajesVacios();
  totalesCarro();
  ActualizarNumCarro();
}

crearInicioProd();

function totalesCarro() {
  const productos = JSON.parse(localStorage.getItem("prodAlimentos"));
  let cantidad = 0;
  let precio = 0;
  if (productos && productos.length > 0) {
    productos.forEach((producto) => {
      cantidad += producto.cantidad;
      precio += producto.precio * producto.cantidad;
    });
  }
  cantidadElement.innerText = cantidad;
  precioElement.innerText = precio;
  if(precio === 0) {
    cartReset();
    mensajesVacios();
  }
}

document.getElementById("reiniciar").addEventListener("click", () => {
  contenedorTarjetas.innerHTML = "";
  cartReset();
  mensajesVacios();
});

function mensajesVacios() {
  const productos = JSON.parse(localStorage.getItem("prodAlimentos"));
  carritoVacioElement.classList.toggle("escondido", productos);
  totalesContainer.classList.toggle("escondido", !productos);
}
