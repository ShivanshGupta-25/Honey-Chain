import {
  Bell,
  Globe,
  Moon,
  ArrowLeft,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const Settings = () => {
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  
    const [language, setLanguage] = useState("English");
  
    const { theme, changeTheme } = useTheme();

  return (
    <div className="settings-page min-h-screen p-4 sm:p-6 lg:p-8">

      {/* Back */}
      <Link
        to="/beekeeper/dashboard"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-800"
      >
        <ArrowLeft size={17} />
        Back to Dashboard
      </Link>

      {/* Settings Card */}
      <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

        {/* Header */}
        <div className="border-b border-slate-100 px-6 py-6 sm:px-8">
          <h1 className="text-xl font-bold text-slate-800">
            Settings
          </h1>

          <p className="mt-1 text-sm text-slate-400">
            Manage your account preferences
          </p>
        </div>


        {/* Settings */}
        <div className="divide-y divide-slate-100">

          {/* Notifications */}
          <div className="flex items-center justify-between gap-4 px-6 py-5 sm:px-8">

            <div className="flex items-center gap-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-slate-500">
                <Bell size={18} />
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-700">
                  Notifications
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Receive alerts and important updates
                </p>
              </div>

            </div>

        

            <button
                type="button"
                onClick={() => 
                    setNotificationsEnabled((prev) => !prev)
                }
                className={`h-6 w-11 rounded-full p-1 transition ${
                    notificationsEnabled
                    ? "bg-amber-500"
                    : "bg-slate-300"
                }`}
            >
                <div
                    className={`h-4 w-4 rounded-full bg-white shadow-sm transition ${
                        notificationsEnabled
                        ? "translate-x-5"
                        : "translate-x-0"
                    }`}
                />
            </button>

          </div>


          {/* Language */}
          <div className="flex items-center justify-between gap-4 px-6 py-5 sm:px-8">

            <div className="flex items-center gap-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-slate-500">
                <Globe size={18} />
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-700">
                  Language
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Choose your preferred language
                </p>
              </div>

            </div>

            <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 outline-none transition focus:border-amber-300 focus:ring-2 focus:ring-amber-100"
            >
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
            </select>

          </div>


          {/* Appearance */}
          <div className="flex items-center justify-between gap-4 px-6 py-5 sm:px-8">

            <div className="flex items-center gap-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-slate-500">
                <Moon size={18} />
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-700">
                  Appearance
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Choose how the dashboard looks
                </p>
              </div>

            </div>

            <select
                value={theme}
                onChange={(e) => changeTheme(e.target.value)}
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 outline-none transition focus:border-amber-300 focus:ring-2 focus:ring-amber-100"
            >
                <option value="Light">Light</option>
                <option value="Dark">Dark</option>
            </select>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Settings;