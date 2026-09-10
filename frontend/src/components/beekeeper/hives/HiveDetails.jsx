import {
  ArrowLeft,
  Activity,
  CalendarDays,
  Crown,
  Edit3,
  MapPin,
  ShieldCheck,
  Trash2,
  Warehouse,
} from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import BeekeeperSidebar from "../BeekeeperSidebar";
import BeekeeperHeader from "../BeekeeperHeader";

import {
  getHiveById,
  deleteHive,
} from "../../../services/hiveService";

const statusConfig = {
  active: {
    label: "Active",
    className: "bg-emerald-50 text-emerald-700",
    dot: "bg-emerald-500",
  },
  inactive: {
    label: "Inactive",
    className: "bg-slate-100 text-slate-600",
    dot: "bg-slate-400",
  },
  maintenance: {
    label: "Maintenance",
    className: "bg-amber-50 text-amber-700",
    dot: "bg-amber-500",
  },
};

const strengthConfig = {
  weak: {
    label: "Weak",
    className: "text-red-600",
  },
  moderate: {
    label: "Moderate",
    className: "text-amber-600",
  },
  strong: {
    label: "Strong",
    className: "text-emerald-600",
  },
};

const HiveDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [hive, setHive] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchHive = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getHiveById(id);

      setHive(response.data);
    } catch (err) {
      console.error("Fetch hive details error:", err);

      setError(
        err?.response?.data?.message ||
          "Failed to load hive details."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHive();
  }, [id]);

  const handleDelete = async () => {
    if (!hive) return;

    const confirmed = window.confirm(
      `Are you sure you want to delete ${hive.hiveId}?`
    );

    if (!confirmed) return;

    try {
      await deleteHive(hive._id);

      navigate("/beekeeper/hives");
    } catch (err) {
      console.error("Delete hive error:", err);

      alert(
        err?.response?.data?.message ||
          "Failed to delete hive."
      );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <BeekeeperSidebar
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />

        <div className="lg:pl-64">
          <BeekeeperHeader
            onMenuClick={() => setMobileOpen(true)}
          />

          <main className="p-4 sm:p-6 lg:p-8">
            <div className="animate-pulse space-y-6">
              <div className="h-6 w-32 rounded bg-slate-200" />

              <div className="h-48 rounded-2xl bg-slate-200" />

              <div className="grid gap-5 md:grid-cols-2">
                <div className="h-48 rounded-2xl bg-slate-200" />
                <div className="h-48 rounded-2xl bg-slate-200" />
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }

  if (error || !hive) {
    return (
      <div className="min-h-screen bg-slate-50">
        <BeekeeperSidebar
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />

        <div className="lg:pl-64">
          <BeekeeperHeader
            onMenuClick={() => setMobileOpen(true)}
          />

          <main className="p-4 sm:p-6 lg:p-8">
            <Link
              to="/beekeeper/hives"
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              <ArrowLeft size={16} />
              Back to Hives
            </Link>

            <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
              <h2 className="font-semibold text-red-800">
                Unable to load hive
              </h2>

              <p className="mt-1 text-sm text-red-600">
                {error || "Hive not found."}
              </p>
            </div>
          </main>
        </div>
      </div>
    );
  }

  const status =
    statusConfig[hive.status] ||
    statusConfig.active;

  const strength =
    strengthConfig[hive.colonyStrength] ||
    strengthConfig.moderate;

  return (
    <div className="min-h-screen bg-slate-50">
      <BeekeeperSidebar
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <div className="lg:pl-64">
        <BeekeeperHeader
          onMenuClick={() => setMobileOpen(true)}
        />

        <main className="p-4 sm:p-6 lg:p-8">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-sm">
            <Link
              to="/beekeeper/hives"
              className="text-slate-500 hover:text-slate-900"
            >
              Hives
            </Link>

            <span className="text-slate-300">
              /
            </span>

            <span className="font-medium text-slate-700">
              {hive.hiveId}
            </span>
          </div>

          {/* Header */}
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50">
                <Activity
                  size={27}
                  className="text-amber-600"
                />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="text-2xl font-bold text-slate-900">
                    {hive.hiveId}
                  </h1>

                  <div
                    className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${status.className}`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${status.dot}`}
                    />

                    {status.label}
                  </div>
                </div>

                <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
                  <MapPin size={15} />
                  {hive.location}
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() =>
                  navigate("/beekeeper/hives", {
                    state: {
                      editHive: hive,
                    },
                  })
                }
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                <Edit3 size={16} />
                Edit
              </button>

              <button
                onClick={handleDelete}
                className="flex items-center gap-2 rounded-xl border border-red-200 bg-white px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50"
              >
                <Trash2 size={16} />
                Delete
              </button>
            </div>
          </div>

          {/* Overview */}
          <div className="grid gap-5 lg:grid-cols-3">
            {/* Hive Information */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-2">
              <div className="mb-6">
                <h2 className="font-semibold text-slate-900">
                  Hive Information
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Basic information about this colony.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <InfoItem
                  icon={Warehouse}
                  label="Hive Type"
                  value={hive.hiveType}
                />

                <InfoItem
                  icon={MapPin}
                  label="Location"
                  value={hive.location}
                />

                <InfoItem
                  icon={Activity}
                  label="Colony Strength"
                  value={strength.label}
                  valueClass={strength.className}
                />

                <InfoItem
                  icon={Crown}
                  label="Queen Status"
                  value={
                    hive.queenPresent
                      ? "Queen Present"
                      : "Queen Not Present"
                  }
                  valueClass={
                    hive.queenPresent
                      ? "text-emerald-600"
                      : "text-red-600"
                  }
                />

                <InfoItem
                  icon={CalendarDays}
                  label="Installation Date"
                  value={
                    hive.installationDate
                      ? new Date(
                          hive.installationDate
                        ).toLocaleDateString(
                          "en-IN",
                          {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          }
                        )
                      : "Not specified"
                  }
                />

                <InfoItem
                  icon={ShieldCheck}
                  label="Record Created"
                  value={
                    hive.createdAt
                      ? new Date(
                          hive.createdAt
                        ).toLocaleDateString(
                          "en-IN",
                          {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          }
                        )
                      : "Not available"
                  }
                />
              </div>
            </div>

            {/* Health */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="mb-6">
                <h2 className="font-semibold text-slate-900">
                  Hive Health
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Current colony condition.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    Colony Strength
                  </span>

                  <span
                    className={`text-sm font-semibold ${strength.className}`}
                  >
                    {strength.label}
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                  <div
                    className={`h-full rounded-full ${
                      hive.colonyStrength ===
                      "strong"
                        ? "w-full bg-emerald-500"
                        : hive.colonyStrength ===
                          "moderate"
                        ? "w-2/3 bg-amber-500"
                        : "w-1/3 bg-red-500"
                    }`}
                  />
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-xl border border-slate-200 p-4">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                    hive.queenPresent
                      ? "bg-emerald-50"
                      : "bg-red-50"
                  }`}
                >
                  <Crown
                    size={19}
                    className={
                      hive.queenPresent
                        ? "text-emerald-600"
                        : "text-red-600"
                    }
                  />
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-800">
                    Queen Status
                  </p>

                  <p className="text-xs text-slate-500">
                    {hive.queenPresent
                      ? "Queen present"
                      : "Queen requires attention"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="font-semibold text-slate-900">
              Notes
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              {hive.notes ||
                "No notes have been added for this hive."}
            </p>
          </div>

          {/* Future Monitoring */}
          <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100">
                <Activity
                  size={20}
                  className="text-slate-500"
                />
              </div>

              <div>
                <h2 className="font-semibold text-slate-900">
                  Smart Hive Monitoring
                </h2>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                  IoT sensor readings and AI-powered hive
                  health insights will appear here once
                  monitoring devices are connected to this
                  hive.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const InfoItem = ({
  icon: Icon,
  label,
  value,
  valueClass = "text-slate-800",
}) => {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100">
        <Icon
          size={17}
          className="text-slate-500"
        />
      </div>

      <div className="min-w-0">
        <p className="text-xs text-slate-500">
          {label}
        </p>

        <p
          className={`mt-1 truncate text-sm font-medium ${valueClass}`}
        >
          {value}
        </p>
      </div>
    </div>
  );
};

export default HiveDetails;