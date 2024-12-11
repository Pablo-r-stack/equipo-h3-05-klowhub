import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Validación
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

const allowedAvatars = [
  "avatar1.png",
  "avatar2.png",
  "avatar3.png",
  "avatar4.png",
];

/**
 * Registrar un nuevo usuario.
 * @param {Request} req - La solicitud HTTP.
 * @param {Response} res - La respuesta HTTP.
 */
export const register = async (req, res) => {
  const { name, lastName, email, password, avatarUrl } = req.body;

  if (!email && !password && !avatarUrl) {
    return res
      .status(400)
      .json({ error: "Todos los campos son obligatorios." });
  }

  if (!emailRegex.test(email)) {
    return res
      .status(400)
      .json({ error: "Formato de correo electrónico no válido." });
  }

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return res
      .status(400)
      .json({ error: "El correo electrónico ya está registrado." });
  }

  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      error:
        "La contraseña debe tener al menos 8 caracteres e incluir una letra mayúscula, una letra minúscula, un número y un carácter especial.",
    });
  }

  if (!allowedAvatars.includes(avatarUrl)) {
    return res.status(400).json({ error: "Selección de avatar no válida." });
  }

  try {
    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear usuario en la base de datos
    const newUser = await prisma.user.create({
      data: {
        name,
        lastName,
        email,
        password: hashedPassword,
        avatarUrl,
      },
    });

    res.status(201).json({
      message: "Usuario registrado correctamente.",
      user: { id: newUser.id, email: newUser.email, avatar: newUser.avatarUrl },
    });
  } catch (error) {
    console.error("Error al registrar al usuario:", error); // Ver el error completo
    res.status(500).json({
      error: "Error al registrar al usuario.",
      details: error.message,
    });
  }
};

/**
 * Iniciar sesión para un usuario.
 * @param {Request} req - La solicitud HTTP.
 * @param {Response} res - La respuesta HTTP.
 */
export const login = async (req, res) => {
  const { email, password } = req.body;

  // Validar campos obligatorios
  if (!email || !password) {
    return res
      .status(400)
      .json({ error: "Todos los campos son obligatorios." });
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: "Credenciales inválidas." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Credenciales inválidas." });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({
      message: "Inicio de sesión exitoso.",
      token,
      user: { id: user.id, email: user.email, avatar: user.avatar },
    });
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    res
      .status(500)
      .json({ error: "Error al iniciar sesión.", details: error.message });
  }
};

/**
 * Obtener la lista de avatares disponibles.
 * @param {Request} req - La solicitud HTTP.
 * @param {Response} res - La respuesta HTTP.
 */
export const getAvatars = (req, res) => {
  const avatars = allowedAvatars.map((file, index) => ({
    name: `Avatar ${index + 1}`,
    file,
  }));
  res.json(avatars);
};
