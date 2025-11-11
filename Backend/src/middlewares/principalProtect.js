import { errorHandler } from "../utils/errorHandler.js";

export const principalProtection = async (req, res, next) => {
  try {
    const role = req.user.role;

    if (role != "principal") {
      return errorHandler(res, "Not Autorised !");
    }

    next();
  } catch (error) {
    return errorHandler(res, error.message || error);
  }
};
