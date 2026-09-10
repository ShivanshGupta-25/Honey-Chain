import { useEffect, useState } from "react";
import { X } from "lucide-react";

const initialForm = {
  hiveId: "",
  location: "",
  hiveType: "Langstroth",
  status: "active",
  colonyStrength: "moderate",
  queenPresent: true,
  installationDate: "",
  notes: "",
};

const HiveForm = ({
  isOpen,
  hive,
  onClose,
  onSubmit,
  loading = false,
}) => {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");

  useEffect(() => {
    if (hive) {
      setForm({
        hiveId: hive.hiveId || "",
        location: hive.location || "",
        hiveType: hive.hiveType || "Langstroth",
        status: hive.status || "active",
        colonyStrength:
          hive.colonyStrength || "moderate",
        queenPresent: hive.queenPresent ?? true,
        installationDate: hive.installationDate
          ? new Date(hive.installationDate)
              .toISOString()
              .split("T")[0]
          : "",
        notes: hive.notes || "",
      });
    } else {
      setForm(initialForm);
    }

    setError("");
  }, [hive, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!form.hiveId.trim()) {
      setError("Hive ID is required.");
      return;
    }

    if (!form.location.trim()) {
      setError("Location is required.");
      return;
    }

    try {
      await onSubmit({
        ...form,
        hiveId: form.hiveId.trim(),
        location: form.location.trim(),
      });
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          "Failed to save hive."
      );
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              {hive ? "Edit Hive" : "Add New Hive"}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {hive
                ? "Update hive information."
                : "Register a new hive in your apiary."}
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 p-6"
        >
          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          <div className="grid gap-5 md:grid-cols-2">
            {/* Hive ID */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Hive ID
              </label>

              <input
                name="hiveId"
                value={form.hiveId}
                onChange={handleChange}
                placeholder="e.g. HIVE-001"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
              />
            </div>

            {/* Location */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Location
              </label>

              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="e.g. North Field"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
              />
            </div>

            {/* Hive Type */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Hive Type
              </label>

              <select
                name="hiveType"
                value={form.hiveType}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
              >
                <option>Langstroth</option>
                <option>Top Bar</option>
                <option>National</option>
                <option>Dadant</option>
                <option>Other</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Status
              </label>

              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
              >
                <option value="active">
                  Active
                </option>
                <option value="inactive">
                  Inactive
                </option>
                <option value="maintenance">
                  Maintenance
                </option>
              </select>
            </div>

            {/* Colony Strength */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Colony Strength
              </label>

              <select
                name="colonyStrength"
                value={form.colonyStrength}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
              >
                <option value="weak">Weak</option>
                <option value="moderate">
                  Moderate
                </option>
                <option value="strong">Strong</option>
              </select>
            </div>

            {/* Installation Date */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Installation Date
              </label>

              <input
                type="date"
                name="installationDate"
                value={form.installationDate}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
              />
            </div>
          </div>

          {/* Queen */}
          <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 p-4">
            <input
              type="checkbox"
              name="queenPresent"
              checked={form.queenPresent}
              onChange={handleChange}
              className="h-4 w-4 accent-amber-500"
            />

            <div>
              <p className="text-sm font-medium text-slate-700">
                Queen is present
              </p>

              <p className="text-xs text-slate-500">
                Mark whether the colony currently has a queen.
              </p>
            </div>
          </label>

          {/* Notes */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Notes
            </label>

            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              rows={4}
              placeholder="Add any additional observations..."
              className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 border-t border-slate-100 pt-5">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Saving..."
                : hive
                ? "Update Hive"
                : "Add Hive"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HiveForm;