let cantidad = 0;
const precioBase = 300000;

function actualizarDisplay() {
  document.querySelector("#cantidad").innerHTML = cantidad; // cantidad
  document.querySelector("#precio-total").innerHTML = (
    cantidad * precioBase
  ).toLocaleString(); // precio total
}

function incrementarCantidad() {
  cantidad += 1; // aca aumentamos la cantidad
  actualizarDisplay(); // display
}

function decrementarCantidad() {
  if (cantidad > 0) {
    // no bajar del 0
    cantidad -= 1; // bajamos la cantidad
    actualizarDisplay(); // display
  }
}
