import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing/Landing";

import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import RoleSelection from "../pages/Auth/RoleSelection";

// Beekeeper
import BeekeeperDashboard from "../pages/Beekeeper/BeekeeperDashboard";
import Hives from "../pages/Beekeeper/Hives";
import MyProfile from "../pages/Beekeeper/MyProfile";
import Settings from "../pages/Beekeeper/Settings";
import HiveDetails from "../components/beekeeper/hives/HiveDetails";

// Consumer
import ConsumerLayout from "../components/consumer/ConsumerLayout";
import ConsumerDashboardPage from "../pages/Consumer/ConsumerDashboardPage";

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
          CONSUMER ROUTES
      ========================================= */}

      {/* <Route
        path="/consumer/dashboard"
        element={
          <ProtectedRoute allowedRoles={["consumer"]}>
            <ConsumerLayout title="Dashboard" subtitle="Welcome back! Explore your honey journey.">
              <div className="p-10 text-2xl font-bold">
                Consumer Dashboard
              </div>
            </ConsumerLayout>
          </ProtectedRoute>
        } 
      /> */}
      <Route
        path="/consumer/dashboard"
        element={
          <ProtectedRoute allowedRoles={["consumer"]}>
            <ConsumerDashboardPage />
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
        path="/beekeeper/hives"
        element={
          <ProtectedRoute allowedRoles={["beekeeper"]}>
            <Hives />
          </ProtectedRoute>
        }
      />

      <Route
        path="/beekeeper/hives/:id"
        element={
          <ProtectedRoute allowedRoles={["beekeeper"]}>
            <HiveDetails />
          </ProtectedRoute>
        }
      />

      <Route
        path="/beekeeper/profile"
        element={
          <ProtectedRoute allowedRoles={["beekeeper"]}>
            <MyProfile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/beekeeper/settings"
        element={
          <ProtectedRoute allowedRoles={["beekeeper"]}>
            <Settings />
          </ProtectedRoute>
        }
      />
      
      </Routes>
  );
};

export default AppRoutes;