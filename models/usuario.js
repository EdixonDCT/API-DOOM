import connection from "../utils/database.js";

class Usuario {
  async getAll() {
    try {
      const [rows] = await connection.query("SELECT * FROM usuarios");
      return rows;
    } catch (error) {
      throw new Error("ERROR: al obtener usuarios");
    }
  }

  async create(nombre, apellido, documento, telefono, usuario, contrasena, id_ciudad, id_genero) {
    try {
      const [result] = await connection.query(
        "INSERT INTO usuarios (nombre, apellido, documento, telefono, usuario, contrasena, id_ciudad, id_genero) VALUES (?,?,?,?,?,?,?,?)",
        [nombre, apellido, documento, telefono, usuario, contrasena, id_ciudad, id_genero]
      );
      return { id: result.insertId, nombre, apellido, documento, telefono, usuario, contrasena, id_ciudad, id_genero };
    } catch (error) {
      throw new Error("ERROR: Al crear el usuario");
    }
  }

  async update(nombre, apellido, documento, telefono, usuario, contrasena, id_ciudad, id_genero, id) {
    try {
      const [result] = await connection.query(
        "UPDATE usuarios SET nombre = ?, apellido = ?, documento = ?, telefono = ?, usuario = ?, contrasena = ?, id_ciudad = ?, id_genero = ? WHERE id = ?",
        [nombre, apellido, documento, telefono, usuario, contrasena, id_ciudad, id_genero, id]
      );
      if (result.affectedRows === 0) throw new Error("Usuario no encontrado");
      return { id, nombre, apellido, documento, telefono, usuario, contrasena, id_ciudad, id_genero };
    } catch (error) {
      throw new Error("ERROR: Al actualizar el usuario");
    }
  }

  async updateParcial(campos, id) {
    try {
      let sql = "UPDATE usuarios SET ";
      Object.keys(campos).forEach((campo, i, arr) => {
        sql += `${campo} = '${campos[campo]}'${i < arr.length - 1 ? "," : ""}`;
      });
      sql += ` WHERE id = ${id}`;
      const [result] = await connection.query(sql);
      if (result.affectedRows === 0) throw new Error("Usuario no encontrado");
      return { mensaje: "Usuario actualizado" };
    } catch (error) {
      throw new Error("ERROR: Al actualizar parcialmente el usuario");
    }
  }

  async delete(id) {
    try {
      const [result] = await connection.query("DELETE FROM usuarios WHERE id = ?", [id]);
      if (result.affectedRows === 0) throw new Error("Usuario no encontrado");
      return { mensaje: "Usuario eliminado con éxito" };
    } catch (error) {
      throw new Error("ERROR: Al eliminar el usuario");
    }
  }
}

export default Usuario;
