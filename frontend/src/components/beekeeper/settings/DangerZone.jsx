import {
  LogOut,
  TriangleAlert,
} from "lucide-react";

import SettingsSection from "./SettingsSection";

const DangerZone = ({
  onLogout,
}) => {
  return (
    <SettingsSection
      title="Danger Zone"
      description="Actions that can affect your account."
    >
      <div className="rounded-xl border border-red-200 bg-red-50/50 p-5">
        <div className="flex gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-red-500">
            <TriangleAlert size={18} />
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-800">
              Account Actions
            </h3>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              These actions can affect your
              access to Honey Chain. Proceed
              carefully.
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 border-t border-red-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-700">
              Sign out
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Sign out from this device.
            </p>
          </div>

          <button
            type="button"
            onClick={onLogout}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-red-200 bg-white px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50"
          >
            <LogOut size={16} />
            Sign Out
          </button>
        </div>
      </div>
    </SettingsSection>
  );
};

export default DangerZone;