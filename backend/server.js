const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const habitRoutes = require("./routes/habits");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/greensteps")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.use("/api/habits", habitRoutes);

app.get("/", (req, res) => {
    res.send("GreenSteps API Running");
});

app.listen(5000, () => console.log("Server running on port 5000"));
