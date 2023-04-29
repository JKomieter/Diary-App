const mongoose = require("mongoose")

const diarySchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    mood: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model("diarySchema", diarySchema)