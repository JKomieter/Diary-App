const diaryModel = require("../models/diaryModel")

module.exports.getDiaries = async (req, res) => {
    const diary = await diaryModel.find()
    res.json(diary)
}

module.exports.saveDiary = async (req, res) => {
    const { title, description, mood, date } = req.body
    diaryModel.create({title, description, mood, date})
    .then((data) => {
        console.log(`${data} added succesfully...`)
        res.json(data)
    })
}

module.exports.updateDiary = async (req, res) => {
    const { _id, title, description, mood, date } = req.body;
    diaryModel.findByIdAndUpdate(_id, {title, description, mood, date})
    .then((data) => res.json(data))
    .then((err) => console.log(err))
}   

module.exports.deleteDiary = async (req, res) => {
    const {_id} = req.body;
    diaryModel.findByIdAndDelete(_id)
    .then(() => res.json("Deleted successfully"))
    .catch((err) => console.log(err))
}

module.exports.getSpecificDiary = async (req, res) => {
    const _id = req.params._id;
    diaryModel.findById({_id: _id})
    .then((data) => res.json(data))
    .catch((err) => console.log(err))
}