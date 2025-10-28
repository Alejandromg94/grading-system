import { Usuarios } from "/models/UsuarioModel.js";
import {
  gurdarLocalStorage,
  consultarLocalStorage,
} from "/helpers/localstorage.js";

export function registrarUsuario() {
  let formulario = document.getElementById("formulario");
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(formulario);
    let usuario = Object.fromEntries(formData);
    Usuarios.push(usuario);
    gurdarLocalStorage("usuarios", Usuarios);
    console.log(Usuarios);
    window.location.href = "/views/login.html";
  });
}

let formulariologin = document.getElementById("formulariologin");
if (formulariologin) {
  formulariologin.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = new FormData(formulariologin);
    let usuario = Object.fromEntries(formData);
    let Usuarios = consultarLocalStorage("usuarios");
    let autc = Usuarios.some(
      (index) =>
        index.correo == usuario.correo && index.contrasena == usuario.contrasena
    );

    if (autc) {
      gurdarLocalStorage("usuario", autc);
      Swal.fire({
        title: "¡Bienvenido!",
        text: "Has iniciado sesión correctamente.",
        icon: "Bienvenido",
      });
      // se puede colocar una animacion de carga aqui
      setTimeout(() => {
        window.location.href = "/views/panel.html";
      }, 4000);
      // window.location.href = "/views/panel.html";
    } else {
      Swal.fire({
        title: "Error!",
        text: "usuario o contraseña incorrecta",
        icon: "error",
      });
    }

    console.log(autc);
  });
}
