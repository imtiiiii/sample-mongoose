import { Request, Response } from "express";
import {
  createUserService,
  getUserService,
  getUsersService,
} from "./user.service";
import { IUser } from "./user.interface";
import mongoose from "mongoose";

export const getUsers = async (req: Request, res: Response) => {
  const users: IUser[] = await getUsersService();
  res.status(200).send({ message: "ok", data: users });
};
export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(id, "id");
  const validUserObject = new mongoose.Types.ObjectId(id);
  console.log("🚀 ~ validUserObject:", validUserObject);
  return;
  const findUser: IUser | null = await getUserService(id);
  console.log("🚀 ~ findUser:", findUser);
  if (!findUser) {
    return res.status(404).send({ message: "not found" });
  }
  res.status(200).send({ message: "ok", data: findUser });
};
export const createUser = async (req: Request, res: Response) => {
  const userInfo = req.body;
  const createUser: IUser = await createUserService(userInfo);
  res.status(201).send({ message: "success", data: createUser });
};
