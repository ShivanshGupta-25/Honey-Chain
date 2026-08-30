import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-amber-100/80 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* ================= LOGO ================= */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
            {/* Logo Icon */}
            {/* <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-2xl shadow-sm">
              🍯
            </div> */}
            <img
                src="images/Honeybeelogo.png"
                alt="HoneyChain"
                className="h-12 w-auto object-contain"
            />

            {/* Logo Text */}
            <div className="leading-none">
              <h1 className="text-xl font-bold tracking-tight text-slate-900">
                Honey<span className="text-amber-500">Chain</span>
              </h1>

              <p className="mt-1 text-[12px] font-medium tracking-[0.2em] text-slate-500">
                Smart, Transparent, and Trustworthy Honey Ecosystem
              </p>
            </div>
          </Link>
          {/* <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center"
            >
            <img
                src="images/HoneyChain-logo.png"
                alt="HoneyChain"
                className="h-12 w-auto object-contain"
            />
            </Link> */}

          {/* ================= DESKTOP NAVIGATION ================= */}
          <div className="hidden items-center gap-7 md:flex">
            
            <a
              href="#home"
              className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-amber-500"
            >
              Home
            </a>

            <a
              href="#how-it-works"
              className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-amber-500"
            >
              How It Works
            </a>

            <a
              href="#features"
              className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-amber-500"
            >
              Features
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-amber-500"
            >
              About
            </a>

            {/* Login */}
            <Link
              to="/login"
              className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-amber-400 hover:text-amber-600"
            >
              Login
            </Link>

            {/* Get Started */}
            <Link
              to="/signup"
              className="rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-amber-600 hover:shadow-md"
            >
              Get Started
            </Link>
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-lg p-2 text-slate-700 transition-colors hover:bg-amber-50 hover:text-amber-600 md:hidden"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {/* ================= MOBILE NAVIGATION ================= */}
        {menuOpen && (
          <div className="border-t border-amber-100 py-5 md:hidden">
            <div className="flex flex-col gap-1">
              
              <a
                href="#home"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-amber-50 hover:text-amber-600"
              >
                Home
              </a>

              <a
                href="#how-it-works"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-amber-50 hover:text-amber-600"
              >
                How It Works
              </a>

              <a
                href="#features"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-amber-50 hover:text-amber-600"
              >
                Features
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-amber-50 hover:text-amber-600"
              >
                About
              </a>

              <Link
                to="/login"
                onClick={closeMenu}
                className="mt-2 rounded-lg border border-slate-200 px-4 py-3 text-center text-sm font-medium text-slate-700 transition hover:border-amber-400 hover:text-amber-600"
              >
                Login
              </Link>

              <Link
                to="/signup"
                onClick={closeMenu}
                className="mt-2 rounded-lg bg-amber-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-amber-600"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;