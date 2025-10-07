
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
