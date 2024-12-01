import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createClaseInDB = async ({
  moduleId,
  classNumber,
  title,
  video,
  material,
}) => {
  return await prisma.clase.create({
    data: {
      moduleId,
      classNumber,
      title,
      video,
      material,
    },
  });
};
