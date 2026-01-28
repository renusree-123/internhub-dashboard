import { Navigate } from "react-router-dom";

function protectedRoute({ children }) {
  const isAuth = localStorage.getItem("isAuth");
  return isAuth ? children : <Navigate to="/" />;
}

export default protectedRoute;
