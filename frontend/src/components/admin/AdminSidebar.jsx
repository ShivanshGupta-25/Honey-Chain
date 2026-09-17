
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  UserCheck,
  PackageCheck,
  ShieldCheck,
  ChartNoAxesCombined,
  Settings,
  Shield,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  LogOut,
  Hexagon,
} from "lucide-react";

const AdminSidebar = ({
  isMobileOpen = false,
  setIsMobileOpen = () => {},
}) => {
  const navigate = useNavigate();

  const [isCollapsed, setIsCollapsed] = useState(false);

  const navigationItems = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      path: "/admin/dashboard",
    },
    {
      label: "Users",
      icon: Users,
      path: "/admin/users",
    },
    {
      label: "Beekeepers",
      icon: UserCheck,
      path: "/admin/beekeepers",
    },
    {
      label: "Honey Batches",
      icon: PackageCheck,
      path: "/admin/honey-batches",
    },
    {
      label: "Verification",
      icon: ShieldCheck,
      path: "/admin/verification",
    },
    {
      label: "Analytics",
      icon: ChartNoAxesCombined,
      path: "/admin/analytics",
    },
  ];

  const systemItems = [
    {
      label: "Settings",
      icon: Settings,
      path: "/admin/settings",
    },
    {
      label: "Security",
      icon: Shield,
      path: "/admin/security",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("authToken");
    localStorage.removeItem("accessToken");

    navigate("/login", { replace: true });
  };

  const handleNavigation = () => {
    setIsMobileOpen(false);
  };

  const renderNavItem = (item) => {
    const Icon = item.icon;

    return (
      <NavLink
        key={item.path}
        to={item.path}
        onClick={handleNavigation}
        title={isCollapsed ? item.label : ""}
        className={({ isActive }) =>
          `group relative flex items-center gap-3 rounded-xl px-3 py-3
          text-sm font-medium transition-all duration-200
          ${
            isActive
              ? "bg-amber-100 text-amber-800 shadow-sm"
              : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
          }
          ${isCollapsed ? "justify-center" : ""}`
        }
      >
        {({ isActive }) => (
          <>
            <Icon
              size={19}
              strokeWidth={isActive ? 2.4 : 2}
              className="shrink-0"
            />

            {!isCollapsed && (
              <span className="truncate">{item.label}</span>
            )}

            {isCollapsed && (
              <span
                className="pointer-events-none absolute left-full
                z-50 ml-3 hidden whitespace-nowrap rounded-lg
                bg-slate-900 px-3 py-2 text-xs font-medium
                text-white shadow-lg group-hover:block"
              >
                {item.label}
              </span>
            )}
          </>
        )}
      </NavLink>
    );
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm
          lg:hidden"
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex flex-col
        border-r border-slate-200 bg-white
        transition-all duration-300 ease-in-out
        ${
          isCollapsed ? "w-[84px]" : "w-[280px]"
        }
        ${
          isMobileOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Brand */}
        <div
          className={`flex h-[84px] shrink-0 items-center border-b
          border-slate-100 px-5
          ${isCollapsed ? "justify-center" : "justify-between"}`}
        >
          <button
            type="button"
            onClick={() => navigate("/admin/dashboard")}
            className="flex items-center gap-3 rounded-xl
            outline-none transition-opacity hover:opacity-80
            focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center
              rounded-xl bg-amber-400 text-amber-950 shadow-sm"
            >
              <Hexagon size={23} strokeWidth={2.3} />
            </div>

            {!isCollapsed && (
              <div className="text-left">
                <h1 className="text-base font-bold tracking-tight text-slate-900">
                  Honey Chain
                </h1>

                <p className="text-[10px] font-semibold uppercase
                  tracking-[0.18em] text-slate-400">
                  Administration
                </p>
              </div>
            )}
          </button>

          {/* Mobile Close */}
          <button
            type="button"
            onClick={() => setIsMobileOpen(false)}
            className="rounded-lg p-2 text-slate-500
            transition hover:bg-slate-100 hover:text-slate-900 lg:hidden"
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Admin Badge */}
        {!isCollapsed && (
          <div className="px-5 pt-5">
            <div
              className="flex items-center gap-2 rounded-xl border
              border-amber-100 bg-amber-50 px-3 py-2.5"
            >
              <ShieldCheck
                size={17}
                className="text-amber-700"
              />

              <div className="min-w-0">
                <p className="text-xs font-bold text-amber-900">
                  Administrator
                </p>

                <p className="text-[10px] text-amber-700">
                  Full system access
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav
          className="flex-1 overflow-y-auto px-4 py-6"
          aria-label="Admin navigation"
        >
          <div className="space-y-1">
            {!isCollapsed && (
              <p className="mb-3 px-3 text-[10px] font-bold
                uppercase tracking-[0.16em] text-slate-400">
                Main Menu
              </p>
            )}

            {navigationItems.map(renderNavItem)}
          </div>

          <div className="my-6 h-px bg-slate-100" />

          <div className="space-y-1">
            {!isCollapsed && (
              <p className="mb-3 px-3 text-[10px] font-bold
                uppercase tracking-[0.16em] text-slate-400">
                System
              </p>
            )}

            {systemItems.map(renderNavItem)}
          </div>
        </nav>

        {/* Bottom Actions */}
        <div className="shrink-0 border-t border-slate-100 p-4">
          {/* Collapse Toggle */}
          <button
            type="button"
            onClick={() => setIsCollapsed((prev) => !prev)}
            className={`mb-2 hidden w-full items-center gap-3 rounded-xl
              px-3 py-3 text-sm font-medium text-slate-500
              transition hover:bg-slate-100 hover:text-slate-900
              lg:flex ${isCollapsed ? "justify-center" : ""}`}
            title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? (
              <ChevronRight size={19} />
            ) : (
              <>
                <ChevronLeft size={19} />
                <span>Collapse Sidebar</span>
              </>
            )}
          </button>

          {/* Logout */}
          <button
            type="button"
            onClick={handleLogout}
            title={isCollapsed ? "Logout" : ""}
            className={`flex w-full items-center gap-3 rounded-xl
              px-3 py-3 text-sm font-medium text-red-500
              transition hover:bg-red-50 hover:text-red-600
              ${isCollapsed ? "justify-center" : ""}`}
          >
            <LogOut size={19} className="shrink-0" />

            {!isCollapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Mobile Menu Trigger */}
      {!isMobileOpen && (
        <button
          type="button"
          onClick={() => setIsMobileOpen(true)}
          className="fixed bottom-5 left-5 z-30 flex h-12 w-12
            items-center justify-center rounded-2xl bg-amber-400
            text-amber-950 shadow-lg shadow-amber-200
            transition hover:bg-amber-500 lg:hidden"
          aria-label="Open admin sidebar"
        >
          <Menu size={22} />
        </button>
      )}
    </>
  );
};

export default AdminSidebar;