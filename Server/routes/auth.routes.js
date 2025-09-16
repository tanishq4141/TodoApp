import express from 'express';
import authController from "../controllers/auth.controllers.js";

const { signUp, signIn } = authController;
const authRoutes = express.Router();

authRoutes.post('/register', signUp);
authRoutes.post('/login', signIn);

export default authRoutes;
