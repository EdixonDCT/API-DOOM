import Lenguaje_usuario from "../models/lenguaje_usuario.js";
import lenguaje_usuarioServices from "../services/lenguaje_userServices.js";
import { ResponseProvider } from "../providers/ResponseProvider.js";

class Lenguaje_usuarioController {
  static getAllLenguajeUsuario = async (req, res) => {
    try {
      // Llamamos al servicio para obtener las categorías
      const response = await lenguaje_usuarioServices.getAllCampos();   
      // Validamos si no hay categorías
      if (response.error) {        
        // Llamamos el provider para centralizar los mensajes de respuesta
        return ResponseProvider.error(
          res,
          response.message,
          response.code
        );
      } else {
        // Llamamos el provider para centralizar los mensajes de respuesta        
        return ResponseProvider.success(
          res,
          response.data,
          response.message,
          response.code
        );
       }
    } catch (error) {
      // Llamamos el provider para centralizar los mensajes de respuesta
      ResponseProvider.error(res, "Error al interno en el servidor", 500);
    }
  }

  static createLenguajeUsuario = async (req, res) => {
    try {
      const { id_usuario, id_lenguaje } = req.body;
       const response = await lenguaje_usuarioServices.createTabla(id_usuario, id_lenguaje);
     if (response.error) {
        // Llamamos el provider para centralizar los mensajes de respuesta
        return ResponseProvider.error(
          res,
          response.message,
          response.code
        );
      } else {
        // Llamamos el provider para centralizar los mensajes de respuesta
        return ResponseProvider.success(
          res,
          response.data,
          response.message,
          response.code
        );
      }
    } catch (error) {
      // Llamamos el provider para centralizar los mensajes de respuesta
      ResponseProvider.error(res, "Error al interno en el servidor", 500);
    }
  }

  static updateLenguajeUsuario = async (req, res) => {
    try {
      const { id_usuario, id_lenguaje } = req.params;
      const { id_usuario: nuevoUsuario, id_lenguaje: nuevoLenguaje } = req.body;
      const response = await lenguaje_usuarioServices.updateTabla(nuevoUsuario, nuevoLenguaje, id_usuario, id_lenguaje);
    if (response.error) {
        // Llamamos el provider para centralizar los mensajes de respuesta
        return ResponseProvider.error(
          res,
          response.message,
          response.code
        );
      } else {
        // Llamamos el provider para centralizar los mensajes de respuesta
        return ResponseProvider.success(
          res,
          response.data,
          response.message,
          response.code
        );
      }
    } catch (error) {
      // Llamamos el provider para centralizar los mensajes de respuesta
      ResponseProvider.error(res, "Error al interno en el servidor", 500);
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
      const response = await lenguaje_usuarioServices.delete(id_usuario, id_lenguaje);
    if (response.error) {
            // Llamamos el provider para centralizar los mensajes de respuesta
            return ResponseProvider.error(
              res,
              response.message,
              response.code
            );
          } else {
            // Llamamos el provider para centralizar los mensajes de respuesta
            return ResponseProvider.success(
              res,
              response.data,
              response.message,
              response.code
            );
          }
        } catch (error) {
          // Llamamos el provider para centralizar los mensajes de respuesta
          ResponseProvider.error(res, "Error al interno en el servidor", 500);
        }
  }
}

export default Lenguaje_usuarioController;
