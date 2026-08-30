import { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const LoginForm = ({ role }) => {
  const navigate = useNavigate();
  const { login } = useAuthContext();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary frontend authentication
    login({
      id: Date.now(),
      name: formData.email.split("@")[0] || "Demo User",
      email: formData.email,
      role,
    });

    if (role === "beekeeper") {
      navigate("/beekeeper/dashboard");
    } else if (role === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/verify");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Email Address
        </label>

        <div className="relative">
          <Mail
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
            className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Password
        </label>

        <div className="relative">
          <Lock
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
            className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-11 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-gray-500">
          <input type="checkbox" className="accent-amber-500" />
          Remember me
        </label>

        <button
          type="button"
          className="font-medium text-amber-600 hover:text-amber-700"
        >
          Forgot password?
        </button>
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-amber-500 py-3.5 font-semibold text-white shadow-lg shadow-amber-100 transition hover:bg-amber-600"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;