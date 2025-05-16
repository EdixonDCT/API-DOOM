import TablasModel from "../models/tablas.js";
class TablasController {
  constructor(tabla) {
    this.tabla = tabla;

    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  getAll = async (req, res) => {
    try {
      console.log("TABLA:", this.tabla);
      const model = new TablasModel();
      const datos = await model.getAllTabla(this.tabla);
      res.json(datos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  getById = async (req, res) => {
    try {
      const { id } = req.params;
      const model = new TablasModel();
      const datos = await model.getById(id, this.tabla);
      res.json(datos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  create = async (req, res) => {
    try {
      const { nombre } = req.body;
      const model = new TablasModel();
      const nuevo = await model.create(nombre, this.tabla);
      res.status(201).json(nuevo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  update = async (req, res) => {
    try {
      const { id } = req.params;
      const { nombre } = req.body;
      const model = new TablasModel();
      const actualizado = await model.update(nombre, this.tabla, id);
      res.status(200).json(actualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  delete = async (req, res) => {
    try {
      const { id } = req.params;
      const model = new TablasModel();
      const eliminado = await model.delete(id, this.tabla);
      res.status(200).json(eliminado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}
export default TablasController;