const usuarios = async () => {
  const request = await fetch("http://localhost:3000/usuarios");
  const { data } = await request.json();
  return data;
};
const formulario = document.querySelector("form");
const nombre = document.querySelector("[name=usuario]");
const contrasena = document.querySelector("[name=contrasena]");
const validar = document.querySelector("#btn_validar");

const subir = (event) => {
  event.preventDefault();
  console.log(nombre);
};
formulario.addEventListener("submit", subir);
