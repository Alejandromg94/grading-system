export const expresiones = {
  // Texto (Nombres, Apellidos, etc.): Solo letras y espacios. Mínimo 2 caracteres.
  texto: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,}$/,
  // Documento: 7 a 10 dígitos.
  documento: /^\d{7,10}$/,
  // Correo Electrónico: Formato estándar.
  correo: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  // Contraseña: Mínimo 8, 1 Mayúscula, 1 Número.
  contrasena: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
  // Teléfono: Mínimo 7 dígitos. Permite + y espacios (se corrigió el error en la llamada).
  telefono: /^\+?\d{7,15}$/,
  // Dirección: Mínimo 5 caracteres.
  direccion: /^[a-zA-Z0-9#,\.\s-]{5,}$/,
};
