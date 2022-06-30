import TaskService from "./TaskService.js";

class TaskController{
    async create(req,res){
        try {
            const task = await TaskService.create(req.body);
            res.json(task)
        } catch (e){
            res.status(500).json(e)
        }
    }

    async getTasks(req,res){
        try {
            const tasks = await TaskService.getTasks();
            return res.json(tasks);
        } catch (e){
            res.status(500).json(e)
        }
    }

    async getTask(req,res){
        try {
            const task = await TaskService.getTask(req.params.id)
            return res.json(task)
        } catch (e){
            res.status(500).json(e)
        }
    }

    async updateTask(req,res){
        try {
           const updatedTask = await TaskService.updateTask(req.body);
           return res.json(updatedTask)
        } catch (e){
            res.status(500).json("FFFFF")
        }
    }

    async deleteTask(req,res){
        try {
            const task = await TaskService.deleteTask(req.params.id);
            return res.json(task)
        } catch (e){
            res.status(500).json(e)
        }
    }
}

export default new TaskController();