# 🚀 InternHub – Internship Task Management Dashboard

InternHub is a **frontend-focused internship task management dashboard** that simulates a real-world internship workflow.  
It allows **Admins to create and manage tasks with embedded learning videos** and **Interns to track task progress** using a clean, responsive, role-based user interface.

This project is built to demonstrate **practical frontend development skills** using React.

---
## 🌐 Live Demo
🔗 https://internhub-dashboard.vercel.app
---

## ✨ Features

### 🔐 Authentication & Role-Based Access
- Mock authentication using localStorage
- Role selection: **Admin / Intern**
- Protected routes (Dashboard & Profile)
- Role-based UI:
  - Admin can add and delete tasks
  - Intern can only view tasks and update status

---

### 📝 Task Management
- Add new tasks (Admin only)
- Update task status:
  - Pending → In Progress → Completed
- Delete tasks (Admin only)
- Tasks persist after page refresh

---

### ▶️ Embedded Learning Videos
- Admin can attach **YouTube / Google Drive video links** to tasks
- Videos are **embedded directly inside task cards**
- Interns can watch videos without leaving the dashboard

---

### 📊 Dashboard Overview
- Total tasks
- Completed tasks
- Pending tasks
- Clean card-based layout

---

### 🔍 Search & Filter
- Search tasks by title
- Filter tasks by status:
  - All
  - Pending
  - In Progress
  - Completed

---

### 🌙 Dark / Light Mode
- Toggle between Dark and Light themes
- Modern, stylish dark mode UI
- Theme preference saved using localStorage

---

### 👤 User Profile Page
- Displays:
  - User name
  - Role (Admin / Intern)
  - Tasks completed
  - Theme preference
- Makes authentication meaningful and personalized

---

### 📱 Responsive Design
- Fully responsive on:
  - Mobile
  - Tablet
  - Desktop
- Responsive embedded videos
- Mobile-friendly layout and navigation

---

## 🛠️ Tech Stack

- **React.js** – Component-based UI
- **JavaScript (ES6+)** – Application logic
- **CSS3** – Flexbox, Grid, responsive layouts, dark mode
- **React Router DOM** – Routing and protected routes
- **localStorage** – Client-side data persistence

---

## 📂 Project Structure
internHub
│
├─ public
│  └─ index.html
│
├─ src
│  ├─ components
│  │  ├─ navbar.jsx
│  │  ├─ dashboardStats.jsx
│  │  ├─ taskCard.jsx
│  │  ├─ taskForm.jsx
│  │  └─ protectedRoute.jsx
│  │
│  ├─ pages
│  │  ├─ login.jsx
│  │  ├─ dashboard.jsx
│  │  └─ profile.jsx
│  │
│  ├─ styles
│  │  └─ main.css
│  │
│  ├─ app.jsx
│  └─ index.js
│
├─ screenshots
│  ├─ login.png
│  ├─ dashboard-light.png
│  ├─ dashboard-dark.png
│  ├─ task-video.png
│  └─ profile.png
│
├─ .gitignore
├─ package.json
├─ package-lock.json
├─ vercel.json
└─ README.md
