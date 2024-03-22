import mongoose from "mongoose";
import app, { port } from "./app";

const connection: string = "mongodb://localhost:27017/sample_mongoose";
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
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
