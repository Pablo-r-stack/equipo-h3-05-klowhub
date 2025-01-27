
import { courseService } from './course.service.js';
import createError from './../utils/errorHandler.js';
import { prisma } from '../index.js';

export const moduleService = {
    //take the courseId, search the course and if exist add a New Module on its array
    createModule: async (courseId, moduleData) => {
        console.log("intentando crear el modulo", courseId);
        // search course by id
        const course = await courseService.getCourseById(courseId);
        // trhow error if course isnt valid
        if (!course) {
            console.log("no encontrado")
            throw createError(404, 'No se encontro un curso válido');        
        }
        console.log("Curso encontrado, creando modulo");
        // create new module
        const newModule = await prisma.module.create({
            data: {
                ...moduleData,  //module data from the form
                courseId: parseInt(courseId), // Relation course-module
            },
        });
        return newModule;
    },

    //get the Module based on its Id
    getById: async()=>{
        return ""
    }
}