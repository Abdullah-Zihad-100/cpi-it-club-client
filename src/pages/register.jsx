import Lottie from "lottie-react";
import React, { useState } from "react";
import loginAnimation from "../loginAmination.json";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../Hooks/useAuth";
import { getToken, imgUplord, saveUser } from "../Apis/apis";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const [isChecked, setIsChecked] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [role, setRole] = useState("user");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const [photoPreview, setPhotoPreview] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setPhotoPreview(previewURL);
      return () => URL.revokeObjectURL(previewURL);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!isChecked) {
      toast.error("Please agree to the terms and conditions.");
      return;
    }

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const phone = form.phone.value;
    const semester = form.semester?.value || null;
    const department = form.department?.value || null;
    const roll = form.roll?.value || null;
    const photo = form.photo.files[0];

    const passwordRegex = /^(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 6 characters and contain a capital letter."
      );
      return;
    }

    setIsRegistering(true);

    try {
      let photoUrl =
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png";
      if (photo) {
        photoUrl = await imgUplord(photo);
      }

      const newUser = {
        email,
        name,
        phone,
        photoUrl,
        role,
        ...(role === "user" && { roll, semester, department }),
      };

      console.log(newUser);
      await getToken(email);
      await saveUser(newUser);
      await createUser(email, password);
      await updateUserProfile(name, photoUrl);

      toast.success("Registration successful!");
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Registration failed. Please try again.");
    } finally {
      setIsRegistering(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto flex justify-center items-center h-screen w-screen px-5 overflow-x-hidden">
      <div>
        <div
          className={`md:flex mx-auto py-5 md:shadow-2xl shadow-blue-200 md:px-10 px-3 items-center rounded-lg ${
            isRegistering ? "opacity-50" : "opacity-100"
          }`}
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

            <form onSubmit={handleRegister}>
              <label
                htmlFor="photo"
                className="relative cursor-pointer w-20 h-20 block mx-auto mb-1"
              >
                <input
                  type="file"
                  name="photo"
                  id="photo"
                  className="hidden"
                  onChange={handlePhotoChange}
                />
                <figure className="w-full h-full">
                  <img
                    className="rounded-full w-full h-full object-cover -2 -blue-500"
                    src={
                      photoPreview ||
                      "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                    }
                  />
                  <p className="absolute inset-0 flex items-center justify-center bg-black/40 text-white font-semibold text-xs text-center rounded-full opacity-80 hover:opacity-100 transition-opacity duration-200">
                    Choose a photo
                  </p>
                </figure>
              </label>

              <input
                required
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-[12px_20px] rounded-[5px]  mb-[15px] bg-[#f0f0f0] focus:outline-none"
                disabled={isRegistering}
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Your email"
                className="w-full p-[12px_20px] rounded-[5px]  mb-[15px] bg-[#f0f0f0] focus:outline-none"
                disabled={isRegistering}
              />
              <div className="flex gap-2 w-full">
                <input
                  type="number"
                  name="roll"
                  placeholder="Roll Number (Optional)"
                  className="w-full p-[12px_20px] rounded-[5px]  mb-[15px] bg-[#f0f0f0] focus:outline-none"
                  disabled={isRegistering}
                />
                <input
                  required
                  type="number"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full p-[12px_20px] rounded-[5px]  mb-[15px] bg-[#f0f0f0] focus:outline-none"
                  disabled={isRegistering}
                />
              </div>

              <div className="flex gap-2">
                <select
                  name="semester"
                  className="w-full p-[12px_20px] rounded-[5px]  mb-[15px] bg-[#f0f0f0] focus:outline-none"
                  disabled={isRegistering}
                  defaultValue=""
                >
                  <option value="">Semester (Optional)</option>
                  <option value="1st">1st</option>
                  <option value="2nd">2nd</option>
                  <option value="3rd">3rd</option>
                  <option value="4th">4th</option>
                  <option value="5th">5th</option>
                  <option value="6th">6th</option>
                  <option value="7th">7th</option>
                  <option value="8th">8th</option>
                </select>

                <select
                  name="department"
                  className="w-full p-[12px_20px] rounded-[5px]  mb-[15px] bg-[#f0f0f0] focus:outline-none"
                  disabled={isRegistering}
                  defaultValue=""
                >
                  <option value="">Department (Optional)</option>
                  <option value="CST">CST</option>
                  <option value="ET">ET</option>
                  <option value="CT">CT</option>
                </select>
              </div>

              <select
                name="role"
                className="w-full p-[12px_20px] rounded-[5px]  mb-[15px] bg-[#f0f0f0] focus:outline-none"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="user">I am a Student</option>
                <option value="Teacher">I am a Teacher</option>
              </select>

              <input
                required
                type="password"
                name="password"
                placeholder="Password"
                className="w-full p-[12px_20px] rounded-[5px]  mb-[15px] bg-[#f0f0f0] focus:outline-none"
                disabled={isRegistering}
              />

              <div className="flex gap-[15px] items-center mb-1">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  disabled={isRegistering}
                />
                <p>
                  I agree to the{" "}
                  <a href="#" className="text-[#1447e6] hover:underline">
                    Terms
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-[#1447e6] hover:underline">
                    Privacy Policy.
                  </a>
                </p>
              </div>

              <button
                type="submit"
                className={`w-full py-2 rounded-[6px] text-[17px] font-[500] transition-all duration-300 ${
                  isChecked && !isRegistering
                    ? "bg-[#1447e6] text-white hover:bg-white hover:text-[#1447e6]"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!isChecked || isRegistering}
              >
                {isRegistering ? "Registering..." : "Sign Up"}
              </button>
            </form>

            <p className="text-sm font-semibold text-gray-600 my-2">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-700 text-base">
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
