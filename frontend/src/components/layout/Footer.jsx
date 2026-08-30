import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-orange-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">

        {/* ==================================================
            FOOTER MAIN
        ================================================== */}
        <div className="grid gap-10 md:grid-cols-4 md:gap-8">

          {/* ==================================================
              BRAND
          ================================================== */}
          <div className="md:col-span-2">

            <Link
              to="/"
              className="inline-flex items-center gap-3"
            >
              {/* Logo */}
              <img
                src="images/Honeybeelogo.png"
                alt="HoneyChain"
                className="h-12 w-auto object-contain"
            />

              {/* Brand */}
              <div className="leading-none">
                <h2 className="text-xl font-bold tracking-tight text-slate-900">
                  Honey<span className="text-amber-500">Chain</span>
                </h2>

                <p className="mt-1 text-[9px] font-medium tracking-[0.2em] text-slate-400">
                  TRUST EVERY DROP
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-6 text-slate-500">
              Blockchain-powered honey traceability connecting
              beekeepers, businesses, and consumers through
              transparency and trust.
            </p>

            {/* Small Brand Statement */}
            <div className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-slate-500">
              <span>🐝</span>
              <span>From Hive to Home, with Trust.</span>
            </div>

          </div>

          {/* ==================================================
              PLATFORM
          ================================================== */}
          <div>

            <h3 className="text-sm font-bold text-slate-900">
              Platform
            </h3>

            <nav className="mt-4 flex flex-col gap-3">

              <a
                href="#how-it-works"
                className="w-fit text-sm text-slate-500 transition-colors duration-200 hover:text-amber-500"
              >
                How It Works
              </a>

              <a
                href="#features"
                className="w-fit text-sm text-slate-500 transition-colors duration-200 hover:text-amber-500"
              >
                Features
              </a>

              <Link
                to="/role-selection"
                state={{ mode: "login" }}
                className="w-fit text-sm text-slate-500 transition-colors duration-200 hover:text-amber-500"
              >
                Login
              </Link>

              <Link
                to="/role-selection"
                state={{ mode: "signup" }}
                className="w-fit text-sm text-slate-500 transition-colors duration-200 hover:text-amber-500"
              >
                Get Started
              </Link>

            </nav>

          </div>

          {/* ==================================================
              USERS
          ================================================== */}
          <div>

            <h3 className="text-sm font-bold text-slate-900">
              For Users
            </h3>

            <div className="mt-4 flex flex-col gap-3">

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span>🐝</span>
                <span>Beekeepers</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span>🏭</span>
                <span>Processors</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span>🛒</span>
                <span>Consumers</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span>🔍</span>
                <span>Verifiers</span>
              </div>

            </div>

          </div>

        </div>

        {/* ==================================================
            FOOTER BOTTOM
        ================================================== */}
        <div className="mt-10 flex flex-col gap-3 border-t border-slate-100 pt-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">

          <p className="text-xs text-slate-400 sm:text-sm">
            © 2026 HoneyChain.
          </p>

          <p className="text-xs font-medium text-slate-400 sm:text-sm">
            Trust every drop. 🍯
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;