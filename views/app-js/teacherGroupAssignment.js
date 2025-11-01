// teacherGroupAssignment.js
import {
  guardarLocalStorage,
  consultarLocalStorage,
} from "/helpers/localstorage.js";

const tablaBody = document.getElementById("tabla-estudiantes-body");
const btnAgregar = document.getElementById("btn-agregar");
const btnGuardar = document.getElementById("btn-guardar");
let estudiantes = consultarLocalStorage("estudiantes") || [];
function renderTabla() {
  tablaBody.innerHTML = "";

  estudiantes.forEach((est, index) => {
    const row = document.createElement("tr");
    row.className = "hover:bg-gray-100";

    row.innerHTML = `
      <td class="py-2 px-4 border">
        <input type="text" value="${
          est.nombre
        }" class="w-full border rounded px-2 py-1 focus:ring-2 focus:ring-blue-500"/>
      </td>
      <td class="py-2 px-4 border">
        <input type="number" value="${
          est.cedula
        }" class="w-full border rounded px-2 py-1 focus:ring-2 focus:ring-blue-500"/>
      </td>
      <td class="py-2 px-4 border text-center">
        <input type="text" value="${
          est.asistencia
        }" class="w-full border rounded px-2 py-1 focus:ring-2 focus:ring-blue-500"/>
      </td>
      ${Array.from(
        { length: 5 },
        (_, i) => `
        <td class="py-2 px-4 border text-center">
          <input type="number" min="0" max="5" value="${
            est.momentos[i] || ""
          }" class="w-16 border rounded px-1 py-1 text-center focus:ring-2 focus:ring-blue-500"/>
        </td>`
      ).join("")}
      <td class="py-2 px-4 border text-center font-semibold text-blue-700">${calcularPromedio(
        est.momentos
      )}</td>
    `;

    tablaBody.appendChild(row);
  });
}

function calcularPromedio(momentos) {
  const validas = momentos.filter((m) => !isNaN(m) && m !== "");
  if (validas.length === 0) return "—";
  const suma = validas.reduce((a, b) => a + Number(b), 0);
  return (suma / validas.length).toFixed(2);
}

btnAgregar.addEventListener("click", () => {
  estudiantes.push({
    nombre: "",
    cedula: "",
    asistencia: "",
    momentos: ["", "", "", "", ""],
  });
  renderTabla();
});

btnGuardar.addEventListener("click", () => {
  const filas = tablaBody.querySelectorAll("tr");
  estudiantes = [];

  filas.forEach((fila) => {
    const inputs = fila.querySelectorAll("input");
    const nombre = inputs[0].value;
    const cedula = inputs[1].value;
    const asistencia = inputs[2].value;
    const momentos = Array.from(inputs)
      .slice(3, 8)
      .map((inp) => inp.value);

    estudiantes.push({ nombre, cedula, asistencia, momentos });
  });

  guardarLocalStorage("estudiantes", estudiantes);

  Swal.fire({
    icon: "success",
    title: "Notas guardadas",
    text: "Las calificaciones se han guardado correctamente.",
    confirmButtonColor: "#2563eb",
  });

  renderTabla();
});

renderTabla();
