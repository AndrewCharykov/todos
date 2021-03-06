import express from 'express'
import mongoose from "mongoose";
import router from "./router.js";
import cors from 'cors';

const PORT = 5000;
const DB_URL = 'mongodb+srv://user:user@cluster0.svpbohe.mongodb.net/?retryWrites=true&w=majority';

const app = express()
app.use(cors()); /* NEW */
app.use(express.json())
app.use('/api', router)

async function startApp(){
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology:true, useNewUrlParser: true});
        app.listen(PORT, ()=> console.log('server started on port ' + PORT))
    }catch (e){
        console.log(e)
    }
}

startApp();