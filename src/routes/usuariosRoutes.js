import express from "express";
import UsuarioController from "../controller/usuarioController.js";

import { camposUsuarios, parcialesUsuarios } from "../middlewares/usuarios/index.js";   

const router = express.Router();

router.get('/', UsuarioController.getAllUsuarios);
router.get('/:id', UsuarioController.getUsuarioById);


router.post('/', camposUsuarios, UsuarioController.createUsuario);

router.put('/:id', camposUsuarios, UsuarioController.updateUsuario);

router.patch('/:id', parcialesUsuarios, UsuarioController.updateParcialUsuario);

router.delete('/:id', UsuarioController.deleteUsuario);

export default router;
