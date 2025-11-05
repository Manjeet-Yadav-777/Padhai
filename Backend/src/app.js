import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
import { errorHandler } from "./utils/errorHandler.js";

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


// Global error handler
app.use(errorHandler);

export default app;
