import Usuario from "../models/usuario.js";

class UsuarioService { 

  static async getUsuarios()
  { 
    try {
      const usuarioInstance = new Usuario();
      const usuarios = await usuarioInstance.getAll();
      // Validamos si no hay usuarios      
      if (usuarios.length === 0) {
        return {
          error: true,
          code: 404,
          message: "No hay usuarios registradas",
        };
      }      
      // Retornamos las usuarios obtenidas
      return {
        error: false,
        code: 200,
        message: "usuarios obtenidas correctamente",
        data: usuarios,
      };
    } catch (error) {      
      return {
        error: true,
        code: 500,
        message: "Error al obtener las usuarios",
      };
    }
  }

  static async getUsuarioById(id) {
    try {
      const usuarioInstance = new Usuario();
      const usuario = await usuarioInstance.getById(id);
      // Validamos si no hay usuarios
      if (usuario.length === 0) {
        return {
          error: true,
          code: 404,
          message: "usuario no encontrada",
        };
      }
      return {
        error: false,
        code: 200,
        message: "usuario obtenida correctamente",
        data: usuario,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener la usuario",
      };
    }
  }

  static async createUsuario( nombre, apellido, documento, telefono, usuario, contrasena, id_ciudad, id_genero) {
    try {
      const usuarioInstance = new Usuario();
      const usuarios = await usuarioInstance.create( nombre, apellido, documento, telefono, usuario, contrasena, id_ciudad, id_genero);
      // Validamos si no se pudo crear la usuario      
      if (usuarios === null) {
        return {
          error: true,
          code: 400,
          message: "Error al crear la usuario",
        };
      }   
      // Retornamos la nueva usuario creada
      return {
        error: false,
        code: 201,
        message: "usuario creada correctamente",
        data: usuarios,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error interno al crear la usuario",
      };
    }
  }

  static async updateUsuario(id, campos) { 
    try {
      const usuarioInstance = new Usuario();
      // Consultamos la usuario por id
      const usuarioExistente = await usuarioInstance.getById(id);
      // Validamos si no existe la usuario
      if (usuarioExistente.length === 0) {
        return {
          error: true,
          code: 404,
          message: "usuario no encontrada",
        };
      }
      const usuario = await usuarioInstance.updateParcial(campos,id); 
      // Validamos si no se pudo actualizar la usuario
      if (usuario === null) {
        return {
          error: true,
          code: 400,
          message: "Error al actualizar la usuario",
        };
      }      
      // Retornamos la usuario actualizada
      return {
        error: false,
        code: 200,
        message: "usuario actualizada correctamente",
        data: usuario,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error interno al actualizar la usuario",
      };
    } 
  }

  static async deleteUsuario(id) { 
    try {
      const usuarioInstance = new Usuario();
      // Consultamos la usuario por id
      const usuarioExistente = await usuarioInstance.getById(id);
      // Validamos si no existe la usuario
      if (usuarioExistente.length === 0) {
        return {
          error: true,
          code: 404,
          message: "usuario no encontrado",
        };
      }

      const resultado = await usuarioInstance.delete(id); 
      // Validamos si no se pudo eliminar la usuario
      if (resultado.error) {
        return {
          error: true,
          code: 400,
          message: resultado.mensaje,
        };
      }      
      // Retornamos la respuesta de eliminación
      return {
        error: false,
        code: 200,
        message: "usuario eliminada correctamente",
        data: usuarioExistente,
      };
    } catch (error) {
      console.log(error);
      
      return {
        error: true,
        code: 500,
        message: "Error interno al eliminar la usuario",
      };
    }
  }

}

export default UsuarioService;