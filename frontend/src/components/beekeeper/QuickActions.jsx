import {
  Plus,
  QrCode,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";

const QuickActions = () => {
  return (
    <div
      className="
        group relative overflow-hidden
        rounded-2xl
        border border-slate-200/80
        bg-white
        p-5
        shadow-sm
        transition-all duration-300
        hover:shadow-md
      "
    >
      {/* =====================================================
          TOP ACCENT
      ====================================================== */}
      <div
        className="
          absolute left-0 right-0 top-0
          h-0.5
          bg-gradient-to-r
          from-amber-400
          via-yellow-400
          to-orange-500
        "
      />

      {/* =====================================================
          HEADER
      ====================================================== */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          {/* Header Icon */}
          <div
            className="
              flex h-10 w-10 shrink-0
              items-center justify-center
              rounded-xl
              bg-amber-50
              text-amber-600
              ring-1 ring-amber-100
            "
          >
            <Sparkles size={18} />
          </div>

          <div>
            <h3
              className="
                text-sm font-bold
                tracking-tight
                text-slate-900
              "
            >
              Quick Actions
            </h3>

            <p className="mt-0.5 text-[11px] font-medium text-slate-400">
              Manage your honey batches
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          ACTIONS
      ====================================================== */}
      <div className="mt-5 space-y-3">

        {/* -----------------------------------------------------
            REGISTER NEW BATCH
        ------------------------------------------------------ */}
        <Link
          to="/beekeeper/register"
          className="
            group/action
            relative flex items-center gap-3
            overflow-hidden
            rounded-xl
            border border-amber-400
            bg-gradient-to-r
            from-amber-500
            to-orange-500
            p-3.5
            text-white
            shadow-sm
            shadow-amber-200
            transition-all duration-300
            hover:-translate-y-0.5
            hover:shadow-lg
            hover:shadow-amber-200/60
          "
        >
          {/* Decorative Glow */}
          <div
            className="
              pointer-events-none
              absolute -right-6 -top-8
              h-24 w-24
              rounded-full
              bg-white/10
              blur-xl
              transition-transform duration-300
              group-hover/action:scale-125
            "
          />

          {/* Icon */}
          <div
            className="
              relative z-10
              flex h-10 w-10 shrink-0
              items-center justify-center
              rounded-lg
              bg-white/20
              ring-1 ring-white/20
              backdrop-blur-sm
            "
          >
            <Plus size={20} strokeWidth={2.5} />
          </div>

          {/* Text */}
          <div className="relative z-10 min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <p className="text-sm font-bold">
                Register New Batch
              </p>

              <span
                className="
                  hidden rounded-full
                  bg-white/20
                  px-1.5 py-0.5
                  text-[8px] font-bold
                  uppercase tracking-wide
                  sm:inline
                "
              >
                New
              </span>
            </div>

            <p className="mt-0.5 text-[10px] font-medium text-amber-100">
              Add a honey batch to HoneyChain
            </p>
          </div>

          {/* Arrow */}
          <ArrowRight
            size={17}
            className="
              relative z-10
              shrink-0
              text-white/80
              transition-transform duration-200
              group-hover/action:translate-x-1
            "
          />
        </Link>

        {/* -----------------------------------------------------
            MANAGE QR CODES
        ------------------------------------------------------ */}
        <Link
          to="/beekeeper/qr-codes"
          className="
            group/action
            flex items-center gap-3
            rounded-xl
            border border-slate-200
            bg-white
            p-3.5
            transition-all duration-300
            hover:-translate-y-0.5
            hover:border-amber-200
            hover:bg-amber-50/40
            hover:shadow-md
          "
        >
          {/* Icon */}
          <div
            className="
              flex h-10 w-10 shrink-0
              items-center justify-center
              rounded-lg
              bg-slate-50
              text-slate-500
              ring-1 ring-slate-100
              transition-all duration-200
              group-hover/action:bg-amber-50
              group-hover/action:text-amber-600
              group-hover/action:ring-amber-100
            "
          >
            <QrCode size={20} strokeWidth={2} />
          </div>

          {/* Text */}
          <div className="min-w-0 flex-1">
            <p
              className="
                text-sm font-bold
                text-slate-800
                transition-colors
                group-hover/action:text-amber-700
              "
            >
              Manage QR Codes
            </p>

            <p className="mt-0.5 text-[10px] font-medium text-slate-400">
              View and manage batch QR codes
            </p>
          </div>

          {/* Arrow */}
          <ArrowRight
            size={16}
            className="
              shrink-0
              text-slate-300
              transition-all duration-200
              group-hover/action:translate-x-1
              group-hover/action:text-amber-500
            "
          />
        </Link>
      </div>

      {/* =====================================================
          BOTTOM INFO
      ====================================================== */}
      <div
        className="
          mt-4 flex items-center gap-2
          rounded-lg
          bg-slate-50
          px-3 py-2
        "
      >
        <div className="h-1.5 w-1.5 rounded-full bg-green-500" />

        <p className="text-[10px] font-medium text-slate-400">
          Your batch data is securely traceable
        </p>
      </div>
    </div>
  );
};

export default QuickActions;