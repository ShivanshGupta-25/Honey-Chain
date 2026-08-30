import {
  KeyRound,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const Security = () => {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <p className="text-sm font-medium text-amber-600">
          Account
        </p>

        <h1 className="mt-1 text-2xl font-bold text-gray-900">
          Security
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Manage your account security.
        </p>
      </div>

      <div className="space-y-5">
        <SecurityCard
          icon={KeyRound}
          title="Password"
          description="Keep your account secure with a strong password."
          action="Change Password"
        />

        <SecurityCard
          icon={Smartphone}
          title="Two-Factor Authentication"
          description="Add an extra layer of protection to your account."
          action="Enable"
        />

        <SecurityCard
          icon={ShieldCheck}
          title="Account Protection"
          description="Your HoneyChain account is currently protected."
          action="Protected"
          success
        />
      </div>
    </div>
  );
};

const SecurityCard = ({
  icon: Icon,
  title,
  description,
  action,
  success,
}) => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
        <Icon size={20} />
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-gray-900">
          {title}
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          {description}
        </p>
      </div>

      <button
        className={`rounded-xl px-4 py-2 text-sm font-medium ${
          success
            ? "bg-green-50 text-green-600"
            : "bg-gray-100 text-gray-700 hover:bg-amber-50 hover:text-amber-600"
        }`}
      >
        {action}
      </button>
    </div>
  );
};

export default Security;