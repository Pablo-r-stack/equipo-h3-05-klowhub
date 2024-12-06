import { cloudinary } from "../config/cloudinary.js";
import { prisma } from "../index.js";
import logger from "../utils/logger.js";

const uploadController = {
  async uploadFile(req, res) {
    try {
      if (!req.file) {
        return res
          .status(400)
          .json({ error: "No se proporcionó ningún archivo" });
      }

      const { moduleId, title, classNumber, courseId } = req.body;

      if (!moduleId || !title || !classNumber || !courseId) {
        return res
          .status(400)
          .json({ error: "Todos los campos son obligatorios" });
      }

      const moduleIdNum = parseInt(moduleId);
      const courseIdNum = parseInt(courseId);
      const classNumberNum = parseInt(classNumber);

      if (isNaN(moduleIdNum) || isNaN(courseIdNum) || isNaN(classNumberNum)) {
        return res
          .status(400)
          .json({ error: "Los campos numéricos deben ser valores válidos" });
      }

      // Verificar si el módulo existe, si no, crear uno nuevo
      let module = await prisma.module.findUnique({
        where: { id: parseInt(moduleId) },
      });

      if (!module) {
        // Si no existe, lo creamos y lo conectamos con el curso especificado
        module = await prisma.module.create({
          data: {
            title: title,
            courseId: parseInt(courseId), // Conecta directamente usando courseId
          },
        });
        console.log("Nuevo módulo creado: ", module);
      }

      console.log("req.file:", req.file); // Ver la estructura completa del archivo
      console.log("secure_url:", req.file?.secure_url); // Ver específicamente la URL

      const fileRecord = await prisma.clase.create({
        data: {
          title,
          classNumber: parseInt(classNumber),
          videoUrl: req.file?.path || null,
          thumbnail: req.file?.thumbnail_url || null,
          moduleId: module.id,
        },
      });

      console.log("Registro creado:", fileRecord); // Ver el registro creado

      logger.info("Archivo subido exitosamente", {
        userId: req.user.id,
        fileId: fileRecord.id,
        url: req.file.secure_url,
      });

      return res.json({
        message: "Archivo subido correctamente",
        file: fileRecord,
      });
    } catch (error) {
      logger.error("Error en la subida de archivo", error);
      return res.status(500).json({
        error: "Error al procesar la subida del archivo",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      });
    }
  },

  async deleteFile(req, res) {
    try {
      const { fileId } = req.params;

      // Buscamos el archivo en la base de datos
      const file = await prisma.clase.findUnique({
        where: { id: parseInt(fileId) },
      });

      console.log("Archivo encontrado:", file);

      if (!file) {
        return res.status(404).json({ error: "Archivo no encontrado" });
      }

      if (file.videoUrl) {
        // Extraer el filename de la URL completa
        const filename = file.videoUrl.split("/").pop().split(".")[0];
        // Construir el public_id incluyendo la carpeta
        const publicId = `klowhub/${filename}`;
        console.log("Intentando eliminar archivo con public_id:", publicId);

        try {
          const result = await cloudinary.uploader.destroy(publicId);
          console.log("Resultado de Cloudinary:", result);
        } catch (cloudinaryError) {
          console.error("Error al eliminar de Cloudinary:", cloudinaryError);
        }
      }

      // Eliminar de la base de datos
      await prisma.clase.delete({
        where: { id: parseInt(fileId) },
      });

      logger.info("Archivo eliminado exitosamente", { fileId });

      res.json({ message: "Archivo eliminado correctamente" });
    } catch (error) {
      logger.error("Error al eliminar archivo", error);
      res.status(500).json({ error: "Error al eliminar el archivo" });
    }
  },
};

export { uploadController };
