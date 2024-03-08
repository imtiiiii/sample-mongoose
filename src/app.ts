import express, { Application } from "express";
import cors from "cors";
//* SETUP APP
const app: Application = express();
export const port: number = 3333;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//------------------------------------------------
//? IMPORT ALL ROUTES
import userRoutes from "./app/modules/User/user.routes";
app.use("/api/v1/users", userRoutes);

export default app;
