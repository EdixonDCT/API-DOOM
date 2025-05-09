import ciudades from "../models/ciudades.js";

class ciudadesController {
  static getAllciudades = async (req, res) => {
    const OBJciudades = new ciudades();
    const ciudades = await OBJciudades.getAll();
    res.json(ciudades);
  }

  static createciudades = async (req, res) => {
    try {
      const { nombre, apellido, documento, telefono, usuarios, contrasena, id_ciudad, id_genero } = req.body;
      const OBJciudades = new ciudades();
      const ciudadesCreado = await OBJciudades.create(nombre, apellido, documento, telefono, usuarios, contrasena, id_ciudad, id_genero);
      res.status(201).json(ciudadesCreado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static updateciudades = async (req, res) => {
    try {
      const { id } = req.params;
      const { nombre, apellido, documento, telefono, usuarios, contrasena, id_ciudad, id_genero } = req.body;
      const OBJciudades = new ciudades();
      const ciudadesActualizado = await OBJciudades.update(nombre, apellido, documento, telefono, usuarios, contrasena, id_ciudad, id_genero, id);
      res.status(201).json(ciudadesActualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static updateParcialciudades = async (req, res) => {
    try {
      const { id } = req.params;
      const campos = req.body;
      const OBJciudades = new ciudades();
      const ciudadesActualizado = await OBJciudades.updateParcial(campos, id);
      res.status(201).json(ciudadesActualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static deleteciudades = async (req, res) => {
    try {
      const { id } = req.params;
      const OBJciudades = new ciudades();
      const ciudadesEliminado = await OBJciudades.delete(id);
      res.status(201).json(ciudadesEliminado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default ciudadesController;
