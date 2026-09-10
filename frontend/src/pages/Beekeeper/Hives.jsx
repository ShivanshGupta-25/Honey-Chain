import {
  Activity,
  Plus,
  Search,
  RefreshCw,
} from "lucide-react";
import {
  Link,
  useLocation,
} from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

import BeekeeperSidebar from "../../components/beekeeper/BeekeeperSidebar";
import BeekeeperHeader from "../../components/beekeeper/BeekeeperHeader";

import HiveCard from "../../components/beekeeper/hives/HiveCard";
import HiveForm from "../../components/beekeeper/hives/HiveForm";

import {
  getHives,
  createHive,
  updateHive,
  deleteHive,
} from "../../services/hiveService";

const Hives = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [hives, setHives] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const location = useLocation();

  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const [formOpen, setFormOpen] = useState(false);
  const [editingHive, setEditingHive] = useState(null);

  const fetchHives = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getHives();

      setHives(response.data || []);
    } catch (err) {
      console.error("Fetch hives error:", err);

      setError(
        err?.response?.data?.message ||
          "Failed to load hives."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHives();
  }, []);

  useEffect(() => {
    const editHive = location.state?.editHive;

    if (editHive) {
        setEditingHive(editHive);
        setFormOpen(true);

        window.history.replaceState(
        {},
        document.title,
        window.location.pathname
        );
    }
    }, [location.state]);

  const filteredHives = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) return hives;

    return hives.filter((hive) =>
      [
        hive.hiveId,
        hive.location,
        hive.hiveType,
        hive.status,
        hive.colonyStrength,
      ]
        .filter(Boolean)
        .some((value) =>
          value.toLowerCase().includes(query)
        )
    );
  }, [hives, search]);

  const handleOpenAdd = () => {
    setEditingHive(null);
    setFormOpen(true);
  };

  const handleOpenEdit = (hive) => {
    setEditingHive(hive);
    setFormOpen(true);
  };

  const handleView = (hive) => {
    console.log("View hive:", hive);
  };

  const handleSubmit = async (formData) => {
    try {
      setSaving(true);

      if (editingHive) {
        const response = await updateHive(
          editingHive._id,
          formData
        );

        setHives((previous) =>
          previous.map((hive) =>
            hive._id === editingHive._id
              ? response.data
              : hive
          )
        );
      } else {
        const response = await createHive(formData);

        setHives((previous) => [
          response.data,
          ...previous,
        ]);
      }

      setFormOpen(false);
      setEditingHive(null);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (hive) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${hive.hiveId}?`
    );

    if (!confirmed) return;

    try {
      await deleteHive(hive._id);

      setHives((previous) =>
        previous.filter(
          (item) => item._id !== hive._id
        )
      );
    } catch (err) {
      console.error("Delete hive error:", err);

      alert(
        err?.response?.data?.message ||
          "Failed to delete hive."
      );
    }
  };

  const activeCount = hives.filter(
    (hive) => hive.status === "active"
  ).length;

  const attentionCount = hives.filter(
    (hive) =>
      hive.colonyStrength === "weak" ||
      hive.queenPresent === false
  ).length;

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
          {/* Page Header */}
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
                <Activity size={16} />
                <span>Workspace</span>
                <span>/</span>
                <span className="text-slate-700">
                  Hives
                </span>
              </div>

              <h1 className="text-2xl font-bold text-slate-900">
                My Hives
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                Manage and monitor your registered
                bee colonies.
              </p>
            </div>

            <button
              onClick={handleOpenAdd}
              className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
            >
              <Plus size={18} />
              Add Hive
            </button>
          </div>

          {/* Summary */}
          <div className="mb-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm text-slate-500">
                Total Hives
              </p>

              <p className="mt-2 text-2xl font-bold text-slate-900">
                {hives.length}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm text-slate-500">
                Active Hives
              </p>

              <p className="mt-2 text-2xl font-bold text-emerald-600">
                {activeCount}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm text-slate-500">
                Need Attention
              </p>

              <p className="mt-2 text-2xl font-bold text-amber-600">
                {attentionCount}
              </p>
            </div>
          </div>

          {/* Toolbar */}
          <div className="mb-6 flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search by hive ID, location, type..."
                className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
              />
            </div>

            <button
              onClick={fetchHives}
              disabled={loading}
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-50"
            >
              <RefreshCw
                size={16}
                className={
                  loading ? "animate-spin" : ""
                }
              />

              Refresh
            </button>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* Loading */}
          {loading ? (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="h-64 animate-pulse rounded-2xl bg-slate-200"
                />
              ))}
            </div>
          ) : filteredHives.length === 0 ? (
            /* Empty State */
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50">
                <Activity
                  size={25}
                  className="text-amber-600"
                />
              </div>

              <h3 className="text-lg font-semibold text-slate-900">
                {search
                  ? "No hives found"
                  : "No hives registered yet"}
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
                {search
                  ? "Try adjusting your search."
                  : "Add your first hive to start managing your apiary."}
              </p>

              {!search && (
                <button
                  onClick={handleOpenAdd}
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
                >
                  <Plus size={17} />
                  Add Your First Hive
                </button>
              )}
            </div>
          ) : (
            /* Hive Grid */
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredHives.map((hive) => (
                <HiveCard
                  key={hive._id}
                  hive={hive}
                  onView={handleView}
                  onEdit={handleOpenEdit}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Hive Form */}
      <HiveForm
        isOpen={formOpen}
        hive={editingHive}
        onClose={() => {
          if (!saving) {
            setFormOpen(false);
            setEditingHive(null);
          }
        }}
        onSubmit={handleSubmit}
        loading={saving}
      />
    </div>
  );
};

export default Hives;