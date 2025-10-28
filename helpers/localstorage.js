export function gurdarLocalStorage(llave, valor) {
  localStorage.setItem(llave, JSON.stringify(valor));
}

export function consultarLocalStorage(llave) {
  // let usuarios = JSON.parse(localStorage.getItem(llave));
  return JSON.parse(localStorage.getItem(llave));
}

export function eliminarLocalStorage(llave) {
  localStorage.removeItem(llave);
}
