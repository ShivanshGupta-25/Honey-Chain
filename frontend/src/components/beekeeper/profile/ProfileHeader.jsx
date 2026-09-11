import {
  Camera,
  CheckCircle2,
  MapPin,
  ShieldCheck,
} from "lucide-react";

const ProfileHeader = ({ profile, onEdit }) => {
  const initials =
    profile?.name
      ?.split(" ")
      .filter(Boolean)
      .map((name) => name[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "BK";

  const isActive = profile?.isActive;

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Cover */}
      <div className="h-28 bg-gradient-to-r from-amber-100 via-yellow-50 to-orange-50 sm:h-32" />

      {/* Profile Content */}
      <div className="px-6 pb-6 sm:px-8 sm:pb-7">
        <div className="-mt-12 flex flex-col gap-5 sm:-mt-14 sm:flex-row sm:items-end sm:justify-between">

          {/* Identity */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
            <div className="relative">
              {/* Avatar */}
              <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border-4 border-white bg-amber-100 text-2xl font-bold text-amber-700 shadow-sm sm:h-28 sm:w-28">
                {profile?.profileImage ? (
                  <img
                    src={profile.profileImage}
                    alt={profile.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  initials
                )}
              </div>

              {/* Camera */}
              <button
                type="button"
                className="absolute bottom-1 right-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-slate-800 text-white shadow-sm transition hover:bg-slate-700"
                aria-label="Change profile photo"
              >
                <Camera size={14} />
              </button>
            </div>

            <div className="pb-1">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold text-slate-800">
                  {profile?.name || "User"}
                </h1>

                {isActive && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
                    <CheckCircle2 size={13} />
                    Active
                  </span>
                )}
              </div>

              <p className="mt-1 text-sm capitalize text-slate-500">
                {profile?.role || "User"}
              </p>

              <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-400">
                <MapPin size={14} />

                {profile?.location || "Location not provided"}
              </div>
            </div>
          </div>

          {/* Edit */}
          <button
            type="button"
            onClick={onEdit}
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            Edit Profile
          </button>
        </div>

        {/* Account Status */}
        <div className="mt-6 flex flex-col gap-3 rounded-xl border border-emerald-100 bg-emerald-50/60 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-emerald-600">
              <ShieldCheck size={18} />
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-700">
                Account status
              </p>

              <p className="text-xs text-slate-400">
                Your Honey Chain account is currently{" "}
                {isActive ? "active" : "inactive"}.
              </p>
            </div>
          </div>

          <span
            className={`text-xs font-semibold ${
              isActive
                ? "text-emerald-600"
                : "text-red-500"
            }`}
          >
            {isActive ? "Active" : "Inactive"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
