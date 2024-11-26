const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Password validation regex
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

const register = async (req, res) => {
  const { email, password, avatar } = req.body;

  const allowedAvatars = [
    "avatar1.png",
    "avatar2.png",
    "avatar3.png",
    "avatar4.png",
  ];

  if (!email || !password || !avatar) {
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

  if (!allowedAvatars.includes(avatar)) {
    return res.status(400).json({ error: "Selección de avatar no válida." });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        avatar,
      },
    });

    res.status(201).json({
      message: "Usuario registrado correctamente.",
      user: { id: newUser.id, email: newUser.email, avatar: newUser.avatar },
    });
  } catch (error) {
    res.status(500).json({ error: "Error al registrar al usuario." });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

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
    res.status(500).json({ error: "Error al iniciar sesión." });
  }
};

const getAvatars = (req, res) => {
  const avatars = [
    { name: "Avatar 1", file: "avatar1.png" },
    { name: "Avatar 2", file: "avatar2.png" },
    { name: "Avatar 3", file: "avatar3.png" },
    { name: "Avatar 4", file: "avatar4.png" },
  ];
  res.json(avatars);
};

module.exports = { register, login, getAvatars };
