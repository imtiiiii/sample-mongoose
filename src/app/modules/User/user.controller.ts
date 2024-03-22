import { Request, Response } from "express";
import {
  createUserService,
  getUserService,
  getUsersService,
} from "./user.service";
import { IUser } from "./user.interface";
import mongoose from "mongoose";

export const getUsers = async (req: Request, res: Response) => {
  try {
    // Call the service function to fetch users
    const users: IUser[] = await getUsersService();

    // Respond with status 200 (OK) and the array of users
    res.status(200).json({ message: "Users retrieved successfully", data: users });
  } catch (error) {
    console.error("Error fetching users:", error);
    // If an error occurs, respond with status 500 (Internal Server Error) and an error message
    res.status(500).json({ message: "Internal Server Error" });
  }
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
  try {
    const userInfo = req.body;

    // Call the service function to create a user
    const createUser: IUser = await createUserService(userInfo);

    // Respond with status 201 (Created) and the newly created user data
    res.status(201).json({ message: "User created successfully", data: createUser });
  } catch (error) {
    console.error("Error creating user:", error);
    // If an error occurs, respond with status 500 (Internal Server Error) and an error message
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const updateUser = async (req: Request, res: Response) => {};
export const deleteUser = async (req: Request, res: Response) => {};
