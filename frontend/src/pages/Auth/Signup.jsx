import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import SignupForm from "../../components/auth/SignupForm";

const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const role = location.state?.role;

  if (!role) {
    navigate("/role-selection", {
      state: {
        mode: "signup",
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
        
        {/* Left form */}
        <div className="flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">
            
            <Link
              to="/role-selection"
              state={{ mode: "signup" }}
              className="mb-8 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900"
            >
              <ArrowLeft size={16} />
              Change role
            </Link>

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

            <SignupForm role={role} />

            <p className="mt-6 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                to="/role-selection"
                state={{ mode: "login" }}
                className="font-semibold text-amber-600 hover:text-amber-700"
              >
                Login
              </Link>
            </p>
          </div>
        </div>

        {/* Right branding */}
        <div className="hidden bg-amber-500 p-12 text-white lg:flex lg:flex-col lg:justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img
                src="images/Honeybeelogo.png"
                alt="HoneyChain"
                className="h-12 w-auto object-contain"
            />

                        {/* Logo Text */}
            <div className="leading-none">
              <h1 className="text-xl font-bold tracking-tight text-slate-900">
                Honey<span className="text-white">Chain</span>
              </h1>

              <p className="mt-1 text-[12px] font-medium tracking-[0.2em] text-white">
                Smart, Transparent, and Trustworthy Honey Ecosystem
              </p>
            </div>
          </Link>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-100">
              Join the ecosystem
            </p>

            <h1 className="mt-5 max-w-lg text-5xl font-bold leading-tight">
              Make every drop more trustworthy.
            </h1>

            <p className="mt-6 max-w-md leading-7 text-amber-50">
              Whether you produce, verify or consume honey, HoneyChain brings
              transparency to every stage of its journey.
            </p>
          </div>

          <p className="text-sm text-amber-100">
            From Hive to Home
          </p>
        </div>

      </div>
    </div>
  );
};

export default Signup;