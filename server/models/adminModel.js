// models/adminModel.js
import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  bankName: String,
  accountName: String,
  accountNumber: String,
  available: { type: Boolean, default: false }, // active account for sending
  balance: { type: Number, default: 10 }, // simulation balance
});

export default mongoose.model("Admin", adminSchema);
