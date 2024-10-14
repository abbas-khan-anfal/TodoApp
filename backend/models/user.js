import mongoose from "mongoose";
import 'dotenv/config';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

const userModel = mongoose.models.users || mongoose.model('users', userSchema);

export default userModel;
