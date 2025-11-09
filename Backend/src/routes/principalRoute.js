import express from "express";
import auth from "../middlewares/auth.js";
import { principalProtection } from "../middlewares/principalProtect.js";
import {
  addStudent,
  getAllStudents,
} from "../controllers/principalController.js";

const principalRouter = express.Router();

principalRouter.post("/addstudent", auth, principalProtection, addStudent);
principalRouter.get(
  "/getallstudents",
  auth,
  principalProtection,
  getAllStudents
);

export default principalRouter;
