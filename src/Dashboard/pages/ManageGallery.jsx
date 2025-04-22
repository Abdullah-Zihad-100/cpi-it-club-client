import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../Apis/axios";
import { FaTrashAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import { useState } from "react";
import { imgUplord } from "../../Apis/apis";
import Title from "../../Components/Title";
const ManageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const {
    data: images = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["gallery"],
    queryFn: async () => {
      const res = await axiosSecure.get("/gallery");
      return res.data;
    },
  });

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this image?"
    );
    if (!confirm) return;

    try {
      const res = await axiosSecure.delete(`/gallery/${id}`);
      if (res.data.deletedCount > 0) {
        refetch();
        toast.success("Image Successfully Deleted");
      }
    } catch (error) {
      console.error("Failed to delete image:", error);
    }
  };

  const handleImageUpload = async () => {
    if (!selectedImage) {
      toast.error("Please select an image first.");
      return;
    }

    setIsUploading(true);
    try {
      const imgUrl = await imgUplord(selectedImage);
      const res = await axiosSecure.post("/gallery", { imgUrl });

      if (res.data.insertedId) {
        toast.success("Image successfully added!");
        setSelectedImage(null);
        refetch();
      }
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Failed to upload image.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
     <Title heading={"Manage Gallery"}/>

      {/* Upload Section */}
      <div className="mb-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setSelectedImage(e.target.files[0])}
          className="border border-gray-300 p-2 rounded w-full sm:w-auto"
        />
        <button
          onClick={handleImageUpload}
          disabled={isUploading}
          className={`bg-blue-700 text-white px-5 py-2 rounded hover:bg-blue-800 transition ${
            isUploading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isUploading ? "Uploading..." : "Add Image"}
        </button>
      </div>

      {images.length === 0 && !isLoading && (
        <p className="text-center text-gray-500 mt-56">
          No images in the gallery yet.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img) => (
          <div
            key={img._id}
            className="relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={img?.imgUrl}
              alt={`Gallery image ${img._id}`}
              className="w-full h-64 object-cover"
            />
            <button
              onClick={() => handleDelete(img._id)}
              className="absolute top-3 right-3 bg-red-600 text-white p-2 rounded-full shadow hover:bg-red-700 cursor-pointer"
            >
              <FaTrashAlt />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageGallery;
