import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../Apis/axios";
import { toast } from "react-hot-toast";
import ClassCard from "../../Components/ClassCard";
import Loader from "../../Components/Loader";
import Title from "../../Components/Title";

const fetchAllClasses = async () => {
  const res = await axiosSecure.get("/classes");
  return res.data;
};

const ManageClasses = () => {
  const {
    data: classes = [],
    refetch,
    isPending,
  } = useQuery({
    queryKey: ["allClasses"],
    queryFn: fetchAllClasses,
  });

  //   add a class
  const handleAdd = async (e) => {
    e.preventDefault();
    const form = e.target;
    const newClass = {
      classSubject: form.classSubject.value,
      topics: form.topics.value,
      classMode: form.classMode.value,
      description: form.description.value,
      mentor: form.mentor.value,
      classDuration: form.classDuration.value,
      classDate: form.classDate.value,
      img: form.img.value,
      link: form.link.value,
      isPin: form.isPinned.checked,
    };
    try {
      await axiosSecure.post("/classes", newClass);
      form.reset();
      refetch();
      toast.success("Class Add Successfully");
    } catch (err) {
      console.error("Class add error:", err);
    }
  };

  return (
    <div className=" max-w-7xl mx-auto p-4">
      {/* Show All Classes */}
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
            />
            <input
              type="text"
              name="topics"
              placeholder="Enter topics to be covered"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="classMode"
              placeholder="Enter class mode (Online / Offline)"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="description"
              placeholder="Enter class description"
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              required
            ></textarea>
            <input
              type="text"
              name="mentor"
              placeholder="Enter mentor/instructor name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="classDuration"
              placeholder="Enter class duration (e.g. 2 hours)"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="date"
              name="classDate"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="img"
              placeholder="Enter class image URL"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="link"
              placeholder="Enter online class link (optional)"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="isPinned"
                className="checkbox checkbox-primary"
              />
              <label htmlFor="isPinned" className="text-gray-700">
                Pin this class
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg py-2 px-4 rounded-md transition-colors duration-300"
            >
              Add Class
            </button>
          </form>
        </div>
      )}

      {/* Add New Class */}
      <div>
        <Title heading={"All Classes"}/>
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
