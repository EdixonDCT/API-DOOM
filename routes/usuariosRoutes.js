import express from "express";
import UsuarioController from "../controller/usuarioController.js";
import { validarUsuario } from "../midlewares/validarUsuario.js";

const router = express.Router();

router.get('/', UsuarioController.getAllUsuarios);

router.post('/', validarUsuario, UsuarioController.createUsuario);

router.put('/:id', validarUsuario, UsuarioController.updateUsuario);

router.patch('/:id', UsuarioController.updateParcialUsuario);

router.delete('/:id', UsuarioController.deleteUsuario);

export default router;
