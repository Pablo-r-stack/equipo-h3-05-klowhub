import { prisma } from "../index.js";
import { checkIfUserExists } from "../utils/checkIfUserExists.js";
import { generateToken } from "../utils/jwt.js";
import { hashPassword } from "../utils/passwordUtils.js";

export const userService = async (userData) => {
  const { name, lastName, email, password, avatar } = userData;

  const existingUser = await checkIfUserExists(email);

  if (existingUser) {
    throw new Error("El usuario ya existe");
  }

  const hashedPassword = await hashPassword(password);

  const newUser = await prisma.user.create({
    data: {
      name,
      lastName,
      email,
      password: hashedPassword,
      avatar: avatar || "",
    },
  });

  const token = generateToken(newUser);

  return {
    user: newUser,
    token,
  };
};
