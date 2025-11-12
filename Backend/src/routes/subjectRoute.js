import express from "express";
import auth from "../middlewares/auth.js";
import { principalProtection } from "../middlewares/principalProtect.js";
import { addSubject } from "../controllers/subjectController.js";

const subjectRouter = express.Router();

subjectRouter.post("/addsubject", auth, principalProtection, addSubject);

export default subjectRouter;
