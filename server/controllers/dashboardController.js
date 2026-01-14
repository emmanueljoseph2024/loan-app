// controllers/dashboardController.js
import Transaction from "../models/transactionModel.js";
import Admin from "../models/adminModel.js";

// Admin dashboard
export const adminDashboard = async (req, res) => {
  const admin = await Admin.findOne({ available: true });
  const transactions = await Transaction.find({ sender: admin._id })
    .populate("recipient", "name email")
    .sort({ createdAt: -1 });
  res.json({ balance: admin.balance, transactions });
};

// User dashboard
export const userDashboard = async (req, res) => {
  const userId = req.user.id;
  const transactions = await Transaction.find({ recipient: userId })
    .populate("sender", "name email")
    .sort({ createdAt: -1 });
  res.json({ transactions });
};
