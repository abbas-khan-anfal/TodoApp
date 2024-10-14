import jwt from 'jsonwebtoken'
import 'dotenv/config'

const sendCookie = async (user, res, message, statusCode = 200) => {
    const token = await jwt.sign({ id : user._id }, process.env.JWT_SECRET)

    res.status(statusCode).cookie('token', token, {
        httpOnly: true,
        maxAge: 15 * 24 * 60 * 60 * 1000
    }).json({
        success : true,
        message
    })
}

export default sendCookie