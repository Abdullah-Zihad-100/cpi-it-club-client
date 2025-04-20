import React, { useState } from "react";
import useAuth from "../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getUserAssignments, imgUplord, postAssignment } from "../Apis/apis";
import ImageUploader from "../Components/ImageUploader";

const AssignmentPage = () => {
  const { user } = useAuth();
  const [form, setForm] = useState({
    title: "",
    codeLink: "",
    description: "",
  });
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    try {
      const imgUrl = await imgUplord(image);

      const assignment = {
        ...form,
        image: imgUrl,
        email: user.email,
        submittedAt: new Date().toISOString()
      };

      await postAssignment(assignment);
      toast.success("Assignment added successfully");
      refetch();
      setForm({ title: "", codeLink: "", description: "" });
      setImage(null);
    } catch (err) {
      console.log(err);
      toast.error("Failed to upload");
    } finally {
      setUploading(false);
    }
  };

  const {
    data: assignments = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["assignments", user?.email],
    enabled: !!user?.email,
    queryFn: () => getUserAssignments(user.email),
  });
  console.log(assignments);

  return (
    <div
      className="min-h-screen bg-cover bg-center pt-28 relative"
      style={{ backgroundImage: `url(${user?.photoURL})` }}
    >
      <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">
        {/* Form Div */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl text-white border border-white/30 space-y-4"
        >
          <h2 className="text-2xl font-bold text-center">Submit Assignment</h2>
          <div>
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-white/20  outline-none border border-white/30 text-white"
            />
          </div>
          <div>
            <label>Work Link</label>
            <input
              type="text"
              name="codeLink"
              value={form.codeLink}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-white/20  outline-none border border-white/30 text-white"
            />
          </div>
          <div>
            <label>Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-white/20  outline-none border border-white/30 text-white"
            ></textarea>
          </div>

          <ImageUploader handleImageChange={handleImageChange} />

          <button
            type="submit"
            disabled={uploading}
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded"
          >
            {uploading ? "Uploading..." : "Submit"}
          </button>
        </form>

        {/* Assignment Display Div */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">
            Your Recent Assignments
          </h2>
          {isLoading ? (
            <p className="text-white">Loading...</p>
          ) : assignments.length === 0 ? (
            <p className="text-white">No assignments found</p>
          ) : (
            <div className="space-y-4">
              {assignments.map((item) => {
                let markColor = "bg-red-500";
                if (item?.mark >= 7) {
                  markColor = "bg-green-600";
                } else if (item?.mark >= 5) {
                  markColor = "bg-yellow-500";
                }

                return (
                  <div
                    key={item._id}
                    className="bg-white/10 border border-white/20 p-4 rounded-xl text-white relative"
                  >
                    <h3 className="font-semibold text-lg">{item.title}</h3>

                    <p className="text-sm my-2 text-gray-200">
                      {item.description}
                    </p>

                    <a
                      href={item.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 underline block mt-2"
                    >
                      View work
                    </a>

                    {/* 🕒 Submission Date */}
                    <p className="text-xs text-gray-300 mt-1">
                      Submitted on:{" "}
                      {new Date(item.submittedAt).toLocaleDateString()} at{" "}
                      {new Date(item.submittedAt).toLocaleTimeString()}
                    </p>

                    {item.image && (
                      <img
                        src={item.image}
                        alt="Assignment"
                        className="mt-2 w-full h-48 object-cover rounded-lg"
                      />
                    )}

                    {item?.mark !== undefined && (
                      <div
                        className={`absolute top-4 right-4 ${markColor} text-white px-3 py-1 rounded-full shadow-lg text-sm font-semibold`}
                      >
                        Your Mark: {item.mark}/10
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AssignmentPage;
