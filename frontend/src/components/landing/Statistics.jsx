import {
  ShieldCheck,
  QrCode,
  Clock3,
  Fingerprint,
} from "lucide-react";

const statistics = [
  {
    value: "100%",
    label: "Digital Traceability",
    description: "End-to-end batch visibility",
    icon: ShieldCheck,
  },
  {
    value: "QR",
    label: "Consumer Verification",
    description: "Instant product verification",
    icon: QrCode,
  },
  {
    value: "24/7",
    label: "Record Accessibility",
    description: "Information available anytime",
    icon: Clock3,
  },
  {
    value: "1",
    label: "Unique Identity",
    description: "Digital identity per batch",
    icon: Fingerprint,
  },
];

const Statistics = () => {
  return (
    <section className="relative overflow-hidden bg-blue-950">
      
      {/* ==================================================
          BACKGROUND DECORATION
      ================================================== */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-amber-400/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">

        {/* ==================================================
            SECTION INTRO
        ================================================== */}
        <div className="mx-auto mb-12 max-w-2xl text-center">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-amber-400">
            <ShieldCheck size={14} />
            Built for Trust
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Transparency at every stage.
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
            HoneyChain creates a verifiable digital identity for every
            honey batch, from its origin to the consumer.
          </p>

        </div>

        {/* ==================================================
            STATISTICS
        ================================================== */}
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

            {statistics.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className={`
                    group relative px-6 py-7 text-center transition-colors duration-300
                    hover:bg-slate-800/60
                    sm:px-7 sm:py-8
                    ${
                      index > 0
                        ? "border-t border-slate-800 sm:border-l sm:border-t-0"
                        : ""
                    }
                    ${
                      index === 2
                        ? "lg:border-l"
                        : ""
                    }
                  `}
                >

                  {/* Icon */}
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-950 text-amber-400 transition-all duration-300 group-hover:border-amber-400/30 group-hover:bg-amber-400/10">
                    <Icon
                      size={19}
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Value */}
                  <p className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    {stat.value}
                  </p>

                  {/* Label */}
                  <p className="mt-2 text-sm font-semibold text-slate-200">
                    {stat.label}
                  </p>

                  {/* Description */}
                  <p className="mx-auto mt-1.5 max-w-[190px] text-xs leading-5 text-slate-500">
                    {stat.description}
                  </p>

                  {/* Bottom Accent */}
                  <div className="mx-auto mt-5 h-px w-8 bg-amber-400/50 transition-all duration-300 group-hover:w-14 group-hover:bg-amber-400" />

                </div>
              );
            })}

          </div>

        </div>

        {/* ==================================================
            TRUST STATEMENT
        ================================================== */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs font-medium text-slate-500 sm:text-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
          Designed for transparent and verifiable honey supply chains
        </div>

      </div>
    </section>
  );
};

export default Statistics;