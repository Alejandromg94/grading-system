import { consultarLocalStorage } from "../helpers/localstorage.js";

export const Usuarios = JSON.parse(localStorage.getItem("usuarios")) || [
  // let Usuarios = consultarLocalStorage("Usuarios") || [
  {
    nombre: "Jaime",
    apellido: "Zapata",
    documento: "12352345",
    correo: "jaime@example.com",
    dirreccion: "avenida37a#44-45",
    contrasena: "Contrase12*",
    programa: "Asistente en Contaduría",
    hobbies: "acetar terminos",
  },
  {
    nombre: "Ana",
    apellido: "García",
    documento: "54321678",
    correo: "ana@example.com",
    telefono: "3109876543",
    contrasena: "P4ssw0rd!",
    genero: "femenino",
    hobbies: "lectura",
  },
  {
    nombre: "Carlos",
    apellido: "Rodriguez",
    documento: "98765432",
    correo: "carlos@example.com",
    telefono: "3001234567",
    contrasena: "S3cur3P@ss*",
    genero: "masculino",
    hobbies: "deportes",
  },
];
