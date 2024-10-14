import express from "express"
import { addTaskHandler, deleteTaskHandler, fetchTasksHandler, getUpdateTask, updateTaskHandler } from "../controllers/task.js"
import isAuthenticated from "../middlewares/Auth.js"

// Cteate router from express.Router()
const taskRouter = express.Router()

// Route for add task
taskRouter.post('/add',isAuthenticated, addTaskHandler)

// Route for get tasks
taskRouter.get('/fetch',isAuthenticated, fetchTasksHandler)

// Route for show task data to update
taskRouter.get('/getupdtask/:id', getUpdateTask)

// Route for update task
taskRouter.put('/update', isAuthenticated, updateTaskHandler)

// Route for delete task
taskRouter.delete('/delete/:id',isAuthenticated, deleteTaskHandler)

export default taskRouter