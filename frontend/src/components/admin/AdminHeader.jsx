
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Bell,
  Search,
  ChevronDown,
  UserRound,
  Settings,
  ShieldCheck,
  LogOut,
  Menu,
  X,
  CheckCheck,
} from "lucide-react";

const AdminHeader = ({
  onMenuClick = () => {},
  title = "Dashboard",
  subtitle = "Welcome back, Administrator",
}) => {
  const navigate = useNavigate();

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const profileRef = useRef(null);
  const notificationRef = useRef(null);

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New beekeeper registration",
      message: "A new beekeeper has registered on the platform.",
      time: "10 min ago",
      unread: true,
      type: "user",
    },
    {
      id: 2,
      title: "Verification pending",
      message: "A honey batch is waiting for verification.",
      time: "30 min ago",
      unread: true,
      type: "verification",
    },
    {
      id: 3,
      title: "System activity",
      message: "Daily system activity report is available.",
      time: "1 hour ago",
      unread: false,
      type: "system",
    },
  ]);

  const unreadCount = notifications.filter(
    (notification) => notification.unread
  ).length;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setIsProfileOpen(false);
      }

      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setIsNotificationOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("authToken");
    localStorage.removeItem("accessToken");

    navigate("/login", { replace: true });
  };

  const markAllAsRead = () => {
    setNotifications((previous) =>
      previous.map((notification) => ({
        ...notification,
        unread: false,
      }))
    );
  };

  const handleNotificationClick = (notification) => {
    setNotifications((previous) =>
      previous.map((item) =>
        item.id === notification.id
          ? { ...item, unread: false }
          : item
      )
    );

    setIsNotificationOpen(false);

    if (notification.type === "verification") {
      navigate("/admin/verification");
    } else if (notification.type === "user") {
      navigate("/admin/users");
    }
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    const query = searchQuery.trim();

    if (!query) return;

    navigate(`/admin/users?search=${encodeURIComponent(query)}`);
    setSearchQuery("");
  };

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200
      bg-white/95 backdrop-blur-xl">

      <div className="flex min-h-[84px] items-center justify-between
        gap-4 px-4 sm:px-6 lg:px-8">

        {/* Left Section */}
        <div className="flex min-w-0 items-center gap-3">

          {/* Mobile Menu */}
          <button
            type="button"
            onClick={onMenuClick}
            className="flex h-10 w-10 shrink-0 items-center justify-center
              rounded-xl border border-slate-200 text-slate-600
              transition hover:bg-slate-100 lg:hidden"
            aria-label="Open navigation menu"
          >
            <Menu size={20} />
          </button>

          {/* Page Heading */}
          <div className="min-w-0">
            <h1 className="truncate text-lg font-bold tracking-tight
              text-slate-900 sm:text-xl">
              {title}
            </h1>

            <p className="hidden truncate text-xs text-slate-500 sm:block">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-4">

          {/* Search */}
          <form
            onSubmit={handleSearchSubmit}
            className="hidden items-center md:flex"
          >
            <div className="relative">
              <Search
                size={17}
                className="pointer-events-none absolute left-3
                  top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search users..."
                className="h-10 w-44 rounded-xl border border-slate-200
                  bg-slate-50 pl-10 pr-3 text-sm text-slate-700
                  outline-none transition placeholder:text-slate-400
                  focus:border-amber-400 focus:bg-white
                  focus:ring-2 focus:ring-amber-100 lg:w-56"
                aria-label="Search users"
              />
            </div>
          </form>

          {/* Notifications */}
          <div className="relative" ref={notificationRef}>
            <button
              type="button"
              onClick={() => {
                setIsNotificationOpen((previous) => !previous);
                setIsProfileOpen(false);
              }}
              className="relative flex h-10 w-10 items-center
                justify-center rounded-xl border border-slate-200
                text-slate-600 transition hover:bg-slate-100
                hover:text-slate-900"
              aria-label="Open notifications"
              aria-expanded={isNotificationOpen}
            >
              <Bell size={19} />

              {unreadCount > 0 && (
                <span className="absolute right-1 top-1 flex h-4
                  min-w-4 items-center justify-center rounded-full
                  bg-amber-400 px-1 text-[9px] font-bold text-amber-950
                  ring-2 ring-white">
                  {unreadCount > 9 ? "9+" : unreadCount}
                </span>
              )}
            </button>

            {isNotificationOpen && (
              <div className="absolute right-0 top-12 z-50 w-[min(360px,calc(100vw-2rem))]
                overflow-hidden rounded-2xl border border-slate-200
                bg-white shadow-2xl shadow-slate-900/10">

                {/* Notification Header */}
                <div className="flex items-center justify-between
                  border-b border-slate-100 px-4 py-4">

                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Notifications
                    </h3>

                    <p className="mt-0.5 text-xs text-slate-500">
                      {unreadCount} unread notifications
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={markAllAsRead}
                    className="flex items-center gap-1 text-xs font-semibold
                      text-amber-700 transition hover:text-amber-900"
                  >
                    <CheckCheck size={14} />
                    Mark all read
                  </button>
                </div>

                {/* Notification List */}
                <div className="max-h-80 overflow-y-auto">

                  {notifications.length === 0 ? (
                    <div className="px-4 py-10 text-center">
                      <Bell
                        size={24}
                        className="mx-auto mb-2 text-slate-300"
                      />

                      <p className="text-sm text-slate-500">
                        No notifications
                      </p>
                    </div>
                  ) : (
                    notifications.map((notification) => (
                      <button
                        key={notification.id}
                        type="button"
                        onClick={() =>
                          handleNotificationClick(notification)
                        }
                        className={`flex w-full gap-3 border-b border-slate-100
                          px-4 py-4 text-left transition hover:bg-slate-50
                          ${
                            notification.unread
                              ? "bg-amber-50/40"
                              : "bg-white"
                          }`}
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center
                          justify-center rounded-xl bg-amber-100
                          text-amber-700">
                          {notification.type === "user" ? (
                            <UserRound size={17} />
                          ) : notification.type === "verification" ? (
                            <ShieldCheck size={17} />
                          ) : (
                            <Bell size={17} />
                          )}
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between
                            gap-2">
                            <p className="text-xs font-bold text-slate-800">
                              {notification.title}
                            </p>

                            {notification.unread && (
                              <span className="mt-1 h-2 w-2 shrink-0
                                rounded-full bg-amber-500" />
                            )}
                          </div>

                          <p className="mt-1 text-xs leading-relaxed
                            text-slate-500">
                            {notification.message}
                          </p>

                          <p className="mt-2 text-[10px] font-medium
                            text-slate-400">
                            {notification.time}
                          </p>
                        </div>
                      </button>
                    ))
                  )}
                </div>

                {/* Footer */}
                <div className="border-t border-slate-100 px-4 py-3">
                  <button
                    type="button"
                    onClick={() => {
                      setIsNotificationOpen(false);
                      navigate("/admin/notifications");
                    }}
                    className="w-full text-center text-xs font-semibold
                      text-amber-700 transition hover:text-amber-900"
                  >
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="hidden h-8 w-px bg-slate-200 sm:block" />

          {/* Profile */}
          <div className="relative" ref={profileRef}>
            <button
              type="button"
              onClick={() => {
                setIsProfileOpen((previous) => !previous);
                setIsNotificationOpen(false);
              }}
              className="flex items-center gap-2 rounded-xl p-1
                transition hover:bg-slate-100"
              aria-label="Open profile menu"
              aria-expanded={isProfileOpen}
            >
              <div className="flex h-10 w-10 items-center justify-center
                rounded-xl bg-amber-100 text-sm font-bold text-amber-800">
                A
              </div>

              <div className="hidden text-left lg:block">
                <p className="max-w-28 truncate text-xs font-bold
                  text-slate-800">
                  Administrator
                </p>

                <p className="text-[10px] text-slate-400">
                  Super Admin
                </p>
              </div>

              <ChevronDown
                size={16}
                className={`hidden text-slate-400 transition-transform
                  lg:block ${isProfileOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 top-12 z-50 w-64
                overflow-hidden rounded-2xl border border-slate-200
                bg-white shadow-2xl shadow-slate-900/10">

                {/* Profile Info */}
                <div className="border-b border-slate-100
                  bg-slate-50/70 px-4 py-4">

                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center
                      rounded-xl bg-amber-100 font-bold text-amber-800">
                      A
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-slate-900">
                        Administrator
                      </p>

                      <p className="truncate text-xs text-slate-500">
                        Platform Administrator
                      </p>
                    </div>
                  </div>
                </div>

                {/* Menu */}
                <div className="p-2">

                  <button
                    type="button"
                    onClick={() => {
                      setIsProfileOpen(false);
                      navigate("/admin/profile");
                    }}
                    className="flex w-full items-center gap-3 rounded-xl
                      px-3 py-3 text-sm font-medium text-slate-600
                      transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    <UserRound size={17} />
                    Profile
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setIsProfileOpen(false);
                      navigate("/admin/settings");
                    }}
                    className="flex w-full items-center gap-3 rounded-xl
                      px-3 py-3 text-sm font-medium text-slate-600
                      transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    <Settings size={17} />
                    Settings
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setIsProfileOpen(false);
                      navigate("/admin/security");
                    }}
                    className="flex w-full items-center gap-3 rounded-xl
                      px-3 py-3 text-sm font-medium text-slate-600
                      transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    <ShieldCheck size={17} />
                    Security
                  </button>
                </div>

                {/* Logout */}
                <div className="border-t border-slate-100 p-2">
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 rounded-xl
                      px-3 py-3 text-sm font-medium text-red-500
                      transition hover:bg-red-50 hover:text-red-600"
                  >
                    <LogOut size={17} />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;