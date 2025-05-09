export const validarUsuario = (req, res, next) => {
  const { nombre, apellido, documento, telefono, usuario, contrasena, id_ciudad, id_genero } = req.body;

  if (!nombre || nombre.trim() === "") {
      return res.status(400).json({ mensaje: "El nombre del usuario es obligatorio" });
  }
  if (!apellido || apellido.trim() === "") {
      return res.status(400).json({ mensaje: "El apellido del usuario es obligatorio" });
  }
  if (!documento || documento.trim() === "") {
      return res.status(400).json({ mensaje: "El documento del usuario es obligatorio" });
  }
  if (!telefono || telefono.trim() === "") {
      return res.status(400).json({ mensaje: "El teléfono del usuario es obligatorio" });
  }
  if (!usuario || usuario.trim() === "") {
      return res.status(400).json({ mensaje: "El nombre de usuario es obligatorio" });
  }
  if (!contrasena || contrasena.trim() === "") {
      return res.status(400).json({ mensaje: "La contraseña del usuario es obligatoria" });
  }
  if (!id_ciudad || id_ciudad.toString().trim() === "") {
      return res.status(400).json({ mensaje: "La ciudad del usuario es obligatoria" });
  }
  if (!id_genero || id_genero.toString().trim() === "") {
      return res.status(400).json({ mensaje: "El género del usuario es obligatorio" });
  }

  next();
};
