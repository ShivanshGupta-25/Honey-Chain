import {
  Activity,
  AlertTriangle,
  Boxes,
  Plus,
  Weight,
} from "lucide-react";
import { useEffect, useState } from "react";

import { getBeekeeperDashboard } from "../../services/dashboardService";

import BeekeeperSidebar from "../../components/beekeeper/BeekeeperSidebar";
import BeekeeperHeader from "../../components/beekeeper/BeekeeperHeader";

import DashboardStat from "../../components/beekeeper/dashboard/DashboardStat";
import HiveHealth from "../../components/beekeeper/dashboard/HiveHealth";
import AttentionPanel from "../../components/beekeeper/dashboard/AttentionPanel";
import RecentBatches from "../../components/beekeeper/dashboard/RecentBatches";
import TraceabilitySummary from "../../components/beekeeper/dashboard/TraceabilitySummary";

const BeekeeperDashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // =========================================================
  // LOAD DASHBOARD DATA
  // =========================================================

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await getBeekeeperDashboard();

        if (response.success) {
          setDashboardData(response.data);
        } else {
          setError(
            response.message || "Failed to load dashboard"
          );
        }
      } catch (err) {
        console.error("Dashboard error:", err);

        setError(
          err.response?.data?.message ||
            "Unable to load dashboard data"
        );
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  // =========================================================
  // LOADING STATE
  // =========================================================

  if (loading) {
    return (
      <div className="dashboard-page min-h-screen">

        <BeekeeperSidebar
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />

        <div className="lg:pl-64">

          <BeekeeperHeader
            setMobileOpen={setMobileOpen}
          />

          <main className="mx-auto max-w-[1600px] px-4 py-8 sm:px-6 lg:px-8">

            <div className="animate-pulse space-y-6">

              {/* Dashboard header */}
              <div className="space-y-3">
                <div className="h-3 w-32 rounded bg-slate-200" />
                <div className="h-9 w-72 rounded bg-slate-200" />
                <div className="h-4 w-96 max-w-full rounded bg-slate-200" />
              </div>

              {/* Statistics */}
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

                <div className="h-32 rounded-2xl bg-white" />
                <div className="h-32 rounded-2xl bg-white" />
                <div className="h-32 rounded-2xl bg-white" />
                <div className="h-32 rounded-2xl bg-white" />

              </div>

              {/* Hive health + alerts */}
              <div className="grid gap-6 xl:grid-cols-[1.35fr_1fr]">

                <div className="h-72 rounded-2xl bg-white" />

                <div className="h-72 rounded-2xl bg-white" />

              </div>

              {/* Recent batches */}
              <div className="h-80 rounded-2xl bg-white" />

              {/* Traceability */}
              <div className="h-32 rounded-2xl bg-white" />

            </div>

          </main>

        </div>

      </div>
    );
  }

  // =========================================================
  // ERROR STATE
  // =========================================================

  if (error) {
    return (
      <div className="dashboard-page min-h-screen">

        <BeekeeperSidebar
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />

        <div className="lg:pl-64">

          <BeekeeperHeader
            setMobileOpen={setMobileOpen}
          />

          <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6">

            <div className="w-full max-w-md text-center">

              {/* Error icon */}
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-500">
                <AlertTriangle size={24} />
              </div>

              <h2 className="mt-5 text-lg font-bold text-slate-900">
                Unable to load dashboard
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {error}
              </p>

              <button
                type="button"
                onClick={() => window.location.reload()}
                className="
                  mt-6
                  rounded-xl
                  bg-amber-500
                  px-5
                  py-2.5
                  text-xs
                  font-semibold
                  text-white
                  transition
                  hover:bg-amber-600
                "
              >
                Try Again
              </button>

            </div>

          </main>

        </div>

      </div>
    );
  }

  // =========================================================
  // NORMAL DASHBOARD
  // =========================================================

  return (
    <div className="dashboard-page min-h-screen">

      {/* =====================================================
          SIDEBAR
      ====================================================== */}

      <BeekeeperSidebar
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* =====================================================
          MAIN APPLICATION
      ====================================================== */}

      <div className="lg:pl-64">

        <BeekeeperHeader
          setMobileOpen={setMobileOpen}
        />

        <main className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">

          {/* =================================================
              DASHBOARD HEADER
          ================================================== */}

          <section className="mb-8">

            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

              <div>

                <div className="mb-2 flex items-center gap-2">

                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    Beekeeper overview
                  </span>

                </div>

                <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                  Good morning, Beekeeper
                </h1>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                  Monitor your hives, manage honey production, and
                  keep every batch traceable from hive to consumer.
                </p>

              </div>

              {/* Register Harvest */}
              <button
                type="button"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-amber-500
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-sm
                  transition
                  hover:bg-amber-600
                  active:scale-[0.98]
                "
              >
                <Plus size={17} />
                Register Harvest
              </button>

            </div>

          </section>

          {/* =================================================
              STATISTICS
          ================================================== */}

          <section className="mb-8">

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

              <DashboardStat
                icon={<Activity size={19} />}
                label="Active Hives"
                value={
                  dashboardData?.stats?.activeHives ?? 0
                }
                description={`${dashboardData?.hiveHealth?.healthy ?? 0} healthy`}
              />

              <DashboardStat
                icon={<Boxes size={19} />}
                label="Active Batches"
                value={
                  dashboardData?.stats?.activeBatches ?? 0
                }
                description="Currently active"
              />

              <DashboardStat
                icon={<Weight size={19} />}
                label="Honey Harvested"
                value={`${dashboardData?.stats?.harvestedHoney ?? 0} kg`}
                description="This season"
              />

              <DashboardStat
                icon={<AlertTriangle size={19} />}
                label="Attention Needed"
                value={
                  dashboardData?.stats?.attentionRequired ?? 0
                }
                description="Requires your action"
                warning
              />

            </div>

          </section>

          {/* =================================================
              HIVE HEALTH + ALERTS
          ================================================== */}

          <section className="mb-8 grid gap-6 xl:grid-cols-[1.35fr_1fr]">

            <HiveHealth
              data={dashboardData?.hiveHealth}
            />

            <AttentionPanel
              alerts={dashboardData?.alerts || []}
            />

          </section>

          {/* =================================================
              RECENT BATCHES
          ================================================== */}

          <section className="mb-8">

            <RecentBatches
              batches={dashboardData?.recentBatches || []}
            />

          </section>

          {/* =================================================
              TRACEABILITY
          ================================================== */}

          <section>

            <TraceabilitySummary
              data={dashboardData?.traceability}
            />

          </section>

        </main>

      </div>

    </div>
  );
};

export default BeekeeperDashboard;