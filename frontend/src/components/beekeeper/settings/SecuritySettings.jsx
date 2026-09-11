import {
  Clock3,
  KeyRound,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

import SettingsSection from "./SettingsSection";
import SettingsRow from "./SettingsRow";

const SecuritySettings = ({
  profile,
  onChangePassword,
}) => {
  return (
    <SettingsSection
      title="Security"
      description="Manage your account security and authentication."
    >
      <SettingsRow
        icon={KeyRound}
        title="Password"
        description="Change your Honey Chain account password."
      >
        <button
          type="button"
          onClick={onChangePassword}
          className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          Change Password
        </button>
      </SettingsRow>

      <SettingsRow
        icon={Clock3}
        title="Account Activity"
        description="Review the basic activity information associated with your account."
      >
        <span className="text-xs font-medium text-slate-500">
          {profile?.createdAt
            ? `Member since ${new Date(
                profile.createdAt
              ).toLocaleDateString(
                "en-IN",
                {
                  month: "short",
                  year: "numeric",
                }
              )}`
            : "Unavailable"}
        </span>
      </SettingsRow>

      <SettingsRow
        icon={ShieldCheck}
        title="Account Protection"
        description="Your account is protected using authenticated API access."
      >
        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
          Protected
        </span>
      </SettingsRow>

      <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/60 p-4">
        <div className="flex gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-blue-600">
            <LockKeyhole size={17} />
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-700">
              Keep your account secure
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              Never share your password or
              authentication credentials with
              anyone.
            </p>
          </div>
        </div>
      </div>
    </SettingsSection>
  );
};

export default SecuritySettings;