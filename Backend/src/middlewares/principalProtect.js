import { errorHandler } from "../utils/errorHandler.js";

export const principalProtection = async (req, res, next) => {
  try {
    const role = req.user.role;

    if (role != "principal") {
      return errorHandler("Not Autorised !", req, res);
    }

    next();
  } catch (error) {
    return errorHandler(error, req, res);
  }
};
