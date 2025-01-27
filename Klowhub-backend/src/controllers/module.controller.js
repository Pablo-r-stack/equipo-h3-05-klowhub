import { moduleService } from "../services/module.service.js";

export const moduleController = {

    //obtain module By ID
    getModuleById : async(req, res) =>{
        return "";
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