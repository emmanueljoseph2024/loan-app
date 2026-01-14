// middleware/adminMiddleware.js
import jwt from "jsonwebtoken";
import User from "../models/signupModel.js";

export const adminAuth = async (req, res, next) => {
  try {
    // 1. Get token
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "No token provided"
      });
    }

    const token = authHeader.split(" ")[1];

    // 2. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 3. Find user
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({
        message: "User not found"
      });
    }

    // 4. Check admin role
    if (user.role !== "admin") {
      return res.status(403).json({
        message: "Access denied: Admins only"
      });
    }

    // 5. Attach admin to request
    req.admin = user;
    next();

  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token"
    });
  }
};
