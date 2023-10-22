import { Router } from "express";
import { getUserName } from "../controllers/userControllers";

const usersRoutesName = Router();

usersRoutesName.get("/user/:name", getUserName);

export {usersRoutesName};