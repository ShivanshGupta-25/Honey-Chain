import {
  Blocks,
  QrCode,
  ShieldCheck,
  MapPin,
  FlaskConical,
  Users,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Authenticity Verification",
    description:
      "Help consumers verify whether a honey batch is registered and authentic.",
  },
  {
    icon: Blocks,
    title: "Blockchain Records",
    description:
      "Create tamper-resistant records for important honey batch information.",
  },
  {
    icon: QrCode,
    title: "QR-Based Traceability",
    description:
      "Give every honey batch a unique digital identity accessible through QR.",
  },
  {
    icon: MapPin,
    title: "Origin Tracking",
    description:
      "Trace honey back to its registered beekeeper and production location.",
  },
  {
    icon: FlaskConical,
    title: "Quality Information",
    description:
      "Make relevant quality and testing information available to consumers.",
  },
  {
    icon: Users,
    title: "Beekeeper Empowerment",
    description:
      "Help rural beekeepers establish trusted digital identities for their products.",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="bg-[#fffaf0]"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        {/* ==================================================
            SECTION HEADER
        ================================================== */}
        <div className="max-w-2xl">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-500 sm:text-sm">
            Why HoneyChain
          </p>

          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            Building trust into every stage of the honey journey.
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            HoneyChain combines traceability, blockchain, and QR
            verification to create a transparent connection between
            producers and consumers.
          </p>

        </div>

        {/* ==================================================
            FEATURE GRID
        ================================================== */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-6">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group flex min-h-[220px] flex-col rounded-2xl border border-amber-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-lg sm:p-7"
              >

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 transition-all duration-300 group-hover:bg-amber-100 group-hover:scale-105">
                  <Icon size={23} strokeWidth={2} />
                </div>

                {/* Content */}
                <div className="mt-5">

                  <h3 className="text-lg font-bold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-6 text-slate-600">
                    {feature.description}
                  </p>

                </div>

                {/* Bottom Accent */}
                <div className="mt-auto pt-6">
                  <div className="h-1 w-8 rounded-full bg-amber-300 transition-all duration-300 group-hover:w-14" />
                </div>

              </div>
            );
          })}

        </div>

        {/* ==================================================
            SMALL SUPPORTING MESSAGE
        ================================================== */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-100 bg-white px-4 py-2 text-xs font-medium text-slate-600 shadow-sm sm:text-sm">
            <ShieldCheck
              size={16}
              className="text-green-600"
            />
            Transparent records. Verifiable honey. Greater trust.
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;