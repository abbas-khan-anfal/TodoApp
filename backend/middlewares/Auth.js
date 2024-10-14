import 'dotenv/config'
import jwt from 'jsonwebtoken'
import userModel from '../models/user.js'


const isAuthenticated = async (req, res, next) => {
    try
    {
        const { token } = req.cookies

        if(!token)
        {
            return res.status(401).json({
                success : false,
                message : "Login first"
            })
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET)

        const user = await userModel.findById(decode.id)

        req.user = user
        next()
    }
    catch(error)
    {
        res.status(500).json({
            success : false,
            message : `Error authentication : ${error.message}`
        })
    }
}

export default isAuthenticated