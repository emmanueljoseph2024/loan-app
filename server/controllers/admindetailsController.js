import Admin from '../models/adminModel.js'

export const bankDetails = async(req,res)=>{
try{
    const userId = req.user._id;
    if(!userId){
       return res.status(404).json({message: 'User not found'});
    }

    const {name,email, accountName, accountNumber, bankName, available} = req.body;
    console.log("Received bank details:", bankName, accountName, accountNumber);

const numericAccountNumber = Number(accountNumber);
if (isNaN(numericAccountNumber)) {
  return res.status(400).json({ message: "Invalid account number" });
}


    const bankDetails = new Admin({
     user:userId,
     name:name,
     email: email,
     accountName: accountName,
     accountNumber: accountNumber,
     bankName:bankName,
     available:available,

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
         const userId = req.user._id;
         if(!userId){
            return res.status(404).json({message: 'User not found'});
         }

         const details = await Admin.find({user:userId});

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