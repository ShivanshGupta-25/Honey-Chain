import { useEffect, useRef, useState } from "react";
import {
  Bell,
  Check,
  ChevronDown,
  LogOut,
  Menu,
  Search,
  Settings,
  ShieldCheck,
  User,
  X,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

const notifications = [
  {
    id: 1,
    title: "Batch verified",
    message: "HC-2026-00024 has been verified successfully.",
    time: "10 min ago",
    type: "success",
  },
  {
    id: 2,
    title: "Batch requires attention",
    message: "HC-2026-00022 is awaiting verification.",
    time: "2 hours ago",
    type: "warning",
  },
  {
    id: 3,
    title: "QR code generated",
    message: "QR code for HC-2026-00021 is ready.",
    time: "Yesterday",
    type: "success",
  },
];

const BeekeeperHeader = ({ setMobileOpen }) => {
  const navigate = useNavigate();

  const [notificationOpen, setNotificationOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  const notificationRef = useRef(null);
  const accountRef = useRef(null);

  /* =========================================================
     CLOSE DROPDOWNS WHEN CLICKING OUTSIDE
  ========================================================= */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setNotificationOpen(false);
      }

      if (
        accountRef.current &&
        !accountRef.current.contains(event.target)
      ) {
        setAccountOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /* =========================================================
     LOGOUT
  ========================================================= */
  const handleLogout = () => {
    localStorage.removeItem("honeychain_user");
    setAccountOpen(false);
    navigate("/");
  };

  return (
    <header
      className="
        sticky top-0 z-30
        flex h-[76px] items-center justify-between
        border-b border-slate-200/80
        bg-white/90
        px-4
        shadow-[0_1px_8px_rgba(15,23,42,0.03)]
        backdrop-blur-xl
        sm:px-6
        lg:px-8
      "
    >
      {/* =====================================================
          LEFT SECTION
      ====================================================== */}
      <div className="flex min-w-0 items-center gap-3 sm:gap-4">

        {/* Mobile Menu */}
        <button
          onClick={() => setMobileOpen(true)}
          aria-label="Open navigation"
          className="
            flex h-10 w-10 shrink-0
            items-center justify-center
            rounded-xl
            border border-slate-200
            bg-white
            text-slate-600
            shadow-sm
            transition-all duration-200
            hover:border-amber-200
            hover:bg-amber-50
            hover:text-amber-600
            lg:hidden
          "
        >
          <Menu size={21} strokeWidth={2.2} />
        </button>

        {/* Page Information */}
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h2
              className="
                truncate
                text-base font-bold
                tracking-tight
                text-slate-900
                sm:text-lg
              "
            >
              Beekeeper Dashboard
            </h2>

            {/* Verified Badge */}
            <span
              className="
                hidden items-center gap-1
                rounded-full
                bg-emerald-50
                px-2 py-1
                text-[9px] font-bold
                text-emerald-600
                ring-1 ring-emerald-100
                sm:flex
              "
            >
              <ShieldCheck size={11} />
              Verified
            </span>
          </div>

          <p
            className="
              mt-0.5 hidden
              text-xs font-medium
              text-slate-400
              sm:block
            "
          >
            Manage your honey traceability
          </p>
        </div>
      </div>

      {/* =====================================================
          RIGHT SECTION
      ====================================================== */}
      <div className="flex items-center gap-2 sm:gap-3">

        {/* =================================================
            SEARCH
        ================================================== */}
        <div
          className="
            hidden items-center gap-2.5
            rounded-xl
            border border-slate-200
            bg-slate-50/70
            px-3.5 py-2.5
            transition-all duration-200
            focus-within:border-amber-300
            focus-within:bg-white
            focus-within:ring-4
            focus-within:ring-amber-100/60
            md:flex
          "
        >
          <Search
            size={17}
            strokeWidth={2}
            className="shrink-0 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search batches..."
            className="
              w-32
              bg-transparent
              text-sm font-medium
              text-slate-700
              outline-none
              placeholder:text-slate-400
              lg:w-48
            "
          />

          <span
            className="
              hidden rounded-md
              border border-slate-200
              bg-white
              px-1.5 py-0.5
              text-[9px] font-semibold
              text-slate-400
              lg:block
            "
          >
            /
          </span>
        </div>

        {/* =================================================
            MOBILE SEARCH
        ================================================== */}
        <button
          aria-label="Search"
          className="
            flex h-10 w-10
            items-center justify-center
            rounded-xl
            border border-slate-200
            bg-white
            text-slate-500
            shadow-sm
            transition
            hover:border-amber-200
            hover:bg-amber-50
            hover:text-amber-600
            md:hidden
          "
        >
          <Search size={19} />
        </button>

        {/* =================================================
            NOTIFICATIONS
        ================================================== */}
        <div
          ref={notificationRef}
          className="relative"
        >
          <button
            onClick={() => {
              setNotificationOpen((prev) => !prev);
              setAccountOpen(false);
            }}
            aria-label="Notifications"
            className="
              group relative
              flex h-10 w-10
              items-center justify-center
              rounded-xl
              border border-slate-200
              bg-white
              text-slate-500
              shadow-sm
              transition-all duration-200
              hover:border-amber-200
              hover:bg-amber-50
              hover:text-amber-600
            "
          >
            <Bell
              size={19}
              strokeWidth={2}
              className="
                transition-transform duration-200
                group-hover:scale-105
              "
            />

            {notifications.length > 0 && (
              <span
                className="
                  absolute right-[7px] top-[6px]
                  h-2.5 w-2.5
                  rounded-full
                  border-2 border-white
                  bg-amber-500
                  shadow-sm
                "
              />
            )}
          </button>

          {/* Notification Dropdown */}
          {notificationOpen && (
            <div
              className="
                absolute right-0 mt-3
                w-[340px]
                max-w-[calc(100vw-2rem)]
                overflow-hidden
                rounded-2xl
                border border-slate-200
                bg-white
                shadow-2xl
                shadow-slate-900/10
              "
            >
              {/* Header */}
              <div
                className="
                  flex items-center justify-between
                  border-b border-slate-100
                  bg-slate-50/60
                  px-4 py-4
                "
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-slate-900">
                      Notifications
                    </h3>

                    <span
                      className="
                        rounded-full
                        bg-amber-100
                        px-1.5 py-0.5
                        text-[9px] font-bold
                        text-amber-700
                      "
                    >
                      {notifications.length}
                    </span>
                  </div>

                  <p className="mt-0.5 text-[10px] font-medium text-slate-400">
                    Recent account activity
                  </p>
                </div>

                <button
                  onClick={() => setNotificationOpen(false)}
                  aria-label="Close notifications"
                  className="
                    flex h-8 w-8
                    items-center justify-center
                    rounded-lg
                    text-slate-400
                    transition
                    hover:bg-white
                    hover:text-slate-600
                  "
                >
                  <X size={16} />
                </button>
              </div>

              {/* Notification List */}
              <div className="max-h-[360px] overflow-y-auto">
                {notifications.map((notification) => {
                  const success =
                    notification.type === "success";

                  return (
                    <div
                      key={notification.id}
                      className="
                        group flex gap-3
                        border-b border-slate-50
                        px-4 py-4
                        transition-colors
                        hover:bg-amber-50/40
                      "
                    >
                      {/* Icon */}
                      <div
                        className={`
                          flex h-9 w-9 shrink-0
                          items-center justify-center
                          rounded-xl
                          ring-1
                          ${
                            success
                              ? "bg-emerald-50 text-emerald-600 ring-emerald-100"
                              : "bg-amber-50 text-amber-600 ring-amber-100"
                          }
                        `}
                      >
                        {success ? (
                          <Check size={16} strokeWidth={2.5} />
                        ) : (
                          <Bell size={16} />
                        )}
                      </div>

                      {/* Content */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-xs font-bold text-slate-800">
                            {notification.title}
                          </p>

                          <span className="shrink-0 text-[9px] font-medium text-slate-400">
                            {notification.time}
                          </span>
                        </div>

                        <p className="mt-1 text-[11px] leading-5 text-slate-500">
                          {notification.message}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Footer */}
              <button
                onClick={() => {
                  setNotificationOpen(false);
                  navigate("/beekeeper/verification");
                }}
                className="
                  w-full
                  border-t border-slate-100
                  bg-white
                  py-3
                  text-xs font-bold
                  text-amber-600
                  transition
                  hover:bg-amber-50
                "
              >
                View all activity →
              </button>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="hidden h-8 w-px bg-slate-200 sm:block" />

        {/* =================================================
            ACCOUNT
        ================================================== */}
        <div
          ref={accountRef}
          className="relative"
        >
          <button
            onClick={() => {
              setAccountOpen((prev) => !prev);
              setNotificationOpen(false);
            }}
            aria-label="Account menu"
            className="
              group
              flex items-center gap-2
              rounded-xl
              p-1.5
              transition-all duration-200
              hover:bg-slate-50
            "
          >
            {/* Avatar */}
            <div
              className="
                relative
                flex h-9 w-9 shrink-0
                items-center justify-center
                rounded-full
                bg-gradient-to-br
                from-amber-400
                to-orange-500
                text-sm font-bold
                text-white
                shadow-sm
                shadow-amber-200
                ring-2 ring-white
              "
            >
              B

              {/* Online */}
              <span
                className="
                  absolute bottom-0 right-0
                  h-2.5 w-2.5
                  rounded-full
                  border-2 border-white
                  bg-emerald-500
                "
              />
            </div>

            {/* Account Info */}
            <div className="hidden text-left lg:block">
              <p
                className="
                  text-xs font-bold
                  leading-tight
                  text-slate-800
                "
              >
                Beekeeper
              </p>

              <p className="mt-0.5 text-[10px] font-medium text-slate-400">
                Verified account
              </p>
            </div>

            <ChevronDown
              size={15}
              className={`
                hidden text-slate-400
                transition-transform duration-200
                group-hover:text-slate-600
                lg:block
                ${accountOpen ? "rotate-180" : ""}
              `}
            />
          </button>

          {/* Account Dropdown */}
          {accountOpen && (
            <div
              className="
                absolute right-0 mt-3
                w-64
                overflow-hidden
                rounded-2xl
                border border-slate-200
                bg-white
                shadow-2xl
                shadow-slate-900/10
              "
            >
              {/* User Information */}
              <div
                className="
                  border-b border-slate-100
                  bg-gradient-to-r
                  from-amber-50/70
                  to-orange-50/40
                  px-4 py-4
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex h-11 w-11
                      items-center justify-center
                      rounded-full
                      bg-gradient-to-br
                      from-amber-400
                      to-orange-500
                      font-bold
                      text-white
                      shadow-sm
                    "
                  >
                    B
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-bold text-slate-900">
                      Beekeeper
                    </p>

                    <p className="mt-0.5 truncate text-[10px] font-medium text-slate-400">
                      beekeeper@demo.com
                    </p>

                    <div className="mt-1 flex items-center gap-1">
                      <ShieldCheck
                        size={11}
                        className="text-emerald-500"
                      />

                      <span className="text-[9px] font-bold text-emerald-600">
                        Verified
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Menu */}
              <div className="p-2">

                <Link
                  to="/beekeeper/profile"
                  onClick={() => setAccountOpen(false)}
                  className="
                    flex items-center gap-3
                    rounded-xl
                    px-3 py-2.5
                    text-xs font-medium
                    text-slate-600
                    transition
                    hover:bg-amber-50
                    hover:text-amber-700
                  "
                >
                  <User size={16} />
                  My Profile
                </Link>

                <Link
                  to="/beekeeper/settings"
                  onClick={() => setAccountOpen(false)}
                  className="
                    flex items-center gap-3
                    rounded-xl
                    px-3 py-2.5
                    text-xs font-medium
                    text-slate-600
                    transition
                    hover:bg-amber-50
                    hover:text-amber-700
                  "
                >
                  <Settings size={16} />
                  Settings
                </Link>

                <Link
                  to="/beekeeper/security"
                  onClick={() => setAccountOpen(false)}
                  className="
                    flex items-center gap-3
                    rounded-xl
                    px-3 py-2.5
                    text-xs font-medium
                    text-slate-600
                    transition
                    hover:bg-amber-50
                    hover:text-amber-700
                  "
                >
                  <ShieldCheck size={16} />
                  Security
                </Link>
              </div>

              {/* Logout */}
              <div className="border-t border-slate-100 p-2">
                <button
                  onClick={handleLogout}
                  className="
                    flex w-full items-center gap-3
                    rounded-xl
                    px-3 py-2.5
                    text-xs font-semibold
                    text-red-500
                    transition
                    hover:bg-red-50
                  "
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default BeekeeperHeader;