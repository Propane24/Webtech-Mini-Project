import React from "react";

function HabitCard({ habit }) {
    return (
        <div className="p-4 border rounded-lg shadow-sm bg-white">
            <h3 className="text-lg font-medium">{habit.habit}</h3>
            <p className="text-sm text-gray-500">User: {habit.user}</p>
            <p className="text-sm">Eco Points: {habit.points}</p>
        </div>
    );
}

export default HabitCard;
