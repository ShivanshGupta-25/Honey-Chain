import { ArrowRight, ShieldCheck, QrCode } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section
      id="about"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        {/* ==================================================
            CTA CARD
        ================================================== */}
        <div className="relative overflow-hidden rounded-3xl bg-amber-500 px-6 py-14 shadow-xl sm:px-12 sm:py-16 lg:px-16">

          {/* Background Decorations */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

          <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-yellow-300/20 blur-3xl" />

          {/* Content */}
          <div className="relative mx-auto max-w-3xl text-center">

            {/* Eyebrow */}
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-100 sm:text-sm">
              The Future of Honey Traceability
            </p>

            {/* Heading */}
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Know where your honey comes from.
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-amber-50 sm:text-base">
              Connect the hive, the supply chain, and the consumer
              through one transparent digital platform.
            </p>

            {/* CTA */}
            <Link
              to="/role-selection"
              state={{ mode: "signup" }}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-amber-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-50 hover:shadow-md sm:px-7"
            >
              Join HoneyChain
              <ArrowRight size={18} />
            </Link>

            {/* Trust Points */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-medium text-amber-50 sm:text-sm">

              <div className="flex items-center gap-2">
                <ShieldCheck size={16} />
                Verified Records
              </div>

              <div className="flex items-center gap-2">
                <QrCode size={16} />
                QR Traceability
              </div>

              <div className="flex items-center gap-2">
                🔗 Blockchain Secured
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CTA;