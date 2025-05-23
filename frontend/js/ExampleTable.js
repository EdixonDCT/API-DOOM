const posts = async () => {
  const request = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await request.json();
  return posts;
};

const usuarios = async () => {
  const request = await fetch("https://jsonplaceholder.typicode.com/users");
  const usuarios = await request.json();
  return usuarios;
};

const tabla = (posts, usuarios) => {
const root = document.querySelector("#app");
  const tabla = document.createElement("table");
  const header = document.createElement("thead");
  const thUsuario = document.createElement("th");
  const thTitulo = document.createElement("th");
  const thcuerpo = document.createElement("th");
  const thacciones = document.createElement("th");
  const tbody = document.createElement("tbody");

  const fragmento = document.createDocumentFragment();
  posts.forEach(({ id, userId, title, body }) => {
    const { name } = usuarios.find((elemento) => elemento.id == userId);

    const tr = document.createElement("tr");
    const tdUsuario = document.createElement("td");
    const tdTitulo = document.createElement("td");
    const tdBody = document.createElement("td");
    const tdAcciones = document.createElement("td");
    const btnEditar = document.createElement("button");
    const btnEliminar = document.createElement("button");
    btnEditar.setAttribute("data-id", id);
    btnEliminar.setAttribute("data-id", id);
    tr.setAttribute("id", `post_${id}`);
    tdUsuario.textContent = name;
    tdTitulo.textContent = title;
    tdBody.textContent = body;
    btnEditar.textContent = "Editar";
    btnEliminar.textContent = "Eliminar";
    btnEditar.classList.add("editar");
    btnEliminar.classList.add("eliminar");
    tdAcciones.append(btnEditar, btnEliminar);
    tr.append(tdUsuario, tdTitulo, tdBody, tdAcciones);
    fragmento.append(tr);
  });
  tbody.append(fragmento);

  thUsuario.textContent = "Usuario";
  thTitulo.textContent = "Titulo";
  thcuerpo.textContent = "Cuerpo";
  thacciones.textContent = "Acciones";

  header.append(thUsuario, thTitulo, thcuerpo, thacciones);
  tabla.append(header, tbody);

  root.append(tabla);
};

const data = Promise.all([posts(), usuarios()]).then((data) => {
  const [posts, usuarios] = data;
  tabla(posts, usuarios);
});

window.addEventListener("click", (e) => {
  if (e.target.matches(".editar")) {
    let id = e.target.dataset.id;
    alert(id);
  }
  if (e.target.matches(".eliminar")) {
    let id = e.target.dataset.id;
    let tr = document.querySelector(`#post_${id}`);
    if (confirm(`Desea eliminar el "post id=${id}"?`)) tr.remove();
  }
});
