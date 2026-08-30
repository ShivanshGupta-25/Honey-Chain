import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Boxes,
  CalendarDays,
  Droplets,
} from "lucide-react";

import { Link } from "react-router-dom";

const RecentBatches = ({ batches = [] }) => {
  // ---------------------------------------------------------
  // Status configuration
  // ---------------------------------------------------------
  const getStatusConfig = (status) => {
    switch (status) {
      case "Verified":
        return {
          icon: CheckCircle2,
          label: "Verified",
          wrapper:
            "bg-emerald-50 text-emerald-600 ring-emerald-100",
        };

      case "Pending":
        return {
          icon: Clock3,
          label: "Pending",
          wrapper:
            "bg-amber-50 text-amber-600 ring-amber-100",
        };

      default:
        return {
          icon: Clock3,
          label: status || "Pending",
          wrapper:
            "bg-slate-50 text-slate-500 ring-slate-100",
        };
    }
  };

  return (
    <div
      className="
        group relative overflow-hidden
        rounded-2xl
        border border-slate-200/80
        bg-white
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
      <div
        className="
          flex items-center justify-between
          border-b border-slate-100
          px-5 py-5
          sm:px-6
        "
      >
        <div className="flex items-center gap-3">
          {/* Icon */}
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
            <Boxes size={19} />
          </div>

          {/* Title */}
          <div>
            <h3
              className="
                text-sm font-bold
                tracking-tight
                text-slate-900
                sm:text-base
              "
            >
              Recent Honey Batches
            </h3>

            <p className="mt-0.5 text-[11px] font-medium text-slate-400">
              Latest registered batches
            </p>
          </div>
        </div>

        {/* View All */}
        <Link
          to="/beekeeper/batches"
          className="
            group/link
            flex items-center gap-1.5
            rounded-lg
            px-2.5 py-2
            text-xs font-bold
            text-amber-600
            transition-all duration-200
            hover:bg-amber-50
            hover:text-amber-700
            sm:text-sm
          "
        >
          <span>View all</span>

          <ArrowRight
            size={15}
            className="
              transition-transform duration-200
              group-hover/link:translate-x-0.5
            "
          />
        </Link>
      </div>

      {/* =====================================================
          DESKTOP TABLE
      ====================================================== */}
      <div className="hidden overflow-x-auto md:block">
        {batches.length > 0 ? (
          <table className="w-full">
            {/* Table Head */}
            <thead>
              <tr
                className="
                  border-b border-slate-100
                  bg-slate-50/50
                  text-left
                "
              >
                <th
                  className="
                    px-5 py-3.5
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-slate-400
                    sm:px-6
                  "
                >
                  Batch
                </th>

                <th
                  className="
                    px-5 py-3.5
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-slate-400
                  "
                >
                  Honey Type
                </th>

                <th
                  className="
                    px-5 py-3.5
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-slate-400
                  "
                >
                  Harvest
                </th>

                <th
                  className="
                    px-5 py-3.5
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-slate-400
                  "
                >
                  Quantity
                </th>

                <th
                  className="
                    px-5 py-3.5
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-slate-400
                  "
                >
                  Status
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {batches.map((batch) => {
                const status = getStatusConfig(batch.status);
                const StatusIcon = status.icon;

                return (
                  <tr
                    key={batch.id}
                    className="
                      group/row
                      border-b border-slate-50
                      transition-all duration-200
                      last:border-0
                      hover:bg-amber-50/30
                    "
                  >
                    {/* Batch */}
                    <td className="px-5 py-4 sm:px-6">
                      <div className="flex items-center gap-3">
                        <div
                          className="
                            flex h-9 w-9 shrink-0
                            items-center justify-center
                            rounded-lg
                            bg-slate-50
                            text-slate-400
                            transition
                            group-hover/row:bg-amber-50
                            group-hover/row:text-amber-500
                          "
                        >
                          <Boxes size={16} />
                        </div>

                        <div>
                          <p
                            className="
                              text-sm font-bold
                              text-slate-800
                              transition-colors
                              group-hover/row:text-amber-700
                            "
                          >
                            {batch.id}
                          </p>

                          <p className="mt-0.5 text-[10px] font-medium text-slate-400">
                            Honey Batch
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Honey Type */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <Droplets
                          size={15}
                          className="text-amber-400"
                        />

                        <span className="text-sm font-medium text-slate-600">
                          {batch.honeyType}
                        </span>
                      </div>
                    </td>

                    {/* Harvest */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <CalendarDays
                          size={14}
                          className="text-slate-400"
                        />

                        <span className="text-sm font-medium text-slate-500">
                          {batch.harvestDate}
                        </span>
                      </div>
                    </td>

                    {/* Quantity */}
                    <td className="px-5 py-4">
                      <span
                        className="
                          text-sm font-bold
                          text-slate-700
                        "
                      >
                        {batch.quantity}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="px-5 py-4">
                      <span
                        className={`
                          inline-flex items-center gap-1.5
                          rounded-full
                          px-2.5 py-1.5
                          text-[10px]
                          font-bold
                          ring-1
                          ${status.wrapper}
                        `}
                      >
                        <StatusIcon size={12} />
                        {status.label}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <EmptyState />
        )}
      </div>

      {/* =====================================================
          MOBILE CARDS
      ====================================================== */}
      <div className="space-y-3 p-4 md:hidden">
        {batches.length > 0 ? (
          batches.map((batch) => {
            const status = getStatusConfig(batch.status);
            const StatusIcon = status.icon;

            return (
              <div
                key={batch.id}
                className="
                  group/card
                  rounded-xl
                  border border-slate-100
                  bg-slate-50/60
                  p-4
                  transition-all duration-200
                  hover:border-amber-100
                  hover:bg-amber-50/30
                "
              >
                {/* Top */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <div
                      className="
                        flex h-9 w-9 shrink-0
                        items-center justify-center
                        rounded-lg
                        bg-white
                        text-amber-500
                        shadow-sm
                      "
                    >
                      <Boxes size={16} />
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-slate-800">
                        {batch.id}
                      </p>

                      <p className="mt-0.5 text-[10px] text-slate-400">
                        Honey Batch
                      </p>
                    </div>
                  </div>

                  {/* Status */}
                  <span
                    className={`
                      inline-flex shrink-0
                      items-center gap-1
                      rounded-full
                      px-2 py-1
                      text-[9px]
                      font-bold
                      ring-1
                      ${status.wrapper}
                    `}
                  >
                    <StatusIcon size={10} />
                    {status.label}
                  </span>
                </div>

                {/* Details */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {/* Honey */}
                  <div
                    className="
                      rounded-lg
                      border border-slate-100
                      bg-white
                      p-2.5
                    "
                  >
                    <div className="flex items-center gap-1.5">
                      <Droplets
                        size={13}
                        className="text-amber-400"
                      />

                      <span className="text-[9px] font-bold uppercase tracking-wide text-slate-400">
                        Honey
                      </span>
                    </div>

                    <p className="mt-1 text-xs font-semibold text-slate-700">
                      {batch.honeyType}
                    </p>
                  </div>

                  {/* Quantity */}
                  <div
                    className="
                      rounded-lg
                      border border-slate-100
                      bg-white
                      p-2.5
                    "
                  >
                    <div className="flex items-center gap-1.5">
                      <Boxes
                        size={13}
                        className="text-blue-400"
                      />

                      <span className="text-[9px] font-bold uppercase tracking-wide text-slate-400">
                        Quantity
                      </span>
                    </div>

                    <p className="mt-1 text-xs font-semibold text-slate-700">
                      {batch.quantity}
                    </p>
                  </div>
                </div>

                {/* Harvest */}
                <div className="mt-3 flex items-center gap-1.5 text-[10px] font-medium text-slate-400">
                  <CalendarDays size={12} />

                  <span>
                    Harvested on {batch.harvestDate}
                  </span>
                </div>
              </div>
            );
          })
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
};

/* =========================================================
   EMPTY STATE
========================================================= */

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 text-center">
      <div
        className="
          flex h-12 w-12
          items-center justify-center
          rounded-2xl
          bg-amber-50
          text-amber-500
          ring-1 ring-amber-100
        "
      >
        <Boxes size={21} />
      </div>

      <h4 className="mt-4 text-sm font-bold text-slate-800">
        No honey batches yet
      </h4>

      <p className="mt-1 max-w-xs text-xs leading-relaxed text-slate-400">
        Register your first honey batch to start
        tracking its journey through HoneyChain.
      </p>

      <Link
        to="/beekeeper/register"
        className="
          mt-4
          inline-flex items-center gap-2
          rounded-lg
          bg-amber-500
          px-4 py-2
          text-xs font-bold
          text-white
          shadow-sm
          shadow-amber-200
          transition
          hover:bg-amber-600
        "
      >
        Register Batch
        <ArrowRight size={13} />
      </Link>
    </div>
  );
};

export default RecentBatches;