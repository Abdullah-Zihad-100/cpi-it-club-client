import React, { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { getUserByEmail, imgUplord, updateUser } from "../Apis/apis";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import Loader from "../Components/Loader";
import ImageUploadInput from "../Components/ImageUploadInput";

const EditProfile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [imageFile, setImageFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const { data: dbUser = {}, isLoading } = useQuery({
    queryKey: ["userProfile", user?.email],
    enabled: !!user?.email,
    queryFn: () => getUserByEmail(user.email),
  });

  const [form, setForm] = useState({});

  useEffect(() => {
    if (dbUser) setForm(dbUser);
  }, [dbUser]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setSubmitting(true); // start loading
  try {
    let imageUrl = "";
    if (imageFile) {
      imageUrl = await imgUplord(imageFile);
      form.photoUrl = imageUrl;
    }
    const { _id, ...updateData } = form;
    const res = await updateUser(dbUser._id, updateData);
    console.log(res);
    toast.success("Profile updated!");
    navigate("/profile");
  } catch {
    toast.error("Update failed");
  } finally {
    setSubmitting(false); // end loading
  }
};

  const bg =
    dbUser.photoUrl ||
    "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png";

  if (isLoading) return <Loader />;

  return (
    <div
      className="min-h-screen pt-28 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-sm z-0"></div>

      <div className="relative z-10 flex justify-center items-center min-h-screen px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-xl border border-white/30 text-white p-8 rounded-2xl w-full max-w-2xl space-y-4"
        >
          <div className="text-center">
            <img
              src={form.photoUrl || bg}
              className="w-24 h-24 rounded-full mx-auto border-4 border-white object-cover"
              alt="Profile"
            />
            <h2 className="text-2xl font-bold mt-4">Edit Profile</h2>
          </div>

          {/* Input fields */}
          {["name", "phone", "roll", "semester", "department"].map((field) => (
            <div key={field}>
              <label className="capitalize">{field}</label>
              <input
                type="text"
                name={field}
                value={form[field] || ""}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-white/20 border border-white/30 focus:outline-none text-white"
              />
            </div>
          ))}
          <ImageUploadInput
            name={"img"}
            onChange={(e) => setImageFile(e.target.files[0])}
          />

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
