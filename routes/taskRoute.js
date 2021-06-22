const express = require("express");

const router = express.Router();

const {taskCreate,taskDelete,taskUpdate,tasksList,fetchTask} = require("../controllers/taskController");



router.param("taskId", async (req,res,next,taskId) => {
    try {
        const task = await fetchTask(taskId, next)

        if(task){
                req.task = task
                next()
        }else{
            next({status:404, message: "Task not found"})
        }   
    } catch (error) {
        next(error)
    }
})





//create
router.post("/", taskCreate)

//list
router.get("/", tasksList)



//delete
router.delete("/:taskId", taskDelete)

//update
router.put("/:taskId",taskUpdate)


module.exports = router;