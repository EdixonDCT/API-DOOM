


const form = document.getElementById(`form_control`);
const mensaje = document.createElement("p");
const tabla=document.querySelector("[name='nombre']");
const tablaSeleccionada=tabla.getAttribute("id");
console.log(tablaSeleccionada);

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombreEnvia = document.getElementById(`nombre`).value;
    // console.log(nombre);

    const respuesta = await fetch(`http://localhost:3000/${tablaSeleccionada}`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify({ nombre:`${nombreEnvia}` })
    });

    if (respuesta.ok) {
    const ciudad = await respuesta.json();
    mensaje.textContent = `${tablaSeleccionada} Guardo crrectamente "${nombreEnvia}" con ID: ${tablaSeleccionada.id}`;
    form.reset();
    } else {
    mensaje.style.color = "red";
    mensaje.textContent = `Error al guardar en ${tablaSeleccionada}.`;
    }
});










/*

<body>
  <h1>Agregar Ciudad</h1>

  <form id="formularioCiudad">
    <input type="text" id="nombre" placeholder="Nombre de la ciudad" required />
    <button type="submit">Guardar</button>
  </form>

  <div id="mensaje"></div>

  <script>
    const form = document.getElementById("formularioCiudad");
    const mensaje = document.getElementById("mensaje");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value;

      const respuesta = await fetch("http://localhost:3000/ciudades", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre })
      });

      if (respuesta.ok) {
        const ciudad = await respuesta.json();
        mensaje.textContent = `Ciudad "${ciudad.nombre}" guardada con ID: ${ciudad.id}`;
        form.reset();
      } else {
        mensaje.style.color = "red";
        mensaje.textContent = "Error al guardar la ciudad.";
      }
    });
  </script>
</body>
</html>




*/