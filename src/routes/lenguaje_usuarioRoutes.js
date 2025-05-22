import express from "express";
import Lenguaje_usuarioController from "../controller/lenguaje_usuarioController.js";


const router = express.Router();

router.get('/', Lenguaje_usuarioController.getAllLenguajeUsuario);
//validarLenguaje_usuario falta middelware

router.post('/',  Lenguaje_usuarioController.createLenguajeUsuario);

router.put('/:id_usuario/:id_lenguaje',  Lenguaje_usuarioController.updateLenguajeUsuario);

router.patch('/:id_usuario/:id_lenguaje', Lenguaje_usuarioController.updateParcialLenguajeUsuario);

router.delete('/:id_usuario/:id_lenguaje', Lenguaje_usuarioController.deleteLenguajeUsuario);

export default router;
