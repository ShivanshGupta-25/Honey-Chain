import {
  BarChart3,
  Boxes,
  ClipboardCheck,
  Home,
  LogOut,
  QrCode,
  Settings,
  X,
  PlusCircle,
  ChevronRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Link, useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  {
    label: "Overview",
    path: "/beekeeper/dashboard",
    icon: Home,
  },
  {
    label: "My Batches",
    path: "/beekeeper/batches",
    icon: Boxes,
  },
  {
    label: "Register Batch",
    path: "/beekeeper/register",
    icon: PlusCircle,
  },
  {
    label: "QR Codes",
    path: "/beekeeper/qr-codes",
    icon: QrCode,
  },
  {
    label: "Verification",
    path: "/beekeeper/verification",
    icon: ClipboardCheck,
  },
];

const BeekeeperSidebar = ({ mobileOpen, setMobileOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("honeychain_user");
    navigate("/");
  };

  return (
    <>
      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-[2px] lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50
          flex w-[270px] flex-col
          overflow-hidden
          border-r border-slate-200/80
          bg-white
          shadow-[8px_0_30px_rgba(15,23,42,0.04)]
          transition-transform duration-300
          lg:translate-x-0
          ${
            mobileOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* =====================================================
            HEADER / BRAND
        ====================================================== */}
        <div className="relative border-b border-slate-100">
          {/* Subtle top accent */}
          <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400" />

          <div className="flex h-[82px] items-center justify-between px-5">
            <Link
              to="/"
              className="group flex items-center gap-3"
              onClick={() => setMobileOpen(false)}
            >
              {/* Logo */}
              <div
                className="
                  flex h-12 w-12 shrink-0 items-center justify-center
                  overflow-hidden rounded-xl
                  bg-amber-50
                  ring-1 ring-amber-100
                  transition duration-200
                  group-hover:scale-105
                "
              >
                <img
                  src="/images/Honeybeelogo.png"
                  alt="HoneyChain"
                  className="h-11 w-11 object-contain"
                />
              </div>

              {/* Brand */}
              <div className="leading-none">
                <h1 className="text-[19px] font-extrabold tracking-tight text-slate-900">
                  HONEY
                  <span className="text-amber-500">CHAIN</span>
                </h1>

                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                  Smart Beekeeping
                </p>
              </div>
            </Link>

            {/* Mobile Close */}
            <button
              onClick={() => setMobileOpen(false)}
              className="
                rounded-lg p-2 text-slate-400
                transition hover:bg-slate-100 hover:text-slate-700
                lg:hidden
              "
            >
              <X size={19} />
            </button>
          </div>
        </div>

        {/* =====================================================
            PROFILE / ROLE CARD
        ====================================================== */}
        <div className="px-4 pt-5">
          <div
            className="
              relative overflow-hidden
              rounded-2xl
              border border-amber-100
              bg-gradient-to-br
              from-amber-50
              via-yellow-50/70
              to-white
              p-3.5
            "
          >
            {/* Decorative glow */}
            <div className="absolute -right-5 -top-5 h-20 w-20 rounded-full bg-amber-200/30 blur-2xl" />

            <div className="relative flex items-center gap-3">
              {/* Avatar */}
              <div
                className="
                  flex h-11 w-11 shrink-0 items-center justify-center
                  rounded-xl
                  bg-gradient-to-br from-amber-400 to-orange-500
                  text-base font-bold text-white
                  shadow-md shadow-amber-200
                "
              >
                B
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <p className="truncate text-sm font-bold text-slate-800">
                    Beekeeper
                  </p>

                  <ShieldCheck
                    size={14}
                    className="shrink-0 text-green-500"
                  />
                </div>

                <p className="mt-0.5 truncate text-[11px] text-slate-400">
                  Verified account
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            NAVIGATION
        ====================================================== */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          {/* Workspace */}
          <div className="mb-3 flex items-center justify-between px-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
              Workspace
            </p>

            <Sparkles
              size={13}
              className="text-amber-400"
            />
          </div>

          <div className="space-y-1.5">
            {menuItems.map((item) => {
              const Icon = item.icon;

              const active =
                location.pathname === item.path ||
                location.pathname.startsWith(`${item.path}/`);

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`
                    group relative flex items-center gap-3
                    rounded-xl px-3.5 py-3
                    text-sm font-medium
                    transition-all duration-200
                    ${
                      active
                        ? `
                          bg-gradient-to-r
                          from-amber-50
                          to-orange-50/60
                          text-amber-700
                          shadow-sm
                        `
                        : `
                          text-slate-600
                          hover:bg-slate-50
                          hover:text-slate-900
                        `
                    }
                  `}
                >
                  {/* Active Indicator */}
                  {active && (
                    <span
                      className="
                        absolute left-0 top-1/2
                        h-7 w-1
                        -translate-y-1/2
                        rounded-r-full
                        bg-gradient-to-b
                        from-amber-400
                        to-orange-500
                      "
                    />
                  )}

                  {/* Icon Container */}
                  <span
                    className={`
                      flex h-9 w-9 shrink-0 items-center justify-center
                      rounded-lg
                      transition-all duration-200
                      ${
                        active
                          ? "bg-white text-amber-500 shadow-sm"
                          : "bg-transparent text-slate-400 group-hover:bg-white group-hover:text-slate-700"
                      }
                    `}
                  >
                    <Icon size={18} strokeWidth={2} />
                  </span>

                  <span className="flex-1">
                    {item.label}
                  </span>

                  {/* Arrow */}
                  <ChevronRight
                    size={15}
                    className={`
                      transition-all duration-200
                      ${
                        active
                          ? "translate-x-0 text-amber-400 opacity-100"
                          : "-translate-x-1 text-slate-300 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      }
                    `}
                  />
                </Link>
              );
            })}
          </div>

          {/* =====================================================
              INSIGHTS CARD
          ====================================================== */}
          <div className="my-6 h-px bg-slate-100" />

          <div className="mb-3 px-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
              Account
            </p>
          </div>

          <Link
            to="/beekeeper/settings"
            onClick={() => setMobileOpen(false)}
            className={`
              group flex items-center gap-3
              rounded-xl px-3.5 py-3
              text-sm font-medium
              transition
              ${
                location.pathname === "/beekeeper/settings"
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }
            `}
          >
            <span
              className="
                flex h-9 w-9 items-center justify-center
                rounded-lg bg-slate-50
                text-slate-500
                group-hover:bg-white
              "
            >
              <Settings size={18} />
            </span>

            <span className="flex-1">
              Settings
            </span>

            <ChevronRight
              size={15}
              className="text-slate-300"
            />
          </Link>

          {/* Trust / Ecosystem Card */}
          <div
            className="
              mt-6 overflow-hidden
              rounded-2xl
              border border-slate-100
              bg-slate-50/80
              p-4
            "
          >
            <div className="flex items-start gap-3">
              <div
                className="
                  flex h-9 w-9 shrink-0 items-center justify-center
                  rounded-xl
                  bg-white
                  text-amber-500
                  shadow-sm
                "
              >
                <BarChart3 size={17} />
              </div>

              <div>
                <p className="text-xs font-bold text-slate-800">
                  HoneyChain Insights
                </p>

                <p className="mt-1 text-[10px] leading-relaxed text-slate-400">
                  Monitor your batches, verification
                  and beekeeping activity.
                </p>
              </div>
            </div>
          </div>
        </nav>

        {/* =====================================================
            FOOTER / LOGOUT
        ====================================================== */}
        <div className="border-t border-slate-100 bg-white p-4">
          <div
            className="
              flex items-center gap-3
              rounded-xl
              border border-slate-100
              bg-slate-50/80
              p-3
            "
          >
            {/* User */}
            <Link
                to="/beekeeper/profile"
                className="flex items-center gap-3 rounded-xl bg-gray-50 p-3 transition hover:bg-amber-50"
            >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-200 font-semibold text-amber-700">
                B
                </div>

                <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-gray-800">
                    Beekeeper
                </p>

                <p className="truncate text-xs text-gray-400">
                    beekeeper@demo.com
                </p>
                </div>

                <span className="text-gray-400">
                →
                </span>
            </Link>
          </div>

          {/* Footer text */}
          <p className="mt-3 text-center text-[9px] font-medium text-slate-300">
            Honey Chain • Smart Beekeeping
          </p>
        </div>
      </aside>
    </>
  );
};

export default BeekeeperSidebar;