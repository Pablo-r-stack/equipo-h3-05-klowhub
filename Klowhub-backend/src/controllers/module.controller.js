import { moduleService } from "../services/module.service.js";

export const moduleController = {

    //obtain module By ID
    getModuleById : async(req, res) =>{
        try {
            const { id } = req.params;
            const module = await moduleService.getById(id);
        
            // Verifica si no se encontró el módulo
            if (!module) {
              return res.status(404).json({ message: "Módulo no encontrado" });
            }
        
            // Si se encontró el módulo, devuelves el mensaje y el objeto
            res.json({
              message: "Módulo encontrado",
              module: module, // El objeto del módulo
            });
          } catch (error) {
            // Manejo de errores, devolviendo un estado adecuado
            res.status(error.status || 500).json({
              message: error.message || "Solicitud no válida",
            });
          }
    },
    //Create new module on a selected course
    creteNewModule :  async(req, res) =>{
        try {
            const {courseId} = req.params;
            const module = await moduleService.createModule(courseId, req.body);
            res.status(201).json({ message: "Curso creado con éxito", module });
        } catch (error) {
            res.status(error.status || 500).json(error.message || "Invalid request")
        }
    },
}