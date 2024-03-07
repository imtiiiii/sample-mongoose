import express, { Application } from "express";
import cors from "cors";
import mongoose from "mongoose";

const app: Application = express();
const port: number = 3333;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const connection: string =
  "mongodb://localhost:27017/sample_mongoose?directConnection=true";

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
app.get("/", async (req, res) => {
  interface IUser {
    firstName: string;
    lastName: string;
  }
  const userSchema = new mongoose.Schema<IUser>({
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  });
  const User = mongoose.model<IUser>("User", userSchema);
  console.log("worked here");
  // const create = new User({
  //   firstName: "John",
  //   lastName: "Doe",
  // });
  // await create.save();
  // res.send(create);
  // const user = await new User({
  //   firstName: "John",
  //   lastName: "Doe",
  // });
  // await user.save();
  // res.status(200).json({ message: "success", data: user });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
