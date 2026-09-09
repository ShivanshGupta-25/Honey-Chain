import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

import LoginForm from "../../components/auth/LoginForm";
import { loginUser } from "../../api/authApi";
import { saveAuth } from "../../utils/auth";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const role = location.state?.role;

  const [error, setError] = useState("");

  // Redirect to role selection if no role was selected
  useEffect(() => {
    if (!role) {
      navigate("/role-selection", {
        state: {
          mode: "login",
        },
        replace: true,
      });
    }
  }, [role, navigate]);

  // Prevent rendering without a role
  if (!role) {
    return null;
  }

  const roleName =
    role.charAt(0).toUpperCase() + role.slice(1);

  // ==========================================================
  // LOGIN
  // ==========================================================
  const handleSubmit = async (formData) => {
    setError("");

    try {
      const response = await loginUser({
        email: formData.email,
        password: formData.password,
      });

      // Save JWT + user
      saveAuth(response);

      // Make sure the logged-in user's backend role
      // matches the role selected on the frontend.
      if (response.user.role !== role) {
        setError(
          `This account is registered as ${response.user.role}. Please select the correct role.`
        );

        return;
      }

      // Role-based redirect
      if (response.user.role === "beekeeper") {
        navigate("/beekeeper/dashboard");
      } else if (response.user.role === "consumer") {
        navigate("/consumer/dashboard");
      } else if (response.user.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        setError("Invalid user role.");
      }
    } catch (error) {
      setError(
        error.response?.data?.message ||
        error.message ||
        "Invalid email or password."
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#fffaf0]">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* =====================================================
            LEFT — BRANDING
        ====================================================== */}
        <div className="hidden bg-gray-900 p-12 text-white lg:flex lg:flex-col lg:justify-between">

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
              <h1 className="text-xl font-bold tracking-tight text-white">
                Honey
                <span className="text-amber-500">
                  Chain
                </span>
              </h1>

              <p className="mt-1 text-[12px] font-medium tracking-[0.15em] text-white/80">
                Smart, Transparent, and Trustworthy
              </p>

              <p className="text-[12px] font-medium tracking-[0.15em] text-white/80">
                Honey Ecosystem
              </p>
            </div>
          </Link>

          {/* Main Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
              Trust Every Drop
            </p>

            <h1 className="mt-5 max-w-lg text-5xl font-bold leading-tight">
              Welcome back to the future of honey traceability.
            </h1>

            <p className="mt-6 max-w-md leading-7 text-gray-400">
              Access your HoneyChain workspace and continue building
              a more transparent honey supply chain.
            </p>
          </div>

          {/* Footer */}
          <p className="text-sm text-gray-500">
            © 2026 HoneyChain
          </p>
        </div>

        {/* =====================================================
            RIGHT — LOGIN FORM
        ====================================================== */}
        <div className="flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">

            {/* Change Role */}
            <Link
              to="/role-selection"
              state={{ mode: "login" }}
              className="mb-8 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-gray-900"
            >
              <ArrowLeft size={16} />
              Change role
            </Link>

            {/* Heading */}
            <div className="mb-8">

              <div className="mb-4 inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                {roleName}
              </div>

              <h2 className="text-3xl font-bold text-gray-900">
                Welcome back
              </h2>

              <p className="mt-2 text-gray-500">
                Sign in to your HoneyChain account.
              </p>
            </div>

            {/* Backend Error */}
            {error && (
              <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Login Form */}
            <LoginForm
              role={role}
              onSubmit={handleSubmit}
            />

            {/* Signup */}
            <p className="mt-7 text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <Link
                to="/role-selection"
                state={{ mode: "signup" }}
                className="font-semibold text-amber-600 transition hover:text-amber-700"
              >
                Create one
              </Link>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;