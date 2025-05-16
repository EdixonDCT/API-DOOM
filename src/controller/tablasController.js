import TablasModel from "../models/tablas.js";

class TablasController {
  constructor(tabla) {
    this.tabla = tabla;

    // Bind para no perder el contexto al pasar como middleware
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async getAll(req, res) {
    try {
      const model = new TablasModel(this.tabla);
      const datos = await model.getAll();
      res.json(datos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const model = new TablasModel(this.tabla);
      const datos = await model.getById(id);
      res.json(datos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const { nombre } = req.body;
      const model = new TablasModel(this.tabla);
      const nuevo = await model.create(nombre);
      res.status(201).json(nuevo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { nombre } = req.body;
      const model = new TablasModel(this.tabla);
      const actualizado = await model.update(id, nombre);
      res.status(200).json(actualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const model = new TablasModel(this.tabla);
      const eliminado = await model.delete(id);
      res.status(200).json(eliminado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default TablasController;
