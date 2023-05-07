const userModel = require("../models/userModel")
const bcrypt = require("bcrypt")
const TOKEN = 'komieter'

module.exports.getUser = async (req, res) => {
    //get user info from request
    console.log(req.params)
    console.log(req.body)
    const { password, username } = req.body;
    //find user in database
    userModel.find({username: username})
    .then((user) => {
            console.log(user[0])
            bcrypt.compareSync(password, user[0].password) ? 
            res.json({username: user[0].username, token: TOKEN, _id: user[0]._id}) :
            res.json({error: "Username and password do not match"})
        
    })
    .catch((err) => console.log(err))
}

module.exports.createUser = async (req, res) => {
    const {username, password} = req.body;
    const hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

    userModel.create({username: username, password: hash})
    .then((data) => {
        if  (data) {
            res.json({username: data.username, token: TOKEN, _id: data._id})
        } else {
            res.json({error: "Something went wrong"})
        }
    })
    .catch((err) => console.log(err))
}

