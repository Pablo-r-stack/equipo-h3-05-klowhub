import { MAX_TITLE_CHARACTERS } from "@/const";
import { z } from "zod";

const CourseSchema = z.object({
  title: z
    .string()
    .min(1, "El título es obligatorio")
    .max(MAX_TITLE_CHARACTERS, { message: "El título es demasiado largo." }),

  description: z
    .string()
    .min(1, "La descripción es obligatoria")
    .max(500, { message: "La descripción es demasiado larga." }), // Puedes ajustar el valor máximo según sea necesario

  price: z
    .number()
    .min(0, { message: "El precio no puede ser negativo" })
    .default(0),

  categoryId: z
    .number()
    .int("El ID de la categoría debe ser un número entero")
    .positive("El ID de la categoría debe ser mayor que cero"),

    thumbnail: z
    .string()
    .url("La miniatura debe ser una URL válida")
    .optional()
    .default("") // 🔥 Si es `undefined`, lo convierte en `""`
});

export { CourseSchema };
