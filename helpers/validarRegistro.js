import { expresiones } from "/helpers/expresiones.js";

export function validarFormulario() {
  let inputs = document.getElementsByClassName("formulario__entrada");
  let arregloInputs = [...inputs];
  arregloInputs.map((input) => {
    input.addEventListener("keyup", (e) => {
      switch (e.target.id) {
        case "NombreCompleto":
          if (expresiones.texto.test(e.target.value)) {
            e.target.classList.add("correcto");
            e.target.classList.remove("incorrecto");
          } else {
            e.target.classList.add("incorrecto");
            e.target.classList.remove("correcto");
          }
          break;
        case "documento":
          if (expresiones.documento.test(e.target.value)) {
            e.target.classList.add("correcto");
            e.target.classList.remove("incorrecto");
          } else {
            e.target.classList.add("incorrecto");
            e.target.classList.remove("correcto");
          }
          break;
        case "correo":
          if (expresiones.correo.test(e.target.value)) {
            e.target.classList.add("correcto");
            e.target.classList.remove("incorrecto");
          } else {
            e.target.classList.add("incorrecto");
            e.target.classList.remove("correcto");
          }
          break;
        case "direccionestudiante":
          if (expresiones.direccion.test(e.target.value)) {
            e.target.classList.add("correcto");
            e.target.classList.remove("incorrecto");
          } else {
            e.target.classList.add("incorrecto");
            e.target.classList.remove("correcto");
          }
          break;
      }
    });
  });

  let lista = document.querySelector("#programa");
  lista.addEventListener("change", (e) => {
    if (e.target.value !== "") {
      e.target.classList.add("correcto");
      e.target.classList.remove("incorrecto");
    } else {
      e.target.classList.add("incorrecto");
      e.target.classList.remove("correcto");
    }
  });

  let hobbies = document.querySelectorAll("input[name='hobbies']");
  hobbies.forEach((hobbie) => {
    hobbie.addEventListener("change", () => {
      let hobbiesCheck = document.querySelectorAll(
        "input[name='hobbies']:checked"
      );
      let cajaHobbies = document.querySelector(".formulario__grupo--hobbies");
      if (hobbiesCheck.length > 0) {
        cajaHobbies.classList.add("correcto");
        cajaHobbies.classList.remove("bg-danger");
      } else {
        cajaHobbies.classList.add("bg-danger");
        cajaHobbies.classList.remove("correcto");
      }
    });
  });
}

//  const expresiones = {
//     // Texto (Nombres, Apellidos, etc.): Solo letras y espacios. Mínimo 2 caracteres.
//     texto: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,}$/,
//     // Documento: 7 a 10 dígitos.
//     documento: /^\d{7,10}$/,
//     // Correo Electrónico: Formato estándar.
//     correo: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//     // Contraseña: Mínimo 8, 1 Mayúscula, 1 Número.
//     contrasena: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
//     // Teléfono: Mínimo 7 dígitos. Permite + y espacios (se corrigió el error en la llamada).
//     telefono: /^\+?\d{7,15}$/,
//     // Dirección: Mínimo 5 caracteres.
//     direccion: /^[a-zA-Z0-9#,\.\s-]{5,}$/,
// };

// const validarConfirmacionContrasena = () => {
//     const pass1 = document.getElementById('contrasena');
//     const pass2 = document.getElementById('confirmarContrasena');

//     const contrasenaValida = expresiones.contrasena.test(pass1.value);
//     const coinciden = pass1.value === pass2.value && pass1.value.length > 0;

//     // Marcar el campo principal (solo chequea su RegEx)
//     if (contrasenaValida) {
//         pass1.classList.add("correcto");
//         pass1.classList.remove("incorrecto");
//     } else {
//         pass1.classList.add("incorrecto");
//         pass1.classList.remove("correcto");
//     }

//     // Marcar el campo de confirmación (chequea RegEx Y Coincidencia)
//     if (contrasenaValida && coinciden) {
//         pass2.classList.add("correcto");
//         pass2.classList.remove("incorrecto");
//     } else {
//         pass2.classList.add("incorrecto");
//         pass2.classList.remove("correcto");
//     }
// };

// export function validarFormulario() {
//     let inputs = document.getElementsByClassName("formulario__entrada")
//     let arregloInputs = [...inputs]

