import Lottie from "lottie-react";
import React, { useState } from "react"; // Import useState
import robot from "../robot.json";
import { Link, useLocation, useNavigate } from "react-router"; // Corrected import
import useAuth from "../Hooks/useAuth"; // Assuming you have a useAuth hook for login

const Login = () => {
  const { loginUser } = useAuth(); // Assuming loginUser is a function from useAuth
  const [isLoggingIn, setIsLoggingIn] = useState(false); // State for login process
  const navigate=useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";


  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true); // Start login process

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const result = await loginUser(email, password);
      console.log("Login successful:", result);
      navigate(from,{replace:true});
      // Redirect or perform actions after successful login
    } catch (error) {
      console.error("Error during login:", error.message);
    } finally {
      setIsLoggingIn(false); // End login process
    }
  };

  return (
    <div className="max-w-7xl mx-auto flex justify-center items-center h-screen w-screen">
      <div>
        <div
          className={`md:flex mx-auto py-5 md:shadow-2xl shadow-blue-200 md:px-10 px-3 items-center rounded-lg ${
            isLoggingIn ? "opacity-50" : "opacity-100"
          }`} // Reduce opacity during login
        >
          <div className="contact_img flex-1 w-full">
            <Lottie
              animationData={robot}
              className="lg:w-[400px] w-[300px] mx-auto my-5"
              loop={true}
            />
          </div>
          <div className="w-full flex-1 shadow-xl shadow-blue-200 p-10 rounded-lg">
            <h2 className="text-4xl font-bold text-center text-[#1447e6] mb-[20px]">
              Login
            </h2>

            <form onSubmit={handleLogin} className="w-full">
              <input
                type="email"
                name="email"
                required
                placeholder="Your email"
                className="w-full p-[12px_20px] rounded-[5px] border-[1px] border-[#ddd] mb-[15px] bg-[#f0f0f0] text-[16px] focus:outline-none"
                disabled={isLoggingIn} // Disable input during login
              />
              <input
                type="password"
                name="password"
                required
                placeholder="Password"
                className="w-full p-[12px_20px] rounded-[5px] border-[1px] border-[#ddd] mb-[15px] bg-[#f0f0f0] text-[16px] focus:outline-none"
                disabled={isLoggingIn} // Disable input during login
              />
              <p className="text-xs text-gray-600 my-2">Forget password?</p>

              <button
                type="submit"
                className={`w-full py-2 rounded-[6px] border border-[#1447e6] text-[17px] cursor-pointer transition-all duration-300 font-[500] ${
                  isLoggingIn
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-[#1447e6] text-white hover:bg-white hover:text-[#1447e6]"
                }`}
                disabled={isLoggingIn}
              >
                {isLoggingIn ? "Logging in..." : "Login"}
                </button>
              <p className="text-sm font-semibold text-gray-600 my-2">
                Create a new account?{" "}
                <Link to={"/register"} className="text-blue-700 text-base">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;