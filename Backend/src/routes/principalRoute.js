import express from "express";
import auth from "../middlewares/auth.js";
import { principalProtection } from "../middlewares/principalProtect.js";
import {
  addStudent,
  addTeacher,
  deleteStudent,
  deleteTeacher,
  getAllStudents,
  getAllTeachers,
  getSingleStudent,
  getSingleTeacher,
} from "../controllers/principalController.js";

const principalRouter = express.Router();

// Student Routes
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

// Teacher Routes
principalRouter.post("/addteacher", auth, principalProtection, addTeacher);
principalRouter.get(
  "/getallteachers",
  auth,
  principalProtection,
  getAllTeachers
);

principalRouter.delete(
  "/deleteteacher",
  auth,
  principalProtection,
  deleteTeacher
);

principalRouter.get(
  "/getsingleteacher",
  auth,
  principalProtection,
  getSingleTeacher
);

export default principalRouter;
