const Habit = require("../models/Habit");

exports.addHabit = async (req, res) => {
    try {
        const newHabit = new Habit(req.body);
        const savedHabit = await newHabit.save();
        res.json(savedHabit);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getHabits = async (req, res) => {
    try {
        const habits = await Habit.find();
        res.json(habits);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
