function dashboard() {
  console.clear();
  const opcion = prompt(
    "BIENVENIDOS AL SISTEMA DE NOTAS\n\n" +
    "MENU DE NAVEGACIÓN:\n\n" +
    "1. Login\n" +
    "2. Registro\n" +
    "3. Cambio de contraseña\n" +
    "4. Administrador\n" +
    "5. Perfil profesores\n" +
    "6. Grupo de estudiantes\n" +
    "7. Perfil de estudiante\n" +
    "8. Cerrar sesión\n" +
    "\nIngrese el número de la opción:"
  );

  if (opcion === "1") {
    alert("Has seleccionado la opción 1: Login");
    console.log("Opción 1 seleccionada.");
    window.location.href = "login.html";
    login();
  } 
  else if (opcion === "2") {
    alert("Has seleccionado la opción 2: Registro");
    console.log("Opción 2 seleccionada.");
    window.location.href = "registro.html";
    registro();
  } 
  else if (opcion === "3") {
    alert("Has seleccionado la opción 3: Cambio de contraseña");
    console.log("Opción 3 seleccionada.");
    window.location.href = "cambioContraseña.html";
    cambioDeContraseña();
  }
  else if (opcion === "4") {
    alert("Has seleccionado la opción 4: Administrador");
    console.log("Opción 4 seleccionada.");
    window.location.href = "admonMain.html";
    //administrador();
    mostrarMenu();

  }
  else if (opcion === "5") {
    alert("Has seleccionado la opción 5: Perfil profesores");
    console.log("Opción 5 seleccionada.");
    window.location.href = "teacherAssignment.html";
    mostrarMenuTeaAssi();
  }
  else if (opcion === "6") {
    alert("Has seleccionado la opción 6: Grupo de estudiantes");
    console.log("Opción 6 seleccionada.");
    grupoDeEstudiantes();
  }
  else if(opcion === "7") {
    alert("Has seleccionado la opción 7: Perfil de estudiante");
    console.log("Opción 7 seleccionada.");
    window.location.href = "studentNotes.html";
    perfilDeEstudiante();
  }
  else if(opcion === "8") {
    alert("Has seleccionado la opción 8: Cerrar sesión");
    console.log("Opción 8 seleccionada.");
    if (confirm("¿Deseas cerrar sesión?")) {
      cerrarSesion();
    } else {
      alert("No se cerró la sesión.");
      console.log("Sesión no cerrada.");
      dashboard(); 
    }
    cerrarSesion();
  }
  else {
    alert("Opción no válida. Intente de nuevo.");
    dashboard(); 
  }
}

dashboard();