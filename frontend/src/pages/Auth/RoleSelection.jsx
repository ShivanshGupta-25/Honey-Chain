import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import RoleSelector from "../../components/auth/RoleSelector";

const RoleSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const mode = location.state?.mode || "login";

  const [selectedRole, setSelectedRole] = useState("");

  // Only roles supported by the backend
  const roles = [
    {
      id: "beekeeper",
      label: "Beekeeper",
    },
    {
      id: "consumer",
      label: "Consumer",
    },
    {
      id: "admin",
      label: "Admin",
    },
  ];

  const handleContinue = () => {
    if (!selectedRole) return;

    // Make absolutely sure only valid backend roles are passed
    const validRole = roles.find(
      (role) => role.id === selectedRole
    );

    if (!validRole) return;

    navigate(
      mode === "signup"
        ? "/signup"
        : "/login",
      {
        state: {
          role: validRole.id,
        },
      }
    );
  };

  return (
    <div className="min-h-screen bg-[#fffaf0] px-6 py-10">
      <div className="mx-auto max-w-5xl">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <img
              src="/images/Honeybeelogo.png"
              alt="HoneyChain"
              className="h-12 w-auto object-contain"
            />

            <div className="leading-none">
              <h1 className="text-xl font-bold tracking-tight text-slate-900">
                Honey
                <span className="text-amber-500">
                  Chain
                </span>
              </h1>

              <p className="mt-1 text-[12px] font-medium tracking-[0.15em] text-slate-900">
                Smart, Transparent, and Trustworthy
              </p>

              <p className="text-[12px] font-medium tracking-[0.15em] text-slate-900">
                Honey Ecosystem
              </p>
            </div>
          </Link>

          {/* Home */}
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-gray-500 transition hover:text-gray-900"
          >
            <ArrowLeft size={16} />
            Home
          </Link>
        </div>

        {/* =====================================================
            MAIN HEADING
        ====================================================== */}
        <div className="mt-16 text-center">

          <p className="text-sm font-bold uppercase tracking-widest text-amber-500">
            Get Started
          </p>

          <h1 className="mt-3 text-4xl font-bold text-gray-900">
            Choose your role
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Select how you will use HoneyChain. Your dashboard and
            features will be customized according to your role.
          </p>
        </div>

        {/* =====================================================
            ROLE SELECTOR
        ====================================================== */}
        <div className="mt-12">
          <RoleSelector
            selectedRole={selectedRole}
            onSelect={setSelectedRole}
            roles={roles}
          />
        </div>

        {/* =====================================================
            CONTINUE BUTTON
        ====================================================== */}
        <div className="mt-10 flex justify-center">

          <button
            type="button"
            onClick={handleContinue}
            disabled={!selectedRole}
            className={`flex items-center gap-2 rounded-xl px-7 py-3.5 font-semibold transition ${
              selectedRole
                ? "bg-amber-500 text-white shadow-lg shadow-amber-100 hover:bg-amber-600"
                : "cursor-not-allowed bg-gray-200 text-gray-400"
            }`}
          >
            Continue
            <ArrowRight size={18} />
          </button>

        </div>

      </div>
    </div>
  );
};

export default RoleSelection;