import express from "express";
import auth from "../middlewares/auth.js";
import { principalProtection } from "../middlewares/principalProtect.js";
import {
  addStudent,
  deleteStudent,
  getAllStudents,
  getSingleStudent,
} from "../controllers/principalController.js";

const principalRouter = express.Router();

principalRouter.post("/addstudent", auth, principalProtection, addStudent);
principalRouter.get(
  "/getallstudents",
  auth,
  principalProtection,
  getAllStudents
);

principalRouter.delete(
  "/deletestudent",
  auth,
  principalProtection,
  deleteStudent
);

principalRouter.get(
  "/getsinglestudent",
  auth,
  principalProtection,
  getSingleStudent
);

export default principalRouter;
