import { userService } from "../services/user.service.js";

export const register = async (req, res) => {
  try {
    const { name, lastName, email, password, avatar } = req.body;

    if (!name || !lastName || !email || !password || !avatar) {
      res.status(400);
      throw {
        code: 400,
        message: "Todos los campos son obligatorios",
      };
    }

    // Llamar al servicio
    const result = await userService({
      name,
      lastName,
      email,
      password,
      avatar,
    });
    res.status(201).json({
      message: "Usuario creado",
      user: {
        id: result.user.id,
        name: result.user.name,
        lastName: result.user.lastName,
        email: result.user.email,
        password: result.user.password,
        avatar: result.user.avatar,
      },
      token: result.token,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
