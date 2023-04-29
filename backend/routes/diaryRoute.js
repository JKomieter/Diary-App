const {Router} = require("express");
const { getDiaries, saveDiary, deleteDiary, getSpecificDiary, updateDiary } = require("../controllers/diaryControllers");
const { getUser, createUser } = require("../controllers/userController")
const router = Router();

router.get("/", getDiaries)

router.post("/save", saveDiary)

router.delete("/delete/:_id", deleteDiary)

router.get("/dairy/:_id", getSpecificDiary)

router.patch("/update", updateDiary)

router.post("/user/:username", getUser)

router.post("/create", createUser)

module.exports = router;