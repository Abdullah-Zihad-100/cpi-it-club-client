import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { axiosSecure } from "../../Apis/axios";
import toast from "react-hot-toast";
import Title from "../../Components/Title";

const ManageMembers = () => {
  const [formData, setFormData] = useState({
    name: "",
    semester: "",
    post: "",
    description: "",
    fbLink: "",
    instagramLink: "",
    linkedinLink: "",
    profile: "",
    isPresident: false,
  });

  // fetch all members
  const {
    data: members = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["members"],
    queryFn: async () => {
      const res = await axiosSecure.get("/members");
      return res.data;
    },
  });

  // input change handler
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: val });
  };

  // submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosSecure.post("/members", formData);
      toast.success("Member added successfully!");
      setFormData({
        name: "",
        semester: "",
        post: "",
        description: "",
        fbLink: "",
        email: "",
        linkedinLink: "",
        profile: "",
        isPresident: false,
      });
      refetch();
    } catch (err) {
      console.error("Error adding member:", err);
      toast.error("Failed to add member!");
    }
  };

  // delete handler
  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure to delete this member ?");
    if (!confirm) return;
    try {
      await axiosSecure.delete(`/member/${id}`);
      toast.success("Member deleted successfully!");
      refetch();
    } catch (err) {
      console.error("Error deleting member:", err);
      toast.error("Failed to delete member!");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-6">
      {/* Form Section */}
      <div className="bg-white shadow-2xl p-6 rounded-2xl text-center">
        <h2 className="text-3xl font-semibold mb-6 text-blue-700">
          Add Member
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Loop for all other fields except semester */}
          {[
            { name: "name", placeholder: "Name", required: true },
            { name: "post", placeholder: "Post", required: true },
            { name: "description", placeholder: "Description" },
            { name: "fbLink", placeholder: "Facebook Link" },
            { name: "email", placeholder: "Email Id" },
            { name: "linkedinLink", placeholder: "LinkedIn Link" },
            {
              name: "profile",
              placeholder: "Profile Image URL",
              required: true,
            },
          ].map(({ name, placeholder, required }) => (
            <input
              key={name}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              placeholder={placeholder}
              required={required}
              className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          ))}

          {/* Semester Dropdown */}
          <select
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="" disabled>
              Select Semester
            </option>
            {[
              "1st Semester",
              "2nd Semester",
              "3rd Semester",
              "4th Semester",
              "5th Semester",
              "6th Semester",
              "7th Semester",
              "8th Semester",
            ].map((sem) => (
              <option key={sem} value={sem}>
                {sem}
              </option>
            ))}
          </select>

          {/* President checkbox */}
          <label className="flex items-center gap-2 text-blue-600 font-medium">
            <input
              type="checkbox"
              name="isPresident"
              checked={formData.isPresident}
              onChange={handleChange}
              className="accent-blue-600"
            />
            President?
          </label>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full transition-all duration-300"
          >
            Add Member
          </button>
        </form>
      </div>

      {/* All Members Section */}
      <div className="bg-white shadow-2xl p-6 rounded-2xl ">
        <Title heading={"All Members"} />
        {isLoading ? (
          <p className="text-blue-500 font-medium">Loading members...</p>
        ) : (
          <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
            {members.map((member) => (
              <div
                key={member._id}
                className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl shadow hover:shadow-md transition-all"
              >
                <img
                  src={member.profile}
                  alt={member.name}
                  className="w-14 h-14 rounded-full object-cover border border-blue-300"
                />
                <div className="flex-1">
                  <p className="font-semibold text-blue-800">
                    {member.name}{" "}
                    <span className="text-sm text-blue-500">
                      ({member.post})
                    </span>
                  </p>
                  <p className="text-sm text-gray-600">
                    {member.semester && `Semester: ${member.semester}`}
                  </p>
                </div>
                <button
                  onClick={() => handleDelete(member._id)}
                  className="text-red-500 hover:text-red-700 text-xl"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageMembers;
