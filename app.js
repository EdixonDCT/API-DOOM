import bodyParser from "body-parser";
import express from "express";

import usuarios from "./routes/usuariosRoutes.js";
import lenguaje_usuario from "./routes/lenguaje_usuarioRoutes.js";
const app = express();

app.use(bodyParser.json());

app.use(express.urlencoded({ "extended": true }))

app.use("/usuarios", usuarios);
app.use("/lenguaje_usuario", lenguaje_usuario);

app.listen(3000, () => {
  console.log("Api Usuarios");
});
