import { PrismaClient } from "@prisma/client";
import express from "express";
import passport from "passport";
import "./config/passport.js";
import { setupSwagger } from "./config/swagger.js";
import register from "./routes/register.routes.js";
import {
  default as deleteUserRoute,
  default as userRoute,
  default as usersRoute,
} from "./routes/user.routes.js";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(passport.initialize());

app.use("/api", register);
app.use("/api", usersRoute);
app.use("/api", userRoute);
app.use("/api", deleteUserRoute);

setupSwagger(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export { prisma };
