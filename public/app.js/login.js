// function mostrarMenu() {
//     let opcion = prompt("Seleccione: \n1. Iniciar Sesión\n2. Registrar Usuario\n3. Restablecer Contraseña\n4. Salir");
//     return opcion;
// }

// function iniciarSesion() {
//     let usuario = prompt("Ingrese su usuario: ");
//     let contrasena = prompt("Ingrese su contraseña: ");
//     let opcion = prompt("Seleccione: \n1. ingresar \n2. volver al menu");
//     return 
// }

// function registrarUsuario() {
//     let nombre = prompt("Ingrese su nombre: ");
//     let apellido = prompt("Ingrese su apellido: ");
//     let tipoDeDocumento = prompt("Ingrese el tipo de documento");
//     let IngreseDocumento = prompt("Ingrese su documeto");
//     let correo = prompt("Ingrese su correo");
//     let contrasena = prompt("Ingrese una contraseña: ");
//     let confirmarContrasena = prompt("Confirme su contraseña: ");
//     let opcion = prompt("Seleccione: \n1. Confirmar Registro\n2. No Registrar");
//     if (opcion === "1") {
//        iniciarSesion();
//     } 
//     return  opcion;
// }

// function olvidoSuClave() {
//     let correo = prompt("Ingrese su correo: ");
//     let contrasena = prompt("Ingrese una contraseña: ");
//     let confirmarContrasena = prompt("Confirme su contraseña: ");
//     let opcion = prompt("Seleccione: \n1. Actualizar  \n2. Regresar al menu");
//     return opcion
// }

// function granding() {
//     let opcion;
//     do {
//         opcion = mostrarMenu();
        
//         switch (opcion) {
//             case "1":
//                 iniciarSesion();
//                 break;
//             case "2":
//                 registrarUsuario();
//                 break;
//             case "3":
//                 olvidoSuClave(); 
//                 break;
//             case "4":
//                 salir();
//                 break;
//             default:
//                 console.log("Opción no válida");
//         }
//     } while (opcion !== "4");
// }


// granding();