import { ArrowRight, QrCode, ShieldCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: "🐝",
    title: "Register",
    description:
      "Beekeepers register their farms and honey batches on HoneyChain.",
  },
  {
    number: "02",
    icon: "🍯",
    title: "Record",
    description:
      "Harvest, processing, and quality information is securely recorded.",
  },
  {
    number: "03",
    icon: "🔗",
    title: "Secure",
    description:
      "A tamper-resistant blockchain record protects the batch identity.",
  },
  {
    number: "04",
    icon: "📱",
    title: "Verify",
    description:
      "Consumers scan the QR code to instantly trace their honey.",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        {/* ==================================================
            SECTION HEADER
        ================================================== */}
        <div className="mx-auto max-w-2xl text-center">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-500 sm:text-sm">
            How It Works
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            From Hive to Home
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Every step of the honey journey becomes visible,
            verifiable, and trustworthy.
          </p>

        </div>

        {/* ==================================================
            PROCESS STEPS
        ================================================== */}
        <div className="relative mt-12 lg:mt-14">

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">

            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative"
              >

                {/* Step Card */}
                <div className="group flex h-full min-h-[235px] flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:bg-white hover:shadow-lg">

                  {/* Card Top */}
                  <div className="flex items-center justify-between">

                    {/* Icon */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl shadow-sm transition-transform duration-300 group-hover:scale-105">
                      {step.icon}
                    </div>

                    {/* Number */}
                    <span className="text-sm font-bold tracking-wide text-amber-500">
                      {step.number}
                    </span>

                  </div>

                  {/* Content */}
                  <div className="mt-6">

                    <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {step.description}
                    </p>

                  </div>

                  {/* Bottom Indicator */}
                  <div className="mt-auto pt-5">
                    <div className="h-1 w-10 rounded-full bg-amber-400 transition-all duration-300 group-hover:w-16" />
                  </div>

                </div>

                {/* Desktop Connector */}
                {index < steps.length - 1 && (
                  <div className="absolute -right-5 top-1/2 z-10 hidden -translate-y-1/2 lg:flex">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-amber-100 bg-white shadow-sm">
                      <ArrowRight
                        size={17}
                        className="text-amber-500"
                      />
                    </div>
                  </div>
                )}

              </div>
            ))}

          </div>
        </div>

        {/* ==================================================
            TRACEABILITY FLOW
        ================================================== */}
        <div className="mx-auto mt-12 max-w-4xl">

          <div className="rounded-2xl border border-amber-100 bg-[#fffaf0] px-4 py-5 sm:px-6">

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-xs font-semibold text-slate-600 sm:text-sm">

              {/* Beekeeper */}
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm">
                  🐝
                </span>
                <span>Beekeeper</span>
              </div>

              <ArrowRight
                size={16}
                className="text-amber-400"
              />

              {/* Honey Batch */}
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm">
                  🍯
                </span>
                <span>Honey Batch</span>
              </div>

              <ArrowRight
                size={16}
                className="text-amber-400"
              />

              {/* Blockchain */}
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm">
                  <ShieldCheck
                    size={16}
                    className="text-slate-600"
                  />
                </span>
                <span>Blockchain</span>
              </div>

              <ArrowRight
                size={16}
                className="text-amber-400"
              />

              {/* Consumer */}
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm">
                  <QrCode
                    size={16}
                    className="text-slate-600"
                  />
                </span>
                <span>Consumer</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;