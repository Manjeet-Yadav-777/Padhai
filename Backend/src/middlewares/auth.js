import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/errorHandler.js";

const auth = async (req, res, next) => {
  try {
    const token =
      req.cookies?.token || req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return errorHandler(res, "Please login first!");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    next();
  } catch (error) {
    return errorHandler(res, "Invalid or expired token!");
  }
};

export default auth;
