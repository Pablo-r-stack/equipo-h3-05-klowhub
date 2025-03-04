import { createModule } from "@/services/moduleService";

interface Props{
    courseId: number,
    data: {
        title: string
    }
}

export const createNewModule = async(values: Props) =>{
    try {
        const data = await createModule(values);
        return data;
    } catch (error) {
        console.error("error al crear el Modulo", error)
        throw error;
    }
}