import mongoose from "mongoose";

const Task = new mongoose.Schema({
    title:{type:String, required:true},
    status:{type:Boolean, required:true},
    content:{type:String, required:true},
    picture:{type:String}
})

export default mongoose.model('Task',Task)