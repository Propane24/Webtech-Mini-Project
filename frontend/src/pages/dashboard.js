import React, { useEffect, useState } from "react";
import axios from "axios";
import HabitCard from "../components/HabitCard";

function Dashboard() {
    const [habits, setHabits] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/habits")
            .then(res => setHabits(res.data))
            .catch(console.error);
    }, []);

    return (
        <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Daily Eco Habits</h2>
            <div className="grid gap-3">
                {habits.map(habit => (
                    <HabitCard key={habit._id} habit={habit} />
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
