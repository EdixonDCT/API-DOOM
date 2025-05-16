import express from "express";
import TablasController from "../controller/tablasController.js";

class rutas_genericas {
  constructor(tabla){
    this.tabla=tabla;
  }
  rutas(){
    try {
      const router = express.Router();
      const controller = new TablasController(this.tabla);
      
      
      router.get('/', controller.getAll);
      router.get('/:id', controller.getById);
    
      router.post('/', controller.create);
    
      router.put('/:id', controller.update);
      router.patch('/:id', controller.update);
    
      router.delete('/:id', controller.delete);
    
      return  router;
      
    } catch (error) {
      console.log("error en el router "+ error);
      
    }
  }

}

export default rutas_genericas;
