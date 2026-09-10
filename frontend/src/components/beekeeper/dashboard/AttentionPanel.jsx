import {
  AlertTriangle,
  ArrowRight,
  Bell,
  Info,
} from "lucide-react";
import { Link } from "react-router-dom";

const alerts = [
  {
    title: "Hive H-014",
    description: "Temperature above normal range",
    type: "warning",
  },
  {
    title: "Hive H-009",
    description: "Colony activity has decreased",
    type: "warning",
  },
  {
    title: "Batch HC-026",
    description: "Quality verification pending",
    type: "info",
  },
];

const AttentionPanel = () => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6">

      <div className="mb-5 flex items-start justify-between">

        <div>
          <h2 className="text-base font-bold text-slate-900">
            Attention Required
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Items that may need your action
          </p>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
          <Bell size={17} />
        </div>

      </div>


      <div className="space-y-3">

        {alerts.map((alert) => (
          <AlertItem
            key={`${alert.title}-${alert.description}`}
            {...alert}
          />
        ))}

      </div>


      <Link
        to="/beekeeper/alerts"
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 py-2.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50"
      >
        View all alerts
        <ArrowRight size={14} />
      </Link>

    </section>
  );
};


const AlertItem = ({
  title,
  description,
  type,
}) => {

  const isWarning = type === "warning";

  return (
    <div className="flex items-start gap-3 rounded-xl border border-slate-100 p-3">

      <div
        className={`
          mt-0.5
          flex
          h-7
          w-7
          shrink-0
          items-center
          justify-center
          rounded-lg
          ${
            isWarning
              ? "bg-amber-50 text-amber-600"
              : "bg-blue-50 text-blue-600"
          }
        `}
      >
        {isWarning ? (
          <AlertTriangle size={14} />
        ) : (
          <Info size={14} />
        )}
      </div>

      <div className="min-w-0">

        <p className="text-xs font-semibold text-slate-800">
          {title}
        </p>

        <p className="mt-0.5 text-[11px] leading-4 text-slate-500">
          {description}
        </p>

      </div>

    </div>
  );
};

export default AttentionPanel;