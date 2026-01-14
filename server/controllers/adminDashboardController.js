import User from '../models/userModel.js';
import Transaction from "../models/transactionModel.js";

export const adminDashboard = async (req, res) => {
  const users = await User.find();
  const transactions = await Transaction.find().limit(20);

  res.json({
    totalUsers: users.length,
    activeLoans: users.filter(u => u.loan?.status === "active").length,
    overdueLoans: users.filter(u => u.loan?.status === "overdue").length,
    transactions,
  });
};
