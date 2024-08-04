import express from "express";
import { signin } from "../controllers/auth.controller.js";
import { verifyAuthentication } from "../middleware/authJwt.middleware.js";

export const authRoutes = express.Router();

authRoutes.route("/").post(signin);