import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/errorHandler.js";

const auth = async (req, res, next) => {
  try {
    const token =
      req.cookies?.token || req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return errorHandler("Please login first!", req, res);
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    next();
  } catch (error) {
    return errorHandler("Invalid or expired token!", req, res);
  }
};

export default auth;
