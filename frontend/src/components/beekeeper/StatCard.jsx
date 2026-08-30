import { ArrowUpRight, TrendingUp } from "lucide-react";

const StatCard = ({
  title,
  value,
  change,
  description,
  icon,
  color = "amber",
}) => {
  const colorStyles = {
    amber: {
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
      iconRing: "ring-amber-100",
      accent: "bg-amber-400",
      glow: "bg-amber-100",
    },

    green: {
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      iconRing: "ring-emerald-100",
      accent: "bg-emerald-500",
      glow: "bg-emerald-100",
    },

    blue: {
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      iconRing: "ring-blue-100",
      accent: "bg-blue-500",
      glow: "bg-blue-100",
    },

    purple: {
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
      iconRing: "ring-purple-100",
      accent: "bg-purple-500",
      glow: "bg-purple-100",
    },

    orange: {
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600",
      iconRing: "ring-orange-100",
      accent: "bg-orange-500",
      glow: "bg-orange-100",
    },
  };

  const styles = colorStyles[color] || colorStyles.amber;

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
        hover:-translate-y-1
        hover:border-slate-200
        hover:shadow-lg
        hover:shadow-slate-200/50
      "
    >
      {/* =====================================================
          DECORATIVE BACKGROUND
      ====================================================== */}
      <div
        className={`
          pointer-events-none
          absolute -right-8 -top-8
          h-24 w-24
          rounded-full
          ${styles.glow}
          opacity-30
          blur-2xl
          transition-all duration-300
          group-hover:scale-125
        `}
      />

      {/* Top Accent */}
      <div
        className={`
          absolute left-0 right-0 top-0
          h-0.5
          ${styles.accent}
          opacity-70
        `}
      />

      {/* =====================================================
          TOP ROW
      ====================================================== */}
      <div className="relative flex items-start justify-between">
        {/* Icon */}
        <div
          className={`
            flex h-11 w-11
            items-center justify-center
            rounded-xl
            ${styles.iconBg}
            ${styles.iconColor}
            ring-1 ${styles.iconRing}
            shadow-sm
            transition-all duration-300
            group-hover:scale-105
          `}
        >
          <span className="text-xl">
            {icon}
          </span>
        </div>

        {/* Change */}
        {change && (
          <div
            className="
              flex items-center gap-1
              rounded-full
              bg-emerald-50
              px-2.5 py-1
              text-[11px]
              font-bold
              text-emerald-600
              ring-1 ring-emerald-100
            "
          >
            <ArrowUpRight size={13} strokeWidth={2.5} />
            {change}
          </div>
        )}
      </div>

      {/* =====================================================
          METRIC
      ====================================================== */}
      <div className="relative mt-5">
        <p
          className="
            text-[11px]
            font-bold
            uppercase
            tracking-[0.12em]
            text-slate-400
          "
        >
          {title}
        </p>

        <div className="mt-1 flex items-end gap-2">
          <h3
            className="
              text-2xl
              font-extrabold
              tracking-tight
              text-slate-900
              sm:text-[27px]
            "
          >
            {value}
          </h3>

          {/* Tiny trend icon */}
          <TrendingUp
            size={15}
            className="mb-1 text-emerald-500"
            strokeWidth={2.5}
          />
        </div>
      </div>

      {/* =====================================================
          DESCRIPTION
      ====================================================== */}
      <div className="mt-1.5 flex items-center gap-1.5">
        <span
          className={`
            h-1.5 w-1.5
            rounded-full
            ${styles.accent}
          `}
        />

        <p className="truncate text-xs font-medium text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
};

export default StatCard;