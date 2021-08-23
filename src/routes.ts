import { Router } from "express";
import { UserControllers } from "./controllers/UserControllers";

const router = Router();

const userController = new UserControllers(); 

router.post("/users", userController.create);

export { router };