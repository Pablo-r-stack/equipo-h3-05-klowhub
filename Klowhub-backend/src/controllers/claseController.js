import { PrismaClient } from "@prisma/client";
import { createClaseInDB } from "../services/claseService.js";

const prisma = new PrismaClient();

export const createClase = async (req, res) => {
  const { moduleId, classNumber, title, videoPath, materialPath } = req.body;

  try {
    let course = await prisma.course.findFirst({
      orderBy: {
        createdAt: "desc", // Obtener el último curso creado
      },
    });

    if (!course) {
      course = await prisma.course.create({
        data: {
          title: "Curso Automático",
          description: "Descripción del curso automático",
          price: 100, // Ajustar el precio
          category: "General",
          sellerId: 1, // Asegurar de que el `sellerId` sea válido
        },
      });
    }

    let module = await prisma.module.findUnique({
      where: { id: moduleId },
    });

    if (!module) {
      module = await prisma.module.create({
        data: {
          title: `Módulo ${moduleId}: Crear automáticamente`,
          courseId: course.id, // Asignamos el `courseId` del curso creado o encontrado
        },
      });
    }

    const newClase = await prisma.clase.create({
      data: {
        moduleId: module.id,
        classNumber,
        title,
        video: videoPath,
        material: materialPath,
      },
    });

    res
      .status(201)
      .json({ message: "Clase creada exitosamente", clase: newClase });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error al crear la clase", details: error.message });
  }
};
