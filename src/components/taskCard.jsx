const getEmbedUrl = (url) => {
  if (!url) return null;

  // YouTube full link
  if (url.includes("youtube.com/watch?v=")) {
    const videoId = url.split("v=")[1].split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }

  // YouTube short link
  if (url.includes("youtu.be/")) {
    const videoId = url.split("youtu.be/")[1];
    return `https://www.youtube.com/embed/${videoId}`;
  }

  // Google Drive
  if (url.includes("drive.google.com")) {
    const fileId = url.split("/d/")[1]?.split("/")[0];
    return fileId
      ? `https://drive.google.com/file/d/${fileId}/preview`
      : null;
  }

  return null;
};

function TaskCard({ task, setTasks }) {
  const role = localStorage.getItem("role");
  const embedUrl = getEmbedUrl(task.videoUrl);

  const updateStatus = () => {
    const nextStatus =
      task.status === "Pending"
        ? "In Progress"
        : task.status === "In Progress"
        ? "Completed"
        : "Completed";

    setTasks((prev) =>
      prev.map((t) =>
        t.id === task.id ? { ...t, status: nextStatus } : t
      )
    );
  };

  const deleteTask = () => {
    setTasks((prev) => prev.filter((t) => t.id !== task.id));
  };

  return (
    <div className="taskCard">
      <h4>{task.title}</h4>

      {/* EMBEDDED VIDEO */}
      {embedUrl && (
        <div className="videoWrapper">
          <iframe
            src={embedUrl}
            title="Task Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <p>
        Status: <strong>{task.status}</strong>
      </p>

      <div className="taskActions">
        <button className="updateBtn" onClick={updateStatus}>
          Update Status
        </button>

        {role === "admin" && (
          <button className="deleteBtn" onClick={deleteTask}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

export default TaskCard;

