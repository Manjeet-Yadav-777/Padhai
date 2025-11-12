import express from "express";
import auth from "../middlewares/auth.js";
import { principalProtection } from "../middlewares/principalProtect.js";
import { addClass } from "../controllers/classController.js";

const classRouter = express.Router();

classRouter.post("/addclass", auth, principalProtection, addClass);

export default classRouter;
