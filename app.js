const express = require('express');
const app = express();
const PORT = 5000
const studentsRouter = require('./routes/student')
const connectToDatabase = require('./db')

app.use(express.json())
app.use("/", studentsRouter )
app.get('/allstudents', (req,res)=>{
    res.send("this is my frontpage")

})

connectToDatabase().then(()=> (app.listen(PORT, ()=> (console.log("this server listen to " + PORT)))))





