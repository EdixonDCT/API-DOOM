
let elemento = document.querySelector('#app');
let tablaSeleccionada = elemento.getAttribute('data-id');


const obtenerCiudades = async () => {
    const res = await fetch(`http://localhost:3000/${tablaSeleccionada}`);
    const {data} = await res.json();
    return data;
};

const renderTablaGenerica = async() => {
    let data= await obtenerCiudades();
    const root = document.querySelector("#app");
    const tabla = document.createElement("table");

    const thead = document.createElement("thead");
    const trHead = document.createElement("tr");
    ["ID", "Nombre", "Acciones"].forEach(titulo => {
    const th = document.createElement("th");
    th.textContent = titulo;
    trHead.appendChild(th);
    });
    thead.appendChild(trHead);

    const tbody = document.createElement("tbody");
    const fragment = document.createDocumentFragment();

    data.forEach(({ id, nombre }) => {
    const tr = document.createElement("tr");
    tr.setAttribute("id", `${tablaSeleccionada}_${id}`);//ojoooooooooooooooo

    const tdId = document.createElement("td");
    tdId.textContent = id;

    const tdNombre = document.createElement("td");
    tdNombre.textContent = nombre;

    const tdAcciones = document.createElement("td");

    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.classList.add("editar");
    btnEditar.dataset.id = id;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add("eliminar");
    btnEliminar.dataset.id = id;

    tdAcciones.append(btnEditar, btnEliminar);
    tr.append(tdId, tdNombre, tdAcciones);
    fragment.appendChild(tr);
    });

    tbody.appendChild(fragment);
    tabla.append(thead, tbody);
    root.appendChild(tabla);
};
renderTablaGenerica();


// Manejo de eventos
window.addEventListener("click", (e) => {
    if (e.target.matches(".editar")) {
    const id = e.target.dataset.id;
    alert(`Editar ${tablaSeleccionada} con ID: ${id}`);
    
    }

    if (e.target.matches(".eliminar")) {
    const id = e.target.dataset.id;
    const fila = document.querySelector(`#${tablaSeleccionada}_${id}`);
    if (confirm(`¿Deseas eliminar la ${tablaSeleccionada} con ID ${id}?`)) {
        fila.remove();
        
    }
    }
});
