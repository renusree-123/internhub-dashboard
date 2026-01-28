import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [role, setRole] = useState("intern");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("isAuth", "true");
    localStorage.setItem("role", role);
    localStorage.setItem("name", name || "Intern User");
    navigate("/dashboard");
  };

  return (
    <div className="loginPage">
      <div className="loginCard">
        <h1>InternHub</h1>
        <p className="tagline">Internship Task Management Dashboard</p>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="intern">Intern</option>
          <option value="admin">Admin</option>
        </select>

        <button onClick={handleLogin}>Login</button>

        <p className="footerText">
          © 2026 InternHub. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Login;
