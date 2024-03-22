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
  const { id } = req.params; // Extracting the user ID from request parameters

  try {
    // Validating user ID using mongoose's Types.ObjectId
    const validUserIdObject = new mongoose.Types.ObjectId(id);

    // Calling a service function to get the user by ID
    const findUser: IUser | null = await getUserService(validUserIdObject);

    // If no user is found, throw an error
    if (!findUser) {
      throw new Error("invalid id");
    }

    // Responding with status 200 and the user data if found
    res.status(200).send({ message: "ok", data: findUser });
  } catch (error) {
    // Catching any errors and responding with status 400
    return res.status(400).send({ message: "Not found" });
  }
};

export const createUser = async (req: Request, res: Response) => {
  const userInfo = req.body;
  const createUser: IUser = await createUserService(userInfo);
  res.status(201).send({ message: "ok", data: createUser });
};
export const updateUser = async (req: Request, res: Response) => {};
export const deleteUser = async (req: Request, res: Response) => {};
