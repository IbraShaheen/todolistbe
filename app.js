const express = require("express");
const cors = require('cors');

const app = express();

const db = require("./db/models");

const taskRoute = require("./routes/taskRoute")


app.use(express.json());
app.use(cors());


// main path
app.use("/tasks", taskRoute)


// db.sequelize.authenticate();

db.sequelize.sync();


// notfound M.W
app.use((req,res,next) => {
res.status(404).json({message: "Path not found"})
})

// error M.W
app.use((error,req,res,next) =>{
res.status(error.status ?? 500).json(error.message ?? "Internal server error")
})



app.listen(8000);