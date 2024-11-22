import { PrismaClient } from "@prisma/client";
import express from "express";
import passport from "passport";
import "./config/passport.js";
import registerRoute from "./routes/register.routes.js";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(passport.initialize());

app.use("/api", registerRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export { prisma };
