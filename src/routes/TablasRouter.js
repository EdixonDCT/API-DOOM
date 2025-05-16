import express from "express";
import TablasController from "../controller/tablasController.js";

function rutas_genericas(tabla) {
  const router = express.Router();
  const controller = new TablasController(tabla);

  router.get('/', controller.getAll);
  router.get('/:id', controller.getById);

  router.post('/', controller.create);

  router.put('/:id', controller.update);
  router.patch('/:id', controller.update);

  router.delete('/:id', controller.delete);

  return router;
}

export default rutas_genericas;
