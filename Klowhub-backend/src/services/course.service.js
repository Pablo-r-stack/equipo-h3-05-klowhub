import { prisma } from "../index.js";

export const courseService = {
  createCourse: async (courseData) => {
    return await prisma.course.create({
      data: courseData,
      include: {
        modules: true,
        seller: true,
      },
    });
  },

  getCourseById: async (id) => {
    console.log("Buscando curso", id)
    return await prisma.course.findUnique({
      where: { id: parseInt(id) },
      include: {
        modules: {
          include: {
            classes: true,
          },
        },
        seller: true,
      },
    });
  },

  getAllCourses: async () => {
    return await prisma.course.findMany({
      include: {
        seller: {
          select:{
            id: true,
            name: true,
            lastName: true,
            avatarUrl: true
          }
        },
        modules: true,
      },
    });
  },

  updateCourse: async (id, courseData) => {
    return await prisma.course.update({
      where: { id: parseInt(id) },
      data: courseData,
      include: {
        modules: true,
        seller: true,
      },
    });
  },

  deleteCourse: async (id) => {
    return await prisma.course.delete({
      where: { id: parseInt(id) },
    });
  },

  getCoursesBySeller: async (id) => {
    return await prisma.course.findMany({
      where: { sellerId: parseInt(sellerId) },
      include: {
        modules: true,
      },
    });
  },
};
