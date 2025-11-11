import mongoose from "mongoose";

const examSchema = new mongoose.Schema(
  {
    examName: {
      type: String,
      required: true,
    },

    examType: {
      type: String,
      enum: ["Test_1", "Test_2", "Half_Yearly", "Final"],
      required: true,
    },

    classId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
      required: true,
    },

    academicYear: {
      type: String,
      required: true,
    },

    startDate: {
      type: Date,
      required: true,
    },

    endDate: {
      type: Date,
      required: true,
    },

    subjects: [
      {
        subjectId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Subject",
        },
        examDate: {
          type: Date,
        },

        startTime: {
          type: String,
        },

        endTime: {
          type: String,
        },

        duration: {
          type: String,
        },

        totalMarks: {
          type: Number,
        },
      },
    ],

    status: {
      type: String,
      enum: ["scheduled", "ongoing", "completed"],
      default: "scheduled",
    },
  },
  { timestamps: true }
);

export const Exam = mongoose.model("Exam", examSchema);
