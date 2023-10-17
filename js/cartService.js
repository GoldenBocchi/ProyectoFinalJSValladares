const cuentaCarritoElement = document.getElementById("cuenta-carrito");


function agregarCarro(producto){

  let memoria = JSON.parse(localStorage.getItem("prodAlimentos"));
  let cantidadProductoFinal;

  if(!memoria || memoria.length === 0) {
    const nuevoProducto = nuevoProdMem(producto)
    localStorage.setItem("prodAlimentos",JSON.stringify([nuevoProducto]));
    ActualizarNumCarro();
    cantidadProductoFinal = 1;
  }
  else {
    const indiceProducto = memoria.findIndex(productoV => productoV.id === producto.id)
    const nuevaMemoria = memoria;

    if(indiceProducto === -1){
      const nuevoProducto = nuevoProdMem(producto);
      nuevaMemoria.push(nuevoProducto);
      cantidadProductoFinal = 1;
    } else {

      nuevaMemoria[indiceProducto].cantidad ++;
      cantidadProductoFinal = nuevaMemoria[indiceProducto].cantidad;
    }
    localStorage.setItem("prodAlimentos",JSON.stringify(nuevaMemoria));
    ActualizarNumCarro();
    return cantidadProductoFinal;
  }
}

function restarCarro(producto){
  let memoria = JSON.parse(localStorage.getItem("prodAlimentos"));
  let cantidadProductoFinal = 0;
  const indiceProducto = memoria.findIndex(productoV => productoV.id === producto.id)
  let nuevaMemoria = memoria;
  nuevaMemoria[indiceProducto].cantidad--;
  cantidadProductoFinal = nuevaMemoria[indiceProducto].cantidad;
  if(cantidadProductoFinal === 0){
    nuevaMemoria.splice(indiceProducto,1)
  };
  localStorage.setItem("prodAlimentos",JSON.stringify(nuevaMemoria));
  ActualizarNumCarro();
  return cantidadProductoFinal;
}


function nuevoProdMem(producto){
  const nuevoProducto = producto;
  nuevoProducto.cantidad = 1;
  return nuevoProducto;
}


function ActualizarNumCarro(){
  let cuenta = 0;
  const memoria = JSON.parse(localStorage.getItem("prodAlimentos"));
  if(memoria && memoria.length > 0){
    cuenta = memoria.reduce((acum, current)=>acum+current.cantidad,0)
    return cuentaCarritoElement.innerText = cuenta;
  }
  cuentaCarritoElement.innerText = 0;
}


function cartReset(){
  localStorage.removeItem("prodAlimentos");
  ActualizarNumCarro();
}


ActualizarNumCarro();