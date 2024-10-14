import express from "express"
import { getUserHandler, loginHandler, logoutHandler, signupHandler } from "../controllers/user.js"
import isAuthenticated from "../middlewares/Auth.js"

// Cteate router from express.Router()
const userRouter = express.Router()

// Route for signup user
userRouter.post('/signup', signupHandler)

// Route for login user
userRouter.post('/login', loginHandler)

// Route for logout user
userRouter.get('/logout', logoutHandler)

// Route for get user
userRouter.get('/in',isAuthenticated, getUserHandler)

export default userRouter