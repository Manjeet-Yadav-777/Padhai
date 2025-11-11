import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
    },

    dateOfBirth: {
      type: Date,
    },

    gender: {
      type: String,
      enum: ["male", "female", "others"],
    },

    contactNumber: {
      type: String,
    },

    address: {
      street: String,
      city: String,
      state: String,
      pincode: String,
      country: String,
    },

    qualification: {
      type: String,
    },

    experience: {
      type: Number,
    },

    joinngDate: {
      type: Date,
      default: Date.now,
    },

    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
    },

    classTeacherOf: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
    },

    salary: {
      basic: Number,
      hra: Number,
      da: Number,
      total: Number,
    },
  },
  { timestamps: true }
);

const Teacher = mongoose.model("Teacher", teacherSchema);
export default Teacher;
