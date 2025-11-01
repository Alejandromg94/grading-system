import {
  guardarLocalStorage,
  consultarLocalStorage,
  eliminarLocalStorage,
  agsignaturas,
} from "/helpers/localstorage.js";

document.addEventListener("DOMContentLoaded", () => {
  const tabla = document.getElementById("tabla-cuerpo");
  const btnAgregar = document.getElementById("btn-agregar");
  const btnCerrarSesion = document.getElementById("btn-cerrar-sesion");

  let asignaturas = agsignaturas();
  renderTabla();

  function renderTabla() {
    tabla.innerHTML = "";
    if (asignaturas.length === 0) {
      tabla.innerHTML = `
        <tr>
          <td colspan="8" class="text-center py-4 text-gray-500">
            No hay asignaturas registradas.
          </td>
        </tr>`;
      return;
    }

    asignaturas.forEach((a, index) => {
      const fila = document.createElement("tr");
      fila.className = "hover:bg-gray-50";
      fila.innerHTML = `
        <td class="px-4 py-2 border"><input type="text" value="${
          a.sede
        }" class="w-full border rounded px-2 py-1"/></td>
        <td class="px-4 py-2 border"><input type="text" value="${
          a.submodulo
        }" class="w-full border rounded px-2 py-1"/></td>
        <td class="px-4 py-2 border"><input type="text" value="${
          a.grupo
        }" class="w-full border rounded px-2 py-1"/></td>
        <td class="px-4 py-2 border"><input type="text" value="${
          a.periodo
        }" class="w-full border rounded px-2 py-1"/></td>
        <td class="px-4 py-2 border"><input type="text" value="${
          a.horario
        }" class="w-full border rounded px-2 py-1"/></td>
        <td class="px-4 py-2 border"><input type="text" value="${
          a.aula
        }" class="w-full border rounded px-2 py-1"/></td>
        <td class="px-4 py-2 border text-center">
          <input type="number" step="0.1" min="0" max="5" value="${
            a.nota || ""
          }" class="w-20 text-center border rounded px-2 py-1"/>
        </td>
        <td class="px-4 py-2 border text-center space-x-2">
          <button class="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition guardar-btn">Guardar</button>
          <button class="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition eliminar-btn">Eliminar</button>
        </td>
      `;
      tabla.appendChild(fila);

      fila.querySelector(".guardar-btn").addEventListener("click", () => {
        const inputs = fila.querySelectorAll("input");
        const datos = {
          sede: inputs[0].value,
          submodulo: inputs[1].value,
          grupo: inputs[2].value,
          periodo: inputs[3].value,
          horario: inputs[4].value,
          aula: inputs[5].value,
          nota: inputs[6].value ? parseFloat(inputs[6].value).toFixed(1) : "",
        };

        // Validaciones
        if (Object.values(datos).some((v) => v === "")) {
          Swal.fire("Error", "Todos los campos son obligatorios.", "error");
          return;
        }

        if (datos.nota < 0 || datos.nota > 5) {
          Swal.fire(
            "Advertencia",
            "La nota debe estar entre 0 y 5.",
            "warning"
          );
          return;
        }

        asignaturas[index] = datos;
        guardarLocalStorage("asignaturas", asignaturas);
        Swal.fire(
          "Guardado",
          "Asignatura actualizada correctamente.",
          "success"
        );
      });

      fila.querySelector(".eliminar-btn").addEventListener("click", () => {
        Swal.fire({
          title: "¿Eliminar esta asignatura?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Sí, eliminar",
          cancelButtonText: "Cancelar",
        }).then((r) => {
          if (r.isConfirmed) {
            asignaturas.splice(index, 1);
            guardarLocalStorage("asignaturas", asignaturas);
            renderTabla();
          }
        });
      });
    });
  }

  btnAgregar.addEventListener("click", () => {
    asignaturas.push({
      sede: "",
      submodulo: "",
      grupo: "",
      periodo: "",
      horario: "",
      aula: "",
      nota: "",
    });
    guardarLocalStorage("asignaturas", asignaturas);
    renderTabla();
  });

  btnCerrarSesion.addEventListener("click", () => {
    Swal.fire({
      title: "¿Cerrar sesión?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí, salir",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarLocalStorage("asignaturas");
        Swal.fire("Sesión cerrada", "", "success").then(() => {
          window.location.href = "/views/pages/logout.html";
        });
      }
    });
  });
});
