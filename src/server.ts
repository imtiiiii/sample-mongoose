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

// interface IUser {
//   firstName: string;
//   lastName: string;
// }
// const userSchema = new mongoose.Schema<IUser>({
//   firstName: {
//     type: String,
//     required: true,
//   },
//   lastName: {
//     type: String,
//     required: true,
//   },
// });
// const User = mongoose.model<IUser>("User", userSchema);
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
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
