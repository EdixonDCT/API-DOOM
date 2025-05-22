import connection from "../utils/database.js";

const tablasPermitidas = ["generos", "ciudades", "lenguajes"];


class Tablas {
  async getAllTabla(tabla) {
    console.log(tabla +"modelo");
    
    if (!tablasPermitidas.includes(tabla)) throw new Error('Tabla no permitida');
   
      const [rows] = await connection.query(`SELECT * FROM ${tabla}`);
      return rows;
   
  }

  async getById(id, tabla) {
    if (!tablasPermitidas.includes(tabla)) throw new Error('Tabla no permitida');

      const [rows] = await connection.query(
        `SELECT * FROM ${tabla} WHERE id = ?`,
        [id]
      );
      if (rows.length === 0) return null;
      return rows[0];
 
  }

  async create(nombre, tabla) {
    if (!tablasPermitidas.includes(tabla)) throw new Error('Tabla no permitida');
    
      const [result] = await connection.query(
        `INSERT INTO ${tabla} (nombre) VALUES (?)`,
        [nombre]
      );
      return { id: result.insertId, nombre };
    
  }

  async update(nombre, tabla, id) {
    if (!tablasPermitidas.includes(tabla)) throw new Error('Tabla no permitida');
   
      const [result] = await connection.query(
        `UPDATE ${tabla} SET nombre = ? WHERE id = ?`,
        [nombre, id]
      );
      if (result.affectedRows === 0) throw new Error(`Elemento de ${tabla} no encontrado`);
      return { id, nombre };
   
  }

  async delete(id, tabla) {
    if (!tablasPermitidas.includes(tabla)) throw new Error('Tabla no permitida');
    
      const [result] = await connection.query(`DELETE FROM ${tabla} WHERE id = ?`, [id]);
      if (result.affectedRows === 0) throw new Error(`Elemento de ${tabla} no encontrado`);
      return { mensaje: `Elemento eliminado con éxito de ${tabla}` };
   
  }
}

export default Tablas;
