import { ArrowUpRight } from "lucide-react";

const DashboardStat = ({
  icon,
  label,
  value,
  description,
  trend,
  warning = false,
}) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-sm">

      <div className="flex items-start justify-between">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-600">
          {icon}
        </div>

        {warning ? (
          <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-bold text-amber-600">
            ACTION
          </span>
        ) : trend ? (
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
            <ArrowUpRight size={12} />
            {trend}
          </span>
        ) : null}

      </div>

      <p className="mt-5 text-xs font-medium text-slate-500">
        {label}
      </p>

      <p className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
        {value}
      </p>

      <p className="mt-1 text-[11px] text-slate-400">
        {description}
      </p>

    </div>
  );
};

export default DashboardStat;