export function guardarLocalStorage(llave, valor) {
  localStorage.setItem(llave, JSON.stringify(valor));
}

export function consultarLocalStorage(clave) {
  const datos = localStorage.getItem(clave);
  return datos ? JSON.parse(datos) : null;
}

export function eliminarLocalStorage(llave) {
  localStorage.removeItem(llave);
}

export function agsignaturas() {
  return consultarLocalStorage("asignaturas") || [];
}
