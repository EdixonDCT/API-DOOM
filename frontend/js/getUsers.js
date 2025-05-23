const usuarios = async () => {
  const request = await fetch("http://localhost:3000/usuarios");
  const { data } = await request.json();
  return data;
};
const lenguajes = async () => {
  const request = await fetch("http://localhost:3000/lenguajes");
  const { data } = await request.json();
  return data;
};
const lengUser = async () => {
  const request = await fetch("http://localhost:3000/lenguaje_usuario");
  const { data } = await request.json();
  return data;
};
const generos = async () => {
  const request = await fetch("http://localhost:3000/generos");
  const { data } = await request.json();
  return data;
};
const ciudades = async () => {
  const request = await fetch("http://localhost:3000/ciudades");
  const { data } = await request.json();
  return data;
};

const tabla = async (usuarios, lenguajes, lengUser, generos, ciudades) => {
  const root = document.querySelector("#app");
  const tabla = document.createElement("table");

  const thead = document.createElement("thead");
  const trHead = document.createElement("tr");

  const columnas = [
    "ID",
    "Nombre",
    "Apellido",
    "Documento",
    "Teléfono",
    "Usuario",
    "Contraseña",
    "ID Ciudad",
    "ID Género",
    "Lenguajes",
    "Acciones",
  ];

  columnas.forEach((titulo) => {
    const th = document.createElement("th");
    th.textContent = titulo;
    trHead.appendChild(th);
  });
  thead.appendChild(trHead);

  const tbody = document.createElement("tbody");
  const fragment = document.createDocumentFragment();

  usuarios.forEach((usuario) => {
    const tr = document.createElement("tr");
    tr.setAttribute("id", `usuario_${usuario.id}`);
    let ciudad_tabla = ""
    if (true)
    {
      const { nombre } = ciudades.find((elemento) => elemento.id == usuario.id_ciudad);
      ciudad_tabla = nombre;
    }
    let genero_tabla = ""
    if (true)
    {
      const { nombre } = generos.find((elemento) => elemento.id == usuario.id_genero);
      genero_tabla = nombre;
    }
    let lenguajes_tabla = "";
    let cont = 0;
    lengUser.forEach((leng) => {
      if (leng.id_usuario == usuario.id)
      {
        if (cont < 1)
        {
          const { nombre } = lenguajes.find((elemento) => elemento.id == leng.id_lenguaje);
          lenguajes_tabla += nombre;
          cont++;
        }
        else
        { 
          const { nombre } = lenguajes.find((elemento) => elemento.id == leng.id_lenguaje);
          lenguajes_tabla += ","+nombre;
        }
      }
    });
    const campos = [
      usuario.id,
      usuario.nombre,
      usuario.apellido,
      usuario.documento,
      usuario.telefono,
      usuario.usuario,
      usuario.contrasena,
      ciudad_tabla,
      genero_tabla,
      lenguajes_tabla,
    ];

    campos.forEach((campo) => {
      const td = document.createElement("td");
      td.textContent = campo;
      tr.appendChild(td);
    });

    const tdAcciones = document.createElement("td");
    const btnEditar = document.createElement("button");
    const btnEliminar = document.createElement("button");

    btnEditar.textContent = "Editar";
    btnEliminar.textContent = "Eliminar";
    btnEditar.classList.add("editar");
    btnEliminar.classList.add("eliminar");
    btnEditar.dataset.id = usuario.id;
    btnEliminar.dataset.id = usuario.id;

    tdAcciones.append(btnEditar, btnEliminar);
    tr.appendChild(tdAcciones);
    fragment.appendChild(tr);
  });

  tbody.appendChild(fragment);
  tabla.append(thead, tbody);
  root.appendChild(tabla);
};

const data = Promise.all([
  usuarios(),
  lenguajes(),
  lengUser(),
  generos(),
  ciudades(),
]).then((data) => {
  const [usuarios, lenguajes, lengUser, generos, ciudades] = data;
  tabla(usuarios, lenguajes, lengUser, generos, ciudades);
});



const eliminar = (id) => {
  fetch(`http://localhost:3000/usuarios/${id}`, {
  method: 'DELETE',
});
}


// const editar = (id) => {
//     let nuevoNombre= prompt("ingresa el nuevo nombre");
//     console.log(nuevoNombre);
    
//   fetch(`http://localhost:3000/usuarios/${id}`, {
//     method: "PUT",
//     body: JSON.stringify({
//       nombre: nuevoNombre,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// }


window.addEventListener("click", (e) => {
  if (e.target.matches(".editar")) {
    let id = e.target.dataset.id;
   if (confirm(`¿Deseas editar el usuario con ID ${id}?`)) {
        // fila.remove();
        // editar(id);
        
    }
  }
  if (e.target.matches(".eliminar")) {
    let id = e.target.dataset.id;
    const fila = document.querySelector(`#usuario_${id}`);
    if (confirm(`¿Deseas eliminar el usuario con ID ${id}?`)) {
        fila.remove();
        eliminar(id);
        
    }
  }
});
