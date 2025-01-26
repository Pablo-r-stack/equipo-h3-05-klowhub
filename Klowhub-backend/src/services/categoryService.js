import { prisma } from "../index.js"

export const categoryService = {
    getAllCategories: async()=>{
        return await prisma.category.findMany()
    }
}