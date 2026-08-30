import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing/Landing";

import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import RoleSelection from "../pages/Auth/RoleSelection";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Landing />} />

      {/* Authentication */}
      <Route path="/role-selection" element={<RoleSelection />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Temporary dashboard routes */}
      <Route
        path="/beekeeper/dashboard"
        element={
          <div className="p-10 text-2xl font-bold">
            Beekeeper Dashboard
          </div>
        }
      />

      <Route
        path="/admin/dashboard"
        element={
          <div className="p-10 text-2xl font-bold">
            Admin Dashboard
          </div>
        }
      />

      <Route
        path="/verify"
        element={
          <div className="p-10 text-2xl font-bold">
            Consumer Verification
          </div>
        }
      />
    </Routes>
  );
};

export default AppRoutes;