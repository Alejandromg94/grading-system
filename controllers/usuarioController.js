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
        title: "¡Bienvenido!",
        text: "Has iniciado sesión correctamente.",
        icon: "success",
      });

      setTimeout(() => {
        window.location.href = "/index.html";
      }, 2000);
    } else {
      Swal.fire({
        title: "Error",
        text: "Usuario o contraseña incorrectos.",
        icon: "error",
      });
    }

    console.log("Resultado de login:", usuarioEncontrado);
  });
}
