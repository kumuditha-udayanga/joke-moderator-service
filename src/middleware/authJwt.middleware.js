import jwt from "jsonwebtoken";
import { config } from "../../config.js";

// verify token
export const verifyAuthentication = (req, res,next) => {
    const token = req.headers["authorization"]?.split(" ")[1];

    if (!token) {
      res.status(401).json({ message: "Token not found" });
    }

    try {
        const decoded = jwt.verify(token, config.SECRET_KEY);
        next();
    } catch (err) {
        res.status(401).json({ message: "Invalid token" });
    };
};