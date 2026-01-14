import jwt from "jsonwebtoken";
import Signup from "../models/signupModel.js";

export const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization?.startsWith("Bearer ")) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await Signup.findById(decoded.id).select(
      "_id email role"
    );

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // CLEAN & CONSISTENT SHAPE
    req.user = {
      id: user._id.toString(),
      role: user.role,
      email: user.email,
    };

    next();
  } catch (error) {
    console.error("Auth error:", error.message);
    return res.status(401).json({ message: "Token failed" });
  }
};

export default protect;
