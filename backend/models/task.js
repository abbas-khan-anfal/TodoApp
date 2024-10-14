import mongoose from "mongoose";
import 'dotenv/config';

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId,
    ref: 'users', required: true }
});

const taskModel = mongoose.models.tasks || mongoose.model('tasks', taskSchema);

export default taskModel;
