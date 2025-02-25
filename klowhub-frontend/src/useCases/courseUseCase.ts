import { createNewCourse } from "@/services/courseService";

interface Course {
    title: string;
    description: string;
    price: number;
    categoryId: number;
    thumbnail: string;
  }

export const createCourse = async(values: Course)=>{
    try {
        const data = await createNewCourse(values);
        return data;
    } catch (error) {
        console.error('Error al crear el curso:', error);
        throw error;
    }
}