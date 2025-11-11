import mongoose from "mongoose";

const feeTransactionSchema = new mongoose.Schema({});

export const FeeTransaction = mongoose.model(
  "FeeTransaction",
  feeTransactionSchema
);
