const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const routes = require("./routes/diaryRoute")
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://JKomieter:JoEl0242@cluster0.l3vqfpu.mongodb.net/DiaryApp?retryWrites=true&w=majority")
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err))


app.use(routes)

app.listen(5000, () => {
    "Server is started at port 5000"
})