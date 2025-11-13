# GreenSteps – Eco Habit Tracker  
### Web Technology Mini Project  

---

## Overview

GreenSteps is a full-stack web application that motivates users to live more sustainably by tracking eco-friendly habits, completing daily challenges, and competing on a community leaderboard.

Users can:
- Create an account  
- Track daily eco-habits  
- Earn eco-points for consistency  
- View progress over time  
- Compete on a leaderboard  

---

## Tech Stack (MERN)

| Layer | Technology | Description |
|--------|-------------|-------------|
| M | MongoDB | Database to store users, habits, and progress |
| E | Express.js | Backend framework for REST API |
| R | React.js | Frontend library for building the UI |
| N | Node.js | Server runtime environment |

---

## Features

- User Dashboard → Displays daily habits and progress  
- Authentication → Register/Login using JWT  
- Leaderboard → Ranks users based on eco-points  
- Progress Tracking → Daily updates and streaks  
- Responsive UI → Built with TailwindCSS  

---

## Folder Structure
```
greensteps-eco-tracker/
│
├── backend/
│   ├── server.js
│   ├── routes/
│   │    └── habits.js
│   ├── models/
│   │    └── Habit.js
│   └── controllers/
│        └── habitController.js
│
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── components/
│   │   │      └── HabitCard.js
│   │   └── pages/
│   │          └── Dashboard.js
│   └── package.json
│
└── database/
    └── data.json

```

## Team Members

| Name    | Role |
|---------|------|
| Pratham | Frontend |
| Pranav  | Database and Integration |
| Pravith | Backend |
