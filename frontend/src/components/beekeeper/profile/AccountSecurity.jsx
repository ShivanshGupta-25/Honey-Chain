import {
  Clock3,
  KeyRound,
  ShieldCheck,
} from "lucide-react";

const AccountSecurity = ({ profile, onChangePassword }) => {
  return (
    <div className="space-y-3">
      {/* Account status */}
      <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-emerald-600">
            <ShieldCheck size={18} />
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-700">
              Account Status
            </p>

            <p className="mt-0.5 text-xs text-slate-400">
              Your account is currently active
            </p>
          </div>
        </div>

        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
          Active
        </span>
      </div>

      {/* Last login */}
      <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-slate-500">
            <Clock3 size={18} />
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-700">
              Last Login
            </p>

            <p className="mt-0.5 text-xs text-slate-400">
              {profile.lastLogin}
            </p>
          </div>
        </div>
      </div>

      {/* Password */}
      <div className="flex flex-col gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-slate-500">
            <KeyRound size={18} />
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-700">
              Password
            </p>

            <p className="mt-0.5 text-xs text-slate-400">
              Keep your account secure with a strong password.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onChangePassword}
          className="text-left text-xs font-semibold text-amber-600 transition hover:text-amber-700 sm:text-right"
        >
          Change Password
        </button>
      </div>
    </div>
  );
};

export default AccountSecurity;
