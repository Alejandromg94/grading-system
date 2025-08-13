function formulario() {
  const nombre = prompt("Introduce tu nombre:");
  const documento = Number(prompt("Introduce tu documento:"));
  const email = prompt("Introduce tu correo electrónico:");
  const programa = prompt("Ingresa tu Programa:");
  const AreaDeConocimiento = prompt("Ingresa tu Área de Conocimiento:");

  const datos = {
    nombre,
    documento,
    email,
    programa,
    AreaDeConocimiento
  };

  console.log("Formulario completado:");
  //console.log(datos);
  return datos;
}

function mostrarFormulario(datos) {
  console.log("Nombre: " + datos.nombre);
  console.log("Documento: " + datos.documento);
  console.log("Correo Electrónico: " + datos.email);
  console.log("Programa: " + datos.programa);
  console.log("Área de Conocimiento: " + datos.AreaDeConocimiento);
}

function InactivarRol() {
  const roless = ["Administrador", "Docente", "Estudiante"];
  const inactivacion = prompt("¿Qué rol deseas inactivar? (Administrador, Docente, Estudiante)");

  if (roless.includes(inactivacion)) {
    alert(`Rol ${inactivacion} inactivado correctamente.`);
    console.log(`Rol ${inactivacion} inactivado correctamente.`);
  } else {
    alert("Rol no válido. Por favor, elige entre Administrador, Docente o Estudiante.");
    console.log("Rol no válido.");
  }
}

function AsignacionDeRoles() {
  const roles = ["Administrador", "Docente", "Estudiante"];
  const asignacion = prompt("¿Qué rol deseas asignar? (Administrador, Docente, Estudiante)");

  if (roles.includes(asignacion)) {
    alert(`Rol ${asignacion} asignado correctamente.`);
    console.log(`Rol ${asignacion} asignado correctamente.`);
  } else {
    alert("Rol no válido. Por favor, elige entre Administrador, Docente o Estudiante.");
    console.log("Rol no válido.");
  }
}

function cerrarSesion() {
  alert("Sesión cerrada correctamente.");
  console.log("Sesión cerrada.");
  window.location.href = "login.html";
}

function mostrarMenu() {
  let opcion = prompt("Seleccione: \n1. Formulario \n2. Asignación de rol \n3. Inactivar rol \n4. Cerrar sesión");

  switch (opcion) {
    case "1":
      const datos = formulario();
      alert("Formulario completado correctamente.");
      mostrarFormulario(datos);

      if (confirm("¿Deseas asignar un rol?")) {
        AsignacionDeRoles();
      } else if (confirm("¿Deseas inactivar el rol?")) {
        InactivarRol();
      } else {
        alert("No se realizaron cambios en los roles.");
      }

      if (confirm("¿Regresar al menú?")) {
        mostrarMenu();
      }
      break;

    case "2":
      AsignacionDeRoles();
      if (confirm("¿Deseas inactivar el rol?")) {
        InactivarRol();
      }

      if (confirm("¿Regresar al menú?")) {
        mostrarMenu();
      }
      break;

    case "3":
      InactivarRol();
      if (confirm("¿Deseas asignar un rol?")) {
        AsignacionDeRoles();
      }

      if (confirm("¿Regresar al menú?")) {
        mostrarMenu();
      }
      break;

    case "4":
      cerrarSesion();
      break;

    default:
      alert("Opción no válida. Por favor, selecciona una opción válida.");
      mostrarMenu();
      break;
  }
}
mostrarMenu();