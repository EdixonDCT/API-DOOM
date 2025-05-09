import Lenguaje_usuario from "../models/lenguaje_usuario.js";

class Lenguaje_usuarioController {
  static getAllLenguajeUsuario = async (req, res) => {
    const OBJ = new Lenguaje_usuario();
    const resultados = await OBJ.getAll();
    res.json(resultados);
  }

  static createLenguajeUsuario = async (req, res) => {
    try {
      const { id_usuario, id_lenguaje } = req.body;
      const OBJ = new Lenguaje_usuario();
      const creado = await OBJ.create(id_usuario, id_lenguaje);
      res.status(201).json(creado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static updateLenguajeUsuario = async (req, res) => {
    try {
      const { id_usuario, id_lenguaje } = req.params;
      const { id_usuario: nuevoUsuario, id_lenguaje: nuevoLenguaje } = req.body;
      const OBJ = new Lenguaje_usuario();
      const actualizado = await OBJ.update(nuevoUsuario, nuevoLenguaje, id_usuario, id_lenguaje);
      res.status(201).json(actualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static updateParcialLenguajeUsuario = async (req, res) => {
    try {
      const { id_usuario, id_lenguaje } = req.params;
      const campos = req.body;
      const OBJ = new Lenguaje_usuario();
      const actualizado = await OBJ.updateParcial(campos, id_usuario, id_lenguaje);
      res.status(201).json(actualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static deleteLenguajeUsuario = async (req, res) => {
    try {
      const { id_usuario, id_lenguaje } = req.params;
      const OBJ = new Lenguaje_usuario();
      const eliminado = await OBJ.delete(id_usuario, id_lenguaje);
      res.status(201).json(eliminado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default Lenguaje_usuarioController;
