const mongoose = require("mongoose")

const userModel = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model("userModel", userModel);