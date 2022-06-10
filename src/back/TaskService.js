import Task from "./task.js";

class TaskService {
    async create(task) {
        return await Task.create(task);
    }

    async getTasks() {
        return await Task.find();
    }

    async getTask(id) {
        if (!id) {
            throw new Error('Id не указан')
        }
        const task = await Task.findById(id)
        return task;
    }

    async updateTask(task) {
        if (!task._id) {
            throw new Error('Id не указан')
        }
        const updateTask = await Task.findByIdAndUpdate(task._id, task, {new: true});
        return updateTask;
    }

    async deleteTask(id) {
        if (!id) {
            throw new Error('Id не указан')
        }
        const task = await Task.findByIdAndDelete(id);
        return task;
    }
}

export default new TaskService();