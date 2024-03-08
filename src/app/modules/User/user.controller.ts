import { Request, Response } from "express";
import { createUserService, getUsersService } from "./user.service";
import { IUser } from "./user.interface";

export const getUsers = async (req: Request, res: Response) => {
  const users: IUser[] = await getUsersService();
  res.status(200).send({ message: "ok", data: users });
};
export const getUser = async (req: Request, res: Response) => {};
export const createUser = async (req: Request, res: Response) => {
  const userInfo = req.body;
  const createUser: IUser = await createUserService(userInfo);
  res.status(201).send({ message: "success", data: createUser });
};
