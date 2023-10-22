import { Router } from "express";
import { createUser, deleteUser, getUsers, updateUser, getUserId} from "../controllers/usersControllers";

const usersRoutes = Router();

usersRoutes.get("/users", getUsers);
usersRoutes.get("/users/:id", getUserId);
usersRoutes.post("/users", createUser);
usersRoutes.put("/users/:id", updateUser);
usersRoutes.delete("/users/:id", deleteUser);

export {usersRoutes};