import { prisma } from "../index.js";
import createError from "../utils/errorHandler.js";

export const createClaseInDB = async ({
  moduleId,
  classNumber,
  title,
  videoUrl,
  thumbnail,
  material,
}) => {
  try {
    return await prisma.clase.create({
      data: {
        moduleId,
        classNumber,
        title,
        videoUrl,
        thumbnail,
        material,
      },
    });
  } catch (error) {
    throw createError(500, error);
  }
};
