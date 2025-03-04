import { MAX_TITLE_CHARACTERS } from "@/const";
import { z } from "zod";

const ModuleSchema = z.object({
  title: z
    .string()
    .min(1, "El titulo es obligatorio")
    .max(MAX_TITLE_CHARACTERS, { message: "El titulo es demasiado largo" }),
});

export {ModuleSchema}
