import userModel from "../models/user.js"
import bcrypt from 'bcrypt'
import sendCookie from "../utils/Features.js"
import jwt from "jsonwebtoken"
import 'dotenv/config'

// Function for signup user
const signupHandler = async (req, res, next) => {
    try
    {
        const { username, email, password } = req.body

        let user = await userModel.findOne({ email })

        if(user)
        {
            return res.status(401).json({
                success : false,
                message : "User already exist"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        user = await userModel.create({
            username,
            email,
            password : hashedPassword,
        })

        // sendCookie(user, res, "User successfully signup", 201)

        return res.status(201).json({
            success : true,
            message : "User successfully signup"
        })

    }
    catch(error)
    {
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}


// Function for login user
const loginHandler = async (req, res, next) => {
    try
    {
        const { email, password } = req.body

        let user = await userModel.findOne({ email })

        if(!user)
        {
            return res.status(404).json({
                success : false,
                message : "Invalid Email"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch)
            {
                return res.status(404).json({
                    success : false,
                    message : "Incorrect Password"
                })
            }

        sendCookie(user, res, "User successfully Loged In", 201)

    }
    catch(error)
    {
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}


// Function for logout user
const logoutHandler = (req, res, next) => {
    res.status(200).cookie('token','',{
        httpOnly: true,
        expires: new Date(Date.now()),
    })
    .json({
        success : true,
        message : "User successfully Loged Out"
    })
}

// Function for get user
const getUserHandler = (req, res, next) => {
        res.status(200).json({
            success : true,
            message : "User is Login",
            user : req.user
        })
}
export { signupHandler, loginHandler, logoutHandler, getUserHandler }