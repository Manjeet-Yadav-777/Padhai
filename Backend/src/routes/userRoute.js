import express from "express";
import {
  getProfile,
  login,
  logout,
  register,
} from "../controllers/userController.js";
import auth from "../middlewares/auth.js";
import { principalProtection } from "../middlewares/principalProtect.js";
const userRouter = express.Router();

userRouter.post("/register", auth, principalProtection, register);
userRouter.post("/login", login);
userRouter.post("/logout", auth, logout);
userRouter.get("/getprofile", auth, getProfile);

export default userRouter;
