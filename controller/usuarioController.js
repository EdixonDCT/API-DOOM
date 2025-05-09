import Usuario from "../models/usuario.js";

class UsuarioController {
  static getAllUsuarios = async (req, res) => {
    const OBJUsuario = new Usuario();
    const usuarios = await OBJUsuario.getAll();
    res.json(usuarios);
  }

  static createUsuario = async (req, res) => {
    try {
      const { nombre, apellido, documento, telefono, usuario, contrasena, id_ciudad, id_genero } = req.body;
      const OBJUsuario = new Usuario();
      const usuarioCreado = await OBJUsuario.create(nombre, apellido, documento, telefono, usuario, contrasena, id_ciudad, id_genero);
      res.status(201).json(usuarioCreado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static updateUsuario = async (req, res) => {
    try {
      const { id } = req.params;
      const { nombre, apellido, documento, telefono, usuario, contrasena, id_ciudad, id_genero } = req.body;
      const OBJUsuario = new Usuario();
      const usuarioActualizado = await OBJUsuario.update(nombre, apellido, documento, telefono, usuario, contrasena, id_ciudad, id_genero, id);
      res.status(201).json(usuarioActualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static updateParcialUsuario = async (req, res) => {
    try {
      const { id } = req.params;
      const campos = req.body;
      const OBJUsuario = new Usuario();
      const usuarioActualizado = await OBJUsuario.updateParcial(campos, id);
      res.status(201).json(usuarioActualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static deleteUsuario = async (req, res) => {
    try {
      const { id } = req.params;
      const OBJUsuario = new Usuario();
      const usuarioEliminado = await OBJUsuario.delete(id);
      res.status(201).json(usuarioEliminado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default UsuarioController;
