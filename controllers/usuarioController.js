import { Usuarios } from "../models/UsuarioModel.js";
import {
  guardarLocalStorage,
  consultarLocalStorage,
} from "../helpers/localstorage.js";

// Registrar usuario (formulario de registro)
export function registrarUsuario() {
  let formulario = document.getElementById("matricula-form");
  if (!formulario) return;

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(formulario);
    let usuario = Object.fromEntries(formData);

    Usuarios.push(usuario);
    guardarLocalStorage("usuarios", Usuarios);

    console.log("Usuarios registrados:", Usuarios);
    window.location.href = "/views/pages/Login.html";
  });
}

// Login de usuario
let formulariologin = document.getElementById("formulariologin");
if (formulariologin) {
  formulariologin.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = new FormData(formulariologin);
    let usuario = Object.fromEntries(formData);

    let usuarios = consultarLocalStorage("usuarios") || [];

    let usuarioEncontrado = usuarios.find(
      (u) => u.correo === usuario.correo && u.contrasena === usuario.contrasena
    );

    if (usuarioEncontrado) {
      guardarLocalStorage("usuario", usuarioEncontrado);

      Swal.fire({
        title: "¡Inicio de sesión exitoso!",
        html: `
      <div style="display:flex; flex-direction:column; align-items:center; gap:10px;">
        <svg width="100" height="100" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="50" stroke="#4CAF50" stroke-width="5" fill="none" opacity="0.3"/>
          <path d="M40 65 L55 80 L85 45" stroke="#4CAF50" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="0.8s" fill="freeze" />
          </path>
        </svg>
        <p style="font-size:16px; color:#444;">Cargando a dashboard...</p>
      </div>
    `,
        showConfirmButton: false,
        allowOutsideClick: false,
        background: "#ffffff",
        timer: 3000,
        timerProgressBar: true,
      });

      setTimeout(() => {
        window.location.href = "/views/pages/Dashboard.html";
      }, 3000);
    } else {
      Swal.fire({
        title: "Error",
        text: "Usuario o contraseña incorrectos.",
        icon: "error",
      });
    }
  });
}
