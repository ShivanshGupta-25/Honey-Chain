import {
  Bell,
  Menu,
  Search,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";

const BeekeeperHeader = ({ setMobileOpen }) => {
  return (
    <header className="sticky top-0 z-30 h-20 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">

      <div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            LEFT
        ====================================================== */}

        <div className="flex items-center gap-3">

          {/* Mobile menu */}
          <button
            type="button"
            onClick={() => setMobileOpen?.(true)}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 lg:hidden"
          >
            <Menu size={20} />
          </button>

          {/* Search */}
          <div className="relative hidden sm:block">

            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search batches, hives..."
              className="
                h-10
                w-64
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                pl-9
                pr-4
                text-xs
                font-medium
                text-slate-700
                outline-none
                placeholder:text-slate-400
                focus:border-amber-300
                focus:bg-white
                focus:ring-2
                focus:ring-amber-100
              "
            />

          </div>

        </div>


        {/* =====================================================
            RIGHT
        ====================================================== */}

        <div className="flex items-center gap-2">

          {/* Notification */}
          <Link
            to="/beekeeper/alerts"
            className="relative flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
          >
            <Bell size={18} />

            <span className="absolute right-2.5 top-2 h-2 w-2 rounded-full border-2 border-white bg-amber-500" />
          </Link>


          {/* Divider */}
          <div className="mx-1 hidden h-7 w-px bg-slate-200 sm:block" />


          {/* Profile */}
          <Link
            to="/beekeeper/profile"
            className="flex items-center gap-3 rounded-xl px-2 py-1.5 transition hover:bg-slate-50"
          >

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-amber-700">
              <UserRound size={16} />
            </div>

            <div className="hidden text-left sm:block">

              <p className="text-xs font-semibold text-slate-800">
                Beekeeper
              </p>

              <p className="text-[10px] text-slate-400">
                Account
              </p>

            </div>

          </Link>

        </div>

      </div>

    </header>
  );
};

export default BeekeeperHeader;