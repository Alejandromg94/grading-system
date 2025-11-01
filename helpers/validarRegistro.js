import { expresiones } from "../helpers/expresiones.js";

export function validarFormulario() {
  let inputs = document.getElementsByClassName("formulario__entrada");
  let arregloInputs = [...inputs];

  arregloInputs.forEach((input) => {
    input.addEventListener("keyup", (e) => {
      switch (e.target.id) {
        case "NombreCompleto":
          validarCampo(expresiones.texto, e.target);
          break;
        case "documento":
          validarCampo(expresiones.documento, e.target);
          break;
        case "correo":
          validarCampo(expresiones.correo, e.target);
          break;
        case "direccionestudiante":
          validarCampo(expresiones.direccion, e.target);
          break;
      }
    });
  });

  let lista = document.querySelector("#programa");
  if (lista) {
    lista.addEventListener("change", (e) => {
      if (e.target.value !== "") {
        e.target.classList.add("correcto");
        e.target.classList.remove("incorrecto");
      } else {
        e.target.classList.add("incorrecto");
        e.target.classList.remove("correcto");
      }
    });
  }
}

function validarCampo(expresion, input) {
  if (expresion.test(input.value)) {
    input.classList.add("correcto");
    input.classList.remove("incorrecto");
  } else {
    input.classList.add("incorrecto");
    input.classList.remove("correcto");
  }
}
