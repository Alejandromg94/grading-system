import {
  consultarLocalStorage,
  guardarLocalStorage,
} from "/helpers/localstorage.js";

document.addEventListener("DOMContentLoaded", () => {
  const formCambiar = document.getElementById("form-cambiar-contraseña");
  const formBaja = document.getElementById("form-dar-de-baja");

  formCambiar.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const newPass = document.getElementById("new-password").value.trim();
    const confirmPass = document
      .getElementById("confirm-password")
      .value.trim();

    if (newPass !== confirmPass) {
      Swal.fire({
        title: "Error",
        text: "Las contraseñas no coinciden.",
        icon: "error",
      });
      return;
    }

    let usuarios = consultarLocalStorage("usuarios") || [];
    let usuario = usuarios.find((u) => u.correo === email);

    if (!usuario) {
      Swal.fire({
        title: "Usuario no encontrado",
        text: "No existe una cuenta asociada a este correo.",
        icon: "warning",
      });
      return;
    }

    usuario.contrasena = newPass;
    guardarLocalStorage("usuarios", usuarios);

    Swal.fire({
      title: "¡Contraseña actualizada!",
      text: "Tu contraseña se ha cambiado correctamente.",
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
    });

    setTimeout(() => {
      window.location.href = "/index.html";
    }, 2000);
  });

  formBaja.addEventListener("submit", (e) => {
    e.preventDefault();

    const cedula = document.getElementById("cedula").value.trim();
    const fecha = document.getElementById("fecha-expedicion").value.trim();
    const carta = document.getElementById("carta-autorizacion").files[0];

    if (!cedula || !fecha || !carta) {
      Swal.fire({
        title: "Campos incompletos",
        text: "Debes llenar todos los campos y adjuntar la carta.",
        icon: "error",
      });
      return;
    }

    let usuarios = consultarLocalStorage("usuarios") || [];
    const index = usuarios.findIndex((u) => u.documento === cedula);

    if (index === -1) {
      Swal.fire({
        title: "Usuario no encontrado",
        text: "No existe un usuario con esa cédula.",
        icon: "error",
      });
      return;
    }

    Swal.fire({
      title: "¿Eliminar cuenta?",
      text: "Esta acción eliminará tu cuenta permanentemente.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        usuarios.splice(index, 1);
        guardarLocalStorage("usuarios", usuarios);

        Swal.fire({
          title: "Cuenta eliminada",
          text: "Tu cuenta ha sido eliminada correctamente.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });

        setTimeout(() => {
          window.location.href = "/index.html";
        }, 2000);
      }
    });
  });
});
