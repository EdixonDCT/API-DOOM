const ciudadesTabla = async () => {
  const request = await fetch("http://localhost:3000/ciudades");
  const { data } = await request.json();
  return data;
};
const lenguajesTabla = async () => {
  const request = await fetch("http://localhost:3000/lenguajes");
  const { data } = await request.json();
  return data;
};
const generosTabla = async () => {
  const request = await fetch("http://localhost:3000/generos");
  const { data } = await request.json();
  return data;
};
const ciudad = document.querySelector("[name=ciudad]");
const listaLenguajes = document.querySelector(".form_lenguaje");
const ListaGeneros = document.querySelector(".form_generos");
const formAuto = async (ciudadesTabla, lenguajesTabla, generosTabla) => {
  ciudadesTabla.forEach((ciudades) => {
    const option = document.createElement("option");
    option.setAttribute("value", `${ciudades.id}`);
    option.textContent = ciudades.nombre;
    ciudad.append(option);
  });
  lenguajesTabla.forEach((lenguaje) => {
    const leng = document.createElement("div");
    leng.setAttribute("class", "form_lenguajesCheck");
    const lengInput = document.createElement("input");
    lengInput.setAttribute("type", "checkbox");
    lengInput.setAttribute("name", "lenguaje[]");
    lengInput.setAttribute("id", `${lenguaje.nombre}`);
    lengInput.setAttribute("value", `${lenguaje.id}`);
    lengInput.setAttribute("required", "");
    const lengLabel = document.createElement("label");
    lengLabel.setAttribute("for", "lenguajes");
    lengLabel.textContent = lenguaje.nombre;
    leng.append(lengInput, lengLabel);
    listaLenguajes.append(leng);
  });
  generosTabla.forEach((genero) => {
    const gen = document.createElement("div");
    gen.setAttribute("class", "form_radio");
    const genInput = document.createElement("input");
    genInput.setAttribute("type", "radio");
    genInput.setAttribute("id", `${genero.nombre}`);
    genInput.setAttribute("name", `genero`);
    genInput.setAttribute("value", `${genero.id}`);
    genInput.setAttribute("required", "");
    const genLabel = document.createElement("label");
    genLabel.setAttribute("for", `${genero.nombre}`);
    genLabel.textContent = genero.nombre;
    gen.append(genInput, genLabel);
    ListaGeneros.append(gen);
  });
};
export const data = Promise.all([
  ciudadesTabla(),
  lenguajesTabla(),
  generosTabla(),
]).then((data) => {
  const [ciudadesTabla, lenguajesTabla, generosTabla] = data;
  formAuto(ciudadesTabla, lenguajesTabla, generosTabla);
});
