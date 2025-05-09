import conection from "../utils/database.js";

class Categoria {
  // constructor(nombre, descripcion) {
  //   this.nombre = nombre;
  //   this.descripcion = descripcion;
  // }
  async getAll() {
    try {
      const [rows] = await conection.query("SELECT * FROM categorias");
      return rows;
    } catch (error) {
      throw new Error("Error al obtener las categorias");
    }
  }
  async create(nombre, descripcion)
  { 
    try {
      const [result] = await conection.query("INSERT INTO categorias(nombre,descripcion) VALUES (?,?)",
        [nombre,descripcion]); 
      return{ 
        id: result.id,
        nombre,
        descripcion
      };
    } catch (error) {
      throw new Error("Error al crear la categoria");
    }
  }
  async update(nombre,descripcion,id)
  {
    try {
      console.log("Desde la clase",nombre,descripcion,id);
      const [result] = await conection.query('UPDATE categorias SET nombre = ?,descripcion = ? WHERE id = ?',
        [nombre,descripcion, id]);
      if (result.affectBows === 0) {
        throw new Error("Categoria no encontarada");
      }
      return {
        id,
        nombre,
        descripcion
      };
    } catch (error) {
      throw new Error("Error al actualizar la categoria");
    }
  }
  async patch(id,nombre,descripcion,campos)
    {
        try {
        let sql = "UPDATE categorias SET ";
        for (let cont = 0; cont < Object.keys(campos).length; cont++)
        {
            let value = Object.keys(campos)[cont];
            sql += `${value} = '${campos[value]}'`;
            cont == Object.keys(campos).length-1 ? sql += "" : sql += ",";
        }
        sql += ` WHERE id= ${id}`;
        const [result] = await conection.query(sql);
        if(result.affectedRows === 0){
            throw new Error("Categoría no encontrada"); 
        }
        return { id,nombre,descripcion} 

        } catch (error) 
        {
            console.log(error.message);
            throw new Error("Error al generar el patch");
        }
    }
    async relacionConProductos(id)
    {
      const[productos] = await conection.query(
        "SELECT * FROM productos WHERE categoria_id = ?",
        [id]
      )
      return productos.length > 0;
    }
    async delete(id)
    {
      const categoriaRelacionado = await this.relacionConProductos(id);
      if (categoriaRelacionado) 
      {
        return {
          error: true,
          mensaje: 
          "No se puede eliminar la categoria,ya que esta asociada a uno o mas productos."
        };
      }
      const[result] = await conection.query("DELETE FROM categorias WHERE id=?",[id]);
      if (result.affectedRows === 0)
        {
          return{
            error: true,
            mensaje: "Categoria no encontrada"
          }
        }
      return{
        error: false,
        mensaje: "Categoria Eliminada de manera Exitosa"
      }
    }
}
  
export default Categoria;