import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Users,
  UserCheck,
  PackageCheck,
  ShieldCheck,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Clock3,
  CheckCircle2,
  AlertCircle,
  Plus,
  ChevronRight,
} from "lucide-react";

const AdminDashboardPage = () => {
  const navigate = useNavigate();

  const [period, setPeriod] = useState("7D");

  const stats = [
    {
      title: "Total Users",
      value: "1,248",
      change: "+12.5%",
      trend: "up",
      icon: Users,
      description: "Compared to last month",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "Beekeepers",
      value: "342",
      change: "+8.2%",
      trend: "up",
      icon: UserCheck,
      description: "Compared to last month",
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      title: "Honey Batches",
      value: "2,846",
      change: "+18.4%",
      trend: "up",
      icon: PackageCheck,
      description: "Compared to last month",
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
    },
    {
      title: "Verifications",
      value: "9,482",
      change: "+14.8%",
      trend: "up",
      icon: ShieldCheck,
      description: "Compared to last month",
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
    },
  ];

  const verificationData = {
    "7D": [
      { day: "Mon", verified: 42, pending: 12 },
      { day: "Tue", verified: 58, pending: 18 },
      { day: "Wed", verified: 46, pending: 14 },
      { day: "Thu", verified: 76, pending: 21 },
      { day: "Fri", verified: 64, pending: 17 },
      { day: "Sat", verified: 88, pending: 24 },
      { day: "Sun", verified: 72, pending: 19 },
    ],
    "30D": [
      { day: "W1", verified: 240, pending: 68 },
      { day: "W2", verified: 320, pending: 82 },
      { day: "W3", verified: 290, pending: 74 },
      { day: "W4", verified: 410, pending: 95 },
    ],
    "90D": [
      { day: "M1", verified: 980, pending: 210 },
      { day: "M2", verified: 1240, pending: 280 },
      { day: "M3", verified: 1580, pending: 340 },
    ],
  };

  const recentBeekeepers = [
    {
      id: 1,
      name: "Rajesh Kumar",
      email: "rajesh@example.com",
      location: "Indore, MP",
      status: "Active",
      date: "Today, 10:42 AM",
      initials: "RK",
    },
    {
      id: 2,
      name: "Amit Sharma",
      email: "amit@example.com",
      location: "Bhopal, MP",
      status: "Pending",
      date: "Today, 09:18 AM",
      initials: "AS",
    },
    {
      id: 3,
      name: "Priya Verma",
      email: "priya@example.com",
      location: "Ujjain, MP",
      status: "Active",
      date: "Yesterday",
      initials: "PV",
    },
    {
      id: 4,
      name: "Suresh Patel",
      email: "suresh@example.com",
      location: "Dewas, MP",
      status: "Active",
      date: "Yesterday",
      initials: "SP",
    },
  ];

  const pendingVerifications = [
    {
      id: "HC-1024",
      batch: "Organic Forest Honey",
      beekeeper: "Rajesh Kumar",
      date: "Sep 18, 2026",
      status: "Pending",
    },
    {
      id: "HC-1025",
      batch: "Wildflower Honey",
      beekeeper: "Amit Sharma",
      date: "Sep 18, 2026",
      status: "Pending",
    },
    {
      id: "HC-1026",
      batch: "Mustard Flower Honey",
      beekeeper: "Priya Verma",
      date: "Sep 17, 2026",
      status: "Pending",
    },
  ];

  const chartData = verificationData[period];

  const maxValue = Math.max(
    ...chartData.map((item) => item.verified + item.pending),
    1
  );

  const chartHeight = 220;

  return (
    <div className="space-y-6">

      {/* Welcome Banner */}
      <section className="relative overflow-hidden rounded-3xl
        bg-gradient-to-br from-amber-400 via-amber-300 to-yellow-200
        p-6 shadow-sm sm:p-8">

        <div className="relative z-10 max-w-xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full
            bg-white/50 px-3 py-1.5 text-xs font-semibold text-amber-950">
            <Activity size={14} />
            Platform Overview
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-amber-950
            sm:text-3xl">
            Good evening, Administrator! 👋
          </h2>

          <p className="mt-2 max-w-md text-sm leading-relaxed
            text-amber-900/80">
            Keep track of Honey Chain's platform activity, users,
            and honey verification operations.
          </p>

          <button
            type="button"
            onClick={() => navigate("/admin/verification")}
            className="mt-5 inline-flex items-center gap-2 rounded-xl
              bg-amber-950 px-4 py-3 text-sm font-semibold text-white
              transition hover:bg-amber-900"
          >
            Review Verifications
            <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="pointer-events-none absolute -right-12 -top-16
          h-64 w-64 rounded-full border-[32px] border-white/20" />

        <div className="pointer-events-none absolute -bottom-24 right-20
          h-56 w-56 rounded-full border-[24px] border-white/10" />
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2
        xl:grid-cols-4">

        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-2xl border border-slate-200 bg-white
                p-5 shadow-sm transition hover:-translate-y-0.5
                hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <div className={`flex h-11 w-11 items-center justify-center
                  rounded-xl ${stat.iconBg} ${stat.iconColor}`}>
                  <Icon size={21} />
                </div>

                <span className="flex items-center gap-1 rounded-full
                  bg-emerald-50 px-2 py-1 text-[11px] font-bold
                  text-emerald-600">
                  <ArrowUpRight size={12} />
                  {stat.change}
                </span>
              </div>

              <p className="mt-5 text-sm font-medium text-slate-500">
                {stat.title}
              </p>

              <h3 className="mt-1 text-2xl font-bold tracking-tight
                text-slate-900">
                {stat.value}
              </h3>

              <p className="mt-2 text-xs text-slate-400">
                {stat.description}
              </p>
            </div>
          );
        })}
      </section>

      {/* Main Analytics Grid */}
      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">

        {/* Verification Chart */}
        <div className="rounded-2xl border border-slate-200 bg-white
          p-5 shadow-sm sm:p-6 xl:col-span-2">

          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Verification Activity
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Verification activity across the platform
              </p>
            </div>

            <div className="flex rounded-xl bg-slate-100 p-1">
              {["7D", "30D", "90D"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setPeriod(item)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-semibold
                    transition ${
                      period === item
                        ? "bg-white text-amber-700 shadow-sm"
                        : "text-slate-500 hover:text-slate-900"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              Verified
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              Pending
            </div>
          </div>

          <div className="mt-5 flex gap-3">
            <div className="flex h-[220px] flex-col justify-between
              pb-1 text-[10px] text-slate-400">
              {[100, 75, 50, 25, 0].map((value) => (
                <span key={value}>
                  {Math.round((maxValue * value) / 100)}
                </span>
              ))}
            </div>

            <div className="relative min-w-0 flex-1">
              <div className="absolute inset-0 flex flex-col
                justify-between">
                {[0, 1, 2, 3, 4].map((line) => (
                  <div
                    key={line}
                    className="border-t border-dashed border-slate-100"
                  />
                ))}
              </div>

              <div
                className="relative flex h-[220px] items-end
                  justify-around gap-2"
              >
                {chartData.map((item) => {
                  const verifiedHeight =
                    (item.verified / maxValue) * chartHeight;

                  const pendingHeight =
                    (item.pending / maxValue) * chartHeight;

                  return (
                    <div
                      key={item.day}
                      className="flex h-full flex-1 flex-col
                        items-center justify-end gap-2"
                    >
                      <div className="flex h-full items-end gap-1">
                        <div
                          title={`Verified: ${item.verified}`}
                          className="w-3 rounded-t-md bg-amber-400
                            transition-all duration-300 sm:w-5"
                          style={{
                            height: `${verifiedHeight}px`,
                          }}
                        />

                        <div
                          title={`Pending: ${item.pending}`}
                          className="w-3 rounded-t-md bg-slate-300
                            transition-all duration-300 sm:w-5"
                          style={{
                            height: `${pendingHeight}px`,
                          }}
                        />
                      </div>

                      <span className="text-[10px] font-medium
                        text-slate-400">
                        {item.day}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-2xl border border-slate-200 bg-white
          p-5 shadow-sm sm:p-6">

          <div>
            <h3 className="text-base font-bold text-slate-900">
              Quick Actions
            </h3>

            <p className="mt-1 text-xs text-slate-500">
              Manage key platform operations
            </p>
          </div>

          <div className="mt-6 space-y-3">
            <button
              type="button"
              onClick={() => navigate("/admin/users")}
              className="group flex w-full items-center gap-3 rounded-xl
                border border-slate-100 p-3 text-left transition
                hover:border-amber-200 hover:bg-amber-50/50"
            >
              <div className="flex h-10 w-10 shrink-0 items-center
                justify-center rounded-xl bg-blue-50 text-blue-600">
                <Users size={18} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-slate-800">
                  Manage Users
                </p>

                <p className="mt-0.5 text-xs text-slate-500">
                  View and manage accounts
                </p>
              </div>

              <ChevronRight
                size={16}
                className="text-slate-400 transition
                  group-hover:translate-x-0.5"
              />
            </button>

            <button
              type="button"
              onClick={() => navigate("/admin/beekeepers")}
              className="group flex w-full items-center gap-3 rounded-xl
                border border-slate-100 p-3 text-left transition
                hover:border-amber-200 hover:bg-amber-50/50"
            >
              <div className="flex h-10 w-10 shrink-0 items-center
                justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <UserCheck size={18} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-slate-800">
                  Beekeepers
                </p>

                <p className="mt-0.5 text-xs text-slate-500">
                  Review beekeeper accounts
                </p>
              </div>

              <ChevronRight size={16} className="text-slate-400" />
            </button>

            <button
              type="button"
              onClick={() => navigate("/admin/honey-batches")}
              className="group flex w-full items-center gap-3 rounded-xl
                border border-slate-100 p-3 text-left transition
                hover:border-amber-200 hover:bg-amber-50/50"
            >
              <div className="flex h-10 w-10 shrink-0 items-center
                justify-center rounded-xl bg-amber-50 text-amber-600">
                <PackageCheck size={18} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-slate-800">
                  Honey Batches
                </p>

                <p className="mt-0.5 text-xs text-slate-500">
                  Manage traceability records
                </p>
              </div>

              <ChevronRight size={16} className="text-slate-400" />
            </button>

            <button
              type="button"
              onClick={() => navigate("/admin/verification")}
              className="group flex w-full items-center gap-3 rounded-xl
                border border-slate-100 p-3 text-left transition
                hover:border-amber-200 hover:bg-amber-50/50"
            >
              <div className="flex h-10 w-10 shrink-0 items-center
                justify-center rounded-xl bg-purple-50 text-purple-600">
                <ShieldCheck size={18} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-slate-800">
                  Verification
                </p>

                <p className="mt-0.5 text-xs text-slate-500">
                  Review pending requests
                </p>
              </div>

              <ChevronRight size={16} className="text-slate-400" />
            </button>
          </div>

          <button
            type="button"
            onClick={() => navigate("/admin/analytics")}
            className="mt-5 flex w-full items-center justify-center
              gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm
              font-semibold text-white transition hover:bg-slate-800"
          >
            View Analytics
            <ArrowUpRight size={16} />
          </button>
        </div>
      </section>

      {/* Bottom Grid */}
      <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">

        {/* Recent Beekeepers */}
        <div className="rounded-2xl border border-slate-200 bg-white
          shadow-sm">

          <div className="flex items-center justify-between gap-3
            border-b border-slate-100 px-5 py-5 sm:px-6">

            <div>
              <h3 className="text-base font-bold text-slate-900">
                Recent Beekeepers
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Latest beekeeper registrations
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate("/admin/beekeepers")}
              className="flex items-center gap-1 text-xs font-semibold
                text-amber-700 hover:text-amber-900"
            >
              View All
              <ChevronRight size={14} />
            </button>
          </div>

          <div className="divide-y divide-slate-100">
            {recentBeekeepers.map((beekeeper) => (
              <div
                key={beekeeper.id}
                className="flex items-center gap-3 px-5 py-4
                  transition hover:bg-slate-50 sm:px-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center
                  justify-center rounded-xl bg-amber-100 text-xs
                  font-bold text-amber-800">
                  {beekeeper.initials}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-slate-800">
                    {beekeeper.name}
                  </p>

                  <p className="mt-0.5 truncate text-xs text-slate-500">
                    {beekeeper.location}
                  </p>
                </div>

                <div className="hidden text-right sm:block">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-1
                      text-[10px] font-bold ${
                        beekeeper.status === "Active"
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-amber-50 text-amber-700"
                      }`}
                  >
                    {beekeeper.status}
                  </span>

                  <p className="mt-1 text-[10px] text-slate-400">
                    {beekeeper.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Verifications */}
        <div className="rounded-2xl border border-slate-200 bg-white
          shadow-sm">

          <div className="flex items-center justify-between gap-3
            border-b border-slate-100 px-5 py-5 sm:px-6">

            <div>
              <h3 className="text-base font-bold text-slate-900">
                Pending Verifications
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Batches awaiting review
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate("/admin/verification")}
              className="flex items-center gap-1 text-xs font-semibold
                text-amber-700 hover:text-amber-900"
            >
              View All
              <ChevronRight size={14} />
            </button>
          </div>

          <div className="divide-y divide-slate-100">
            {pendingVerifications.map((verification) => (
              <div
                key={verification.id}
                className="flex items-center gap-3 px-5 py-4
                  transition hover:bg-slate-50 sm:px-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center
                  justify-center rounded-xl bg-amber-50 text-amber-600">
                  <Clock3 size={18} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-slate-800">
                    {verification.batch}
                  </p>

                  <p className="mt-1 truncate text-xs text-slate-500">
                    {verification.beekeeper} • {verification.id}
                  </p>

                  <p className="mt-1 text-[10px] text-slate-400">
                    {verification.date}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    navigate(
                      `/admin/verification?batch=${encodeURIComponent(
                        verification.id
                      )}`
                    )
                  }
                  className="shrink-0 rounded-lg border border-amber-200
                    px-3 py-2 text-[10px] font-bold text-amber-700
                    transition hover:bg-amber-50"
                >
                  Review
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Status */}
      <section className="rounded-2xl border border-slate-200 bg-white
        p-5 shadow-sm sm:p-6">

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              System Status
            </h3>

            <p className="mt-1 text-xs text-slate-500">
              Current platform service status
            </p>
          </div>

          <span className="flex items-center gap-2 rounded-full
            bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-600">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            All Systems Operational
          </span>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            {
              label: "API Services",
              value: "Operational",
            },
            {
              label: "Database",
              value: "Connected",
            },
            {
              label: "Authentication",
              value: "Operational",
            },
          ].map((service) => (
            <div
              key={service.label}
              className="flex items-center gap-3 rounded-xl
                border border-slate-100 bg-slate-50/60 p-4"
            >
              <CheckCircle2 size={18} className="text-emerald-500" />

              <div>
                <p className="text-xs font-semibold text-slate-700">
                  {service.label}
                </p>

                <p className="mt-1 text-[10px] text-emerald-600">
                  {service.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AdminDashboardPage;