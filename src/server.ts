import express, { Application } from "express";
import cors from "cors";
import mongoose from "mongoose";

const app: Application = express();
const port: number = 3333;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const connection: string =
  "mongodb://localhost:27017/sample_mongoose/?directConnection=true";

const boot = async () => {
  console.log("booting...");
  try {
    await mongoose.connect(connection);
    console.log("MongoDB Connected...`");
  } catch (err) {
    console.error("database connection failed", err);
  }
};
boot();
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
