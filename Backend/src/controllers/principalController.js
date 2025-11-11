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
      addmissionDate,
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
      addmissionDate,
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
    const students = await Student.find();

    if (!students) {
      return errorHandler(res, "Not Found");
    }

    return successHandler(res, "All Students", students);
  } catch (error) {
    return errorHandler(res, error.message || error);
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return errorHandler(res, "Id Must be Required");
    }

    const st = await Student.findOne({ userId });

    if (!st) {
      return errorHandler(res, "wrong UserId");
    }

    await User.findByIdAndDelete({ _id: userId });
    await Student.findByIdAndDelete(st._id);

    return successHandler(res, "Student Deleted", null);
  } catch (error) {
    return errorHandler(res, error.message || error);
  }
};

export const getSingleStudent = async (req, res) => {
  try {
    const { stid } = req.body;

    if (!stid) {
      return errorHandler(res, "Id Required");
    }

    const student = await Student.findOne({ _id: stid });

    return successHandler(res, "Student By Id", student);
  } catch (error) {
    return errorHandler(res, error.message || error);
  }
};
