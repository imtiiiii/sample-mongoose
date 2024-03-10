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
  try {
    const validUserIdObject = new mongoose.Types.ObjectId(id);
    const findUser: IUser | null = await getUserService(validUserIdObject);
    if (!findUser) {
      throw new Error("invalid id");
    }
    res.status(200).send({ message: "ok", data: findUser });
  } catch (error) {
    return res.status(400).send({ message: "Not found" });
  }
};
export const createUser = async (req: Request, res: Response) => {
  const userInfo = req.body;
  const createUser: IUser = await createUserService(userInfo);
  res.status(201).send({ message: "success", data: createUser });
};
export const updateUser = async (req: Request, res: Response) => {};
export const deleteUser = async (req: Request, res: Response) => {};
