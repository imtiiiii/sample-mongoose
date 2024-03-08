import { IUser } from "./user.interface";
import User from "./user.model";

export const getUsersService = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};
export const createUserService = async (userInfo: IUser): Promise<IUser> => {
  const user = new User(userInfo);
  const newUser = await user.save();
  return newUser;
};
