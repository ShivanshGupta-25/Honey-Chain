import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const HiveHealth = () => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6">

      <div className="mb-6 flex items-start justify-between">

        <div>
          <h2 className="text-base font-bold text-slate-900">
            Hive Health
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Current condition of your colonies
          </p>
        </div>

        <Link
          to="/beekeeper/hives"
          className="flex items-center gap-1 text-xs font-semibold text-amber-600 hover:text-amber-700"
        >
          View all
          <ChevronRight size={14} />
        </Link>

      </div>


      <div className="grid gap-3 sm:grid-cols-3">

        <HealthCard
          icon={<CheckCircle2 size={17} />}
          label="Healthy"
          value="20"
          type="healthy"
        />

        <HealthCard
          icon={<AlertTriangle size={17} />}
          label="Attention"
          value="3"
          type="warning"
        />

        <HealthCard
          icon={<Activity size={17} />}
          label="Critical"
          value="1"
          type="critical"
        />

      </div>


      <div className="mt-6">

        <div className="mb-2 flex items-center justify-between">

          <span className="text-xs font-medium text-slate-500">
            Overall hive health
          </span>

          <span className="text-xs font-bold text-slate-700">
            83%
          </span>

        </div>

        <div className="h-2 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-emerald-500"
            style={{ width: "83%" }}
          />
        </div>

      </div>

    </section>
  );
};


const HealthCard = ({
  icon,
  label,
  value,
  type,
}) => {

  const styles = {
    healthy: "bg-emerald-50 text-emerald-600",
    warning: "bg-amber-50 text-amber-600",
    critical: "bg-red-50 text-red-600",
  };

  return (
    <div className="rounded-xl bg-slate-50 p-4">

      <div className="flex items-center gap-2">

        <div
          className={`
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-lg
            ${styles[type]}
          `}
        >
          {icon}
        </div>

        <span className="text-xs font-semibold text-slate-600">
          {label}
        </span>

      </div>

      <p className="mt-3 text-xl font-bold text-slate-900">
        {value}
      </p>

      <p className="text-[10px] text-slate-400">
        hives
      </p>

    </div>
  );
};

export default HiveHealth;