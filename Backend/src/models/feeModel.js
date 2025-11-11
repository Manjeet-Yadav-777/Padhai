import mongoose from "mongoose";

const feeSchema = new mongoose.Schema({});

export const Fee = mongoose.model("Fee", feeSchema);
