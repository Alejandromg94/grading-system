export let expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    numerodedocumento: /^(?=(?:\d{1,3}\.)?(?:\d{3}\.)*\d{5,10}$)\d{1,3}(?:\.\d{3})*$/, // 5 a 10 numeros.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // Correo.
    fechadeexpedicion:/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/, // Formato dd/mm/yyyy
   ///^\d{7,10}$/ // 7 a 10 numeros.
};