import jwt from "jsonwebtoken";
import { config } from "../../config.js";

// check credentials and genarate token
export const signin = async(req, res) => {
    try{
        const adminUser = {
            email: "admin@admin.com",
            password: "admin123"
        }

        if (req.body.email != adminUser.email || req.body.password != adminUser.password) {
            return res.status(401).json( {message: "Invalid credentials"} );
        }

        const token = jwt.sign(adminUser, config.SECRET_KEY);
        return res.json({ accessToken: token });
    } catch (err) {
        return res.status(500).json( {message: err} );
    }
};


