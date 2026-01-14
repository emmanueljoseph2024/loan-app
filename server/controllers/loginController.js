import Log from "../models/signupModel.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //  Check if user exists
    const user = await Log.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    //  Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    //  Generate JWT token
    const token = generateToken(user._id);

    // Successful login
    res.status(200).json({
      message: "Logged in successfully",
      token,  // send token to frontend
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
    });

  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};
