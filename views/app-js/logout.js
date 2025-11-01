// logout.js
import { eliminarLocalStorage } from "/helpers/localstorage.js";

window.addEventListener("DOMContentLoaded", () => {
  // Limpiar datos de sesión al cargar la página
  eliminarLocalStorage("usuarioActivo");
  eliminarLocalStorage("asignaturas");
  eliminarLocalStorage("estudiantes");

  // Mostrar alerta amigable
  Swal.fire({
    icon: "success",
    title: "Sesión cerrada correctamente",
    text: "Tu sesión ha sido cerrada. ¡Vuelve pronto!",
    confirmButtonColor: "#2563eb",
    timer: 3000,
    timerProgressBar: true,
  });
});
