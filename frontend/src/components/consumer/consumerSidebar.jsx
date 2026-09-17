
import { useState } from "react";
import {
  LayoutDashboard,
  ScanLine,
  History,
  UserRound,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  ShieldCheck,
  CircleHelp,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const ConsumerSidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const [isCollapsed, setIsCollapsed] = useState(false);

  const navigationItems = [
    {
      label: "Dashboard",
      path: "/consumer/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Verify Honey",
      path: "/consumer/verify",
      icon: ScanLine,
    },
    {
      label: "Verification History",
      path: "/consumer/history",
      icon: History,
    },
  ];

  const accountItems = [
    {
      label: "My Profile",
      path: "/consumer/profile",
      icon: UserRound,
    },
    {
      label: "Settings",
      path: "/consumer/settings",
      icon: Settings,
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("authToken");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");

    navigate("/login", { replace: true });
  };

  const handleNavigation = () => {
    if (onClose) onClose();
  };

  const navLinkClasses = ({ isActive }) =>
    `group flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-all duration-200 ${
      isActive
        ? "bg-amber-500 text-white shadow-md shadow-amber-500/20"
        : "text-slate-600 hover:bg-amber-50 hover:text-amber-700"
    }`;

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-50 flex flex-col
          border-r border-slate-200 bg-white
          transition-all duration-300 ease-in-out
          lg:static lg:z-auto lg:translate-x-0
          ${isCollapsed ? "lg:w-[88px]" : "lg:w-[272px]"}
          w-[280px]
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Brand */}
        <div className="flex h-[84px] items-center justify-between border-b border-slate-100 px-5">
          <button
            type="button"
            onClick={() => navigate("/consumer/dashboard")}
            className={`flex items-center gap-3 ${
              isCollapsed ? "lg:mx-auto" : ""
            }`}
            aria-label="Go to consumer dashboard"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z" />
                <path d="m4 7 8 4 8-4M12 11v10" />
              </svg>
            </div>

            <span
              className={`text-lg font-bold tracking-tight text-slate-800 ${
                isCollapsed ? "lg:hidden" : ""
              }`}
            >
              Honey<span className="text-amber-500">Chain</span>
            </span>
          </button>

          {/* Mobile Close */}
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
            aria-label="Close navigation"
          >
            <X size={20} />
          </button>

          {/* Desktop Collapse */}
          <button
            type="button"
            onClick={() => setIsCollapsed((prev) => !prev)}
            className="hidden rounded-lg p-2 text-slate-500 transition hover:bg-amber-50 hover:text-amber-600 lg:block"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? (
              <ChevronRight size={18} />
            ) : (
              <ChevronLeft size={18} />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          {/* Main Menu */}
          <div className="mb-8">
            <p
              className={`mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 ${
                isCollapsed ? "lg:hidden" : ""
              }`}
            >
              Main Menu
            </p>

            <div className="space-y-1.5">
              {navigationItems.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === "/consumer/dashboard"}
                    onClick={handleNavigation}
                    className={navLinkClasses}
                    title={isCollapsed ? item.label : undefined}
                  >
                    <Icon size={19} strokeWidth={2} className="shrink-0" />

                    <span
                      className={`whitespace-nowrap ${
                        isCollapsed ? "lg:hidden" : ""
                      }`}
                    >
                      {item.label}
                    </span>
                  </NavLink>
                );
              })}
            </div>
          </div>

          {/* Account */}
          <div className="mb-8">
            <p
              className={`mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 ${
                isCollapsed ? "lg:hidden" : ""
              }`}
            >
              Account
            </p>

            <div className="space-y-1.5">
              {accountItems.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={handleNavigation}
                    className={navLinkClasses}
                    title={isCollapsed ? item.label : undefined}
                  >
                    <Icon size={19} strokeWidth={2} className="shrink-0" />

                    <span
                      className={`whitespace-nowrap ${
                        isCollapsed ? "lg:hidden" : ""
                      }`}
                    >
                      {item.label}
                    </span>
                  </NavLink>
                );
              })}
            </div>
          </div>

          {/* Trust Banner */}
          <div
            className={`rounded-2xl border border-amber-100 bg-amber-50 p-4 ${
              isCollapsed ? "lg:hidden" : ""
            }`}
          >
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white text-amber-500 shadow-sm">
              <ShieldCheck size={19} />
            </div>

            <h3 className="text-sm font-semibold text-slate-800">
              Trust Every Drop
            </h3>

            <p className="mt-1 text-xs leading-relaxed text-slate-500">
              Verify your honey and discover its journey from hive to jar.
            </p>

            <button
              type="button"
              onClick={() => navigate("/consumer/verify")}
              className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-amber-600 transition hover:text-amber-700"
            >
              Verify now
              <ChevronRight size={14} />
            </button>
          </div>
        </nav>

        {/* Bottom Section */}
        <div className="border-t border-slate-100 p-4">
          {/* Help */}
          <button
            type="button"
            onClick={() => navigate("/consumer/help")}
            className={`mb-2 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-amber-600 ${
              isCollapsed ? "lg:justify-center" : ""
            }`}
            title={isCollapsed ? "Help & Support" : undefined}
          >
            <CircleHelp size={19} className="shrink-0" />

            <span className={isCollapsed ? "lg:hidden" : ""}>
              Help & Support
            </span>
          </button>

          {/* Logout */}
          <button
            type="button"
            onClick={handleLogout}
            className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-red-50 hover:text-red-600 ${
              isCollapsed ? "lg:justify-center" : ""
            }`}
            title={isCollapsed ? "Logout" : undefined}
          >
            <LogOut size={19} className="shrink-0" />

            <span className={isCollapsed ? "lg:hidden" : ""}>
              Logout
            </span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default ConsumerSidebar;