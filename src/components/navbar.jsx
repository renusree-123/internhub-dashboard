import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.className = dark ? "dark" : "";
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <h3 onClick={() => navigate("/dashboard")} style={{ cursor: "pointer" }}>
        InternHub
      </h3>

      {/* RIGHT SIDE BUTTONS */}
      <div className="navActions">
        <button onClick={() => navigate("/profile")}>Profile</button>

        <button onClick={() => setDark(!dark)}>
          {dark ? "Light Mode" : "Dark Mode"}
        </button>

        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;
