import mongoose, { Schema } from "mongoose";

const userSchema =new Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    imageId:{
        type:String
    },
    messages:[
        {
            message:String,
            sender:String,
            receiver:String,
            time:Date
        }
    ]
})
export const User = mongoose.model('User',userSchema)