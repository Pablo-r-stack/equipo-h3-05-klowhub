import jwt from "jsonwebtoken";

/**
 * Middleware para verificar el token JWT.
 * @param {Request} req - La solicitud HTTP.
 * @param {Response} res - La respuesta HTTP.
 * @param {Function} next - La función para continuar con la siguiente capa de middleware.
 */
const verifyToken = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .json({ error: "Acceso denegado. No se proporcionó un token." });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // Adjuntar los datos verificados al objeto de la solicitud
    next();
  } catch (err) {
    res.status(400).json({ error: "Token inválido." });
  }
};

export default verifyToken;
