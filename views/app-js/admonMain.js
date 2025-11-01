import { consultarLocalStorage } from "/helpers/localstorage.js";

document.addEventListener("DOMContentLoaded", () => {
  const usuario = consultarLocalStorage("usuario");
  let usuarios = consultarLocalStorage("usuarios") || [];

  if (!usuario) {
    Swal.fire({
      title: "Sesión no iniciada",
      text: "Debes iniciar sesión para acceder a esta página.",
      icon: "warning",
      confirmButtonText: "Ir al login",
    }).then(() => {
      window.location.href = "/index.html";
    });
    return;
  }

  document.getElementById("nombre-usuario").textContent =
    usuario.nombre || "Sin nombre";
  document.getElementById("telefono-usuario").textContent =
    usuario.telefono || "Sin número";
  document.getElementById("cedula-usuario").textContent =
    usuario.documento || "Sin cédula";

  const imgPerfil = document.getElementById("imagen-perfil");
  if (imgPerfil) {
    switch (usuario.rol) {
      case "Administrador":
        imgPerfil.src = "/views/imagenes/admin.png";
        break;
      case "Profesor":
        imgPerfil.src = "/views/imagenes/profesor.png";
        break;
      case "Estudiante":
        imgPerfil.src = "/views/imagenes/estudiante.png";
        break;
      default:
        imgPerfil.src = "/views/imagenes/logo perfil.jpg";
    }
  }

  function renderTabla() {
    const tabla = document.getElementById("tabla-usuarios");
    tabla.innerHTML = "";

    usuarios.forEach((u, index) => {
      const fila = document.createElement("tr");
      fila.classList.add("hover:bg-gray-100");

      fila.innerHTML = `
        <td class="px-4 py-2 border">${u.nombre || "-"}</td>
        <td class="px-4 py-2 border">${u.telefono || "-"}</td>
        <td class="px-4 py-2 border">${u.documento || "-"}</td>
        <td class="px-4 py-2 border">
          <select data-index="${index}" class="rol-select border rounded px-2 py-1">
            <option value="Administrador" ${
              u.rol === "Administrador" ? "selected" : ""
            }>Administrador</option>
            <option value="Profesor" ${
              u.rol === "Profesor" ? "selected" : ""
            }>Profesor</option>
            <option value="Estudiante" ${
              u.rol === "Estudiante" ? "selected" : ""
            }>Estudiante</option>
          </select>
        </td>
        <td class="px-4 py-2 border text-center">
          <button data-index="${index}" class="estado-btn ${
        u.estado === "Activo"
          ? "bg-green-500 hover:bg-green-600"
          : "bg-red-500 hover:bg-red-600"
      } text-white px-3 py-1 rounded">
            ${u.estado === "Activo" ? "Activo" : "Inactivo"}
          </button>
        </td>
      `;
      tabla.appendChild(fila);
    });

    document.querySelectorAll(".rol-select").forEach((select) => {
      select.addEventListener("change", (e) => {
        const index = e.target.dataset.index;
        const nuevoRol = e.target.value;

        usuarios[index].rol = nuevoRol;
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        Swal.fire({
          title: "Rol actualizado",
          text: `El rol de ${usuarios[index].nombre} ahora es ${nuevoRol}.`,
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      });
    });

    document.querySelectorAll(".estado-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const index = e.target.dataset.index;
        const estadoActual = usuarios[index].estado || "Inactivo";
        const nuevoEstado = estadoActual === "Activo" ? "Inactivo" : "Activo";

        usuarios[index].estado = nuevoEstado;
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        Swal.fire({
          title: "Estado actualizado",
          text: `${usuarios[index].nombre} ahora está ${nuevoEstado}.`,
          icon: nuevoEstado === "Activo" ? "success" : "info",
          timer: 1200,
          showConfirmButton: false,
        });

        renderTabla(); // refresca visualmente
      });
    });
  }

  renderTabla();

  document.getElementById("btn-cerrar-sesion").addEventListener("click", () => {
    Swal.fire({
      title: "¿Cerrar sesión?",
      text: "Tu sesión actual se cerrará.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, cerrar sesión",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("usuario");
        Swal.fire({
          title: "Sesión cerrada",
          text: "Has cerrado sesión correctamente.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        setTimeout(() => {
          window.location.href = "/views/pages/Login.html";
        }, 1500);
      }
    });
  });
});

export function cerrarSesion() {
  Swal.fire({
    title: "Cerrando sesión...",
    html: `
      <div style="display:flex; flex-direction:column; align-items:center; gap:10px;">
        <svg width="80" height="80" viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="20" stroke="#2563eb" stroke-width="4" fill="none" opacity="0.3"/>
          <circle cx="25" cy="25" r="20" stroke="#2563eb" stroke-width="4" fill="none"
            stroke-dasharray="31.4 31.4" stroke-linecap="round">
            <animateTransform
              attributeName="transform"
              type="rotate"
              dur="1s"
              from="0 25 25"
              to="360 25 25"
              repeatCount="indefinite" />
          </circle>
        </svg>
        <p style="font-size:16px;">Cerrando sesión, por favor espera...</p>
      </div>
    `,
    showConfirmButton: false,
    allowOutsideClick: false,
    background: "#fff",
    timer: 2500,
    timerProgressBar: true,
  });

  setTimeout(() => {
    localStorage.removeItem("usuario");
    window.location.href = "/views/pages/logout.html";
  }, 2500);
}

document.addEventListener("DOMContentLoaded", () => {
  const btnCerrar = document.getElementById("btn-cerrar-sesion");
  if (btnCerrar) {
    btnCerrar.addEventListener("click", cerrarSesion);
  }
});
