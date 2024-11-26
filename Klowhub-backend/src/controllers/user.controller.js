import { prisma } from "../index.js";

export const getAllUsers = async (req, res) => {
  try {
    const user = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        lastName: true,
        email: true,
        createdAt: true,
      },
    });

    res.status(200).json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener los usuarios", error: error.message });
  }
};

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
    res
      .status(500)
      .json({ message: "Error al obtener el usuario", error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json({ message: "Usuario eliminado", user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al eliminar el usuario", error: error.message });
  }
};
