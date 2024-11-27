import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

/**
 * Obtener el perfil del usuario actual.
 * @param {Request} req
 * @param {Response} res
 */
export const getUserProfile = async (req, res) => {
  try {
    // Agregar un log para verificar que el id es correcto
    console.log("Buscando usuario con ID:", req.user.id);

    // Asegurémonos de que el id es numérico y válido
    if (!req.user.id || isNaN(req.user.id)) {
      return res.status(400).json({ error: "ID de usuario no válido." });
    }

    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
    });

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado." });
    }

    res.json({ id: user.id, email: user.email, avatar: user.avatar });
  } catch (error) {
    console.error("Error al obtener perfil del usuario:", error);
    res
      .status(500)
      .json({ error: "Error al obtener información del usuario." });
  }
};

/**
 * Actualizar el avatar del usuario.
 * @param {Request} req
 * @param {Response} res
 */
export const updateAvatar = async (req, res) => {
  const { avatar } = req.body;

  const allowedAvatars = [
    "avatar1.png",
    "avatar2.png",
    "avatar3.png",
    "avatar4.png",
  ];
  if (!allowedAvatars.includes(avatar)) {
    return res.status(400).json({ error: "Selección de avatar inválida." });
  }

  try {
    const updatedUser = await prisma.usuario.update({
      where: { id: req.user.id },
      data: { avatar },
    });

    res.json({
      message: "Avatar actualizado exitosamente.",
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el avatar." });
  }
};
