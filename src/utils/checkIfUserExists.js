import { prisma } from "../server.js";

export const checkIfUserExists = async (email) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  return user;
};
