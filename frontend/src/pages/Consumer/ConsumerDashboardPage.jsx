
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Droplets,
  History,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Sprout,
  UsersRound,
} from "lucide-react";

import ConsumerLayout from "../../components/consumer/ConsumerLayout";
import DashboardStats from "../../components/consumer/DashboardStats";

const ConsumerDashboardPage = () => {
  const navigate = useNavigate();

  // Temporary data.
  // Replace with backend data after API integration.
  const stats = {
    verifiedBatches: 0,
    totalScans: 0,
    trustedSources: 0,
    recentVerification: "N/A",
  };

  const recentVerifications = [];

  const quickActions = [
    {
      title: "Verify Honey",
      description: "Scan a QR code and discover your honey's origin.",
      icon: ScanLine,
      path: "/consumer/verify",
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
    },
    {
      title: "Verification History",
      description: "Review your previously verified honey batches.",
      icon: History,
      path: "/consumer/history",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
  ];

  return (
    <ConsumerLayout
      title="Dashboard"
      subtitle="Welcome back! Explore your honey journey."
    >
      <div className="mx-auto w-full max-w-[1600px] space-y-6">
        {/* =========================================
            WELCOME & HERO SECTION
        ========================================= */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 via-amber-500 to-orange-500 p-6 text-white shadow-lg shadow-amber-500/10 sm:p-8 lg:p-10">
          {/* Decorative Background */}
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 right-20 h-48 w-48 rounded-full bg-orange-300/20 blur-3xl" />

          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            {/* Hero Content */}
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                <Sparkles size={14} />
                Authenticity starts here
              </div>

              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Know your honey.
                <br />
                Trust every drop.
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-relaxed text-amber-50 sm:text-base">
                Verify your honey's authenticity and discover its journey
                from the beekeeper's hive to your table.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => navigate("/consumer/verify")}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-amber-700 shadow-sm transition hover:bg-amber-50 active:scale-[0.98]"
                >
                  <ScanLine size={18} />
                  Verify Honey
                  <ArrowRight size={16} />
                </button>

                <button
                  type="button"
                  onClick={() => navigate("/consumer/history")}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20 active:scale-[0.98]"
                >
                  <History size={17} />
                  View History
                </button>
              </div>
            </div>

            {/* Hero Illustration */}
            <div className="hidden lg:flex lg:items-center lg:justify-center">
              <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
                <div className="flex h-36 w-36 items-center justify-center rounded-full bg-white/15">
                  <Droplets
                    size={86}
                    strokeWidth={1.2}
                    className="text-white"
                  />
                </div>

                <div className="absolute -right-2 top-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-amber-500 shadow-lg">
                  <ShieldCheck size={22} />
                </div>

                <div className="absolute -bottom-2 left-0 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-amber-500 shadow-lg">
                  <Sprout size={22} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            STATISTICS
        ========================================= */}
        <section>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-800">
                Your Overview
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                A quick look at your honey verification activity.
              </p>
            </div>
          </div>

          <DashboardStats stats={stats} />
        </section>

        {/* =========================================
            RECENT ACTIVITY & QUICK ACTIONS
        ========================================= */}
        <section className="grid grid-cols-1 gap-6 xl:grid-cols-[1.35fr_1fr]">
          {/* Recent Verifications */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5 sm:px-6">
              <div>
                <h3 className="text-base font-bold text-slate-800">
                  Recent Verifications
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Your latest honey verification activity.
                </p>
              </div>

              <button
                type="button"
                onClick={() => navigate("/consumer/history")}
                className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600 transition hover:text-amber-700"
              >
                View all
                <ChevronRight size={14} />
              </button>
            </div>

            {recentVerifications.length === 0 ? (
              <div className="flex flex-col items-center justify-center px-6 py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50 text-amber-500">
                  <ScanLine size={28} strokeWidth={1.7} />
                </div>

                <h4 className="mt-5 text-sm font-bold text-slate-800">
                  No verifications yet
                </h4>

                <p className="mt-2 max-w-xs text-xs leading-relaxed text-slate-500">
                  Your verified honey batches will appear here once you
                  complete your first scan.
                </p>

                <button
                  type="button"
                  onClick={() => navigate("/consumer/verify")}
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-amber-500 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-amber-600"
                >
                  <ScanLine size={15} />
                  Verify Your First Batch
                </button>
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {recentVerifications.map((verification) => (
                  <div
                    key={verification.id}
                    className="flex items-center gap-3 px-5 py-4 sm:px-6"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <CheckCircle2 size={19} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-slate-800">
                        {verification.batchId}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {verification.date}
                      </p>
                    </div>

                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-600">
                      Verified
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-5">
              <h3 className="text-base font-bold text-slate-800">
                Quick Actions
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Access your most-used consumer features.
              </p>
            </div>

            <div className="space-y-3">
              {quickActions.map((action) => {
                const Icon = action.icon;

                return (
                  <button
                    type="button"
                    key={action.title}
                    onClick={() => navigate(action.path)}
                    className="group flex w-full items-center gap-4 rounded-2xl border border-slate-100 p-4 text-left transition hover:border-amber-200 hover:bg-amber-50/40"
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${action.iconBg} ${action.iconColor}`}
                    >
                      <Icon size={20} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-semibold text-slate-800">
                        {action.title}
                      </h4>

                      <p className="mt-1 text-xs leading-relaxed text-slate-500">
                        {action.description}
                      </p>
                    </div>

                    <ChevronRight
                      size={18}
                      className="shrink-0 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-amber-500"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================
            TRUST & TRACEABILITY INFORMATION
        ========================================= */}
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Trust Card */}
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6 sm:p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm">
              <ShieldCheck size={22} />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-800">
              Why verify your honey?
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Honey Chain helps you access traceability information associated
              with registered honey batches, supporting transparency between
              producers and consumers.
            </p>

            <div className="mt-5 space-y-3">
              {[
                "Discover registered batch information",
                "Explore the source and honey journey",
                "Make informed purchasing decisions",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0 text-emerald-600"
                  />

                  <span className="text-xs font-medium text-slate-600">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => navigate("/consumer/verify")}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-emerald-700"
            >
              Start Verification
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Traceability Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              <Droplets size={22} />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-800">
              From hive to jar
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              Learn about the different stages of honey production and
              traceability.
            </p>

            <div className="mt-6 space-y-5">
              {[
                {
                  title: "Beekeeping",
                  description: "Registered beekeeper and hive information.",
                  icon: Sprout,
                },
                {
                  title: "Harvest & Batch",
                  description: "Batch records and associated details.",
                  icon: Droplets,
                },
                {
                  title: "Consumer Verification",
                  description: "Access available traceability information.",
                  icon: ShieldCheck,
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-3">
                    <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-amber-500">
                      <Icon size={17} />

                      {index < 2 && (
                        <span className="absolute left-1/2 top-full h-5 w-px bg-slate-200" />
                      )}
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-slate-800">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-xs leading-relaxed text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => navigate("/consumer/verify")}
              className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-amber-600 transition hover:text-amber-700"
            >
              Explore with a QR code
              <ArrowRight size={15} />
            </button>
          </div>
        </section>

        {/* =========================================
            FOOTER NOTE
        ========================================= */}
        <div className="flex flex-col items-center justify-center gap-2 border-t border-slate-200 pt-6 text-center sm:flex-row">
          <ShieldCheck size={15} className="text-emerald-500" />

          <p className="text-xs text-slate-400">
            Honey Chain • Transparency, traceability, and trust.
          </p>
        </div>
      </div>
    </ConsumerLayout>
  );
};

export default ConsumerDashboardPage;