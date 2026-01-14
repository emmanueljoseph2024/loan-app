import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  amount: Number,
  reference: String,
  status: String,

  type: {
    type: String,
    enum: ["loan_disbursement", "repayment"],
  },

  direction: {
    type: String,
    enum: ["credit", "debit"],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Transaction", transactionSchema);
