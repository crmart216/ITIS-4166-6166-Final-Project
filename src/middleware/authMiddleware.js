import jwt from "jsonwebtoken";
import { findUsersByEmail } from "../repositories/userRepo.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized - No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized - Invalid Token" });
    }



    const user = await findUsersByEmail(decoded.email);
    if (!user) {
      return res.status(401).json({ message: "Unauthorized - Invalid Token" });
    }

    const {password, ...userNoPassword} = user;
    
    req.user = userNoPassword;
    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ message: "Unauthroized - Expired Token, Please log in again"});
    } else {
      console.log("Error in protectRoute middleware:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
};
