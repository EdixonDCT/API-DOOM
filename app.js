import express from "express";
// import multer from "multer";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import usuarios from "./src/routes/usuariosRoutes.js";
import lenguaje_usuario from "./src/routes/lenguaje_usuarioRoutes.js"

dotenv.config();

// Crear la instancia de Express
const app = express();
// Middleware
// Habilita CORS
app.use(cors()); 
// Permite que la app acepte datos JSON
app.use(bodyParser.json()); 
// app.use(express.json());
// Permite el envio de datos de tipo utlencode
app.use(express.urlencoded({ extended: true }));
// Permite manejar cookies en las respuestas.
app.use(cookieParser());
// Rutas

app.use("/usuarios", usuarios);
app.use("/lenguaje_usuario", lenguaje_usuario);

app.listen(3000, () => {
  console.log("Api Usuarios");
});
