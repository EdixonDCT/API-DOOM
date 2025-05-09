import Usuarios from "../models/usuario.js";
import { ResponseProvider } from "../providers/ResponseProvider.js";
import UsuarioService from "../services/UsuarioService.js";

class UsuarioController {
  static getAllUsuarios = async (req, res) => {    
    try {
      // Llamamos al servicio para obtener las categorías
      const response = await UsuarioService.getUsuarios();   
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
  };

  static createUsuario = async (req, res) => {
    const { nombre, apellido, documento, telefono, usuario, contrasena, id_ciudad, id_genero } = req.body;
    try {
      const response = await UsuarioService.createUsuario(
        nombre,
        apellido,
        telefono,
        documento,
        usuario,
        contrasena,
        id_ciudad,
        id_genero
      );
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
  };

  static getUsuarioById = async (req, res) => {
    const { id } = req.params;
    try {
      // Llamamos al servicio para obtener la categoría por su ID
      const response = await UsuarioService.getUsuarioById(id);
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
  };

  static updateUsuario = async (req, res) => {
    try {
      const { id } = req.params;
      const { nombre, apellido, documento, telefono, usuario, contrasena, id_ciudad, id_genero } = req.body;
      const OBJUsuario = new Usuarios();
      const usuarioActualizado = await OBJUsuario.update(nombre, apellido, documento, telefono, usuario, contrasena, id_ciudad, id_genero, id);
      res.status(201).json(usuarioActualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static updateParcialUsuario = async (req, res) => {
    const { id } = req.params;
    // Los campos a actualizar se pasan en el cuerpo de la solicitud
    const campos = req.body;
    try {
      // Crear una instancia de la clase usuario
      const usuario = await UsuarioService.updateUsuario(id, campos);
      // Validamos si no se pudo actualizar la categoría
      if (usuario.error) {
        ResponseProvider.error(
          res,
          usuario.message,
          usuario.code
        );
      }
      // Retornamos la respuesta cuando se actualiza correctamente
      ResponseProvider.success(
        res,
        usuario.data,
        usuario.message,
        usuario.code
      );
    } catch (error) {
      // Llamamos el provider para centralizar los mensajes de respuesta
      ResponseProvider.error(res, "Error al interno en el servidor", 500);
    }
  };

  static deleteUsuario = async (req, res) =>  {
    const { id } = req.params;
    try {
      // Llamamos al servicio para eliminar la categoría
      const response = await UsuarioService.deleteUsuario(id);
      if (response.error) {
        // Llamamos el provider para centralizar los mensajes de respuesta
        ResponseProvider.error(
          res,
          response.message,
          response.code
        );
      } else {
        // Llamamos el provider para centralizar los mensajes de respuesta
        ResponseProvider.success(
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
  };

}

export default UsuarioController;
