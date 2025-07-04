import Tablas from "../models/tablas.js";

class TablasGenericasServices { 

  static async getAllCampos(tablag)
  { 
    try {
      const TablaInstance = new Tablas();
      const tablas = await TablaInstance.getAllTabla(tablag);
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

  static async getTablaById(id, tablag) {
    try {
      const TablaInstance = new Tablas();
      const tabla = await TablaInstance.getById(id, tablag);
      // Validamos si no hay Tablas
      if (tabla.length === 0) {
        return {
          error: true,
          code: 404,
          message: "Tabla no encontrada",
        };
      }
      return {
        error: false,
        code: 200,
        message: "Tabla obtenida correctamente",
        data: tabla,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener la Tabla",
      };
    }
  }

  static async createTabla( nombre, tablag) {
    try {
      const TablaInstance = new Tablas();
      const tabla = await TablaInstance.create( nombre, tablag);
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

  static async updateTabla(id, nombre, tablag) { 
    try {
      const TablaInstance = new Tablas();
      // Consultamos la Tabla por id
      const TablaExistente = await TablaInstance.getById(id, tablag);
      // Validamos si no existe la Tabla
      if (TablaExistente.length === 0) {
        return {
          error: true,
          code: 404,
          message: "Tabla no encontrada",
        };
      }
      const tabla = await TablaInstance.update(nombre,tablag,id); 
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

  static async deleteTabla(id,tablag) { 
    try {
      const TablaInstance = new Tablas();
      // Consultamos la Tabla por id
      const TablaExistente = await TablaInstance.getById(id, tablag);
      // Validamos si no existe la Tabla
      if (TablaExistente.length === 0) {
        return {
          error: true,
          code: 404,
          message: "Tabla no encontrado",
        };
      }

      const resultado = await TablaInstance.delete(id, tablag); 
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
        data: TablaExistente,
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

export default  TablasGenericasServices;