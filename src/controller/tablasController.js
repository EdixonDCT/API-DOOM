import tablas from "../models/tablas.js";
const tabla= "generos";
class tablasController {
  static getAlltablas = async (req, res) => {
    const OBJtablas = new tablas();
    const tablas = await OBJtablas.getAll();
    res.json(tablas);
  }

  static createtablas = async (req, res) => {
    try {
      const { nombre, tabla } = req.body;
      const OBJtablas = new tablas();
      const tablasCreado = await OBJtablas.create(nombre, tabla);
      res.status(201).json(tablasCreado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static updatetablas = async (req, res) => {
    try {
      const { id } = req.params;
      const { nombre } = req.body;
      const OBJtablas = new tablas();
      const tablasActualizado = await OBJtablas.update(nombre, tabla, id);
      res.status(201).json(tablasActualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }



  static deletetablas = async (req, res) => {
    try {
      const { id } = req.params;
      const OBJtablas = new tablas();
      const tablasEliminado = await OBJtablas.delete(id, tabla);
      res.status(201).json(tablasEliminado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default tablasController;
