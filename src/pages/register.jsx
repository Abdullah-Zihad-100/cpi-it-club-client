import Lottie from "lottie-react";
import React, { useState } from "react";
import loginAnimation from "../loginAmination.json";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../Hooks/useAuth";
import { getToken, imgUplord, saveUser } from "../Apis/apis";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const [isChecked, setIsChecked] = useState(false); // State for checkbox
  const [isRegistering, setIsRegistering] = useState(false); // State for registration process
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

    setIsRegistering(true);

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const phone = form.phone.value;
    const semester = form.semester.value;
    const department = form.department.value;
    const roll = form.roll.value;
    const photo = form.photo.files[0];

    try {
      // 1. Upload Image First
      // const photoUrl = await imgUplord(photo);
      let photoUrl =
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png";
      if (photo) {
        // Only upload if user selected a photo
        photoUrl = await imgUplord(photo);
      }

      // 2. Construct user data
      const newUser = {
        email,
        name,
        roll,
        semester,
        department,
        phone,
        photoUrl,
      };

      const res = await getToken(email);
      console.log("Register Token", res);
      // 3. Save user to your own DB
      const userData = await saveUser(newUser);
      console.log("Saved to DB:", userData);
      // 4. Create user in Firebase
      const result = await createUser(email, password);
      console.log("Firebase User Created:", result);
      // 5. Update user profile with name & photo
      await updateUserProfile(name, photoUrl);
      // 6. Toast and Redirect
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
              <label
                htmlFor="photo"
                className="relative cursor-pointer w-20 h-20 block mx-auto mb-1"
              >
                {/* Hidden file input */}
                <input
                  type="file"
                  name="photo"
                  id="photo"
                  className="hidden"
                  onChange={handlePhotoChange}
                />

                {/* Profile Image */}
                <figure className="w-full h-full">
                  <img
                    className="rounded-full w-full h-full object-cover border-2 border-blue-500"
                    src={
                      photoPreview ||
                      "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                    }
                  />
                  {/* Overlay Text */}
                  <p className="absolute inset-0 flex items-center justify-center bg-black/40 text-white font-semibold text-xs text-center rounded-full opacity-80 hover:opacity-100 transition-opacity duration-200 ">
                    Choose a photo
                  </p>
                </figure>
              </label>

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
                {/* Semester Dropdown */}
                <select
                  name="semester"
                  required
                  className="w-full p-[12px_20px] rounded-[5px] border-[1px] border-[#ddd] mb-[15px] bg-[#f0f0f0] text-[16px] focus:outline-none"
                  disabled={isRegistering}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Semester
                  </option>
                  <option value="1st">1st</option>
                  <option value="2nd">2nd</option>
                  <option value="3rd">3rd</option>
                  <option value="4th">4th</option>
                  <option value="5th">5th</option>
                  <option value="6th">6th</option>
                  <option value="7th">7th</option>
                  <option value="8th">8th</option>
                </select>

                {/* Department Dropdown */}
                <select
                  name="department"
                  required
                  className="w-full p-[12px_20px] rounded-[5px] border-[1px] border-[#ddd] mb-[15px] bg-[#f0f0f0] text-[16px] focus:outline-none"
                  disabled={isRegistering}
                  defaultValue=""
                >
                  <option className="" value="" disabled>
                    Select Department
                  </option>
                  <option value="CST">CST</option>
                  <option value="ET">ET</option>
                  <option value="CT">CT</option>
                </select>
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
                className={`w-full py-2 rounded-[6px] text-[17px] cursor-pointer transition-all duration-300 font-[500] ${
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