//     // 1. Validaciones en tiempo real (keyup) para todos los inputs
//     arregloInputs.map((input) => {
//         input.addEventListener("keyup", (e) => {
//             let esValido = false;

//             switch (e.target.id) {
//                 case "nombre":
//                 case "apellido":
//                 case "nombreAcudiente":
//                 case "parentesco":
//                     esValido = expresiones.texto.test(e.target.value);
//                     break;

//                 case "correo":
//                 case "emailAcudiente":
//                     esValido = expresiones.correo.test(e.target.value);
//                     break;

//                 case "documento":
//                     esValido = expresiones.documento.test(e.target.value);
//                     break;

//                 case "telefono":
//                     // [CORREGIDO] Llamada correcta al RegEx: era expresiones.telefono(e.target.value) y debe ser expresiones.telefono.test(e.target.value)
//                     esValido = expresiones.telefono.test(e.target.value);
//                     break;

//                 case "direccion":
//                     esValido = expresiones.direccion.test(e.target.value);
//                     break;

//                 // Caso especial para Contraseñas (función cruzada)
//                 case "contrasena":
//                 case "confirmarContrasena":
//                     validarConfirmacionContrasena();
//                     return; // Importante: Salir después de la validación cruzada para no sobreescribir las clases.

//                 case "fechaNacimiento":
//                     // Validación simple de que el campo no esté vacío
//                     esValido = e.target.value !== "";
//                     break;
//             }

//             // Lógica de aplicación de clases para todos los casos simples (Mantiene tu estilo)
//             if (esValido) {
//                 e.target.classList.add("correcto")
//                 e.target.classList.remove("incorrecto")
//             } else {
//                 e.target.classList.add("incorrecto")
//                 e.target.classList.remove("correcto")
//             }
//         });
//     });

//     // 2. Validaciones para los SELECTORES (cambio de valor)
//     let selectores = document.querySelectorAll('.formulario__seleccion');
//     selectores.forEach(select => {
//         select.addEventListener("change", (e) => {
//             if (e.target.value !== "") {
//                 e.target.classList.add("correcto")
//                 e.target.classList.remove("incorrecto")
//             } else {
//                 e.target.classList.add("incorrecto")
//                 e.target.classList.remove("correcto")
//             }
//         });
//     });

//     // 3. Manejo del SUBMIT (Envío Final)
//     const form = document.getElementById('matricula-form');
//     const terminos = document.getElementById('aceptarTerminos');

//     form.addEventListener("submit", (e) => {
//         e.preventDefault();

//         let todosValidos = true;

//         // Revalida todos los inputs
//         arregloInputs.forEach(input => {
//              // Forzar la validación de contraseñas
//             if (input.id === 'contrasena' || input.id === 'confirmarContrasena') {
//                  validarConfirmacionContrasena();
//             }

//             // Chequeo final. Si tiene la clase incorrecto O está vacío
//             if (input.classList.contains('incorrecto') || input.value === "") {
//                 // Forzamos a que el campo se marque de rojo si está vacío y no es una contraseña
//                 if (input.value === "" && !input.classList.contains('incorrecto')) {
//                     input.classList.add("incorrecto");
//                     input.classList.remove("correcto");
//                 }
//                 todosValidos = false;
//             }
//         });

//         // Revalida los selectores
//         selectores.forEach(select => {
//             if (select.value === "") {
//                 select.classList.add("incorrecto");
//                 select.classList.remove("correcto");
//                 todosValidos = false;
//             }
//         });

//         // Chequea Términos
//         if (!terminos.checked) {
//             todosValidos = false;
//         }

//         if (todosValidos) {
//             alert("✅ ¡Matrícula enviada con éxito!");
//             form.reset();
//              // Limpiar clases después del reset para una mejor experiencia de usuario
//             document.querySelectorAll('.correcto, .incorrecto').forEach(el => {
//                 el.classList.remove('correcto', 'incorrecto');
//             });
//         } else {
//             alert("❌ Por favor, revise los campos marcados en rojo.");
//             // Enfoca el primer campo inválido
//             document.querySelector('.incorrecto')?.focus();
//         }
//     });
// }

// // Inicializa la validación
// validarFormulario();
