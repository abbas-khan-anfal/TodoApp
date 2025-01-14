import mongoose from "mongoose"
import 'dotenv/config'

const connectDB = async () => {
    try
    {  
        const db = await mongoose.connect(`mongodb+srv://mydemoforuser:demo500account25@cluster0.updwn.mongodb.net/todoapp?retryWrites=true`)
        console.log("DB Connected Successfully")
    }
    catch(error)
    {
        console.log("Error Connecting DB : ", error.message)
    }
}

export default connectDB