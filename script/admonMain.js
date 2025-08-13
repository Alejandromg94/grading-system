function formulario(){
    const nombre = prompt("Introduce tu nombre:");
    const documento = Number(prompt("Introduce tu documento:"));
    const email = prompt("Introduce tu correo electrónico:");
    const programa = prompt("Ingresa tu Programa:")
    const AreaDeConocimiento = prompt("Ingresa tu Área de Conocimiento:");
    return{
        nombre: nombre,
        documento: documento,
        email: email,
        programa: programa,
        AreaDeConocimiento: AreaDeConocimiento
    }
}

function InactivarRol() {
    const roless = ["Administrador", "Docente", "Estudiante"];
    const inactivacion = prompt("¿Qué rol deseas inactivar? (Administrador, Docente, Estudiante)");
    
    if (roless.includes(inactivacion)) {
        alert(`Rol ${inactivacion} inactivado correctamente.`);
    } else {
        alert("Rol no válido. Por favor, elige entre Administrador, Docente o Estudiante.");
    }
    return inactivacion;
    return roless;
}

function AgsinacionDeRoles() {
    const roles = ["Administrador", "Docente", "Estudiante"];
    const asignacion = prompt("¿Qué rol deseas asignar? (Administrador, Docente, Estudiante)");
    
    if (roles.includes(asignacion)) {
        alert(`Rol ${asignacion} asignado correctamente.`);
    } else {
        alert("Rol no válido. Por favor, elige entre Administrador, Docente o Estudiante.");
    }
    return asignacion;
    return roles;
}

let opcion = prompt("Seleccione: \n1 formulario \n2 Agsinacion de rol \n3 Inactivar rol \n4 Cerrar sesión");
//let formulariocom = formulario();
switch (opcion) {
    case "1":
        formulario();
        alert("Formulario completado correctamente.");
        console.log("Formulario completado correctamente.");
        console.log(formularioo());
        
        
        if (confirm("¿Deseas asignar un rol?")) {
            AgsinacionDeRoles();
            console.log("Rol asignado correctamente.");
            alert("Rol asignado correctamente.");
        } else if (confirm("¿Deseas inactivar el rol?")) {
            InactivarRol();
            alert("Rol inactivado correctamente.");
            console.log("Rol inactivado correctamente.");
        }
        else {
            alert("No se realizaron cambios en los roles.");
            console.log("No se realizaron cambios en los roles.");
        }
        break;
    case "2":
        AgsinacionDeRoles();
        if(confirm("¿Deseas asignar un rol?")){
            console.log("Rol asignado correctamente.");
            alert("Rol asignado correctamente.");
        }
        else if(confirm("no se asigno ningun rol, ¿Deseas inactivar el rol?")){
            InactivarRol();
            alert("Rol inactivado correctamente.");
            console.log("Rol inactivado correctamente.");
       
        }
        else{
            alert("No se realizaron cambios en los roles.");
            console.log("No se realizaron cambios en los roles.");
        }
        break;
    case "3":
         InactivarRol();
            if(confirm("¿Deseas inactivar el rol?")){
                alert("Rol inactivado correctamente.");
                console.log("Rol inactivado correctamente.");
            }
            else if(confirm("no se inactivo ningun rol, ¿Deseas asignar un rol?")){
                AgsinacionDeRoles();
                console.log("Rol asignado correctamente.");
                alert("Rol asignado correctamente.");
            }
            else{
                alert("No se realizaron cambios en los roles.");
                console.log("No se realizaron cambios en los roles.");
            }
        break;
    case "4":
        cerrarSesion();
        alert("Sesión cerrada correctamente.");
        console.log("Sesión cerrada correctamente.");
        break;
    default:
        alert("Opción no válida. Por favor, selecciona una opción válida.");
        console.log("Opción no válida. Por favor, selecciona una opción válida.");

        break;

}
function cerrarSesion() {
    alert("Sesión cerrada correctamente.");
    console.log("Sesión cerrada.");
        window.location.href = "login.html";
}
function formularioo() {
    console.log("Nombre: " + formularioo.nombre + "\nDocumento: " + formularioo.documento + 
        "\nCorreo Electrónico: " + formularioo.email + "\nPrograma: " + formularioo.programa 
        + "\nÁrea de Conocimiento: " + formularioo.AreaDeConocimiento);
}
