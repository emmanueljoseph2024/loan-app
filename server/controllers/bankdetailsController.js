import User from '../models/userModel.js'

export const bankDetails = async(req,res)=>{
try{
    const userId = req.user.id;
    if(!userId){
       return res.status(404).json({message: 'User not found'});
    }

    const {name,email, accountName, accountNumber, bankName} = req.body;
    console.log("Received bank details:", bankName, accountName, accountNumber);

const numericAccountNumber = Number(accountNumber);
if (isNaN(numericAccountNumber)) {
  return res.status(400).json({ message: "Invalid account number" });
}
    const bankDetails = new User({
        user:userId,
     name:name,
     email: email,
     bankDetails: {
        accountName: accountName,
        accountNumber: accountNumber,
        bankName:bankName
     }
    })

    await bankDetails.save();

    return res.status(200).json({message: 'Account details posted successfully'})
}
catch(error){
       console.error("SERVER ERROR:", error);
    console.log('Error in posting details', error);
   return res.status(500).json({errorMessage: error.message})
     
}
}

export const getUserBankDetails = async(req,res)=>{
    try{
         const userId = req.user.id;
         if(!userId){
            return res.status(404).json({message: 'User not found'});
         }

         const details = await User.find({user:userId});

         if(!details){
            return res.status(404).json({message: 'User not found'});
         }

         return res.status(200).json(details);
    }
    catch(error){
        console.error('Server error', error);
        console.log('Error in fetching user bank details', error);
        return res.status(500).json({errorMessage: error.message});
    }
}


export const updateBankDetails = async(req,res)=>{
   try{
    const userId = req.user.id;
    const {name,email, accountName, accountNumber, bankName} = req.body;
    const user = await User.findByIdAndUpdate(userId);
    const newDetails = User.create({
    name:name,
     email: email,
     bankDetails: {
        accountName: accountName,
        accountNumber: accountNumber,
        bankName:bankName
    }})

    await newDetails.save();
    res.status(200).json({message:'Updated successfully'})

   }
   catch(error){
   console.error(error);
   return res.status(500).json({errorMessage : error.message});
   }
}
