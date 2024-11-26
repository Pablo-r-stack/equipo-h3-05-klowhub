import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "User Management API",
    version: "1.0.0",
    description: "API for user registration and management",
  },
  servers: [
    {
      url: "http://localhost:5000/api",
    },
  ],
  components: {
    schemas: {
      User: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            description: "Unique identifier for the user",
          },
          name: {
            type: "string",
            description: "User's first name",
          },
          lastName: {
            type: "string",
            description: "User's last name",
          },
          email: {
            type: "string",
            description: "User's email address",
          },
          createdAt: {
            type: "string",
            format: "date-time",
            description: "Timestamp of user creation",
          },
        },
      },
      UserRegistration: {
        type: "object",
        required: ["name", "lastName", "email", "password"],
        properties: {
          name: {
            type: "string",
            description: "User's first name",
          },
          lastName: {
            type: "string",
            description: "User's last name",
          },
          email: {
            type: "string",
            description: "User's email address",
          },
          password: {
            type: "string",
            description: "User's password",
          },
        },
      },
    },
  },
  paths: {
    "/register": {
      post: {
        summary: "Register a new user",
        description:
          "Create a new user account with name, last name, email, and password",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/UserRegistration",
              },
            },
          },
        },
        responses: {
          201: {
            description: "User created successfully",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Usuario creado",
                    },
                    user: {
                      $ref: "#/components/schemas/User",
                    },
                    token: {
                      type: "string",
                      description: "JWT authentication token",
                    },
                  },
                },
              },
            },
          },
          400: {
            description: "Bad request - missing fields or user already exists",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    error: {
                      type: "string",
                      example: "Todos los campos son obligatorios",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/users": {
      get: {
        summary: "Get all users",
        description: "Retrieve a list of all registered users",
        responses: {
          200: {
            description: "List of users retrieved successfully",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/User",
                  },
                },
              },
            },
          },
          500: {
            description: "Internal server error",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Error al obtener los usuarios",
                    },
                    error: {
                      type: "string",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/user/{id}": {
      get: {
        summary: "Get user by ID",
        description: "Retrieve a specific user by their unique identifier",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "integer",
            },
            description: "Unique identifier of the user",
          },
        ],
        responses: {
          200: {
            description: "User retrieved successfully",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/User",
                },
              },
            },
          },
          404: {
            description: "User not found",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Usuario no encontrado",
                    },
                  },
                },
              },
            },
          },
          500: {
            description: "Internal server error",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Error al obtener el usuario",
                    },
                    error: {
                      type: "string",
                    },
                  },
                },
              },
            },
          },
        },
      },
      delete: {
        summary: "Delete user by ID",
        description: "Remove a specific user from the system",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "integer",
            },
            description: "Unique identifier of the user to delete",
          },
        ],
        responses: {
          200: {
            description: "User deleted successfully",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Usuario eliminado",
                    },
                    user: {
                      $ref: "#/components/schemas/User",
                    },
                  },
                },
              },
            },
          },
          500: {
            description: "Internal server error",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Error al eliminar el usuario",
                    },
                    error: {
                      type: "string",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

const options = {
  swaggerDefinition,
  apis: ["../routes/register.routes.js", "../routes/user.routes.js"],
};

export const swaggerSpec = swaggerJsdoc(options);

export const setupSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
