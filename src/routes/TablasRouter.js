import express from "express";
import tablasController from "../controller/tablasController.js";

  

const router = express.Router();

router.get('/', tablasController.getAlltablas);
router.get('/:id', tablasController.getAlltablas);


router.post('/',  tablasController.createtablas);

router.put('/:id',  tablasController.updatetablas);

router.patch('/:id',  tablasController.updatetablas);

router.delete('/:id', tablasController.deletetablas);

export default router;
