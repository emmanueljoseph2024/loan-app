import User from '../models/userModel.js';
import Signup from '../models/signupModel.js';

export const userDashboard = async (req, res) => {
  try{
  const userId = req.user.id;
  const user = await Signup.findById(userId);

  if(!user){
    return res.status(404).json({message: 'User not found'});
  }

  const recipient = await User.findOne({user: userId});

  if(!recipient){
    return res.status(404).json({message: 'Recipient not found'})
  }


  return res.status(200).json({
    walletBalance: recipient.wallet.balance,
    loan: recipient.loan,
  });
  }
catch(error){
  console.log(error);
  return res.status(500).json({errorMessage: error.message});
}
};
