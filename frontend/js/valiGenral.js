const formulario = document.querySelector("form");
const nombre = document.querySelector("[name=nombre]");
const añadir = document.querySelector("#btn_añadir");

const validar = (event) => {
  event.preventDefault();

  if (nombre.value.trim() === "") {
    if (nombre.nextElementSibling) nombre.nextElementSibling.remove();
    alert(`Ingrese correctamente:el nombre de ${nombre.id}`);
    nombre.classList.add("error");
    nombre.focus();
    let aviso = document.createElement("span");
    aviso.classList.add("avisoError");
    aviso.textContent = `El campo nombre de ${nombre.id} es Obligatorio`;
    nombre.insertAdjacentElement("afterend", aviso);
  }
};
const letras = (event) => {
  const regexp = /^[a-zA-Z]$/;
  if (
    !regexp.test(event.key) &&
    event.key !== "Backspace" &&
    event.key !== "Tab"
  ) {
    event.preventDefault();
  }
  if (event.target.value.length >= 20) {
    event.preventDefault();
  }
};
const limpiar = (event) => {
  let valor = event.target;
  if (valor.value !== "") {
    event.target.classList.remove("error");
    event.target.style.border = "0px";
    if (event.target.nextElementSibling) {
      event.target.nextElementSibling.remove();
    }
  }
};
const subir = () => {
  const obj = {};
  obj[nombre.id] = nombre.value;
  fetch(`http://localhost:3000/${nombre.id}`, {
    method: "POST",
    body: JSON.stringify({
      nombre: nombre.value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
formulario.addEventListener("submit", validar);
nombre.addEventListener("keydown", letras);
nombre.addEventListener("blur", limpiar);
formulario.addEventListener("submit", subir);