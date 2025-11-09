import Student from "../models/studentModel.js";
import User from "../models/userModel.js";
import { errorHandler } from "../utils/errorHandler.js";
import bcrypt from "bcryptjs";
import { successHandler } from "../utils/successHadler.js";

export const addStudent = async (req, res) => {
  try {
    const {
      rollNumber,
      firstName,
      lastName,
      dateOfBirth,
      gender,
      address,
      contactNumber,
      classId,
      academicYear,
      parentsDetails,
      email,
      password,
    } = req.body;

    const username = firstName + rollNumber;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return errorHandler(res, "User already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      role: "student",
    });

    const newStudent = await Student.create({
      userId: newUser._id,
      rollNumber,
      firstName,
      lastName,
      dateOfBirth,
      gender,
      address,
      contactNumber,
      classId,
      academicYear,
      parentsDetails,
    });

    return successHandler(res, "Student Created", {
      student: newStudent,
      user: newUser,
    });
  } catch (error) {
    return errorHandler(res, error.message || error);
  }
};

export const getAllStudents = async (req, res) => {
  try {
    const allstudents = await Student.find();

    return successHandler(res, "All Students", { allstudents });
  } catch (error) {
    return errorHandler(res, error.message || error);
  }
};
