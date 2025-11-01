import {
  guardarLocalStorage,
  consultarLocalStorage,
} from "/helpers/localstorage.js";

document.addEventListener("DOMContentLoaded", () => {
  const tabla = document.querySelector("tbody");

  // 🔹 Cargar estudiantes matriculados y notas existentes
  const estudiantes = consultarLocalStorage("estudiantes") || [];
  const notasGuardadas = consultarLocalStorage("notas") || {};

  function renderTabla() {
    tabla.innerHTML = "";

    if (estudiantes.length === 0) {
      tabla.innerHTML = `
        <tr>
          <td colspan="7" class="text-center text-gray-500 py-4">
            No hay estudiantes matriculados todavía.
          </td>
        </tr>
      `;
      return;
    }

    estudiantes.forEach((est) => {
      const notas = notasGuardadas[est.documento] || {
        momento1: "",
        momento2: "",
        momento3: "",
        final: "",
      };

      const fila = document.createElement("tr");
      fila.className = "border-b hover:bg-gray-100";

      fila.innerHTML = `
        <td class="p-2 text-center">${est.nombre}</td>
        <td class="p-2 text-center">${est.documento}</td>
        <td class="p-2 text-center"><input type="number" min="0" max="5" step="0.1" value="${
          notas.momento1
        }" class="nota-input w-16 text-center border rounded"></td>
        <td class="p-2 text-center"><input type="number" min="0" max="5" step="0.1" value="${
          notas.momento2
        }" class="nota-input w-16 text-center border rounded"></td>
        <td class="p-2 text-center"><input type="number" min="0" max="5" step="0.1" value="${
          notas.momento3
        }" class="nota-input w-16 text-center border rounded"></td>
        <td class="p-2 text-center font-semibold text-blue-700">${
          notas.final || calcularPromedio(notas)
        }</td>
        <td class="p-2 text-center">
          <button class="guardar-btn bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition">Guardar</button>
        </td>
      `;

      fila.querySelector(".guardar-btn").addEventListener("click", () => {
        guardarNotas(est.documento, fila);
      });

      tabla.appendChild(fila);
    });
  }

  // 🔹 Calcular promedio final
  function calcularPromedio(notas) {
    const { momento1, momento2, momento3 } = notas;
    const valores = [momento1, momento2, momento3]
      .map(Number)
      .filter((n) => !isNaN(n));
    if (valores.length === 0) return "";
    const promedio = valores.reduce((a, b) => a + b, 0) / valores.length;
    return promedio.toFixed(1);
  }

  // 🔹 Guardar notas de un estudiante
  function guardarNotas(documento, fila) {
    const inputs = fila.querySelectorAll(".nota-input");
    const momento1 = parseFloat(inputs[0].value) || 0;
    const momento2 = parseFloat(inputs[1].value) || 0;
    const momento3 = parseFloat(inputs[2].value) || 0;
    const final = ((momento1 + momento2 + momento3) / 3).toFixed(1);

    if ([momento1, momento2, momento3].some((n) => n < 0 || n > 5)) {
      alert("⚠️ Las notas deben estar entre 0 y 5.");
      return;
    }

    const notas = consultarLocalStorage("notas") || {};
    notas[documento] = { momento1, momento2, momento3, final };
    guardarLocalStorage("notas", notas);

    fila.querySelector("td:nth-child(6)").textContent = final;
    alert("✅ Notas guardadas correctamente.");
  }

  renderTabla();
});
