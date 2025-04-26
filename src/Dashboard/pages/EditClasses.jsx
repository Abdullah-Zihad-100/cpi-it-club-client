import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { editClass, getSingleClass } from "../../Apis/apis"; // Import update function
import { useParams } from "react-router";
import Loader from "../../Components/Loader";

const EditClasses = () => {
  const { id } = useParams();

  const { data: classData = {}, isLoading } = useQuery({
    queryKey: ["classes", id],
    queryFn: async () => {
      const res = await getSingleClass(id);
      return res;
    },
    enabled: !!id,
  });

  console.log("class Single------>", classData);

  const handleEdit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedClass = {
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
      await editClass(id, updatedClass); // Send update request
      toast.success("Class updated successfully");
    } catch (err) {
      console.error("Update error:", err);
      toast.error("Failed to update class");
    }
  };

  if (isLoading) return <Loader />;

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-xl h-fit">
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-6 text-center">
        Edit Class
      </h2>
      <form onSubmit={handleEdit} className="space-y-6">
        <div className="form-group">
          <label
            htmlFor="classSubject"
            className="block text-gray-700 font-semibold"
          >
            Class Subject
          </label>
          <input
            defaultValue={classData?.classSubject}
            type="text"
            name="classSubject"
            id="classSubject"
            placeholder="Enter class subject name"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="topics" className="block text-gray-700 font-semibold">
            Topics
          </label>
          <input
            defaultValue={classData?.topics}
            type="text"
            name="topics"
            id="topics"
            placeholder="Enter topics"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="form-group">
          <label
            htmlFor="classMode"
            className="block text-gray-700 font-semibold"
          >
            Class Mode
          </label>
          <input
            defaultValue={classData?.classMode}
            type="text"
            name="classMode"
            id="classMode"
            placeholder="Class Mode"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="form-group">
          <label
            htmlFor="description"
            className="block text-gray-700 font-semibold"
          >
            Description
          </label>
          <textarea
            defaultValue={classData?.description}
            name="description"
            id="description"
            placeholder="Class description"
            rows="4"
            className="w-full px-4 py-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="mentor" className="block text-gray-700 font-semibold">
            Mentor Name
          </label>
          <input
            defaultValue={classData?.mentor}
            type="text"
            name="mentor"
            id="mentor"
            placeholder="Enter mentor name"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="form-group">
          <label
            htmlFor="classDuration"
            className="block text-gray-700 font-semibold"
          >
            Class Duration
          </label>
          <input
            defaultValue={classData?.classDuration}
            type="text"
            name="classDuration"
            id="classDuration"
            placeholder="Enter class duration"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="form-group">
          <label
            htmlFor="classDate"
            className="block text-gray-700 font-semibold"
          >
            Class Date
          </label>
          <input
            defaultValue={classData?.classDate}
            type="date"
            name="classDate"
            id="classDate"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="img" className="block text-gray-700 font-semibold">
            Image URL
          </label>
          <input
            defaultValue={classData?.img}
            type="text"
            name="img"
            id="img"
            placeholder="Enter image URL"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="link" className="block text-gray-700 font-semibold">
            Class Link
          </label>
          <input
            defaultValue={classData?.link}
            type="text"
            name="link"
            id="link"
            placeholder="Enter class link"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="form-group flex items-center space-x-2">
          <input
            type="checkbox"
            name="isPinned"
            id="isPinned"
            className="checkbox"
            defaultChecked={classData?.isPin}
          />
          <label htmlFor="isPinned" className="text-gray-700 font-semibold">
            Pin this class
          </label>
        </div>

        <div className="form-group">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Update Class
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditClasses;
