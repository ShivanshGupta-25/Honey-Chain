import { ArrowRight, QrCode, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const traceabilitySteps = [
    {
      icon: "🐝",
      title: "Bee Farm",
      status: "Registered",
    },
    {
      icon: "🍯",
      title: "Harvest",
      status: "20 Aug 2026",
    },
    {
      icon: "🧪",
      title: "Quality Test",
      status: "Passed",
    },
    {
      icon: "🔗",
      title: "Blockchain",
      status: "Verified",
    },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#fffaf0]"
    >
      {/* ================= BACKGROUND DECORATIONS ================= */}
      <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-amber-200/30 blur-3xl" />

      <div className="pointer-events-none absolute bottom-[-180px] left-[-180px] h-[420px] w-[420px] rounded-full bg-yellow-100/40 blur-3xl" />

      {/* ================= HERO CONTAINER ================= */}
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pb-16 lg:pt-16">
        
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          
          {/* ==================================================
              LEFT CONTENT
          ================================================== */}
          <div className="max-w-2xl">
            
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-medium text-amber-700 shadow-sm">
              <span className="text-base">🐝</span>
              <span>Blockchain-Powered Honey Traceability</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Trust Every
              <span className="block text-amber-500">
                Drop of Honey.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              HoneyChain connects beekeepers, processors, and consumers
              through transparent, tamper-resistant honey traceability.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              
              <Link
                to="/signup"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-amber-200/60 transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-xl"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-300 hover:text-amber-600"
              >
                See How It Works
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
              
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <ShieldCheck
                  size={18}
                  className="text-green-600"
                />
                <span>Verified Records</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-600">
                <QrCode
                  size={18}
                  className="text-amber-500"
                />
                <span>QR Verification</span>
              </div>

            </div>
          </div>

          {/* ==================================================
              RIGHT VISUAL
          ================================================== */}
          <div className="flex justify-center lg:justify-end">
            
            <div className="relative w-full max-w-md">
              
              {/* Main Card */}
              <div className="relative rounded-3xl border border-amber-100 bg-white p-5 shadow-[0_20px_60px_rgba(180,120,20,0.12)] sm:p-6">
                
                {/* Card Header */}
                <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-5">
                  
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                      Honey Batch
                    </p>

                    <h3 className="mt-1 text-lg font-bold text-slate-900 sm:text-xl">
                      HC-2026-00001
                    </h3>
                  </div>

                  <div className="shrink-0 rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-600">
                    ✓ Verified
                  </div>
                </div>

                {/* Honey Visual */}
                {/* <div className="flex justify-center py-7 sm:py-8">
                  
                  <div className="relative flex h-48 w-48 items-center justify-center rounded-full bg-amber-50 sm:h-52 sm:w-52">
                    
                    
                    <div className="relative flex h-32 w-24 items-center justify-center rounded-b-[28px] rounded-t-xl border-4 border-amber-300 bg-amber-400 shadow-lg sm:h-36 sm:w-28">
                      
                      <img
                        src="images/Honeybox.png"
                        alt="HoneyChain"
                        className="h-12 w-auto object-contain"
                    />
                    </div>

                    
                    <div className="absolute -right-2 top-4 rounded-xl border border-slate-100 bg-white p-2.5 shadow-lg sm:-right-3 sm:p-3">
                      <QrCode
                        size={42}
                        className="text-slate-800 sm:h-12 sm:w-12"
                      />
                    </div>

                  </div>
                </div> */}
                <div className="flex justify-center py-8 sm:py-10">
                    {/* Main Illustration Area */}
                    <div className="relative flex h-56 w-56 items-center justify-center sm:h-64 sm:w-64">

                        {/* Soft Background Glow */}
                        <div
                        className="
                            absolute inset-0 rounded-full
                            bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-100
                            shadow-inner
                        "
                        />

                        {/* Decorative Glow */}
                        <div className="absolute h-44 w-44 rounded-full bg-amber-200/20 blur-2xl sm:h-52 sm:w-52" />

                        {/* Honey Jar Container */}
                        <div
                        className="
                            relative z-10
                            flex h-36 w-28
                            items-center justify-center
                            rounded-b-[2rem]
                            rounded-t-2xl
                            border-[4px] border-amber-300
                            bg-gradient-to-br from-amber-300 via-amber-400 to-orange-400
                            shadow-[0_12px_25px_rgba(180,120,20,0.25)]
                            sm:h-40 sm:w-32
                        "
                        >
                        {/* Jar Highlight */}
                        <div
                            className="
                            pointer-events-none
                            absolute left-2 top-3
                            h-20 w-2
                            rounded-full
                            bg-white/30
                            blur-[1px]
                            "
                        />

                        {/* Honey Label */}
                        <div
                            className="
                            relative z-20
                            flex h-16 w-[4.8rem]
                            items-center justify-center
                            overflow-hidden
                            rounded-md
                            border border-white/70
                            bg-white
                            p-1
                            shadow-md
                            sm:h-[4.5rem] sm:w-[5.5rem]
                            "
                        >
                            <img
                            src="/images/Honeybox.png"
                            alt="Honey Chain"
                            className="h-full w-full object-contain"
                            />
                        </div>

                        {/* Bottom Glass Highlight */}
                        <div
                            className="
                            absolute bottom-2
                            h-1 w-14
                            rounded-full
                            bg-white/30
                            blur-sm
                            "
                        />
                        </div>

                        {/* QR Code Card */}
                        <div
                        className="
                            absolute
                            right-0 top-5
                            z-30
                            flex h-[5.5rem] w-[5.5rem]
                            items-center justify-center
                            rounded-2xl
                            border border-slate-100
                            bg-white
                            p-3
                            shadow-[0_10px_30px_rgba(15,23,42,0.15)]
                            sm:right-[-0.5rem]
                            sm:top-6
                            sm:h-24 sm:w-24
                            sm:p-4
                        "
                        >
                        <div className="flex h-full w-full items-center justify-center rounded-xl bg-slate-50">
                            <QrCode
                            size={46}
                            strokeWidth={2.5}
                            className="text-slate-800 sm:h-12 sm:w-12"
                            />
                        </div>
                        </div>

                        {/* Small Decorative Honey Drops */}
                        <div className="absolute bottom-8 left-7 z-20 h-3 w-3 rounded-full bg-amber-300/70 blur-[1px]" />
                        <div className="absolute bottom-12 left-3 z-20 h-2 w-2 rounded-full bg-orange-300/60" />

                    </div>
                    </div>

                {/* Traceability Steps */}
                <div className="space-y-2.5">
                  
                  {traceabilitySteps.map(
                    ({ icon, title, status }) => (
                      <div
                        key={title}
                        className="flex items-center gap-3 rounded-xl bg-slate-50 px-3 py-2.5 transition-colors hover:bg-amber-50"
                      >
                        
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-base shadow-sm">
                          {icon}
                        </span>

                        <p className="flex-1 text-sm font-semibold text-slate-800">
                          {title}
                        </p>

                        <span className="text-[11px] font-semibold text-green-600 sm:text-xs">
                          {status}
                        </span>
                      </div>
                    )
                  )}

                </div>
              </div>

              {/* Decorative floating element */}
              <div className="absolute -bottom-4 -left-4 hidden rounded-xl border border-amber-100 bg-white px-4 py-3 shadow-lg sm:block">
                <div className="flex items-center gap-2">
                  <ShieldCheck
                    size={17}
                    className="text-green-600"
                  />

                  <div>
                    <p className="text-[10px] text-slate-400">
                      RECORD STATUS
                    </p>

                    <p className="text-xs font-bold text-slate-800">
                      Blockchain Verified
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;