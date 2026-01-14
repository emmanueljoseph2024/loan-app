import User from "../models/signupModel.js";
import bcrypt from "bcryptjs";

export const create = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    console.log("Signup request body:", req.body);

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    const newUser = new User({
      username: name,
      email,
      password: hashedPassword
    });

    const savedUser = await newUser.save();

    return res.status(201).json({
      message: "Signup successful",
      user: {
        id: savedUser._id,
        username: savedUser.username,
        email: savedUser.email
      }
    });

  } catch (error) {
    console.error("Error in signup:", error);
    res.status(500).json({ errorMessage: error.message });
  }
};




