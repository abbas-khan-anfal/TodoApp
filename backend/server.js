// import statements
import express, { urlencoded } from 'express'
import 'dotenv/config'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import connectDB from './config/mongoDB.js'
import userRouter from './routes/user.js'
import taskRouter from './routes/task.js'
import { errorHandler } from './middlewares/Error.js'

// app config
const app = express()
connectDB()

// middlewares
app.use(express.json())
app.use(cors({
  origin: [process.env.FRONTEND_URL],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}))
app.use(cookieParser())

// api endpoints
app.use('/api/v1/user', userRouter)
app.use('/api/v1/task', taskRouter)

app.get('/', (req, res) => {
  res.json({
    success : true,
    messageg : "Api Working fine"
  })
})

// error middleware
app.use(errorHandler)

//server
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})