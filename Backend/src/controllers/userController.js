import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/errorHandler.js";
import { successHandler } from "../utils/successHadler.js";
import { generateToken } from "../utils/generateToken.js";

export const register = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // Validate input

    if (!username || !email || !password || !role) {
      return errorHandler(res, "All fields are required");
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return errorHandler(res, "User already exists");
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role,
    });
    const save = await newUser.save();
    return successHandler(res, "User registered successfully", {
      save,
    });
  } catch (error) {
    return errorHandler(res, error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return errorHandler(res, "All fields are required");
    }
    // Check if user exists

    const user = await User.findOne({ email });

    if (!user) {
      return errorHandler(res, "Invalid credentials");
    }
    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return errorHandler(res, "Invalid Password");
    }

    // Generate JWT
    const token = await generateToken(user);

    // Set token in HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      sameSite: "strict",
      maxAge: 3600000, // 1 hour
    });
    user.password = undefined; // Remove password from user object before sending response

    // Successful login
    return successHandler(res, "Login successful", { user, token });
  } catch (error) {
    return errorHandler(res, error.message || error);
  }
};

export const logout = (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    });
    return successHandler(res, "Logout successful", null);
  } catch (error) {
    return errorHandler(res, error.message || error);
  }
};

// Controller
export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    console.log(req.user.id);

    return successHandler(res, "Your Profile", user);
  } catch (error) {
    return errorHandler(res, error.message || error);
  }
};
