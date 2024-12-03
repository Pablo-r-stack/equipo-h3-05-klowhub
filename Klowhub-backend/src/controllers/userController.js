import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const allowedAvatars = [
  "avatar1.png",
  "avatar2.png",
  "avatar3.png",
  "avatar4.png",
];

/**
 * Obtener el perfil del usuario actual.
 * @param {Request} req
 * @param {Response} res
 */
export const getUserProfile = async (req, res) => {
  try {
    console.log("Buscando usuario con ID:", req.user.id);
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
  console.log("REQ.USER en updateAvatar:", req.user);
  console.log("Avatar recibido:", avatar);

  if (!avatar) {
    console.error("Error: No se proporcionó un avatar.");
    return res.status(400).json({ error: "Avatar no proporcionado." });
  }

  if (!allowedAvatars.includes(avatar)) {
    console.error("Error: Avatar inválido.");
    return res.status(400).json({ error: "Selección de avatar inválida." });
  }

  try {
    const updatedUser = await prisma.user.update({
      where: { id: req.user.id },
      data: { avatar },
    });

    console.log("Usuario actualizado:", updatedUser);
    res.json({
      message: "Avatar actualizado exitosamente.",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error al actualizar el avatar:", error);
    res.status(500).json({ error: "Error al actualizar el avatar." });
  }
};

/**
 * Obtener todos los usuarios.
 * @param {Request} req
 * @param {Response} res
 */
export const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        lastName: true,
        email: true,
        createdAt: true,
      },
    });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los usuarios",
      error: error.message,
    });
  }
};

/**
 * Obtener usuario por ID.
 * @param {Request} req
 * @param {Response} res
 */
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) },
      select: {
        id: true,
        name: true,
        lastName: true,
        email: true,
        createdAt: true,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener el usuario",
      error: error.message,
    });
  }
};

/**
 * Eliminar usuario por ID.
 * @param {Request} req
 * @param {Response} res
 */
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json({ message: "Usuario eliminado", user });
  } catch (error) {
    res.status(500).json({
      message: "Error al eliminar el usuario",
      error: error.message,
    });
  }
};
