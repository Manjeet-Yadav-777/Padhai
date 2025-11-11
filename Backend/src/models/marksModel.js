import mongoose from "mongoose";

const marksSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  },

  examId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Exam",
  },

  subjectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject",
  },

  totalObtained: {
    type: Number,
    required: true,
  },

  totalMarks: {
    type: Number,
    required: true,
  },
});

export const Marks = mongoose.model("Marks", marksSchema);
