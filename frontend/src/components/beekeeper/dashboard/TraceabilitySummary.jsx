import {
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const TraceabilitySummary = () => {
  return (
    <section className="rounded-2xl border border-amber-100 bg-amber-50/60 p-6">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex items-start gap-4">

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-amber-600 shadow-sm">
            <ShieldCheck size={21} />
          </div>

          <div>

            <h2 className="text-base font-bold text-slate-900">
              HoneyChain Traceability
            </h2>

            <p className="mt-1 max-w-xl text-xs leading-5 text-slate-500">
              Your registered honey batches are securely tracked
              from harvest to consumer verification.
            </p>

          </div>

        </div>


        <div className="flex flex-wrap items-center gap-7">

          <TraceabilityStat
            value="24"
            label="Registered batches"
          />

          <TraceabilityStat
            value="22"
            label="Active QR codes"
          />

          <TraceabilityStat
            value="184"
            label="Consumer scans"
          />

          <Link
            to="/beekeeper/traceability"
            className="flex h-9 items-center gap-1.5 rounded-lg bg-white px-3 text-xs font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
          >
            Manage
            <ArrowRight size={13} />
          </Link>

        </div>

      </div>

    </section>
  );
};


const TraceabilityStat = ({
  value,
  label,
}) => {
  return (
    <div>

      <p className="text-lg font-bold text-slate-900">
        {value}
      </p>

      <p className="mt-0.5 whitespace-nowrap text-[10px] font-medium text-slate-400">
        {label}
      </p>

    </div>
  );
};

export default TraceabilitySummary;