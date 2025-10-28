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

// export let expresiones = {
//     texto: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos. De 3 a 40 caracteres.
//     documento: /^\d{7,14}$/, // 7 a 14 numeros.
//     telefono: /^\d{7,14}$/, // 7 a 14 numeros.
//     direccion: /^[a-zA-Z0-9\s\#\-\.\,]{5,100}$/, // Letras, numeros, espacios y algunos caracteres especiales.
//     contrasena: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, // Mínimo ocho caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.
//     correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // Correo.

// };
