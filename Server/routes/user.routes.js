import express from "express"
import isAuth from "../middlewares/idAuth.js"
const userRouter=express.Router()
import { getCurrentUser } from '../controllers/user.controllers.js';

userRouter.get('/current',isAuth, getCurrentUser)

export default userRouter