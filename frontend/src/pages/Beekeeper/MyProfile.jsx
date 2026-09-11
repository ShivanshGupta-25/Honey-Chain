import { UserRound, Mail, ShieldCheck, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const MyProfile = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">

      {/* Back */}
      <Link
        to="/beekeeper/dashboard"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-800"
      >
        <ArrowLeft size={17} />
        Back to Dashboard
      </Link>

      {/* Profile Card */}
      <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

        {/* Header */}
        <div className="border-b border-slate-100 px-6 py-6 sm:px-8">

          <div className="flex items-center gap-4">

            {/* Avatar */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-xl font-bold text-amber-700">
              B
            </div>

            <div>
              <h1 className="text-xl font-bold text-slate-800">
                Beekeeper
              </h1>

              <p className="mt-1 text-sm text-slate-400">
                beekeeper@demo.com
              </p>

              <div className="mt-2 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />

                <span className="text-xs font-medium text-emerald-600">
                  Verified Account
                </span>
              </div>
            </div>

          </div>

        </div>


        {/* Account Information */}
        <div className="px-6 py-6 sm:px-8">

          <h2 className="mb-5 text-sm font-bold uppercase tracking-wide text-slate-500">
            Account Information
          </h2>

          <div className="space-y-4">

            {/* Name */}
            <div className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-slate-500">
                <UserRound size={18} />
              </div>

              <div>
                <p className="text-xs text-slate-400">
                  Name
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-700">
                  Beekeeper
                </p>
              </div>

            </div>


            {/* Email */}
            <div className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-slate-500">
                <Mail size={18} />
              </div>

              <div>
                <p className="text-xs text-slate-400">
                  Email Address
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-700">
                  beekeeper@demo.com
                </p>
              </div>

            </div>


            {/* Verification */}
            <div className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-emerald-600">
                <ShieldCheck size={18} />
              </div>

              <div>
                <p className="text-xs text-slate-400">
                  Account Status
                </p>

                <p className="mt-1 text-sm font-semibold text-emerald-600">
                  Verified
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default MyProfile;