import { useState } from "react";

function TaskForm({ setTasks }) {
  const role = localStorage.getItem("role");

  const [title, setTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  if (role !== "admin") return null;

  const addTask = () => {
    if (!title) return;

    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        title,
        status: "Pending",
        videoUrl,
      },
    ]);

    setTitle("");
    setVideoUrl("");
  };

  return (
    <div className="taskForm">
      <input
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Video link (YouTube / Drive)"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

export default TaskForm;
