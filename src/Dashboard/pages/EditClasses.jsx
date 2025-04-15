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

  console.log("class Single------>",classData);
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

  if (isLoading) return <Loader/>;

  return (
    <div>
      <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-xl h-fit">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Edit Class
        </h2>
        <form onSubmit={handleEdit} className="space-y-4">
          <input
            defaultValue={classData?.classSubject}
            type="text"
            name="classSubject"
            placeholder="Enter class subject name"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <input
            defaultValue={classData?.topics}
            type="text"
            name="topics"
            placeholder="Enter topics"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <input
            defaultValue={classData?.classMode}
            type="text"
            name="classMode"
            placeholder="Class Mode"
            className="w-full px-4 py-2 border rounded-md"
          />
          <textarea
            defaultValue={classData?.description}
            name="description"
            placeholder="Class description"
            rows="3"
            className="w-full px-4 py-2 border rounded-md resize-none"
            required
          ></textarea>
          <input
            defaultValue={classData?.mentor}
            type="text"
            name="mentor"
            placeholder="Mentor name"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <input
            defaultValue={classData?.classDuration}
            type="text"
            name="classDuration"
            placeholder="Duration"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <input
            defaultValue={classData?.classDate}
            type="date"
            name="classDate"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <input
            defaultValue={classData?.img}
            type="text"
            name="img"
            placeholder="Image URL"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <input
            defaultValue={classData?.link}
            type="text"
            name="link"
            placeholder="Class link"
            className="w-full px-4 py-2 border rounded-md"
          />

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="isPinned"
              className="checkbox"
              defaultChecked={classData?.isPin}
            />
            <label htmlFor="isPinned">Pin this class</label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg py-2 px-4 rounded-md"
          >
            Update Class
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditClasses;
