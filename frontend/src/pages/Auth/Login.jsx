import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import LoginForm from "../../components/auth/LoginForm";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const role = location.state?.role;

  if (!role) {
    navigate("/role-selection", {
      state: {
        mode: "login",
      },
      replace: true,
    });

    return null;
  }

  const roleName =
    role.charAt(0).toUpperCase() + role.slice(1);

  return (
    <div className="min-h-screen bg-[#fffaf0]">
      <div className="grid min-h-screen lg:grid-cols-2">
        
        {/* Left branding */}
        <div className="hidden bg-gray-900 p-12 text-white lg:flex lg:flex-col lg:justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img
                src="images/Honeybeelogo.png"
                alt="HoneyChain"
                className="h-12 w-auto object-contain"
            />

            {/* Logo Text */}
            <div className="leading-none">
              <h1 className="text-xl font-bold tracking-tight white">
                Honey<span className="text-amber-500">Chain</span>
              </h1>

              <p className="mt-1 text-[12px] font-medium tracking-[0.2em] text-white/80">
                Smart, Transparent, and Trustworthy Honey Ecosystem
              </p>
            </div>
          </Link>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
              Trust Every Drop
            </p>

            <h1 className="mt-5 max-w-lg text-5xl font-bold leading-tight">
              Welcome back to the future of honey traceability.
            </h1>

            <p className="mt-6 max-w-md leading-7 text-gray-400">
              Access your HoneyChain workspace and continue building a more
              transparent honey supply chain.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            © 2026 HoneyChain
          </p>
        </div>

        {/* Right form */}
        <div className="flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">
            
            <Link
              to="/role-selection"
              state={{ mode: "login" }}
              className="mb-8 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900"
            >
              <ArrowLeft size={16} />
              Change role
            </Link>

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

            <LoginForm role={role} />

            <p className="mt-7 text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <Link
                to="/role-selection"
                state={{ mode: "signup" }}
                className="font-semibold text-amber-600 hover:text-amber-700"
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