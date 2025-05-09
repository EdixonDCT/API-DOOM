import connection from "../utils/database.js";

class Lenguaje_usuario {
  async getAll() {
    try {
      const [rows] = await connection.query("SELECT * FROM lenguaje_usuario");
      return rows;
    } catch (error) {
      throw new Error("ERROR: al obtener lenguaje_usuario");
    }
  }

  async create(id_usuario, id_lenguaje) {
    try {
      const [result] = await connection.query(
        "INSERT INTO lenguaje_usuario (id_usuario, id_lenguaje) VALUES (?, ?)",
        [id_usuario, id_lenguaje]
      );
      return { id_usuario, id_lenguaje };
    } catch (error) {
      throw new Error("ERROR: Al crear la relación lenguaje_usuario");
    }
  }

  async update(nuevo_usuario, nuevo_lenguaje, id_usuario, id_lenguaje) {
    try {
      const [result] = await connection.query(
        "UPDATE lenguaje_usuario SET id_usuario = ?, id_lenguaje = ? WHERE id_usuario = ? AND id_lenguaje = ?",
        [nuevo_usuario, nuevo_lenguaje, id_usuario, id_lenguaje]
      );
      if (result.affectedRows === 0) throw new Error("Relación no encontrada");
      return { id_usuario: nuevo_usuario, id_lenguaje: nuevo_lenguaje };
    } catch (error) {
      throw new Error("ERROR: Al actualizar lenguaje_usuario");
    }
  }

  async updateParcial(campos, id_usuario, id_lenguaje) {
    try {
      let sql = "UPDATE lenguaje_usuario SET ";
      Object.keys(campos).forEach((campo, i, arr) => {
        sql += `${campo} = '${campos[campo]}'${i < arr.length - 1 ? "," : ""}`;
      });
      sql += ` WHERE id_usuario = ${id_usuario} AND id_lenguaje = ${id_lenguaje}`;
      const [result] = await connection.query(sql);
      if (result.affectedRows === 0) throw new Error("Relación no encontrada");
      return { mensaje: "Relación lenguaje_usuario actualizada" };
    } catch (error) {
      throw new Error("ERROR: Al actualizar parcialmente lenguaje_usuario");
    }
  }

  async delete(id_usuario, id_lenguaje) {
    try {
      const [result] = await connection.query(
        "DELETE FROM lenguaje_usuario WHERE id_usuario = ? AND id_lenguaje = ?",
        [id_usuario, id_lenguaje]
      );
      if (result.affectedRows === 0) throw new Error("Relación no encontrada");
      return { mensaje: "Relación lenguaje_usuario eliminada con éxito" };
    } catch (error) {
      throw new Error("ERROR: Al eliminar lenguaje_usuario");
    }
  }
}

export default Lenguaje_usuario;
