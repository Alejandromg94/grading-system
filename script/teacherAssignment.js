function verGrupo(grupo) {
  if (grupo === 'A') {
    return 'Grupo A';
  } else if (grupo === 'B') {
    return 'Grupo B';
  } else {
    return 'Grupo desconocido';
  }
}

function eliminarGrupo(grupo) {
  if (grupo === 'A') {
    return 'Grupo A eliminado';
  } else if (grupo === 'B') {
    return 'Grupo B eliminado';
  } else {
    return 'No se puede eliminar un grupo desconocido';
  }
}

function cerrarSesion() {
  alert("Sesión cerrada correctamente.");
  console.log("Sesión cerrada.");
  window.location.href = "login.html"; // Redirige a login
}

function mostrarMenu() {
  let opcion = prompt("Menú Principal:\n1. Ver Grupo\n2. Eliminar Grupo\n3. Cerrar sesión");

  switch (opcion) {
    case "1":
      let grupo = prompt("Ingrese el grupo (A o B):");
      let resultado = verGrupo(grupo);
      alert(resultado);
      console.log(resultado);
      if (confirm("¿Deseas regresar al menú principal?")) {
        mostrarMenu(); 
      }
      break;

    case "2":
      let grupoEliminar = prompt("Ingrese el grupo a eliminar (A o B):");
      let resultadoEliminar = eliminarGrupo(grupoEliminar);
      alert(resultadoEliminar);
      console.log(resultadoEliminar);
      if (confirm("¿Deseas regresar al menú principal?")) {
        mostrarMenu(); 
      }
      break;

    case "3":
      cerrarSesion();
      break;

    default:
      alert("Opción no válida. Por favor, selecciona una opción válida.");
      console.log("Opción no válida.");
      mostrarMenu(); 
      break;
  }
}

mostrarMenu();