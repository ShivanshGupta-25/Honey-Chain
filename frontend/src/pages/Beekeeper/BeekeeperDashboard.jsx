import { useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import BeekeeperSidebar from "../../components/beekeeper/BeekeeperSidebar";
import BeekeeperHeader from "../../components/beekeeper/BeekeeperHeader";
import StatCard from "../../components/beekeeper/StatCard";
import RecentBatches from "../../components/beekeeper/RecentBatches";
import QuickActions from "../../components/beekeeper/QuickActions";

import {
  beekeeperStats,
  recentBatches,
} from "../../data/beekeeperData";

const BeekeeperDashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // ---------------------------------------------------------
  // Current date
  // ---------------------------------------------------------
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-[#f8f8f7]">

      {/* =====================================================
          SIDEBAR
      ====================================================== */}
      <BeekeeperSidebar
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <div className="lg:pl-64">

        {/* Header */}
        <BeekeeperHeader
          setMobileOpen={setMobileOpen}
        />

        <main className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">

          {/* =================================================
              WELCOME SECTION
          ================================================== */}
          <section className="mb-7">

            <div
              className="
                relative overflow-hidden
                rounded-2xl
                border border-amber-100
                bg-gradient-to-r
                from-amber-50
                via-white
                to-orange-50/60
                px-5 py-5
                shadow-sm
                sm:px-6 sm:py-6
              "
            >

              {/* Decorative circles */}
              <div
                className="
                  pointer-events-none
                  absolute -right-10 -top-14
                  h-40 w-40
                  rounded-full
                  bg-amber-100/40
                  blur-2xl
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute -bottom-16
                  right-24
                  h-32 w-32
                  rounded-full
                  bg-orange-100/30
                  blur-2xl
                "
              />

              <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                {/* Welcome text */}
                <div>
                  {/* Date */}
                  <div className="flex items-center gap-2">
                    <CalendarDays
                      size={14}
                      className="text-amber-500"
                    />

                    <p
                      className="
                        text-xs
                        font-bold
                        text-amber-600
                        sm:text-sm
                      "
                    >
                      {formattedDate}
                    </p>
                  </div>

                  {/* Heading */}
                  <h1
                    className="
                      mt-2
                      text-2xl
                      font-extrabold
                      tracking-tight
                      text-slate-900
                      sm:text-3xl
                    "
                  >
                    Warm regards, Beekeeper
                    <span className="ml-1">👋</span>
                  </h1>

                  <p
                    className="
                      mt-2
                      max-w-xl
                      text-sm
                      font-medium
                      leading-relaxed
                      text-slate-500
                    "
                  >
                    Here's what's happening with your
                    honey batches and traceability records.
                  </p>
                </div>

                {/* Verification Summary */}
                <div
                  className="
                    flex shrink-0
                    items-center gap-3
                    rounded-xl
                    border border-white
                    bg-white/80
                    px-4 py-3
                    shadow-sm
                    backdrop-blur-sm
                  "
                >
                  <div
                    className="
                      flex h-10 w-10
                      items-center justify-center
                      rounded-xl
                      bg-emerald-50
                      text-emerald-600
                      ring-1 ring-emerald-100
                    "
                  >
                    <ShieldCheck size={19} />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Traceability
                    </p>

                    <div className="mt-0.5 flex items-center gap-1.5">
                      <CheckCircle2
                        size={13}
                        className="text-emerald-500"
                      />

                      <p className="text-xs font-bold text-emerald-600">
                        System Active
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =================================================
              KPI SECTION
          ================================================== */}
          <section>
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Sparkles
                    size={15}
                    className="text-amber-500"
                  />

                  <h2 className="text-sm font-bold text-slate-800">
                    Your Overview
                  </h2>
                </div>

                <p className="mt-0.5 text-[11px] font-medium text-slate-400">
                  Key metrics from your honey operations
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {beekeeperStats.map((stat, index) => (
                <StatCard
                  key={stat.title}
                  {...stat}
                  color={
                    stat.color ||
                    ["amber", "green", "blue", "purple"][index % 4]
                  }
                />
              ))}
            </div>
          </section>

          {/* =================================================
              MAIN DASHBOARD CONTENT
          ================================================== */}
          <section className="mt-7">

            <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">

              {/* Recent Batches */}
              <div className="min-w-0">
                <RecentBatches
                  batches={recentBatches}
                />
              </div>

              {/* Quick Actions */}
              <div className="min-w-0">
                <QuickActions />
              </div>

            </div>
          </section>

          {/* =================================================
              FOOTER STATUS
          ================================================== */}
          <div
            className="
              mt-7
              flex flex-col
              gap-2
              border-t border-slate-200/70
              pt-4
              text-[10px]
              font-medium
              text-slate-400
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <p>
              HoneyChain • Smart Honey Traceability
            </p>

            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              All systems operational
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default BeekeeperDashboard;