import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../../utils/auth";

const ProtectedRoute = ({
  children,
  allowedRoles,
}) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  if (
    allowedRoles &&
    !allowedRoles.includes(user?.role)
  ) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;