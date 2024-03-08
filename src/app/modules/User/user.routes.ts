import { Router } from "express";
import { createUser, getUser, getUsers } from "./user.controller";
const router = Router();
//? USER ROUTES
router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/create-user", createUser);
export default router;
