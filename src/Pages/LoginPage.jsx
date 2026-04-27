import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { publicApi } from "../services/api";
import { useAuthStore } from "../store/authStore";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setUser, setToken, setRefreshToken } = useAuthStore();

  const [loading, setLoading] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await publicApi.post("/api/auth/login/", formData);

      const user = res.data.data.user;
      const access = res.data.data.tokens.access;
      const refresh = res.data.data.tokens.refresh;

      setUser(user);
      setToken(access);
      setRefreshToken(refresh);

      const redirectTo = location.state?.redirectTo || "/";
      const payload = location.state?.payload || null;

      navigate(redirectTo, {
        state: payload, 
        replace: true,
      });

      toast.success("Login Successful ✈️");
    } catch (error) {
      const errMsg =
        error.response?.data?.detail ||
        error.response?.data?.non_field_errors?.[0] ||
        "Invalid credentials";

      toast.error(errMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 bg-(--bg-main) overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-150 h-150 bg-(--gold-main)/20 blur-[200px] rounded-full -top-50 -left-50" />
      <div className="absolute w-125 h-125 bg-blue-500/20 blur-[180px] rounded-full -bottom-37.5 -right-37.5" />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md backdrop-blur-xl bg-(--bg-card)/80 border border-(--border-soft) rounded-3xl p-8 shadow-[0_40px_120px_rgba(0,0,0,0.7)]"
      >
        <h2 className="text-3xl font-(--font-heading) text-(--gold-main) mb-2">
          Welcome Back
        </h2>

        <p className="text-sm text-(--text-muted) mb-6">
          Login to continue your journey ✈️
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-(--bg-secondary) border border-(--border-soft) rounded-xl px-4 py-3 text-white focus:border-(--gold-main) outline-none transition"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-(--bg-secondary) border border-(--border-soft) rounded-xl px-4 py-3 text-white focus:border-(--gold-main) outline-none pr-12 transition"
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-400 hover:text-white"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            disabled={loading}
            className="w-full mt-2 py-3 rounded-full font-semibold bg-linear-to-r from-start to-end text-black shadow-[0_14px_40px_rgba(234,168,42,0.45)] transition disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </motion.button>
        </form>

        {/* Register Link */}
        <p className="mt-6 text-center text-sm text-(--text-muted)">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-(--gold-main) cursor-pointer hover:underline"
          >
            Register
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
