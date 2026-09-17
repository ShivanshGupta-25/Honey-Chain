
import {
  UserRound,
  Settings,
  ShieldCheck,
  LogOut,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { logout } from "../../../utils/auth";

const AccountMenu = ({ onClose }) => {
  const navigate = useNavigate();

  // ========================================
  // Handle Logout
  // ========================================

  const handleLogout = () => {
    // Clear authentication data
    logout();

    // Close account menu
    onClose();

    // Redirect to login page
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <div className="account-menu absolute right-0 top-14 z-50 w-72 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">

      {/* Profile Header */}
      <div className="border-b border-slate-100 px-5 py-4">
        <div className="flex items-center gap-3">

          {/* Avatar */}
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700">
            B
          </div>

          {/* User Information */}
          <div className="min-w-0 flex-1">

            <p className="truncate text-sm font-semibold text-slate-800">
              Beekeeper
            </p>

            <p className="truncate text-xs text-slate-400">
              beekeeper@demo.com
            </p>

            <div className="mt-1 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

              <span className="text-[10px] font-medium text-emerald-600">
                Verified
              </span>
            </div>

          </div>

        </div>
      </div>

      {/* Menu Options */}
      <div className="p-2">

        {/* My Profile */}
        <button
          type="button"
          onClick={() => {
            onClose();
            navigate("/beekeeper/profile");
          }}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition hover:bg-slate-50"
        >
          <UserRound
            size={17}
            className="text-slate-500"
          />

          <span className="text-sm font-medium text-slate-700">
            My Profile
          </span>
        </button>

        {/* Settings */}
        <button
          type="button"
          onClick={() => {
            onClose();
            navigate("/beekeeper/settings");
          }}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition hover:bg-slate-50"
        >
          <Settings
            size={17}
            className="text-slate-500"
          />

          <span className="text-sm font-medium text-slate-700">
            Settings
          </span>
        </button>

        {/* Security */}
        <button
          type="button"
          onClick={() => {
            onClose();
            navigate("/beekeeper/settings");
          }}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition hover:bg-slate-50"
        >
          <ShieldCheck
            size={17}
            className="text-slate-500"
          />

          <span className="text-sm font-medium text-slate-700">
            Security
          </span>
        </button>

      </div>

      {/* Logout */}
      <div className="border-t border-slate-100 p-2">

        <button
          type="button"
          onClick={handleLogout}
          className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition hover:bg-red-50"
        >
          <LogOut
            size={17}
            className="text-red-500 transition group-hover:text-red-600"
          />

          <span className="text-sm font-medium text-red-600">
            Logout
          </span>
        </button>

      </div>

    </div>
  );
};

export default AccountMenu;