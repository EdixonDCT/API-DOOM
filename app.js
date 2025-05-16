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
try {
  
  app.use("/usuarios", usuarios);
  app.use("/lenguaje_usuario", lenguaje_usuario);
  
  const generos = new rutas_genericas("generos");
  app.use("/generos",generos.rutas());
  
  const ciudades = new rutas_genericas("ciudades");
  app.use("/ciudades", ciudades.rutas());
  
  const lenguajes = new rutas_genericas("lenguajes");
  
  app.use("/lenguajes", lenguajes.rutas());
} catch (error) {
  console.log(error);
  
}
  


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Api Usuarios corriendo en puerto ${PORT}`);
});
