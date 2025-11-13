import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/habits")
      .then(res => setHabits(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="app">
      <h1 className="title">GreenSteps 🌿</h1>

      <h2 className="subtitle">Daily Eco Habits</h2>

      <div className="habits-container">
        {habits.map(habit => (
          <div key={habit._id} className="habit-card">
            <h3>{habit.habit}</h3>
            <p>User: {habit.user}</p>
            <p>Eco Points: {habit.points}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
