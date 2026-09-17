
import {
  ShieldCheck,
  ScanLine,
  UsersRound,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

const DashboardStats = ({ stats = {} }) => {
  const statCards = [
    {
      title: "Verified Batches",
      value: stats.verifiedBatches ?? 0,
      description: "Successfully verified",
      icon: ShieldCheck,
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      valueColor: "text-slate-800",
    },
    {
      title: "Total Scans",
      value: stats.totalScans ?? 0,
      description: "QR verification attempts",
      icon: ScanLine,
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
      valueColor: "text-slate-800",
    },
    {
      title: "Trusted Sources",
      value: stats.trustedSources ?? 0,
      description: "Unique honey sources",
      icon: UsersRound,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      valueColor: "text-slate-800",
    },
    {
      title: "Recent Verification",
      value: stats.recentVerification ?? "N/A",
      description: "Latest successful scan",
      icon: Clock3,
      iconBg: "bg-violet-50",
      iconColor: "text-violet-600",
      valueColor: "text-slate-800",
    },
  ];

  return (
    <section
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
      aria-label="Consumer statistics"
    >
      {statCards.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-3">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.iconBg} ${stat.iconColor}`}
              >
                <Icon size={21} strokeWidth={2} />
              </div>

              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-400 transition group-hover:bg-amber-50 group-hover:text-amber-500">
                <ArrowUpRight size={16} />
              </div>
            </div>

            {/* Content */}
            <div className="mt-5">
              <p className="text-sm font-medium text-slate-500">
                {stat.title}
              </p>

              <h3
                className={`mt-2 truncate text-2xl font-bold tracking-tight ${stat.valueColor}`}
              >
                {stat.value}
              </h3>

              <p className="mt-2 text-xs text-slate-400">
                {stat.description}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default DashboardStats;