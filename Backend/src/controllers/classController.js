import { Class } from "../models/classModel.js";
import { errorHandler } from "../utils/errorHandler.js";
import { successHandler } from "../utils/successHadler.js";

export const addClass = async (req, res) => {
  try {
    const { className, classNumber, classTeacher } = req.body;

    const newclass = await Class.create({
      className,
      classNumber,
      classTeacher,
    });

    return successHandler(res, "Class Created", newclass);
  } catch (error) {
    return errorHandler(res, error.message || error);
  }
};
