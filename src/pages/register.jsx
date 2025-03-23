import Lottie from "lottie-react";
import React, { useState } from "react"; // Import useState
import loginAnimation from "../loginAmination.json";
import { Link, useLocation, useNavigate } from "react-router"; // Corrected import
import useAuth from "../Hooks/useAuth";

const Register = () => {
  const { createUser,updateUserProfile } = useAuth();
  const [isChecked, setIsChecked] = useState(false); // State for checkbox
  const [isRegistering, setIsRegistering] = useState(false); // State for registration process
const navigate=useNavigate();
const location = useLocation();
const from = location?.state?.from?.pathname || "/";

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!isChecked) return; // Prevent submission if checkbox is not checked

    setIsRegistering(true); // Start registration process

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const phone = e.target.phone.value;
    const semester = e.target.semester.value;
    const department = e.target.department.value;
    const roll = e.target.roll.value;
    const data = {
      email,
      password,
      name,
      roll,
      semester,
      department,
      phone,
    };
    console.log(data);

    try {
      const result = await createUser(email, password);
      console.log(result);
      await updateUserProfile(name);
      navigate(from,{replace:true});

    } catch (error) {
      console.error("Error during registration:", error.message);
    } finally {
      setIsRegistering(false); // End registration process
    }
  };

  return (
    <div className="max-w-7xl mx-auto flex justify-center items-center h-screen w-screen px-5">
      <div>
        <div
          className={`md:flex mx-auto py-5 md:shadow-2xl shadow-blue-200 md:px-10 px-3 items-center rounded-lg ${
            isRegistering ? "opacity-50" : "opacity-100"
          }`} // Reduce opacity during registration
        >
          <div className="contact_img flex-1 w-full">
            <Lottie
              animationData={loginAnimation}
              className="lg:w-[600px] md:w-[400px] w-[300px] mx-auto my-5"
              loop={true}
            />
          </div>
          <div className="w-full flex-1">
            <h2 className="text-4xl font-semibold text-center text-[#1447e6] mb-[20px]">
              Create Account
            </h2>

            <form onSubmit={handleRegister} className="">
              <input
              required
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-[12px_20px] rounded-[5px] border-[1px] border-[#ddd] mb-[15px] bg-[#f0f0f0] text-[16px] focus:outline-none"
                disabled={isRegistering} // Disable input during registration
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="w-full p-[12px_20px] rounded-[5px] border-[1px] border-[#ddd] mb-[15px] bg-[#f0f0f0] text-[16px] focus:outline-none"
                disabled={isRegistering} // Disable input during registration
              />
              <div className="flex gap-2 w-full">
                <input
                required
                  type="number"
                  name="roll"
                  placeholder="Roll Number"
                  className="w-full p-[12px_20px] rounded-[5px] border-[1px] border-[#ddd] mb-[15px] bg-[#f0f0f0] text-[16px] focus:outline-none"
                  disabled={isRegistering} // Disable input during registration
                />
                <input
                required
                  type="number"
                  name="phone"
                  placeholder="Your Phone Number"
                  className="w-full p-[12px_20px] rounded-[5px] border-[1px] border-[#ddd] mb-[15px] bg-[#f0f0f0] text-[16px] focus:outline-none"
                  disabled={isRegistering} // Disable input during registration
                />
              </div>
              <div className="flex gap-2">
                <input
                required
                  type="text"
                  name="semester"
                  placeholder="Which Semester You Are?"
                  className="w-full p-[12px_20px] rounded-[5px] border-[1px] border-[#ddd] mb-[15px] bg-[#f0f0f0] text-[16px] focus:outline-none"
                  disabled={isRegistering} // Disable input during registration
                />
                <input
                required
                  type="text"
                  name="department"
                  placeholder="Department Name?"
                  className="w-full p-[12px_20px] rounded-[5px] border-[1px] border-[#ddd] mb-[15px] bg-[#f0f0f0] text-[16px] focus:outline-none"
                  disabled={isRegistering} // Disable input during registration
                />
              </div>
              <input
              required
                type="password"
                placeholder="Password"
                name="password"
                className="w-full p-[12px_20px] rounded-[5px] border-[1px] border-[#ddd] mb-[15px] bg-[#f0f0f0] text-[16px] focus:outline-none"
                disabled={isRegistering} // Disable input during registration
              />

              <div className="flex gap-[15px] items-center mb-1">
                <input
                required
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)} // Update state on change
                  disabled={isRegistering} // Disable checkbox during registration
                />
                <p>
                  I agree to the{" "}
                  <a
                    href="#"
                    className="text-[#1447e6] no-underline hover:underline"
                  >
                    Terms
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-[#1447e6] no-underline hover:underline"
                  >
                    Privacy Policy.
                  </a>
                </p>
              </div>
              <button
                type="submit"
                className={`w-full py-2 rounded-[6px] border border-[#1447e6] text-[17px] cursor-pointer transition-all duration-300 font-[500] ${
                  isChecked && !isRegistering
                    ? "bg-[#1447e6] text-white hover:bg-white hover:text-[#1447e6]"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!isChecked || isRegistering} // Disable button if checkbox is not checked or registration is ongoing
              >
                {isRegistering ? "Registering..." : "Sign Up"} 
              </button>
            </form>
            <p className="text-sm font-semibold text-gray-600 my-2">
              You already have a account?{" "}
              <Link to={"/login"} className="text-blue-700 text-base ">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;