import connection from `../utils/database.js`;


class Tablas {
  
  static async findByUser(usuario) {
    const [rows] = await db.query(`SELECT * FROM ${tabla} WHERE usuario = ?`, [
      usuario,
    ]);
    return rows[0];
  }

  
  static async updateRefreshToken(id, refreshToken) {
    await db.query(`UPDATE ${tabla} SET refresh_token = ? WHERE id = ?`, [
      refreshToken,
      id,
    ]);
  }
  
  async getAll() {
    try {
      const [rows] = await connection.query(`SELECT * FROM ${tabla}`);
      return rows;
    } catch (error) {
      throw new Error(`ERROR: al obtener ${tabla}`);
    }
  }
  async getvariasById(id, tabla) {
    try {
      const [rows] = await connection.query(
        `SELECT * FROM ${tabla} WHERE id = ?`,
        [id]
      );
      if (rows.length === 0) {
        // Retorna un array vacío si no se encuentra la categoría
        return [];
      }
      // Retorna la categoría encontrada
      return rows[0];
    } catch (error) {
      throw new Error(`Error al obtener la elemento de ${tabla}`);
    }
  }

  async create(nombre, tabla) {
    try {
      const [result] = await connection.query(
        `INSERT INTO ${tabla} (nombre) VALUES (?)`,
        [nombre]
      );
      return { id: result.insertId, nombre };
    } catch (error) {
      throw new Error(`ERROR: Al crear el/la ${tabla}`);
    }
  }

  async update(nombre,tabla, id) {
    try {
      const [result] = await connection.query(
        `UPDATE ${tabla} SET nombre = ? WHERE id = ?`,
        [nombre, id]
      );
      if (result.affectedRows === 0) throw new Error(`Elemento de ${tabla} no encontrado`);
      return { id, nombre };
    } catch (error) {
      throw new Error(`ERROR: Al actualizar`);
    }
  }

//   async updateParcial( nombre, tabla, id) {
//     try {
//       let sql = `UPDATE ${tabla} SET `;
//       Object.keys(campos).forEach((campo, i, arr) => {
//         sql += `${campo} = '${campos[campo]}'${i < arr.length - 1 ? `,` : ``}`;
//       });
//       sql += ` WHERE id = ${id}`;
//       const [result] = await connection.query(sql);
//       if (result.affectedRows === 0) throw new Error(`Elemento de ${tabla} no encontrado`);
//       return { mensaje: `Usuario actualizado` };
//     } catch (error) {
//       throw new Error(`ERROR: Al actualizar parcialmente el usuario`);
//     }
//   }

  async delete(id, tabla) {
    try {
      const [result] = await connection.query(`DELETE FROM ${tabla} WHERE id = ?`, [id]);
      if (result.affectedRows === 0) throw new Error(`Elemento de ${tabla} no encontrado`);
      return { mensaje: `Usuario eliminado con éxito` };
    } catch (error) {
      throw new Error(`ERROR: Al eliminar el usuario`);
    }
  }
}

export default Tablas;
