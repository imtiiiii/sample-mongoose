import express, { Application } from "express";
import cors from "cors";
//* SETUP APP
const app: Application = express();
export const port: number = 3333;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//------------------------------------------------
//? ROUTES
app.get("/", (req, res) => {
  res.send("Hello World");
});

export default app;
