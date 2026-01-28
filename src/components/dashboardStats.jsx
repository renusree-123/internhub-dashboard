function DashboardStats({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter(t => t.status === "Completed").length;
  const pending = total - completed;

  return (
    <div className="stats">
      <div className="statCard">
        <h3>Total Tasks</h3>
        <p>{total}</p>
      </div>

      <div className="statCard">
        <h3>Completed</h3>
        <p>{completed}</p>
      </div>

      <div className="statCard">
        <h3>Pending</h3>
        <p>{pending}</p>
      </div>
    </div>
  );
}

export default DashboardStats;
