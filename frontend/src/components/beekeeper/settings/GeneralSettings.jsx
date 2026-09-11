import {
  CalendarDays,
  Globe2,
  Languages,
  Moon,
  Save,
} from "lucide-react";

import SettingsSection from "./SettingsSection";
import SettingsRow from "./SettingsRow";

import { useTheme } from "../../../context/ThemeContext";

const GeneralSettings = ({
  settings,
  onChange,
  onSave,
  loading,
}) => {
  const { theme, changeTheme } = useTheme();

  return (
    <SettingsSection
      title="General"
      description="Manage your application preferences."
    >
      <div>

        {/* ========================================
            Language
        ======================================== */}

        <SettingsRow
          icon={Languages}
          title="Language"
          description="Choose the language used throughout Honey Chain."
        >
          <select
            value={settings.language}
            onChange={(e) =>
              onChange({
                language: e.target.value,
              })
            }
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
          >
            <option value="en">
              English
            </option>
          </select>
        </SettingsRow>


        {/* ========================================
            Timezone
        ======================================== */}

        <SettingsRow
          icon={Globe2}
          title="Timezone"
          description="Used for timestamps, alerts and activity records."
        >
          <select
            value={settings.timezone}
            onChange={(e) =>
              onChange({
                timezone: e.target.value,
              })
            }
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 sm:w-52"
          >
            <option value="Asia/Kolkata">
              India Standard Time
            </option>

            <option value="UTC">
              UTC
            </option>
          </select>
        </SettingsRow>


        {/* ========================================
            Date Format
        ======================================== */}

        <SettingsRow
          icon={CalendarDays}
          title="Date Format"
          description="Choose how dates are displayed."
        >
          <select
            value={settings.dateFormat}
            onChange={(e) =>
              onChange({
                dateFormat: e.target.value,
              })
            }
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
          >
            <option value="DD/MM/YYYY">
              DD/MM/YYYY
            </option>

            <option value="MM/DD/YYYY">
              MM/DD/YYYY
            </option>

            <option value="YYYY-MM-DD">
              YYYY-MM-DD
            </option>
          </select>
        </SettingsRow>


        {/* ========================================
            Appearance
        ======================================== */}

        <SettingsRow
          icon={Moon}
          title="Appearance"
          description="Choose how your Honey Chain dashboard looks."
        >
          <select
            value={theme}
            onChange={(e) =>
              changeTheme(e.target.value)
            }
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
          >
            <option value="Light">
              Light
            </option>

            <option value="Dark">
              Dark
            </option>
          </select>
        </SettingsRow>

      </div>


      {/* ========================================
          Save Changes
      ======================================== */}

      <div className="mt-6 flex justify-end">
        <button
          type="button"
          onClick={onSave}
          disabled={loading}
          className="inline-flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:opacity-60"
        >
          <Save size={16} />

          {loading
            ? "Saving..."
            : "Save Changes"}
        </button>
      </div>
    </SettingsSection>
  );
};

export default GeneralSettings;