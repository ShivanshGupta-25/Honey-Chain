import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

import SignupForm from "../../components/auth/SignupForm";
import { signupUser } from "../../api/authApi";
import { saveAuth } from "../../utils/auth";

const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Role received from RoleSelection
  const selectedRole = location.state?.role;

  const [error, setError] = useState("");

  // ==========================================================
  // VALIDATE ROLE
  // ==========================================================

  const validRoles = [
    "beekeeper",
    "consumer",
    "admin",
  ];

  // Redirect if no valid role was selected
  useEffect(() => {
    if (!validRoles.includes(selectedRole)) {
      navigate("/role-selection", {
        state: {
          mode: "signup",
        },
        replace: true,
      });
    }
  }, [selectedRole, navigate]);

  // Don't render signup without a valid role
  if (!validRoles.includes(selectedRole)) {
    return null;
  }

  const roleName =
    selectedRole.charAt(0).toUpperCase() +
    selectedRole.slice(1);

  // ==========================================================
  // SIGNUP
  // ==========================================================

  const handleSubmit = async (formData) => {
    setError("");

    try {
      const response = await signupUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,

        // IMPORTANT:
        // This is the backend role ID.
        role: selectedRole,
      });

      // Save JWT + user information
      saveAuth(response);

      // ======================================================
      // ROLE-BASED REDIRECT
      // ======================================================

      if (response.user.role === "beekeeper") {
        navigate("/beekeeper/dashboard");
      } else if (response.user.role === "consumer") {
        navigate("/consumer/dashboard");
      } else if (response.user.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        setError("Invalid role received from server.");
      }

    } catch (error) {
      setError(
        error.response?.data?.message ||
        error.message ||
        "Something went wrong during signup."
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#fffaf0]">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* =====================================================
            LEFT — SIGNUP FORM
        ====================================================== */}
        <div className="flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">

            {/* Change Role */}
            <Link
              to="/role-selection"
              state={{ mode: "signup" }}
              className="mb-8 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-gray-900"
            >
              <ArrowLeft size={16} />
              Change role
            </Link>

            {/* Heading */}
            <div className="mb-7">

              <div className="mb-4 inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                {roleName}
              </div>

              <h2 className="text-3xl font-bold text-gray-900">
                Create your account
              </h2>

              <p className="mt-2 text-gray-500">
                Join HoneyChain and start your journey.
              </p>

            </div>

            {/* Backend Error */}
            {error && (
              <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Signup Form */}
            <SignupForm
              role={selectedRole}
              onSubmit={handleSubmit}
            />

            {/* Login */}
            <p className="mt-6 text-center text-sm text-gray-500">
              Already have an account?{" "}

              <Link
                to="/role-selection"
                state={{ mode: "login" }}
                className="font-semibold text-amber-600 transition hover:text-amber-700"
              >
                Login
              </Link>
            </p>

          </div>
        </div>

        {/* =====================================================
            RIGHT — BRANDING
        ====================================================== */}
        <div className="hidden bg-amber-500 p-12 text-white lg:flex lg:flex-col lg:justify-between">

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
                <span className="text-white">
                  Chain
                </span>
              </h1>

              <p className="mt-1 text-[12px] font-medium tracking-[0.15em] text-white">
                Smart, Transparent, and Trustworthy
              </p>

              <p className="text-[12px] font-medium tracking-[0.15em] text-white">
                Honey Ecosystem
              </p>

            </div>
          </Link>

          {/* Main Message */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-widest text-amber-100">
              Join the ecosystem
            </p>

            <h1 className="mt-5 max-w-lg text-5xl font-bold leading-tight">
              Make every drop more trustworthy.
            </h1>

            <p className="mt-6 max-w-md leading-7 text-amber-50">
              Whether you produce, verify or consume honey,
              HoneyChain brings transparency to every stage
              of its journey.
            </p>

          </div>

          {/* Bottom */}
          <p className="text-sm text-amber-100">
            From Hive to Home
          </p>

        </div>

      </div>
    </div>
  );
};

export default Signup;