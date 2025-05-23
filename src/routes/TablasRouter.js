import express from "express";
import TablasController from "../controller/tablasController.js";
import { camposTablas } from "../middlewares/tablas/index.js";
class rutas_genericas {
  constructor(tabla){
    this.tabla=tabla;
  
      const router = express.Router();
      const controller = new TablasController(this.tabla);
      
      router.get('/', controller.getAll);
      router.get('/:id', controller.getById);
    
      router.post('/', camposTablas, controller.create);
    
      router.put('/:id',camposTablas, controller.update);
      router.patch('/:id',camposTablas, controller.update);
    
      router.delete('/:id', controller.delete);
    
      return  router;
      
    } catch (error) {
      console.log("error en el router "+ error);
      
    
  }

}

export default rutas_genericas;
