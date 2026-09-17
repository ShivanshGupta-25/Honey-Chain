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
import ConsumerDashboardPage from "../pages/Consumer/ConsumerDashboardPage";

// Admin
import AdminDashboardPage from "../pages/Admin/AdminDashboardPage";
import AdminLayout from "../components/admin/AdminLayout";

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

      {/* <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminDashboardPage />
          </ProtectedRoute>
        }
      /> */}
      <Route path="/admin" element={<ProtectedRoute allowedRoles={["admin"]}>
            <AdminLayout />
          </ProtectedRoute>}>
        <Route path="dashboard" element={<ProtectedRoute allowedRoles={["admin"]}>
            <AdminDashboardPage />
          </ProtectedRoute>} />
      </Route>
      
      {/* =========================================
          CONSUMER ROUTES
      ========================================= */}

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