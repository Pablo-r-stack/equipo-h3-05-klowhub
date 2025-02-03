import { PrismaClient } from "@prisma/client";
import { signUploadToken } from "../config/cloudinary.js";
import { courseService } from "../services/course.service.js";
import { moduleService } from "../services/module.service.js";
import createError from "../utils/errorHandler.js";
import { createClaseInDB } from "../services/claseService.js";


//verify module & logged user and create before creating a lesson
export const createClase = async (req, res) => {
  try {
    const {moduleId, classNumber, title, videoUrl, thumbnail, material,} = req.body;
    const module = await moduleService.getById(moduleId);
    console.log(module)
    //validations
    if(!module) throw createError(404, "Module not found");
    if(module.course.sellerId !== req.user.id) throw createError(400, "User doesn't own that course")
    //if everithings ok create the clase
    const clase = await createClaseInDB({moduleId, classNumber, title, videoUrl, thumbnail, material});
    res.status(201).json({
      message: "Class was created succesfully",
      clase,
    });
  } catch (error) {
    res.status(error.status || 500).json(error.message || "Invalid request");
  }
};


//handle upload client side requests
export const uploadToken = async(req, res)=>{
  try {
    const { signature, timestamp } = await signUploadToken();
    res.json({
      signature,
      timestamp,
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      apiKey: process.env.CLOUDINARY_API_KEY,
    });
  } catch (error) {
    res.status(error.status || 500).json(error.message || "Invalid request");
  }
}
