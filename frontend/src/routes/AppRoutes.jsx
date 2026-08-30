import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing/Landing";

import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import RoleSelection from "../pages/Auth/RoleSelection";
import BeekeeperDashboard from "../pages/Beekeeper/BeekeeperDashboard";
import Batches from "../pages/Beekeeper/Batches";
import RegisterBatch from "../pages/Beekeeper/RegisterBatch";
import QRManagement from "../pages/Beekeeper/QRManagement";
import Verification from "../pages/Beekeeper/Verification";
import BeekeeperSettings from "../pages/Beekeeper/Settings";
import BeekeeperProfile from "../pages/Beekeeper/Profile";
import BeekeeperSecurity from "../pages/Beekeeper/Security";

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
      {/* <Route
        path="/beekeeper/dashboard"
        element={
          <div className="p-10 text-2xl font-bold">
            Beekeeper Dashboard
          </div>
        }
      /> */}

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
      
      <Route
        path="/beekeeper/dashboard"
        element={<BeekeeperDashboard />}
      />

      <Route
        path="/beekeeper/batches"
        element={<Batches />}
      />

      <Route
        path="/beekeeper/register"
        element={<RegisterBatch />}
      />

      <Route
        path="/beekeeper/qr-codes"
        element={<QRManagement />}
      />

      <Route
        path="/beekeeper/verification"
        element={<Verification />}
      />

      <Route
        path="/beekeeper/settings"
        element={<BeekeeperSettings />}
      />

      <Route
        path="/beekeeper/profile"
        element={<BeekeeperProfile />}
      />

      <Route
        path="/beekeeper/security"
        element={<BeekeeperSecurity />}
      />

    </Routes>
  );
};

export default AppRoutes;