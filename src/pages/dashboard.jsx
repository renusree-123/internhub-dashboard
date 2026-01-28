import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import DashboardStats from "../components/dashboardStats";
import TaskCard from "../components/taskCard";
import TaskForm from "../components/taskForm";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  // DEFAULT TASKS (PRELOADED)
  const defaultTasks = [
    {
      id: 1,
      title: "Learn React",
      status: "Pending",
      videoUrl: "https://www.youtube.com/watch?v=bMknfKXIFA8",
    },
    {
      id: 2,
      title: "Learn HTML + CSS",
      status: "Pending",
      videoUrl: "https://youtu.be/G3e-cpL7ofc?si=zLxsu0FVriTsfqvQ",
    },
  ];

  // LOAD TASKS ON FIRST LOAD
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");

    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    } else {
      // 👇 FIRST TIME ONLY
      setTasks(defaultTasks);
      localStorage.setItem("tasks", JSON.stringify(defaultTasks));
    }
  }, []);

  // SAVE TASKS ON CHANGE
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <Navbar />
      <div className="container">
        <DashboardStats tasks={tasks} />
        <TaskForm setTasks={setTasks} />

        {tasks.length === 0 ? (
          <p>No tasks available</p>
        ) : (
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} setTasks={setTasks} />
          ))
        )}
      </div>
    </>
  );
}

export default Dashboard;
