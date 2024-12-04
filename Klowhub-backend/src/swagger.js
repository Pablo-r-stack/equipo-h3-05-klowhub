import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "KlowHub API",
    version: "1.0.0",
    description: "Documentación de la API para el backend de KlowHub.",
  },
  servers: [
    {
      url: "http://localhost:5000/api",
      description: "Servidor local",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./src/routes/*.js"],
};

// Inicializar swagger-jsdoc
const swaggerSpec = swaggerJsdoc(options);

/**
 * Configura Swagger en la aplicación.
 * @param {object} app - La instancia de la aplicación de Express.
 */
const setupSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log(
    "Documentación de Swagger disponible en http://localhost:5000/api-docs"
  );
};

export default setupSwagger;
