import {
  Activity,
  Bell,
  Boxes,
  ChevronLeft,
  Home,
  Link2,
  Settings,
  UserRound,
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navigation = [
  {
    label: "Dashboard",
    path: "/beekeeper/dashboard",
    icon: Home,
  },
  {
    label: "Hives",
    path: "/beekeeper/hives",
    icon: Activity,
  },
  {
    label: "Batches",
    path: "/beekeeper/batches",
    icon: Boxes,
  },
  {
    label: "Traceability",
    path: "/beekeeper/traceability",
    icon: Link2,
  },
  {
    label: "Alerts",
    path: "/beekeeper/alerts",
    icon: Bell,
  },
];

const accountNavigation = [
  {
    label: "Profile",
    path: "/beekeeper/profile",
    icon: UserRound,
  },
  {
    label: "Settings",
    path: "/beekeeper/settings",
    icon: Settings,
  },
];

const BeekeeperSidebar = ({
  mobileOpen = false,
  setMobileOpen,
}) => {
  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/30 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen?.(false)}
        />
      )}

      <aside
        className={`
          fixed
          inset-y-0
          left-0
          z-50
          flex
          w-64
          flex-col
          border-r
          border-slate-200
          bg-white
          transition-transform
          duration-300
          lg:translate-x-0
          ${
            mobileOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* =====================================================
            BRAND
        ====================================================== */}

        <div className="flex h-20 items-center justify-between border-b border-slate-100 px-5">

          <NavLink
            to="/beekeeper/dashboard"
            className="flex items-center gap-3"
            onClick={() => setMobileOpen?.(false)}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-xl shadow-sm">
              🐝
            </div>

            <div>
              <p className="text-base font-bold tracking-tight text-slate-900">
                HoneyChain
              </p>

              <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                Beekeeper Portal
              </p>
            </div>
          </NavLink>

          {/* Mobile close */}
          <button
            type="button"
            onClick={() => setMobileOpen?.(false)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 lg:hidden"
          >
            <X size={18} />
          </button>

        </div>


        {/* =====================================================
            NAVIGATION
        ====================================================== */}

        <nav className="flex-1 overflow-y-auto px-3 py-6">

          <SidebarSection title="Workspace">
            {navigation.map((item) => (
              <SidebarItem
                key={item.path}
                {...item}
                onClick={() => setMobileOpen?.(false)}
              />
            ))}
          </SidebarSection>


          <SidebarSection
            title="Account"
            className="mt-8"
          >
            {accountNavigation.map((item) => (
              <SidebarItem
                key={item.path}
                {...item}
                onClick={() => setMobileOpen?.(false)}
              />
            ))}
          </SidebarSection>

        </nav>


        {/* =====================================================
            BEEKEEPER STATUS
        ====================================================== */}

        <div className="border-t border-slate-100 p-3">

          <div className="rounded-xl bg-slate-50 p-3">

            <div className="flex items-center gap-3">

              <div className="relative">

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700">
                  BK
                </div>

                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-slate-50 bg-emerald-500" />

              </div>

              <div className="min-w-0 flex-1">

                <p className="truncate text-xs font-semibold text-slate-800">
                  Beekeeper
                </p>

                <div className="mt-0.5 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                  <span className="text-[10px] font-medium text-slate-400">
                    Account active
                  </span>
                </div>

              </div>

              <ChevronLeft
                size={14}
                className="text-slate-300"
              />

            </div>

          </div>

        </div>

      </aside>
    </>
  );
};


/* =============================================================
   SIDEBAR SECTION
============================================================= */

const SidebarSection = ({
  title,
  children,
  className = "",
}) => {
  return (
    <div className={className}>

      <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
        {title}
      </p>

      <div className="space-y-1">
        {children}
      </div>

    </div>
  );
};


/* =============================================================
   SIDEBAR ITEM
============================================================= */

const SidebarItem = ({
  label,
  path,
  icon: Icon,
  onClick,
}) => {
  return (
    <NavLink
      to={path}
      onClick={onClick}
      className={({ isActive }) =>
        `
          group
          flex
          items-center
          gap-3
          rounded-xl
          px-3
          py-2.5
          text-sm
          font-medium
          transition-all
          ${
            isActive
              ? "bg-amber-50 text-amber-700"
              : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
          }
        `
      }
    >
      {({ isActive }) => (
        <>
          <Icon
            size={17}
            strokeWidth={isActive ? 2.2 : 1.8}
            className={
              isActive
                ? "text-amber-600"
                : "text-slate-400 group-hover:text-slate-600"
            }
          />

          <span>{label}</span>

          {isActive && (
            <span className="ml-auto h-1.5 w-1.5 rounded-full bg-amber-500" />
          )}
        </>
      )}
    </NavLink>
  );
};

export default BeekeeperSidebar;