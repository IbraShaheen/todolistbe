const {Task} = require("../db/models")



exports.fetchTask = async (taskId, next) => {
try {
    const task = await Task.findByPk(taskId)
    return task;  
} catch(error) {
    next(error)
}
}





exports.taskCreate = async (req,res,next) => {
try {
    const task = await Task.create(req.body) 
    res.status(201).json(task)
} catch(error) {
 next(error)   
}

}



exports.tasksList = async (req,res,next) => {
try {
    const tasks = await Task.findAll({ attributes : {exclude : ["updatedAt","createdAt"]}})
    res.json(tasks)

} catch(error) {
    next(error)
}

}



exports.taskDelete = async (req,res,next) => {
    try {
            await req.task.destroy()
            res.status(204).end() 
        }
     catch(error) {
        next(error)
    }

}



exports.taskUpdate = async (req,res,next)=>{
    try {
        await req.task.update(req.body)
        res.status(200).end()
    } catch (error) {
        next(error)
    }
}