
import { useEffect, useRef, useState } from "react";
import {
  Bell,
  ChevronDown,
  CircleHelp,
  LogOut,
  Menu,
  Settings,
  ShieldCheck,
  UserRound,
  X,
  CheckCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ConsumerHeader = ({
  onMenuClick,
  title = "Dashboard",
  subtitle = "Welcome back! Explore your honey journey.",
}) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Welcome to Honey Chain",
      message: "Verify your first honey batch to explore its journey.",
      time: "Just now",
      read: false,
      icon: ShieldCheck,
    },
    {
      id: 2,
      title: "Explore Honey Traceability",
      message: "Discover how your honey travels from hive to jar.",
      time: "Recently",
      read: false,
      icon: CircleHelp,
    },
  ]);

  const profileRef = useRef(null);
  const notificationRef = useRef(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse stored user:", error);
        setUser(null);
      }
    }
  }, []);

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

  const displayName =
    user?.name ||
    user?.fullName ||
    user?.username ||
    user?.email?.split("@")[0] ||
    "Consumer";

  const displayEmail = user?.email || "Welcome to Honey Chain";

  const initials = displayName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((name) => name[0])
    .join("")
    .toUpperCase();

  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  const handleNavigate = (path) => {
    setIsProfileOpen(false);
    setIsNotificationOpen(false);
    navigate(path);
  };

  const handleMarkAllRead = () => {
    setNotifications((previous) =>
      previous.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
  };

  const handleNotificationClick = (id) => {
    setNotifications((previous) =>
      previous.map((notification) =>
        notification.id === id
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("authToken");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");

    setIsProfileOpen(false);
    navigate("/login", { replace: true });
  };

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="flex min-h-[84px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* Left Section */}
        <div className="flex min-w-0 items-center gap-3">
          {/* Mobile Menu */}
          <button
            type="button"
            onClick={onMenuClick}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-amber-200 hover:bg-amber-50 hover:text-amber-600 lg:hidden"
            aria-label="Open navigation"
          >
            <Menu size={21} />
          </button>

          {/* Page Title */}
          <div className="min-w-0">
            <h1 className="truncate text-xl font-bold tracking-tight text-slate-800 sm:text-2xl">
              {title}
            </h1>

            <p className="mt-0.5 hidden max-w-[460px] truncate text-sm text-slate-500 sm:block">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          {/* Notifications */}
          <div className="relative" ref={notificationRef}>
            <button
              type="button"
              onClick={() => {
                setIsNotificationOpen((previous) => !previous);
                setIsProfileOpen(false);
              }}
              className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-amber-200 hover:bg-amber-50 hover:text-amber-600"
              aria-label={`Notifications${
                unreadCount ? `, ${unreadCount} unread` : ""
              }`}
              aria-expanded={isNotificationOpen}
            >
              <Bell size={20} />

              {unreadCount > 0 && (
                <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-amber-500 px-1 text-[9px] font-bold text-white ring-2 ring-white">
                  {unreadCount > 9 ? "9+" : unreadCount}
                </span>
              )}
            </button>

            {isNotificationOpen && (
              <div className="absolute right-0 top-14 z-50 w-[min(360px,calc(100vw-32px))] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10">
                {/* Notification Header */}
                <div className="flex items-center justify-between border-b border-slate-100 px-4 py-4">
                  <div>
                    <h3 className="text-sm font-bold text-slate-800">
                      Notifications
                    </h3>

                    <p className="mt-0.5 text-xs text-slate-500">
                      {unreadCount > 0
                        ? `${unreadCount} unread notification${
                            unreadCount > 1 ? "s" : ""
                          }`
                        : "You're all caught up"}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleMarkAllRead}
                    disabled={unreadCount === 0}
                    className="flex items-center gap-1 text-xs font-semibold text-amber-600 transition hover:text-amber-700 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <CheckCheck size={14} />
                    Read all
                  </button>
                </div>

                {/* Notifications List */}
                <div className="max-h-[350px] overflow-y-auto">
                  {notifications.length > 0 ? (
                    notifications.map((notification) => {
                      const Icon = notification.icon;

                      return (
                        <button
                          type="button"
                          key={notification.id}
                          onClick={() =>
                            handleNotificationClick(notification.id)
                          }
                          className={`flex w-full gap-3 border-b border-slate-100 px-4 py-4 text-left transition hover:bg-slate-50 ${
                            !notification.read ? "bg-amber-50/40" : ""
                          }`}
                        >
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                            <Icon size={17} />
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-2">
                              <p className="text-xs font-bold text-slate-800">
                                {notification.title}
                              </p>

                              {!notification.read && (
                                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                              )}
                            </div>

                            <p className="mt-1 text-xs leading-relaxed text-slate-500">
                              {notification.message}
                            </p>

                            <p className="mt-1.5 text-[10px] text-slate-400">
                              {notification.time}
                            </p>
                          </div>
                        </button>
                      );
                    })
                  ) : (
                    <div className="px-4 py-10 text-center">
                      <Bell
                        size={24}
                        className="mx-auto text-slate-300"
                      />

                      <p className="mt-2 text-sm font-medium text-slate-500">
                        No notifications yet
                      </p>
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="border-t border-slate-100 p-3">
                  <button
                    type="button"
                    onClick={() => handleNavigate("/consumer/notifications")}
                    className="w-full rounded-xl py-2 text-xs font-semibold text-amber-600 transition hover:bg-amber-50"
                  >
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="hidden h-8 w-px bg-slate-200 sm:block" />

          {/* Profile Dropdown */}
          <div className="relative" ref={profileRef}>
            <button
              type="button"
              onClick={() => {
                setIsProfileOpen((previous) => !previous);
                setIsNotificationOpen(false);
              }}
              className="flex items-center gap-2 rounded-xl p-1.5 transition hover:bg-slate-50 sm:gap-3"
              aria-label="Open profile menu"
              aria-expanded={isProfileOpen}
            >
              {/* Avatar */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-sm font-bold text-amber-700 ring-1 ring-amber-200">
                {user?.avatar || user?.profileImage ? (
                  <img
                    src={user.avatar || user.profileImage}
                    alt={displayName}
                    className="h-full w-full rounded-xl object-cover"
                  />
                ) : (
                  initials || "C"
                )}
              </div>

              {/* User Info */}
              <div className="hidden max-w-[150px] text-left md:block">
                <p className="truncate text-sm font-semibold text-slate-800">
                  {displayName}
                </p>

                <p className="truncate text-[11px] text-slate-500">
                  {displayEmail}
                </p>
              </div>

              <ChevronDown
                size={16}
                className={`hidden text-slate-400 transition-transform md:block ${
                  isProfileOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 top-14 z-50 w-[min(280px,calc(100vw-32px))] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10">
                {/* User Summary */}
                <div className="border-b border-slate-100 bg-slate-50/70 px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 font-bold text-amber-700">
                      {initials || "C"}
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-slate-800">
                        {displayName}
                      </p>

                      <p className="truncate text-xs text-slate-500">
                        {displayEmail}
                      </p>

                      <span className="mt-1 inline-flex rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold capitalize text-amber-700">
                        Consumer
                      </span>
                    </div>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="p-2">
                  <button
                    type="button"
                    onClick={() => handleNavigate("/consumer/profile")}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-amber-50 hover:text-amber-700"
                  >
                    <UserRound size={17} />
                    My Profile
                  </button>

                  <button
                    type="button"
                    onClick={() => handleNavigate("/consumer/settings")}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-amber-50 hover:text-amber-700"
                  >
                    <Settings size={17} />
                    Settings
                  </button>

                  <button
                    type="button"
                    onClick={() => handleNavigate("/consumer/help")}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-amber-50 hover:text-amber-700"
                  >
                    <CircleHelp size={17} />
                    Help & Support
                  </button>
                </div>

                {/* Logout */}
                <div className="border-t border-slate-100 p-2">
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-red-500 transition hover:bg-red-50 hover:text-red-600"
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

export default ConsumerHeader;