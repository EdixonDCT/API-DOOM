import express from "express";
import Lenguaje_usuarioController from "../controller/lenguaje_usuarioController.js";
import { validarLenguaje_usuario } from "../midlewares/validarLenguaje_usuario.js";

const router = express.Router();

router.get('/', Lenguaje_usuarioController.getAllLenguajeUsuario);

router.post('/', validarLenguaje_usuario, Lenguaje_usuarioController.createLenguajeUsuario);

router.put('/:id_usuario/:id_lenguaje', validarLenguaje_usuario, Lenguaje_usuarioController.updateLenguajeUsuario);

router.patch('/:id_usuario/:id_lenguaje', Lenguaje_usuarioController.updateParcialLenguajeUsuario);

router.delete('/:id_usuario/:id_lenguaje', Lenguaje_usuarioController.deleteLenguajeUsuario);

export default router;
