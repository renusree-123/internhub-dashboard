function Profile() {
  const name = localStorage.getItem("name");
  const role = localStorage.getItem("role");
  const theme = localStorage.getItem("theme") || "light";

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const completed = tasks.filter(t => t.status === "Completed").length;

  return (
    <div className="container">
      <h2>User Profile</h2>

      <div className="statCard">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Role:</strong> {role}</p>
        <p><strong>Tasks Completed:</strong> {completed}</p>
        <p><strong>Theme Preference:</strong> {theme}</p>
      </div>
    </div>
  );
}

export default Profile;
