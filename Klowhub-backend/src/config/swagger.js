import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API de Usuarios y Registro",
      version: "1.0.0",
      description:
        "Documentación de la API para gestión de usuarios y registro",
    },
    servers: [
      {
        url: "http://localhost:5000/api",
        description: "Servidor local",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        Course: {
          type: "object",
          required: ["title", "description", "price", "sellerId"],
          properties: {
            id: {
              type: "integer",
              description: "ID único del curso",
              example: 1,
            },
            title: {
              type: "string",
              description: "Título del curso",
              example: "Introducción a JavaScript",
            },
            description: {
              type: "string",
              description: "Descripción detallada del curso",
              example: "Un curso completo sobre JavaScript moderno.",
            },
            price: {
              type: "number",
              description: "Precio del curso",
              example: 49.99,
            },
            sellerId: {
              type: "integer",
              description: "ID del usuario que creó el curso",
              example: 123,
            },
            createdAt: {
              type: "string",
              format: "date-time",
              description: "Fecha y hora de creación del curso",
              example: "2023-12-04T15:30:00.000Z",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              description: "Fecha y hora de la última actualización del curso",
              example: "2023-12-04T16:00:00.000Z",
            },
          },
        },
      },
    },
  },
  apis: ["./routes/*.js", "./controllers/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export const setupSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
