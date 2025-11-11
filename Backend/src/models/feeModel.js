import mongoose from "mongoose";

const feeSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },

    classId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
    },

    academicYear: {
      type: String,
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    totalAmount: {
      type: Number,
    },

    pendingAmount: {
      type: Number,
    },

    feeStatus: {
      type: String,
      enum: ["Pending", "Completed"],
    },
  },
  { timestamps: true }
);

export const Fee = mongoose.model("Fee", feeSchema);
