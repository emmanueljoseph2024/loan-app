import User from "../models/userModel.js";

export const applyLatePenalty = async () => {
  const users = await User.find({ "loan.status": "active" });

  for (const user of users) {
    if (new Date() > user.loan.dueDate) {
      user.loan.status = "overdue";
      user.loan.currentAmount += 500;
      await user.save();
    }
  }
};
