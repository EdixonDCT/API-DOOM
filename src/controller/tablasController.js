import TablasModel from "../models/tablas.js";

class TablasController {
  constructor (tablae) {
    this.tabla = tablae;
    
  }

  async getAll(req, res) {
    try {
      console.log(this.tabla);
      
      const model = new TablasModel();
      const datos = await model.getAllTabla(this.tabla);
      res.json(datos);
    } catch (error) {
      
      // console.log(error);
      
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const model = new TablasModel();
      const datos = await model.getById(id,this.tabla);
      res.json(datos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const { nombre } = req.body;
      const model = new TablasModel();
      const nuevo = await model.create(nombre,this.tabla);
      res.status(201).json(nuevo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { nombre } = req.body;
      const model = new TablasModel();
      const actualizado = await model.update(nombre,this.tabla, id);
      res.status(200).json(actualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const model = new TablasModel();
      const eliminado = await model.delete(id,this.tabla);
      res.status(200).json(eliminado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default TablasController;
