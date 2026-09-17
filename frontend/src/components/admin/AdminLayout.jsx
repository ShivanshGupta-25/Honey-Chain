import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

const AdminLayout = () => {
  const location = useLocation();

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const [isCollapsed, setIsCollapsed] = useState(false);

  const pageConfig = {
    "/admin/dashboard": {
      title: "Dashboard",
      subtitle: "Welcome back, Administrator",
    },
    "/admin/users": {
      title: "User Management",
      subtitle: "Manage Honey Chain platform users",
    },
    "/admin/beekeepers": {
      title: "Beekeeper Management",
      subtitle: "Manage registered beekeepers",
    },
    "/admin/honey-batches": {
      title: "Honey Batches",
      subtitle: "Manage honey traceability records",
    },
    "/admin/verification": {
      title: "Verification",
      subtitle: "Review honey verification requests",
    },
    "/admin/analytics": {
      title: "Analytics",
      subtitle: "Monitor platform performance",
    },
    "/admin/settings": {
      title: "Settings",
      subtitle: "Manage platform configuration",
    },
    "/admin/security": {
      title: "Security",
      subtitle: "Manage admin security settings",
    },
    "/admin/profile": {
      title: "Profile",
      subtitle: "Manage your administrator profile",
    },
    "/admin/notifications": {
      title: "Notifications",
      subtitle: "View platform notifications",
    },
  };

  const currentPage = pageConfig[location.pathname] || {
    title: "Admin Panel",
    subtitle: "Honey Chain administration",
  };

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Sidebar */}
      <AdminSidebar
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      {/* Main Content */}
      <div
        className={`min-h-screen transition-all duration-300
          ${isCollapsed ? "lg:pl-[84px]" : "lg:pl-[280px]"}`}
      >

        {/* Header */}
        <AdminHeader
          onMenuClick={() => setIsMobileOpen(true)}
          title={currentPage.title}
          subtitle={currentPage.subtitle}
        />

        {/* Page Content */}
        <main className="px-4 py-6 sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;