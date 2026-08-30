import { Camera, Mail, MapPin, Phone, User } from "lucide-react";

const Profile = () => {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <p className="text-sm font-medium text-amber-600">
          Account
        </p>

        <h1 className="mt-1 text-2xl font-bold text-gray-900">
          My Profile
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          View and manage your beekeeper profile.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="flex flex-col items-center gap-5 border-b border-gray-100 p-6 sm:flex-row">
          <div className="relative">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-amber-100 text-3xl font-bold text-amber-700">
              B
            </div>

            <button className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-white shadow">
              <Camera size={15} />
            </button>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Beekeeper
            </h2>

            <p className="mt-1 text-sm text-gray-400">
              HoneyChain Beekeeper
            </p>

            <span className="mt-3 inline-block rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600">
              Active Account
            </span>
          </div>
        </div>

        <div className="grid gap-6 p-6 sm:grid-cols-2">
          <Info
            icon={User}
            label="Full Name"
            value="Beekeeper"
          />

          <Info
            icon={Mail}
            label="Email"
            value="beekeeper@demo.com"
          />

          <Info
            icon={Phone}
            label="Phone"
            value="+91 98765 43210"
          />

          <Info
            icon={MapPin}
            label="Location"
            value="Nashik, Maharashtra"
          />
        </div>
      </div>
    </div>
  );
};

const Info = ({ icon: Icon, label, value }) => {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-amber-600 shadow-sm">
        <Icon size={18} />
      </div>

      <div>
        <p className="text-xs text-gray-400">
          {label}
        </p>

        <p className="mt-1 text-sm font-medium text-gray-800">
          {value}
        </p>
      </div>
    </div>
  );
};

export default Profile;