import { consultarLocalStorage } from "helpers/lcar-storage.js";

export let Usuarios =
  consultarLocalStorage("usuarios") ||
  [
    //   {
    //     nombre: "Jaime",
    //     apellido: "Zapata",
    //     documento: "12352345",
    //     correo: "jaime@example.com",
    //     telefono: "3246720301",
    //     contrasena: "Contrase12*",
    //     genero: "masculino",
    //     hobbies: "musica",
    //   },
    //   {
    //     nombre: "Ana",
    //     apellido: "García",
    //     documento: "54321678",
    //     correo: "ana@example.com",
    //     telefono: "3109876543",
    //     contrasena: "P4ssw0rd!",
    //     genero: "femenino",
    //     hobbies: "lectura",
    //   },
    //   {
    //     nombre: "Carlos",
    //     apellido: "Rodriguez",
    //     documento: "98765432",
    //     correo: "carlos@example.com",
    //     telefono: "3001234567",
    //     contrasena: "S3cur3P@ss*",
    //     genero: "masculino",
    //     hobbies: "deportes",
    //   },
  ];
