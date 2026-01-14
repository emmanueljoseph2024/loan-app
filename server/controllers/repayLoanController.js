import Signup from  '../models/signupModel.js';
import Transaction from "../models/transactionModel.js";
import User from '../models/userModel.js';

export const repayLoan = async (req, res) => {
  try{
  const { amount } = req.body;
  const userId = req.user.id;
  const numAmount = Number(amount);

  const person = await Signup.findById(userId);

  if(!person){
    return res.status(404).json({message: 'User not found'})
  }

  const user = await User.findOne({user:userId});
  let balance = user.loan.totalPayable;
  balance -= numAmount;

  if(balance < 0){
    balance = 0;
  }


  user.loan.currentAmount -= numAmount;

  if (user.loan.currentAmount <= 0) {
    user.loan.status = "repaid";
    user.loan.currentAmount = 0;
    user.loan.maxEligibleAmount = numAmount * 1.2;
    user.loan.totalPayable= balance;
  }
  await user.save();

  await Transaction.create({
    userId:user._id,
    amount,
    type: "repayment",
    direction: "debit",
    status: "success",
  });

  res.json({ message: "Loan repaid successfully" });
  }
  catch(error){
    console.log(error);
    return res.status(500).json({errorMessage: error.message});
  }

};
