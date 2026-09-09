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

import ProtectedRoute from "../components/auth/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* =========================================
          PUBLIC ROUTES
      ========================================= */}

      <Route
        path="/"
        element={<Landing />}
      />

      {/* =========================================
          AUTHENTICATION ROUTES
      ========================================= */}

      <Route
        path="/role-selection"
        element={<RoleSelection />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/signup"
        element={<Signup />}
      />

      {/* =========================================
          ADMIN ROUTES
      ========================================= */}

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <div className="p-10 text-2xl font-bold">
              Admin Dashboard
            </div>
          </ProtectedRoute>
        }
      />

      {/* =========================================
          CONSUMER ROUTES
      ========================================= */}

      <Route
        path="/verify"
        element={
          <ProtectedRoute allowedRoles={["consumer"]}>
            <div className="p-10 text-2xl font-bold">
              Consumer Verification
            </div>
          </ProtectedRoute>
        }
      />

      {/* =========================================
          BEEKEEPER ROUTES
      ========================================= */}

      <Route
        path="/beekeeper/dashboard"
        element={
          <ProtectedRoute allowedRoles={["beekeeper"]}>
            <BeekeeperDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/beekeeper/batches"
        element={
          <ProtectedRoute allowedRoles={["beekeeper"]}>
            <Batches />
          </ProtectedRoute>
        }
      />

      <Route
        path="/beekeeper/register"
        element={
          <ProtectedRoute allowedRoles={["beekeeper"]}>
            <RegisterBatch />
          </ProtectedRoute>
        }
      />

      <Route
        path="/beekeeper/qr-codes"
        element={
          <ProtectedRoute allowedRoles={["beekeeper"]}>
            <QRManagement />
          </ProtectedRoute>
        }
      />

      <Route
        path="/beekeeper/verification"
        element={
          <ProtectedRoute allowedRoles={["beekeeper"]}>
            <Verification />
          </ProtectedRoute>
        }
      />

      <Route
        path="/beekeeper/settings"
        element={
          <ProtectedRoute allowedRoles={["beekeeper"]}>
            <BeekeeperSettings />
          </ProtectedRoute>
        }
      />

      <Route
        path="/beekeeper/profile"
        element={
          <ProtectedRoute allowedRoles={["beekeeper"]}>
            <BeekeeperProfile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/beekeeper/security"
        element={
          <ProtectedRoute allowedRoles={["beekeeper"]}>
            <BeekeeperSecurity />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;