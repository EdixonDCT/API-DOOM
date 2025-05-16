import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import rutas_genericas from "./src/routes/TablasRouter.js";
import usuarios from "./src/routes/usuariosRoutes.js";
import lenguaje_usuario from "./src/routes/lenguaje_usuarioRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/usuarios", usuarios);
app.use("/lenguaje_usuario", lenguaje_usuario);
app.use("/generos", rutas_genericas("generos"));
app.use("/ciudades", rutas_genericas("ciudades"));
app.use("/lenguajes", rutas_genericas("lenguajes"));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Api Usuarios corriendo en puerto ${PORT}`);
});
