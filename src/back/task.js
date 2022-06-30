import mongoose from "mongoose";

const Task = new mongoose.Schema({
    title:{type:String, required:true},
    status:{type:Boolean, required:true}
})

export default mongoose.model('Task',Task)