import { IUser } from "./user.interface";
import User from "./user.model";

export const getUsersService = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};
