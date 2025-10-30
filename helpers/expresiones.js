export const expresiones = {
  texto: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // solo letras y espacios
  documento: /^\d{6,10}$/, // solo números de 6 a 10 dígitos
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  direccion: /^[a-zA-Z0-9\s#\-\.,]{5,60}$/,
  contrasena: /^.{8,20}$/, // 8 a 20 caracteres
};
