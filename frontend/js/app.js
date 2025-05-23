import {esValido} from "./modulo.js";
//Variables
const formulario = document.querySelector("form");
const nombre = document.querySelector("[name=nombre]");
const apellido = document.querySelector("[name=apellido]");
const telefono = document.querySelector("[name=telefono]");
const ciudad = document.querySelector("[name=ciudad]");
const documento = document.querySelector("[name=documento]");
const usuario = document.querySelector("[name=usuario]");
const contrasena = document.querySelector("[name=contrasena]");
const lenguajes = document.querySelectorAll('[name="lenguaje[]"]');
const generos = document.querySelectorAll("[name=genero]");
const politicas = document.querySelector("[name=politicas]");
const boton = document.querySelector("#btn_validar");

const usuarios = document.querySelector("#usuarios");
//Funciones
const validar = (event) => {
  const valores = [nombre, apellido, telefono, documento, usuario, contrasena,];
  event.preventDefault();
  let cont = 0;
  let focus = 0;
  let mensaje = "Ingrese correctamente: ";
  for (let x = 0; x < valores.length; x++) {
    if (valores[x].value.trim() === "") {
      if (valores[x].nextElementSibling) valores[x].nextElementSibling.remove();
      if (cont > 0) {
        mensaje += ", " + valores[x].name;
      } else {
        mensaje += " " + valores[x].name;
        cont++;
      }
      valores[x].style.border = "2px solid red";
      if (focus == 0) {
        valores[x].focus();
        focus++;
      }
      let aviso = document.createElement("span");
      aviso.classList.add("avisoError");
      aviso.textContent = `El campo ${valores[x].name} es Obligatorio`;
      valores[x].insertAdjacentElement("afterend", aviso);
    }
    // else formulario.addEventListener("submit", esValido);
  }
  if (ciudad.selectedIndex == 0) {
    if (mensaje == "Ingrese correctamente: ") {
      mensaje += " " + ciudad.name;
    }
    else {
      mensaje += ", " + ciudad.name;
    }
    let aviso = document.createElement("span");
    aviso.classList.add("avisoError");
    aviso.textContent = `El campo ${ciudad.name} es Obligatorio`;
    ciudad.insertAdjacentElement("afterend", aviso);
  }
  let contLeng = 0;
  for (let y = 0; y < lenguajes.length; y++) {
    if (lenguajes[y].checked == true) {
      contLeng++;
    }
  }
  if (contLeng < 3) {
    if (mensaje == "Ingrese correctamente: ") {
      mensaje += " " + lenguajes[0].name;
    } else {
      mensaje += ", " + lenguajes[0].name;
    }
    let aviso = document.createElement("span");
    aviso.classList.add("avisoError");
    aviso.textContent = `El campo ${lenguajes[0].name} es Obligatorio`;
    let errorLenguaje = lenguajes[0].parentNode.parentNode;
    errorLenguaje.insertAdjacentElement("afterend", aviso);
  }
  let contGen = 0;
  for (let z = 0; z < generos.length; z++) {
    if (generos[z].checked == true) {
      contGen++;
    }
  }
  if (contGen < 1) {
    if (mensaje == "Ingrese correctamente: ") {
      mensaje += " " + generos[0].name;
    } else {
      mensaje += ", " + generos[0].name;
    }
    let aviso = document.createElement("span");
    aviso.classList.add("avisoError");
    aviso.textContent = `El campo ${generos[0].name} es Obligatorio`;
    let errorGenero = generos[0].parentNode.parentNode;
    errorGenero.insertAdjacentElement("afterend", aviso);
  }
  if (mensaje != "Ingrese correctamente: ") alert(mensaje);
};
const letras = (event) => {
  const regexp = /^[a-zA-Z]$/;
  if (!regexp.test(event.key) && event.key !== "Backspace" && event.key !== "Tab") {
    event.preventDefault();
  }
    if (event.target.value.length >= 10) {
      event.preventDefault();
  }
};
const numeros = (event) => {
  if (!/^\d$/.test(event.key) && event.key !== "Backspace" && event.key !== "Tab") {
    event.preventDefault();
  }
  if (event.target.value.length >= 10) {
    event.preventDefault();
  }
};
const limpiar = (event) => {
  let valor = event.target;
  switch (valor.tagName) {
    case "INPUT":
      if (valor.type == "text" || valor.type == "number" || valor.type == "password" || valor.type == "tel") {
        if (valor.value !== "") {
          event.target.classList.remove("error");
          event.target.style.border = "0px";
          if (event.target.nextElementSibling) {
            event.target.nextElementSibling.remove();
          }
        }
      }
      break;
    case "SELECT":
      if (valor.value !== "Seleccione")
      {
        event.target.classList.remove("error");
        event.target.style.border = "0px";
        if (event.target.nextElementSibling) {
          event.target.nextElementSibling.remove();
        }
      }
    case "CHECKBOX":
      if (valor.checked == true) {
        event.target.classList.remove("error");
        event.target.style.border = "0px";
        if (event.target.nextElementSibling) {
          event.target.nextElementSibling.remove();
        }
      }
      
    default:
      break;
  }
}
const acepta = () => {
  if (!politicas.checked) {
    boton.setAttribute("disabled", "");
  }
  else {
    boton.removeAttribute('disabled');
  }
}
const isValid = (e) => {
  let data = esValido(e)
  console.log(data);
}
//Eventos
addEventListener("DOMContentLoaded",acepta);
politicas.addEventListener('change',acepta)
formulario.addEventListener("submit", validar);
nombre.addEventListener("keydown", letras);
apellido.addEventListener("keydown", letras);
telefono.addEventListener("keydown", numeros);
documento.addEventListener("keydown", numeros);
nombre.addEventListener("blur", limpiar);
apellido.addEventListener("blur", limpiar);
telefono.addEventListener("blur", limpiar);
documento.addEventListener("blur", limpiar);
usuario.addEventListener("blur", limpiar);
contrasena.addEventListener("blur", limpiar);
ciudad.addEventListener("blur", limpiar);
formulario.addEventListener("submit", isValid);
