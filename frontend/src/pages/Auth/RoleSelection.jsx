import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import RoleSelector from "../../components/auth/RoleSelector";

const RoleSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const mode = location.state?.mode || "login";

  const [selectedRole, setSelectedRole] = useState("");

  const handleContinue = () => {
    if (!selectedRole) return;

    navigate(mode === "signup" ? "/signup" : "/login", {
      state: {
        role: selectedRole,
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#fffaf0] px-6 py-10">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-gray-900"
          >
            <img
                src="images/Honeybeelogo.png"
                alt="HoneyChain"
                className="h-12 w-auto object-contain"
            />

            <span>
              Honey<span className="text-amber-500">Chain</span>
            </span>
          </Link>

          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900"
          >
            <ArrowLeft size={16} />
            Home
          </Link>
        </div>

        {/* Main */}
        <div className="mt-16 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-500">
            Get Started
          </p>

          <h1 className="mt-3 text-4xl font-bold text-gray-900">
            Choose your role
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Select how you will use HoneyChain. Your dashboard and features
            will be customized according to your role.
          </p>
        </div>

        <div className="mt-12">
          <RoleSelector
            selectedRole={selectedRole}
            onSelect={setSelectedRole}
          />
        </div>

        <div className="mt-10 flex justify-center">
          <button
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