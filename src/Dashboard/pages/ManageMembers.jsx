import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { axiosSecure } from "../../Apis/axios";
import toast from "react-hot-toast";
import Title from "../../Components/Title";
import ImageUploadInput from "../../Components/ImageUploadInput";
import { imgUplord } from "../../Apis/apis";
import ConfirmModal from "../../Components/ConfirmModal";

const ManageMembers = () => {
  const [formData, setFormData] = useState({
    name: "",
    semester: "",
    post: "",
    description: "",
    fbLink: "",
    email: "",
    linkedinLink: "",
    isPresident: false,
    isTeacher: false,
  });

  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: val });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let imageUrl = "";

      if (imageFile) {
        imageUrl = await imgUplord(imageFile); // Upload to ImgBB
      }

      const memberData = {
        ...formData,
        profile: imageUrl, // set profile field as image URL
      };

      await axiosSecure.post("/members", memberData);
      toast.success("Member added successfully!");

      // Reset form
      setFormData({
        name: "",
        semester: "",
        post: "",
        description: "",
        fbLink: "",
        email: "",
        linkedinLink: "",
        isPresident: false,
        isTeacher: false,
      });
      setImageFile(null);
      refetch();
    } catch (err) {
      console.error("Error adding member:", err);
      toast.error("Failed to add member!");
    } finally {
      setIsSubmitting(false);
    }
  };

const handleDelete = async () => {
  try {
    await axiosSecure.delete(`/member/${deleteId}`);
    toast.success("Member deleted successfully!");
    refetch();
  } catch (err) {
    console.error("Error deleting member:", err);
    toast.error("Failed to delete member!");
  } finally {
    setShowModal(false);
  }
};

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-6">
      {/* Form Section */}
      <div className="bg-white shadow-xl p-6 rounded-2xl text-center">
        <h2 className="text-3xl font-semibold mb-6 text-blue-700">
          Add Member / Teacher
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { name: "name", placeholder: "Name", required: true },
            { name: "post", placeholder: "Post", required: true },
            { name: "description", placeholder: "Description" },
            { name: "fbLink", placeholder: "Facebook Link" },
            { name: "email", placeholder: "Email Id" },
            { name: "linkedinLink", placeholder: "LinkedIn Link" },
          ].map(({ name, placeholder, required }) => (
            <input
              key={name}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              placeholder={placeholder}
              required={required}
              disabled={isSubmitting}
              className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          ))}

          <select
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
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

          {/* Image input */}
          <ImageUploadInput
            onChange={(e) => setImageFile(e.target.files[0])}
            name="profile"
          />

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-blue-600 font-medium">
              <input
                type="checkbox"
                name="isPresident"
                checked={formData.isPresident}
                onChange={handleChange}
                disabled={isSubmitting}
                className="accent-blue-600"
              />
              President?
            </label>
            <label className="flex items-center gap-2 text-blue-600 font-medium">
              <input
                type="checkbox"
                name="isTeacher"
                checked={formData.isTeacher}
                onChange={handleChange}
                disabled={isSubmitting}
                className="accent-blue-600"
              />
              Teacher?
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full transition-all duration-300"
          >
            {isSubmitting ? "Adding..." : "Add Member"}
          </button>
        </form>
      </div>

      {/* Members List */}
      <div className="bg-white shadow-xl p-6 rounded-2xl">
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
                      {member.isPresident && (
                        <span className="text-red-500 font-bold ml-1">
                          • President
                        </span>
                      )}
                      {member.isTeacher && (
                        <span className="text-green-500 font-bold ml-1">
                          • Teacher
                        </span>
                      )}
                    </span>
                  </p>
                  <p className="text-sm text-gray-600">
                    {member.semester && `Semester: ${member.semester}`}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setDeleteId(member._id);
                    setShowModal(true);
                  }}
                  className="text-red-500 hover:text-red-700 text-xl"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <ConfirmModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default ManageMembers;
