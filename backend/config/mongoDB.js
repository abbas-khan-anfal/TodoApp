import mongoose from "mongoose"
import 'dotenv/config'

const connectDB = async () => {
    try
    {  
        const db = await mongoose.connect(process.env.MONGODB_URI)
        console.log("DB Connected Successfully")
    }
    catch(error)
    {
        console.log("Error Connecting DB : ", error.message)
    }
}

export default connectDB