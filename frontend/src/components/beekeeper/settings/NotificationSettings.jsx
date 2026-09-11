import {
  Bell,
  Cpu,
  Mail,
  PackageCheck,
  Save,
} from "lucide-react";

import SettingsSection from "./SettingsSection";
import SettingsRow from "./SettingsRow";
import SettingsToggle from "./SettingsToggle";

const NotificationSettings = ({
  settings,
  onChange,
  onSave,
  loading,
}) => {
  const notifications =
    settings.notifications;

  return (
    <SettingsSection
      title="Notifications"
      description="Choose which Honey Chain alerts you want to receive."
    >
      <SettingsRow
        icon={Cpu}
        title="Hive Health Alerts"
        description="Receive alerts when hive health, environmental conditions or IoT readings require attention."
      >
        <SettingsToggle
          checked={notifications.hiveHealth}
          onChange={(value) =>
            onChange({
              notifications: {
                ...notifications,
                hiveHealth: value,
              },
            })
          }
        />
      </SettingsRow>

      <SettingsRow
        icon={PackageCheck}
        title="Batch Updates"
        description="Get notified about honey batch registration, processing and traceability updates."
      >
        <SettingsToggle
          checked={notifications.batchUpdates}
          onChange={(value) =>
            onChange({
              notifications: {
                ...notifications,
                batchUpdates: value,
              },
            })
          }
        />
      </SettingsRow>

      <SettingsRow
        icon={Bell}
        title="System Notifications"
        description="Receive important system announcements, maintenance notices and account alerts."
      >
        <SettingsToggle
          checked={notifications.system}
          onChange={(value) =>
            onChange({
              notifications: {
                ...notifications,
                system: value,
              },
            })
          }
        />
      </SettingsRow>

      <SettingsRow
        icon={Mail}
        title="Email Notifications"
        description="Receive important Honey Chain notifications through email."
      >
        <SettingsToggle
          checked={notifications.email}
          onChange={(value) =>
            onChange({
              notifications: {
                ...notifications,
                email: value,
              },
            })
          }
        />
      </SettingsRow>

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
            : "Save Preferences"}
        </button>
      </div>
    </SettingsSection>
  );
};

export default NotificationSettings;