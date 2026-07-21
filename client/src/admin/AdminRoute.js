import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function AdminRoute({ children }) {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/admin/login" />;

  try {
    const decoded = jwtDecode(token);
    if (decoded.exp * 1000 < Date.now()) {
      localStorage.removeItem("token");
      return <Navigate to="/admin/login" />;
    }
  } catch {
    localStorage.removeItem("token");
    return <Navigate to="/admin/login" />;
  }

  return children;
}

export default AdminRoute;