const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "KlowHub API", // API Titulo
    version: "1.0.0", // Version
    description: "API documentation for KlowHub backend.", // Descripcion
  },
  servers: [
    {
      url: "http://localhost:5000/api",
      description: "Local server",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./src/routes/*.js"],
};

// Inicializar swagger-jsdoc
const swaggerSpec = swaggerJsdoc(options);

const setupSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log("Swagger docs available at http://localhost:5000/api-docs");
};

module.exports = setupSwagger;
