export const validarLenguaje_usuario = (req, res, next) => {
  const { id_usuario, id_lenguaje } = req.body;

  if (!id_usuario || id_usuario.toString().trim() === "") {
      return res.status(400).json({ mensaje: "El id_usuario es obligatorio" });
  }
  if (!id_lenguaje || id_lenguaje.toString().trim() === "") {
      return res.status(400).json({ mensaje: "El id_lenguaje es obligatorio" });
  }

  next();
};
