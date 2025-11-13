const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema({
    user: { type: String, required: true },
    habit: { type: String, required: true },
    points: { type: Number, default: 5 },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Habit", habitSchema);
