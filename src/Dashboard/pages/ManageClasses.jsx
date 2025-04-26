import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../Apis/axios";
import { toast } from "react-hot-toast";
import ClassCard from "../../Components/ClassCard";
import Loader from "../../Components/Loader";
import Title from "../../Components/Title";
import { useState } from "react";
import { imgUplord } from "../../Apis/apis";
import ImageUploadInput from "../../Components/ImageUploadInput";

const fetchAllClasses = async () => {
  const res = await axiosSecure.get("/classes");
  return res.data;
};

const ManageClasses = () => {
  const [imageFile, setImageFile] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  const {
    data: classes = [],
    refetch,
    isPending,
  } = useQuery({
    queryKey: ["allClasses"],
    queryFn: fetchAllClasses,
  });

  const handleAdd = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      setIsAdding(true);

      let imgUrl = "";
      if (imageFile) {
        imgUrl = await imgUplord(imageFile);
      }

      const newClass = {
        classSubject: form.classSubject.value,
        topics: form.topics.value,
        classMode: form.classMode.value,
        description: form.description.value,
        mentor: form.mentor.value,
        classDuration: form.classDuration.value,
        classDate: form.classDate.value,
        img: imgUrl,
        link: form.link.value,
        isPin: form.isPinned.checked,
      };

      const res = await axiosSecure.post("/classes", newClass);
      console.log(res.data);
      form.reset();
      setImageFile(null);
      refetch();
      toast.success("Class added successfully");
    } catch (err) {
      console.error("Class add error:", err);
      toast.error("Failed to add class");
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Add New Class */}
      {isPending ? (
        <Loader />
      ) : (
        <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-xl h-fit">
          <h2 className="text-3xl font-semibold text-blue-600 mb-6 text-center">
            Add New Class
          </h2>
          <form onSubmit={handleAdd} className="space-y-4">
            <input
              type="text"
              name="classSubject"
              placeholder="Enter class subject name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              disabled={isAdding}
            />
            <input
              type="text"
              name="topics"
              placeholder="Enter topics to be covered"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              disabled={isAdding}
            />
            <input
              type="text"
              name="classMode"
              placeholder="Enter class mode (Online / Offline)"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isAdding}
            />
            <textarea
              name="description"
              placeholder="Enter class description"
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              required
              disabled={isAdding}
            ></textarea>
            <input
              type="text"
              name="mentor"
              placeholder="Enter mentor/instructor name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              disabled={isAdding}
            />
            <input
              type="text"
              name="classDuration"
              placeholder="Enter class duration (e.g. 2 hours)"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              disabled={isAdding}
            />
            <input
              type="date"
              name="classDate"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              disabled={isAdding}
            />
            <input
              type="text"
              name="link"
              placeholder="Enter online class link (optional)"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isAdding}
            />
            <ImageUploadInput
            label={"Class Photo"}
              name="img"
              onChange={(e) => setImageFile(e.target.files[0])}
              disabled={isAdding}
            />
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="isPinned"
                className="checkbox checkbox-primary"
                disabled={isAdding}
              />
              <label htmlFor="isPinned" className="text-gray-700">
                Pin this class
              </label>
            </div>

            <button
              type="submit"
              disabled={isAdding}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg py-2 px-4 rounded transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isAdding ? "Adding..." : "Add Class"}
            </button>
          </form>
        </div>
      )}


      {/* Show All Classes */}
      <div>
        <Title heading={"All Classes"} />
        {classes.map((classData) => (
          <ClassCard
            key={classData?._id}
            classData={classData}
            refetch={refetch}
          />
        ))}
      </div>
    </div>
  );
};

export default ManageClasses;
