import {
  Eye,
  Lock,
  Save,
  Users,
} from "lucide-react";

import SettingsSection from "./SettingsSection";
import SettingsRow from "./SettingsRow";

const PrivacySettings = ({
  settings,
  onChange,
  onSave,
  loading,
}) => {
  return (
    <SettingsSection
      title="Privacy"
      description="Control how your profile information is shared."
    >
      <SettingsRow
        icon={Eye}
        title="Profile Visibility"
        description="Control who can see your beekeeper profile information."
      >
        <select
          value={
            settings.privacy
              .profileVisibility
          }
          onChange={(e) =>
            onChange({
              privacy: {
                ...settings.privacy,
                profileVisibility:
                  e.target.value,
              },
            })
          }
          className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
        >
          <option value="private">
            Private
          </option>

          <option value="organization">
            Organization
          </option>
        </select>
      </SettingsRow>

      <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50 p-4">
        <div className="flex gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-slate-500">
            {settings.privacy
              .profileVisibility ===
            "private" ? (
              <Lock size={17} />
            ) : (
              <Users size={17} />
            )}
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-700">
              {settings.privacy
                .profileVisibility ===
              "private"
                ? "Private profile"
                : "Organization profile"}
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-400">
              Your profile visibility controls
              will become more useful when
              Honey Chain organizations and
              beekeeper networks are connected.
            </p>
          </div>
        </div>
      </div>

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
            : "Save Privacy Settings"}
        </button>
      </div>
    </SettingsSection>
  );
};

export default PrivacySettings;