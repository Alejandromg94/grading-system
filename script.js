import { registrarUsuario } from "./controllers/usuarioController.js";
import { validarFormulario } from "/helpers/validarRegistro.js";
// import { storage } from "helpers/public/localstorage.js";
validarFormulario();
registrarUsuario();
