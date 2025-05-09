import React, { useState } from "react";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { deleteUser, getUserByEmail } from "../Apis/apis";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import {
  getAuth,
  reauthenticateWithCredential,
  EmailAuthProvider,
  deleteUser as firebaseDeleteUser,
} from "firebase/auth"; // Updated imports
import Loader from "../Components/Loader";

const Profile = () => {
  const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");


  const { data: dbUser = {}, isLoading } = useQuery({
    queryKey: ["userProfile", user?.email],
    enabled: !!user?.email,
    queryFn: () => getUserByEmail(user.email),
  });

  if (isLoading)
    return (
      <p className="text-center py-10">
        <Loader />
      </p>
    );

  const bgImage =
    dbUser.photoUrl ||
    "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png";

  // delete user --->

const handleDelete = async () => {
  if (!passwordInput) {
    toast.error("Password is required.");
    return;
  }

  try {
    const auth = getAuth();
    const userCredential = EmailAuthProvider.credential(
      user.email,
      passwordInput
    );
    await reauthenticateWithCredential(auth.currentUser, userCredential);

    await firebaseDeleteUser(auth.currentUser);
    await deleteUser(user?.email);

    toast.success("User Profile Deleted Successfully");
    setIsModalOpen(false); // close modal after deletion
  } catch (err) {
    console.error("Error: ", err);
    toast.error("Error deleting profile. Please enter correct password.");
  }
};

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative pt-20 sm:pt-0"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-sm pointer-events-none"></div>

      {/* Profile Card */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-4xl bg-white/10 backdrop-blur-xl border border-white/30 shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row">
          {/* Left Sidebar */}
          <div className="bg-white/10 backdrop-blur-lg text-white flex flex-col items-center justify-center p-6 w-full md:w-1/3 border-r border-white/20">
            <img
              src={bgImage}
              alt="Profile"
              className="w-28 h-28 rounded-full border-4 border-white object-cover shadow-md"
            />
            <h2 className="mt-4 text-xl font-semibold text-white drop-shadow">
              {dbUser.name || "No Name"}
            </h2>
            <p className="text-sm opacity-90 drop-shadow">
              Role: {dbUser.role || "Member"}
            </p>
            <div className="mt-4 flex gap-3 text-white text-lg">
              <a href="#" className="hover:text-gray-300 transition-all">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-gray-300 transition-all">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-gray-300 transition-all">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full md:w-2/3 p-6 text-white">
            <h3 className="text-xl font-bold mb-4 border-b pb-2 border-white/30">
              Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 text-sm">
              <div>
                <p className="text-white/70">Email</p>
                <p className="font-medium">{dbUser.email}</p>
              </div>
              <div>
                <p className="text-white/70">Phone</p>
                <p className="font-medium">{dbUser.phone || "N/A"}</p>
              </div>
              <div>
                <p className="text-white/70">Roll</p>
                <p className="font-medium">{dbUser.roll || "N/A"}</p>
              </div>
              <div>
                <p className="text-white/70">Semester</p>
                <p className="font-medium">{dbUser.semester || "N/A"}</p>
              </div>
              <div>
                <p className="text-white/70">Department</p>
                <p className="font-medium">{dbUser.department || "N/A"}</p>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Link to={`/profile/edit/${dbUser?._id}`}>
                <button className="flex items-center gap-2 px-4 py-2 bg-white/20 border border-white/30 text-white rounded-md hover:bg-white/30 transition cursor-pointer">
                  <FaEdit /> Edit Profile
                </button>
              </Link>
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-red-500/80 border border-red-400 text-white rounded-md hover:bg-red-600 transition cursor-pointer"
              >
                <FaTrash /> Delete Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm shadow-xl">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Confirm Deletion
            </h2>
            <p className="text-sm text-gray-600 mb-3">
              Enter your password to confirm:
            </p>
            <input
              type="password"
              className="w-full p-2 border rounded-md mb-4 focus:outline-none focus:ring focus:border-blue-300"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              placeholder="Enter password"
            />
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-1 text-sm bg-gray-300 rounded hover:bg-gray-400"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
