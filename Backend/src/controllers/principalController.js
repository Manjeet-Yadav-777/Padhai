import Student from "../models/studentModel.js";
import User from "../models/userModel.js";
import { errorHandler } from "../utils/errorHandler.js";
import bcrypt from "bcryptjs";
import { successHandler } from "../utils/successHadler.js";
import Teacher from "../models/teacherModel.js";

// Student Routes
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
      fees,
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
      fees,
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

    if (!student) {
      return errorHandler(res, "Not Found");
    }

    return successHandler(res, "Student By Id", student);
  } catch (error) {
    return errorHandler(res, error.message || error);
  }
};

export const updateStudent = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);

    const updated = await Student.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updated) {
      return errorHandler(res, "Student Not Found");
    }

    return successHandler(res, "Student Updated", updated);
  } catch (error) {
    return errorHandler(res, error.message || error);
  }
};

// Tecaher Routes
export const addTeacher = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      dateOfBirth,
      gender,
      contactNumber,
      address,
      qualification,
      experience,
      joinngDate,
      subject,
      classTeacherOf,
      salary,
      email,
      password,
    } = req.body;

    const username = firstName + lastName;

    const ext = await User.findOne({ email });

    if (ext) {
      return errorHandler(res, "Email Already Registered");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      role: "teacher",
    });
    const userId = user._id;

    const teacher = await Teacher.create({
      userId: userId,
      firstName,
      lastName,
      dateOfBirth,
      gender,
      contactNumber,
      address,
      qualification,
      experience,
      joinngDate,
      subject,
      classTeacherOf,
      salary,
    });

    return successHandler(res, "Teacher Created", { user, teacher });
  } catch (error) {
    return errorHandler(res, error.message || error);
  }
};

export const getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();

    if (!teachers) {
      return errorHandler(res, "Not Found");
    }

    return successHandler(res, "All Teachers", teachers);
  } catch (error) {
    return errorHandler(res, error.message || error);
  }
};

export const deleteTeacher = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return errorHandler(res, "Id Must be Required");
    }

    const th = await Teacher.findOne({ userId });

    if (!th) {
      return errorHandler(res, "wrong UserId");
    }

    await User.findByIdAndDelete({ _id: userId });
    await Teacher.findByIdAndDelete(th._id);

    return successHandler(res, "Teacher Deleted", null);
  } catch (error) {
    return errorHandler(res, error.message || error);
  }
};

export const getSingleTeacher = async (req, res) => {
  try {
    const { thid } = req.body;

    if (!thid) {
      return errorHandler(res, "Id Required");
    }

    const teacher = await Teacher.findOne({ _id: thid });

    return successHandler(res, "Teacher By Id", teacher);
  } catch (error) {
    return errorHandler(res, error.message || error);
  }
};

export const updateTeacher = async (req, res) => {
  try {
    const id = req.params.id;

    const updated = await Teacher.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updated) {
      return errorHandler(res, "Teacher Not Found");
    }

    return successHandler(res, "Teacher Updated", updated);
  } catch (error) {
    return errorHandler(res, error.message || error);
  }
};
