import Lenguaje_usuario from "../models/lenguaje_usuario.js";

class lenguaje_usuarioServices { 

  static async getAllCampos()
  { 
    try {
      const TablaInstance = new Lenguaje_usuario();
      const tablas = await TablaInstance.getAll();
      // Validamos si no hay Tablas      
      if (tablas.length === 0) {
        return {
          error: true,
          code: 404,
          message: "No hay Tablas registradas",
        };
      }      
      // Retornamos las Tablas obtenidas
      return {
        error: false,
        code: 200,
        message: "Tablas obtenidas correctamente",
        data: tablas,
      };
    } catch (error) {      
      return {
        error: true,
        code: 500,
        message: "Error al obtener las Tablas",
      };
    }
  }

  static async createTabla( id_usuario, id_lenguaje) {
    try {
      const TablaInstance = new Lenguaje_usuario();
      const tabla = await TablaInstance.create( id_usuario, id_lenguaje);
      // Validamos si no se pudo crear la Tabla      
      if (tabla === null) {
        return {
          error: true,
          code: 400,
          message: "Error al crear la Tabla",
        };
      }   
      // Retornamos la nueva Tabla creada
      return {
        error: false,
        code: 201,
        message: "Tabla creada correctamente",
        data: tabla,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error interno al crear la Tabla",
      };
    }
  }

  static async updateTabla(nuevo_usuario, nuevo_lenguaje, id_usuario, id_lenguaje) { 
    try {
      const TablaInstance = new Lenguaje_usuario();
     
      const tabla = await TablaInstance.update(nuevo_usuario, nuevo_lenguaje, id_usuario, id_lenguaje); 
      // Validamos si no se pudo actualizar la Tabla
      if (tabla === null) {
        return {
          error: true,
          code: 400,
          message: "Error al actualizar la Tabla",
        };
      }      
      // Retornamos la Tabla actualizada
      return {
        error: false,
        code: 200,
        message: "Tabla actualizada correctamente",
        data: tabla,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error interno al actualizar la Tabla",
      };
    } 
  }

  static async deleteTabla(id_usuario, id_lenguaje) { 
    try {
      const TablaInstance = new Lenguaje_usuario();
      const resultado = await TablaInstance.delete(id_usuario, id_lenguaje); 
      // Validamos si no se pudo eliminar la Tabla
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
        message: "Tabla eliminada correctamente",
        data: resultado,
      };
    } catch (error) {
      console.log(error);
      
      return {
        error: true,
        code: 500,
        message: "Error interno al eliminar la Tabla",
      };
    }
  }

}

export default  lenguaje_usuarioServices;