import 'dotenv/config'
import taskModel from '../models/task.js'
import errorClassHandler from '../middlewares/Error.js'

// Function for add task
const addTaskHandler = async (req, res, next) => {
    try
    {
        const { title, description } = req.body
        const task = await taskModel.create({
            title,
            description,
            createdAt : Date(Date.now()),
            userId: req.user.id
        })

        res.status(200).json({
            success : true,
            message : "Task added successfully",
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


// Function for get task
const fetchTasksHandler = async (req, res, next) => {
    try
    {
        const { _id } = req.user

        const fetchedTasks = await taskModel.find({ userId : _id })

        res.status(200).json({
            success : true,
            tasks : fetchedTasks
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

// Function for delete task
const deleteTaskHandler = async (req, res, next) => {
    try
    {
        const { id } = req.params

        const task = await taskModel.findById(id)

        if(!task) return next(new errorClassHandler("Task not found", 404))

        await task.deleteOne()

        res.status(200).json({
            success : true,
            message : "Task deleted successfully"
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


// Function to get update task
const getUpdateTask = async (req, res, next) => {
    try
    {
        const { id } = req.params

        const task = await taskModel.findById(id)

        if(!task)
        {
            return res.status(404).json({
                        success : false,
                        message : "Task not found"
                    })
        }

        res.status(200).json({
            success : true,
            task
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

// Function to update task
const updateTaskHandler = async (req, res, next) => {
    try
    {
        const { id, title, description } = req.body

        const task = await taskModel.findById(id)

        if(!task)
        {
            return res.status(404).json({
                        success : false,
                        message : "Task not found"
                    })
        }

        // Update task fields
        task.title = title
        task.description = description
        await task.save()


        res.status(200).json({
            success : true,
            message : "Task Updated Successfully",
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
export { addTaskHandler, fetchTasksHandler, deleteTaskHandler, getUpdateTask, updateTaskHandler }