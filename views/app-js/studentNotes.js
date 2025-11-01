import { consultarLocalStorage } from "/helpers/localstorage.js";
document.addEventListener("DOMContentLoaded", () => {
  const nombreUsuario = document.getElementById("nombre-usuario");
  const telefonoUsuario = document.getElementById("telefono-usuario");
  const cedulaUsuario = document.getElementById("cedula-usuario");
  const tablaBody = document.getElementById("tabla-notas-body");
  const btnCerrarSesion = document.getElementById("btn-cerrar-sesion");

  if (!nombreUsuario || !telefonoUsuario || !cedulaUsuario || !tablaBody) {
    console.error("❌ Faltan elementos del DOM en studentNotes.html");
    return;
  }
  const estudiante = JSON.parse(localStorage.getItem("usuarioActivo")) || {
    nombre: "Deimer Dario Lara Rangel",
    telefono: "3001000000",
    cedula: "1092987263",
    notas: [
      { logica: 4.0, intro: 3.8, metodologias: 4.5, emprendimiento: 4.0 },
      { logica: 4.2, intro: 4.0, metodologias: 4.1, emprendimiento: 4.3 },
      { logica: 3.9, intro: 3.7, metodologias: 4.0, emprendimiento: 3.8 },
    ],
  };

  nombreUsuario.textContent = estudiante.nombre;
  telefonoUsuario.textContent = estudiante.telefono;
  cedulaUsuario.textContent = estudiante.cedula;

  const renderTabla = () => {
    tablaBody.innerHTML = "";

    estudiante.notas.forEach((nota) => {
      const promedio =
        (nota.logica + nota.intro + nota.metodologias + nota.emprendimiento) /
        4;

      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td class="px-4 py-2 border text-center">${nota.logica.toFixed(1)}</td>
        <td class="px-4 py-2 border text-center">${nota.intro.toFixed(1)}</td>
        <td class="px-4 py-2 border text-center">${nota.metodologias.toFixed(
          1
        )}</td>
        <td class="px-4 py-2 border text-center">${nota.emprendimiento.toFixed(
          1
        )}</td>
        <td class="px-4 py-2 border text-center font-bold">${promedio.toFixed(
          2
        )}</td>
      `;
      tablaBody.appendChild(fila);
    });
  };

  renderTabla();

  btnCerrarSesion.addEventListener("click", () => {
    Swal.fire({
      title: "¿Cerrar sesión?",
      text: "Se cerrará tu sesión actual.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, cerrar sesión",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("usuarioActivo");
        Swal.fire({
          title: "Sesión cerrada",
          text: "Has cerrado sesión correctamente.",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          window.location.href = "/index.html";
        });
      }
    });
  });
});
