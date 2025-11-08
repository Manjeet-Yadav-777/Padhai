import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    //   addmission Number

    rollNumber: {
      type: String,
      required: true,
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

    address: {
      street: String,
      city: String,
      state: String,
      pincode: String,
      country: String,
    },

    contactNumber: {
      type: String,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    loginPassword: {
      type: String,
      required: true,
    },

    classId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
    },

    academicYear: {
      type: String,
    },

    addmissionDate: {
      type: Date,
      default: Date.now,
    },

    parentsDetails: {
      parentName: String,
      occupation: String,
      contact: String,
    },
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", studentSchema);

export default Student;
