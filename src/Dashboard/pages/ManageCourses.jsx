import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useState } from "react";
import {
  addCourse,
  deletedCourse,
  getCourses,
  imgUplord,
} from "../../Apis/apis";
import Title from "../../Components/Title";
import Loader from "../../Components/Loader";
import ImageUploadInput from "../../Components/ImageUploadInput";
import ConfirmModal from "../../Components/ConfirmModal";

export default function CourseManagement() {
  const {
    data: courses = [],
    refetch,
    isPending,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
  });

  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [courseToDelete, setCourseToDelete] = useState(null);

  const handleAddCourse = async (e) => {
    e.preventDefault();
    const form = e.target;
    try {
      setLoading(true);

      let imgUrl = "";
      if (imageFile) {
        imgUrl = await imgUplord(imageFile);
      }
      const newCourse = {
        title: form.title.value,
        description: form.description.value,
        topics: form.topics.value.split(",").map((t) => t.trim()),
        mentor: form.mentor.value,
        modules: form.modules.value,
        duration: form.duration.value,
        mode: form.mode.value,
        img: imgUrl,
      };
      const result = await addCourse(newCourse);
      if (result.insertedId) {
        toast.success("Course added successfully");
        form.reset();
        setImageFile(null);
        refetch();
      }
    } catch (err) {
      toast.error("Failed to add course");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteClick = (id) => {
    setCourseToDelete(id);
    setShowModal(true);
  };

  const handleDelete = async () => {
    try {
      const res = await deletedCourse(courseToDelete);
      if (res.deletedCount > 0) {
        toast.success("Course deleted");
        refetch();
      }
    } catch {
      toast.error("Delete failed");
    } finally {
      setShowModal(false);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-10 p-6 max-w-7xl mx-auto">
      {/* Add Course Form */}
      <div className="bg-slate-100 shadow-md rounded-xl p-8">
        <h2 className="text-3xl font-semibold text-center text-blue-700 mb-6">
          Add New Course
        </h2>
        <form onSubmit={handleAddCourse} className="space-y-5">
          {[
            { name: "title", type: "text", placeholder: "Course Title" },
            {
              name: "description",
              type: "textarea",
              placeholder: "Course Description",
            },
            {
              name: "topics",
              type: "text",
              placeholder: "Topics (comma separated)",
            },
            { name: "mentor", type: "text", placeholder: "Mentor Name" },
            { name: "modules", type: "text", placeholder: "Modules (e.g. 10)" },
            {
              name: "duration",
              type: "text",
              placeholder: "Duration (e.g. 4 Weeks)",
            },
            {
              name: "mode",
              type: "text",
              placeholder: "Class Mode (Online/Offline)",
            },
          ].map((input, i) =>
            input.type === "textarea" ? (
              <textarea
                key={i}
                name={input.name}
                placeholder={input.placeholder}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            ) : (
              <input
                key={i}
                type={input.type}
                name={input.name}
                placeholder={input.placeholder}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            )
          )}

          {/* Image Upload Component */}
          <ImageUploadInput
            onChange={(e) => setImageFile(e.target.files[0])}
            name="imgUrl"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 rounded transition"
          >
            {loading ? "Adding..." : "Add Course"}
          </button>
        </form>
      </div>

      {/* All Courses List */}
      {isPending ? (
        <Loader />
      ) : (
        <div className="h-full">
          <Title heading={"All Courses"} />
          <div className="space-y-6 max-h-[80vh] overflow-y-auto pr-2">
            {courses?.map((course) => (
              <div
                key={course._id}
                className="bg-white border border-gray-200 rounded shadow p-4 space-y-3"
              >
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded"
                />
                <h3 className="text-xl font-semibold text-blue-700">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {course.description}
                </p>
                <div className="text-sm text-gray-500 space-y-1">
                  <p>
                    <span className="font-medium text-gray-700">Mentor:</span>{" "}
                    {course.mentor}
                  </p>
                  <p>
                    <span className="font-medium text-gray-700">Mode:</span>{" "}
                    {course.mode}
                  </p>
                  <p>
                    <span className="font-medium text-gray-700">Modules:</span>{" "}
                    {course.modules} |{" "}
                    <span className="font-medium text-gray-700">Duration:</span>{" "}
                    {course.duration}
                  </p>
                </div>
                <button
                  onClick={() => handleDeleteClick(course._id)}
                  className="mt-2 bg-red-500 hover:bg-red-600 text-white px-4 cursor-pointer py-1 rounded text-sm transition"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modal for Confirmation */}
      <ConfirmModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
}
