import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
import principalRouter from "./routes/principalRoute.js";
import { errorHandler } from "./utils/errorHandler.js";
import subjectRouter from "./routes/subjectRoute.js";
import classRouter from "./routes/classRoute.js";

dotenv.config();

const app = express();

// Middlewares
app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/user", userRouter);
app.use("/api/principal", principalRouter);
app.use("/api/class", classRouter);
app.use("/api/subject", subjectRouter);

// app.use(errorHandler);

export default app;
