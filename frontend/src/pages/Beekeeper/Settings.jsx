import {
  Bell,
  Lock,
  Mail,
  Save,
  ShieldCheck,
  User,
} from "lucide-react";

import { useState } from "react";

const Settings = () => {
  const [saved, setSaved] = useState(false);

  const [settings, setSettings] = useState({
    name: "Beekeeper",
    email: "beekeeper@demo.com",
    phone: "+91 98765 43210",
    farmName: "Green Valley Apiary",
    location: "Nashik, Maharashtra",

    emailNotifications: true,
    batchNotifications: true,
    verificationNotifications: true,

    twoFactor: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = () => {
    localStorage.setItem(
      "honeychain_settings",
      JSON.stringify(settings)
    );

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  return (
    <div className="max-w-5xl">
      {/* Page header */}
      <div className="mb-8">
        <p className="text-sm font-medium text-amber-600">
          Account
        </p>

        <h1 className="mt-1 text-2xl font-bold text-gray-900">
          Settings
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Manage your profile, notifications and security preferences.
        </p>
      </div>

      <div className="space-y-6">

        {/* Profile */}
        <section className="rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              <User size={19} />
            </div>

            <div>
              <h2 className="font-semibold text-gray-900">
                Profile Information
              </h2>

              <p className="text-xs text-gray-400">
                Update your beekeeper and farm details.
              </p>
            </div>
          </div>

          <div className="grid gap-5 p-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Full Name
              </label>

              <input
                name="name"
                value={settings.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email Address
              </label>

              <input
                name="email"
                type="email"
                value={settings.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Phone Number
              </label>

              <input
                name="phone"
                value={settings.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Farm / Apiary Name
              </label>

              <input
                name="farmName"
                value={settings.farmName}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Farm Location
              </label>

              <input
                name="location"
                value={settings.location}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
              />
            </div>
          </div>
        </section>

        {/* Notifications */}
        <section className="rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              <Bell size={19} />
            </div>

            <div>
              <h2 className="font-semibold text-gray-900">
                Notifications
              </h2>

              <p className="text-xs text-gray-400">
                Choose what notifications you receive.
              </p>
            </div>
          </div>

          <div className="divide-y divide-gray-100">
            <Toggle
              title="Email Notifications"
              description="Receive important HoneyChain updates by email."
              name="emailNotifications"
              checked={settings.emailNotifications}
              onChange={handleChange}
            />

            <Toggle
              title="Batch Notifications"
              description="Get notified when your batch status changes."
              name="batchNotifications"
              checked={settings.batchNotifications}
              onChange={handleChange}
            />

            <Toggle
              title="Verification Notifications"
              description="Receive updates about batch verification."
              name="verificationNotifications"
              checked={settings.verificationNotifications}
              onChange={handleChange}
            />
          </div>
        </section>

        {/* Security */}
        <section className="rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              <ShieldCheck size={19} />
            </div>

            <div>
              <h2 className="font-semibold text-gray-900">
                Security
              </h2>

              <p className="text-xs text-gray-400">
                Protect your HoneyChain account.
              </p>
            </div>
          </div>

          <div className="divide-y divide-gray-100">
            <Toggle
              title="Two-Factor Authentication"
              description="Add an additional layer of security to your account."
              name="twoFactor"
              checked={settings.twoFactor}
              onChange={handleChange}
            />

            <button className="flex w-full items-center gap-3 px-5 py-4 text-left hover:bg-gray-50">
              <Lock size={18} className="text-gray-400" />

              <div>
                <p className="text-sm font-medium text-gray-800">
                  Change Password
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  Update your account password.
                </p>
              </div>
            </button>
          </div>
        </section>

        {/* Save */}
        <div className="flex items-center justify-end gap-4">
          {saved && (
            <p className="flex items-center gap-2 text-sm font-medium text-green-600">
              <ShieldCheck size={17} />
              Settings saved
            </p>
          )}

          <button
            onClick={handleSave}
            className="flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 font-semibold text-white shadow-lg shadow-amber-100 transition hover:bg-amber-600"
          >
            <Save size={18} />
            Save Changes
          </button>
        </div>

      </div>
    </div>
  );
};

const Toggle = ({
  title,
  description,
  name,
  checked,
  onChange,
}) => {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-5 px-5 py-4 hover:bg-gray-50">
      <div>
        <p className="text-sm font-medium text-gray-800">
          {title}
        </p>

        <p className="mt-1 text-xs text-gray-400">
          {description}
        </p>
      </div>

      <div className="relative shrink-0">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          className="peer sr-only"
        />

        <div className="h-6 w-11 rounded-full bg-gray-200 transition peer-checked:bg-amber-500" />

        <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow-sm transition peer-checked:translate-x-5" />
      </div>
    </label>
  );
};

export default Settings;