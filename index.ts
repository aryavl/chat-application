import mongoose from 'mongoose'
import 'dotenv/config'
import http from 'http'
import cors from 'cors'
import express from 'express'
import userRouter from './routes/userRoutes'

const app =express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())
app.use('/',userRouter)



mongoose.connect(process.env.MONGO_URL!)
const db = mongoose.connection
db.on('error',console.error.bind(console,"connection error")
)
db.once("open",()=>{
    console.log("monogodb connected successfully");
    app.listen(process.env.PORT||4000,()=>{
        console.log(`Server successfully running at ${process.env.PORT}`);
})

})