import { useEffect, useState } from "react";
import {
  Eye,
  EyeOff,
  KeyRound,
  Loader2,
  LockKeyhole,
  X,
} from "lucide-react";

const ChangePasswordModal = ({
  isOpen,
  onClose,
  onSave,
  loading = false,
  error = "",
  success = "",
}) => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [validationError, setValidationError] =
    useState("");

  useEffect(() => {
    if (!isOpen) {
      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

      setValidationError("");
      setShowCurrent(false);
      setShowNew(false);
      setShowConfirm(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setValidationError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !formData.currentPassword ||
      !formData.newPassword ||
      !formData.confirmPassword
    ) {
      setValidationError(
        "Please fill in all password fields."
      );

      return;
    }

    if (formData.newPassword.length < 6) {
      setValidationError(
        "New password must contain at least 6 characters."
      );

      return;
    }

    if (
      formData.newPassword !==
      formData.confirmPassword
    ) {
      setValidationError(
        "New password and confirmation password do not match."
      );

      return;
    }

    await onSave({
      currentPassword:
        formData.currentPassword,
      newPassword:
        formData.newPassword,
    });
  };

  const PasswordInput = ({
    label,
    name,
    value,
    show,
    setShow,
    placeholder,
  }) => {
    return (
      <div>
        <label className="mb-2 block text-xs font-semibold text-slate-600">
          {label}
        </label>

        <div className="relative">
          <LockKeyhole
            size={17}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type={show ? "text" : "password"}
            name={name}
            value={value}
            onChange={handleChange}
            disabled={loading}
            className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-11 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 disabled:bg-slate-50"
            placeholder={placeholder}
          />

          <button
            type="button"
            onClick={() => setShow(!show)}
            disabled={loading}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-600"
          >
            {show ? (
              <EyeOff size={17} />
            ) : (
              <Eye size={17} />
            )}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
              <KeyRound size={18} />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-800">
                Change Password
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                Keep your account secure.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 disabled:opacity-50"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="space-y-5 p-6">

            {/* Error */}
            {(error || validationError) && (
              <div className="rounded-lg border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
                {validationError || error}
              </div>
            )}

            {/* Success */}
            {success && (
              <div className="rounded-lg border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm text-emerald-600">
                {success}
              </div>
            )}

            <PasswordInput
              label="Current Password"
              name="currentPassword"
              value={formData.currentPassword}
              show={showCurrent}
              setShow={setShowCurrent}
              placeholder="Enter current password"
            />

            <PasswordInput
              label="New Password"
              name="newPassword"
              value={formData.newPassword}
              show={showNew}
              setShow={setShowNew}
              placeholder="Enter new password"
            />

            <PasswordInput
              label="Confirm New Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              show={showConfirm}
              setShow={setShowConfirm}
              placeholder="Confirm new password"
            />

            {/* Password Requirements */}
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-semibold text-slate-600">
                Password requirements
              </p>

              <ul className="mt-2 space-y-1 text-xs text-slate-400">
                <li>• At least 6 characters</li>
                <li>• Use a password you don't reuse elsewhere</li>
                <li>• Avoid easily guessed information</li>
              </ul>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 border-t border-slate-100 bg-slate-50 px-6 py-4">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2
                    size={16}
                    className="animate-spin"
                  />
                  Updating...
                </>
              ) : (
                <>
                  <KeyRound size={16} />
                  Update Password
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
