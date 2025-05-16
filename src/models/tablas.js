import connection from "../utils/database.js";

const tablasPermitidas = ["generos", "ciudades", "lenguajes"];


class Tablas {
  async getAllTabla(tabla) {
    console.log(tabla +"modelo");
    
    if (!tablasPermitidas.includes(tabla)) throw new Error('Tabla no permitida');
    try {
      const [rows] = await connection.query(`SELECT * FROM ${tabla}`);
      return rows;
    } catch (error) {
      throw new Error(`ERROR: al obtener ${tabla}: ${error.message}`);
    }
  }

  async getById(id, tabla) {
    if (!tablasPermitidas.includes(tabla)) throw new Error('Tabla no permitida');
    try {
      const [rows] = await connection.query(
        `SELECT * FROM ${tabla} WHERE id = ?`,
        [id]
      );
      if (rows.length === 0) return null;
      return rows[0];
    } catch (error) {
      throw new Error(`Error al obtener elemento de ${tabla}: ${error.message}`);
    }
  }

  async create(nombre, tabla) {
    if (!tablasPermitidas.includes(tabla)) throw new Error('Tabla no permitida');
    try {
      const [result] = await connection.query(
        `INSERT INTO ${tabla} (nombre) VALUES (?)`,
        [nombre]
      );
      return { id: result.insertId, nombre };
    } catch (error) {
      throw new Error(`ERROR: Al crear el/la ${tabla}: ${error.message}`);
    }
  }

  async update(nombre, tabla, id) {
    if (!tablasPermitidas.includes(tabla)) throw new Error('Tabla no permitida');
    try {
      const [result] = await connection.query(
        `UPDATE ${tabla} SET nombre = ? WHERE id = ?`,
        [nombre, id]
      );
      if (result.affectedRows === 0) throw new Error(`Elemento de ${tabla} no encontrado`);
      return { id, nombre };
    } catch (error) {
      throw new Error(`ERROR: Al actualizar el/la ${tabla}: ${error.message}`);
    }
  }

  async delete(id, tabla) {
    if (!tablasPermitidas.includes(tabla)) throw new Error('Tabla no permitida');
    try {
      const [result] = await connection.query(`DELETE FROM ${tabla} WHERE id = ?`, [id]);
      if (result.affectedRows === 0) throw new Error(`Elemento de ${tabla} no encontrado`);
      return { mensaje: `Elemento eliminado con éxito de ${tabla}` };
    } catch (error) {
      throw new Error(`ERROR: Al eliminar el/la ${tabla}: ${error.message}`);
    }
  }
}

export default Tablas;
