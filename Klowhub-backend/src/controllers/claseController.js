import { PrismaClient } from "@prisma/client";
import { createClaseInDB } from "../services/claseService.js";

const prisma = new PrismaClient();

// Crear una nueva clase
export const createClase = async (req, res) => {
  const { moduleId, classNumber, title, videoPath, materialPath } = req.body;

  try {
    // Verificar si el curso con un `id` ya existe. Si no, creamos uno automáticamente.
    let course = await prisma.course.findFirst({
      orderBy: {
        createdAt: "desc", // Obtener el último curso creado
      },
    });

    // Si no existe ningún curso, crear uno
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

    // Verificamos si el `moduleId` existe, si no lo creamos
    let module = await prisma.module.findUnique({
      where: { id: moduleId },
    });

    // Si no existe, crear el módulo automáticamente y asociarlo con el `courseId` obtenido
    if (!module) {
      module = await prisma.module.create({
        data: {
          title: `Módulo ${moduleId}: Crear automáticamente`,
          courseId: course.id, // Asignamos el `courseId` del curso creado o encontrado
        },
      });
    }

    // Ahora crear la clase asociada al `moduleId`
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
