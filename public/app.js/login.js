
// 1. ESTRUCTURA DE DATOS PARA MÚLTIPLES CREDENCIALES
// Simulación de una base de datos de usuarios (Array de Objetos)

const USERS = [
    { username: 'admin', password: '12345', role: 'admin', redirect: '/public/pages/admonMain.html' },
    { username: 'profesor', password: 'qwert', role: 'teacher', redirect: '/public/pages/teacherAssignment.html' },
    { username: 'estudiante', password: 'zxc123', role: 'student', redirect: '/public/pages/studentNotes.html' }
    // Puedes añadir más usuarios aquí
];

// 1. Obtener elementos del DOM usando sus IDs
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('uname'); 
const passwordInput = document.getElementById('psw');   
const messageElement = document.getElementById('message');

// 2. Función manejadora del evento 'submit'
function handleLogin(event) {
    event.preventDefault(); 
    
    // Obtener valores y limpiar espacios
    const user = usernameInput.value.trim();
    const pass = passwordInput.value.trim();

    // Resetear mensaje y clases
    messageElement.textContent = '';
    messageElement.classList.remove('text-green-600', 'text-red-600');

    // Validación básica de campos vacíos
    if (!user || !pass) {
        messageElement.classList.add('text-red-600');
        messageElement.textContent = 'Por favor, ingrese usuario y contraseña.';
        return;
    }

    // 3. LÓGICA DE AUTENTICACIÓN AVANZADA
    // Usamos el método find() para buscar un usuario en el arreglo USERS
    const foundUser = USERS.find(u => u.username === user && u.password === pass);

    if (foundUser) {
        // --- ÉXITO ---
        messageElement.classList.add('text-green-600');
        messageElement.textContent = `¡Bienvenido, ${foundUser.role}! Redirigiendo...`;
        
        // La redirección ahora usa la URL específica del usuario encontrado
        setTimeout(() => {
            window.location.href = foundUser.redirect; 
        }, 1000); 
        
    } else {
        // --- ERROR (Usuario no encontrado o credenciales incorrectas) ---
        messageElement.classList.add('text-red-600');
        messageElement.textContent = 'Error: Usuario o contraseña incorrectos.';
        passwordInput.value = '';
    }
}

// 4. Adjuntar el Event Listener al formulario
if (loginForm) {
    loginForm.addEventListener('submit', handleLogin);
} else {
    console.error('El elemento "login-form" no fue encontrado en el DOM.');
}




















// // SCRIPT DE MANEJO DE LOGIN 1

// // 1. Obtener elementos del DOM usando sus IDs
// const loginForm = document.getElementById('login-form');
// const usernameInput = document.getElementById('uname'); 
// const passwordInput = document.getElementById('psw');   
// const messageElement = document.getElementById('message');

// // Credenciales de prueba (¡Simulación de datos válidos!)
// const VALID_USERNAME = 'admin';
// const VALID_PASSWORD = '12345';
// const REDIRECT_URL = '/public/pages/admonMain.html'; 

// // 2. Función manejadora del evento 'submit'
// function handleLogin(event) {
//     // 🛑 Detiene el envío normal del formulario (crucial para usar JS)
//     event.preventDefault(); 
    
//     // Obtener valores y limpiar espacios
//     const user = usernameInput.value.trim();
//     const pass = passwordInput.value.trim();

//     // Resetear mensaje
//     messageElement.textContent = 'hola';
//     messageElement.classList.remove('text-green-600', 'text-red-600');

//     // Validación básica de campos vacíos
//     if (!user || !pass) {
//         messageElement.classList.add('text-red-600');
//         messageElement.textContent = 'Por favor, ingrese usuario y contraseña.';
//         return;
//     }

//     // 3. Lógica de autenticación
//     if (user === VALID_USERNAME && pass === VALID_PASSWORD) {
//         // --- ÉXITO ---
//         messageElement.classList.add('text-green-600');
//         messageElement.textContent = '¡Ingreso exitoso! Redirigiendo...';
        
//         // Simular redirección después de un breve delay
//         setTimeout(() => {
//             window.location.href = REDIRECT_URL; 
//         }, 1000); // 1 segundo de espera
        
//     } else {
//         // --- ERROR ---
//         messageElement.classList.add('text-red-600');
//         messageElement.textContent = 'Error: Usuario o contraseña incorrectos.';
//         passwordInput.value = ''; 
//     }
// }

// // 4. Adjuntar el Event Listener al formulario
// if (loginForm) {
//     loginForm.addEventListener('submit', handleLogin);
// } else {
//     console.error('El elemento "login-form" no fue encontrado en el DOM.');
// }










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