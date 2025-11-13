const express = require("express");
const router = express.Router();
const { addHabit, getHabits } = require("../controllers/habitController");

router.post("/add", addHabit);
router.get("/", getHabits);

module.exports = router;
