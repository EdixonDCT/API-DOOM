export const campos = [
  { name: "nombre", required: true, minLength: 3, maxLength: 20 },
  { name: "apellido", required: true, minLength: 3, maxLength: 20 },
  { name: "documento", required: true, minLength: 6, maxLength: 12 },
  { name: "telefono", required: true,type: "number", minLength: 9, maxLength: 11 },
  { name: "usuario", required: true, minLength: 4, maxLength: 20 },
  { name: "contrasena", required: true, minLength: 6, maxLength: 20 },
  { name: "id_ciudad", required: true, minLength: 1, maxLength: 2 },
  { name: "id_genero", required: true, minLength: 1, maxLength: 2 }
];