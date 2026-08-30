import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const SignupForm = ({ role }) => {
  const navigate = useNavigate();
  const { login } = useAuthContext();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Temporary frontend registration
    login({
      id: Date.now(),
      name: formData.name,
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Full Name
        </label>

        <div className="relative">
          <User
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
          />
        </div>
      </div>

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
            className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
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
            placeholder="Create a password"
            required
            className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-11 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Confirm Password
        </label>

        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm your password"
          required
          className="w-full rounded-xl border border-gray-200 py-3 px-4 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
        />
      </div>

      <label className="flex items-start gap-2 text-sm text-gray-500">
        <input
          type="checkbox"
          required
          className="mt-1 accent-amber-500"
        />

        <span>
          I agree to the HoneyChain terms and privacy policy.
        </span>
      </label>

      <button
        type="submit"
        className="w-full rounded-xl bg-amber-500 py-3.5 font-semibold text-white shadow-lg shadow-amber-100 transition hover:bg-amber-600"
      >
        Create Account
      </button>
    </form>
  );
};

export default SignupForm;