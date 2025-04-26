import Lottie from "lottie-react";
import React, { useState } from "react";
import robot from "../robot.json";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../Hooks/useAuth";
import bgImg from "../assets/bgImg.png";
import toast from "react-hot-toast";
import { getToken } from "../Apis/apis";

const Login = () => {
  const { loginUser, resetPassword } = useAuth(); // include resetPassword
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [resetEmail, setResetEmail] = useState(""); // for password reset
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true);

    const email = e.target.email.value;
    const password = e.target.password.value;
    setResetEmail(email); // set email for reset use

    try {
      const res = await getToken(email);
      console.log("Token------>", res);
      const result = await loginUser(email, password);
      console.log("Login successful:", result);
      navigate(from, { replace: true });
    } catch (error) {
      toast.error("Login Failed");
      console.error("Login error:", error.message);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleResetPassword = async () => {
    if (!resetEmail) {
      toast.error("Please enter your email above first.");
      return;
    }

    try {
      await resetPassword(resetEmail);
      toast.success("Password reset email sent!");
    } catch (error) {
      console.error("Password reset error:", error.message);
      toast.error("Failed to send reset email.");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative px-4 py-10"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-sm z-0"></div>

      <div className="relative z-10 w-full max-w-md mx-auto bg-white/10 border border-white/30 backdrop-blur-2xl rounded-2xl p-8 shadow-2xl text-white">
        <div className="flex justify-center mb-4">
          <Lottie animationData={robot} className="w-36 h-36" loop />
        </div>

        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            onChange={(e) => setResetEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/30 text-white placeholder:text-white/70 backdrop-blur-md border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
            disabled={isLoggingIn}
          />
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-white/30 text-white placeholder:text-white/70 backdrop-blur-md border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
            disabled={isLoggingIn}
          />
          <div
            className="text-sm text-right text-white/80 hover:underline cursor-pointer"
            onClick={handleResetPassword}
          >
            Forgot password?
          </div>

          <button
            type="submit"
            disabled={isLoggingIn}
            className={`w-full py-3 rounded-xl font-semibold text-lg transition duration-300 ${
              isLoggingIn
                ? "bg-white/40 text-white/70 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {isLoggingIn ? "Logging in..." : "Login"}
          </button>

          <p className="text-sm text-center text-white/80">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-white font-medium hover:underline"
            >
              Register
            </Link>
          </p>
        </form>

        <div className="mt-6 flex justify-center">
          <Link
            to="/"
            className="text-white/80 hover:text-white transition underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
