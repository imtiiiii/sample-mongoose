import { IUser } from "./user.interface";
import { model, Schema } from "mongoose";
const Gender = ["M", "F"];
const userSchema: Schema = new Schema<IUser>({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  middle_name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  address: {
    line1: {
      type: String,
      required: true,
    },
    line2: {
      type: String,
    },
  },
  dob: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: Gender,
    required: true,
  },
  race: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    required: true,
  },
});
export default model<IUser>("User", userSchema);
