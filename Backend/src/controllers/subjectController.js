import { Class } from "../models/classModel.js";
import { Subject } from "../models/subjectModel.js";
import Teacher from "../models/teacherModel.js";
import { errorHandler } from "../utils/errorHandler.js";
import { successHandler } from "../utils/successHadler.js";

export const addSubject = async (req, res) => {
  try {
    const { subjectName, classId, teacher } = req.body;

    if (!subjectName || !teacher || !classId) {
      return errorHandler(res, "Provide All");
    }

    const newsubject = await Subject.create({
      subjectName,
      classId,
      teacher,
    });

    const addSubjectToClass = await Class.findByIdAndUpdate(classId, {
      $push: { subjects: newsubject._id },
    });

    const addSubjectToTeacher = await Teacher.findByIdAndUpdate(teacher, {
      subject: newsubject._id,
    });

    return successHandler(res, "Subject Created", newsubject);
  } catch (error) {
    return errorHandler(res, error.message || error);
  }
};
