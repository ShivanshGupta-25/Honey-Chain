// import { useState } from "react";
// import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { useAuthContext } from "../../context/AuthContext";

// const SignupForm = ({ role }) => {
//   const navigate = useNavigate();
//   const { login } = useAuthContext();

//   const [showPassword, setShowPassword] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match.");
//       return;
//     }

//     // Temporary frontend registration
//     login({
//       id: Date.now(),
//       name: formData.name,
//       email: formData.email,
//       role,
//     });

//     if (role === "beekeeper") {
//       navigate("/beekeeper/dashboard");
//     } else if (role === "admin") {
//       navigate("/admin/dashboard");
//     } else {
//       navigate("/verify");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div>
//         <label className="mb-2 block text-sm font-medium text-gray-700">
//           Full Name
//         </label>

//         <div className="relative">
//           <User
//             size={18}
//             className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//           />

//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter your name"
//             required
//             className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
//           />
//         </div>
//       </div>

//       <div>
//         <label className="mb-2 block text-sm font-medium text-gray-700">
//           Email Address
//         </label>

//         <div className="relative">
//           <Mail
//             size={18}
//             className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//           />

//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="you@example.com"
//             required
//             className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
//           />
//         </div>
//       </div>

//       <div>
//         <label className="mb-2 block text-sm font-medium text-gray-700">
//           Password
//         </label>

//         <div className="relative">
//           <Lock
//             size={18}
//             className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//           />

//           <input
//             type={showPassword ? "text" : "password"}
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             placeholder="Create a password"
//             required
//             className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-11 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
//           />

//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
//           >
//             {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//           </button>
//         </div>
//       </div>

//       <div>
//         <label className="mb-2 block text-sm font-medium text-gray-700">
//           Confirm Password
//         </label>

//         <input
//           type="password"
//           name="confirmPassword"
//           value={formData.confirmPassword}
//           onChange={handleChange}
//           placeholder="Confirm your password"
//           required
//           className="w-full rounded-xl border border-gray-200 py-3 px-4 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
//         />
//       </div>

//       <label className="flex items-start gap-2 text-sm text-gray-500">
//         <input
//           type="checkbox"
//           required
//           className="mt-1 accent-amber-500"
//         />

//         <span>
//           I agree to the HoneyChain terms and privacy policy.
//         </span>
//       </label>

//       <button
//         type="submit"
//         className="w-full rounded-xl bg-amber-500 py-3.5 font-semibold text-white shadow-lg shadow-amber-100 transition hover:bg-amber-600"
//       >
//         Create Account
//       </button>
//     </form>
//   );
// };

// export default SignupForm;






import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";

const SignupForm = ({ role, onSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordError, setPasswordError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear password error while typing
    if (
      name === "password" ||
      name === "confirmPassword"
    ) {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match.");
      return;
    }

    // Send only the data required by the backend
    onSubmit({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      {/* =====================================================
          FULL NAME
      ====================================================== */}
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
            autoComplete="name"
            required
            className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
          />
        </div>
      </div>

      {/* =====================================================
          EMAIL
      ====================================================== */}
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
            autoComplete="email"
            required
            className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
          />
        </div>
      </div>

      {/* =====================================================
          PASSWORD
      ====================================================== */}
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
            autoComplete="new-password"
            required
            className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-11 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword((prev) => !prev)
            }
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-600"
            aria-label={
              showPassword
                ? "Hide password"
                : "Show password"
            }
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        </div>
      </div>

      {/* =====================================================
          CONFIRM PASSWORD
      ====================================================== */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Confirm Password
        </label>

        <div className="relative">
          <Lock
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type={
              showConfirmPassword
                ? "text"
                : "password"
            }
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            autoComplete="new-password"
            required
            className={`w-full rounded-xl border py-3 pl-10 pr-11 outline-none transition focus:ring-2 ${
              passwordError
                ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                : "border-gray-200 focus:border-amber-500 focus:ring-amber-100"
            }`}
          />

          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword((prev) => !prev)
            }
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-600"
            aria-label={
              showConfirmPassword
                ? "Hide password"
                : "Show password"
            }
          >
            {showConfirmPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        </div>

        {passwordError && (
          <p className="mt-2 text-sm text-red-500">
            {passwordError}
          </p>
        )}
      </div>

      {/* =====================================================
          TERMS
      ====================================================== */}
      <label className="flex cursor-pointer items-start gap-2 text-sm text-gray-500">
        <input
          type="checkbox"
          required
          className="mt-1 accent-amber-500"
        />

        <span>
          I agree to the HoneyChain terms and privacy
          policy.
        </span>
      </label>

      {/* =====================================================
          SUBMIT
      ====================================================== */}
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