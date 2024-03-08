import { Request, Response } from "express";
import { getUsersService } from "./user.service";
import { IUser } from "./user.interface";

export const getUsers = async (req: Request, res: Response) => {
  const users: IUser[] = await getUsersService();
  res.status(200).send({ message: "ok", data: users });
};
export const getUser = async (req: Request, res: Response) => {};
export const createUser = async (req: Request, res: Response) => {};
