import toast from "react-hot-toast";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { IoPin } from "react-icons/io5";
import { axiosSecure } from "../Apis/axios";
import { Link } from "react-router";

const ClassCard = ({ classData ,refetch}) => {
  console.log(classData);
  const handleCopyLink = () => {
    const link = classData?.link;
    navigator.clipboard
      .writeText(link)
      .then(toast.success("Class Link Copy Successful"))
      .catch((error) => console.error("Failed To Copy", error));
  };


    const handleDelete = async (id) => {
      const confirm = window.confirm(
        "Are you sure you want to delete this class?"
      );
      if (!confirm) return;

      try {
        await axiosSecure.delete(`/classes/${id}`);
        toast.success("Class deleted successfully");
        refetch();
      } catch (error) {
        console.error("Delete failed:", error);
        toast.error("Failed to delete class");
      }
    };

  
  return (
    <section className="mx-auto antialiased w-full relative my-10 z-1">
      {classData?.isPin && (
        <IoPin
          size={30}
          color="red"
          className="absolute z-10 -top-4 rotate-40 -right-2"
        />
      )}
      {/* Card Container */}
      <article className="md:flex shadow-md mx-auto group cursor-pointer transform duration-500 hover:-translate-y-1 rounded-l-2xl w-full">
        {/* Image Section */}
        <img
          className="w-full max-h-[400px] object-cover md:w-52 md:rounded-l-xl"
          src={classData?.img}
        />
        {/* Content Section */}
        <div className="flex-1">
          {/* Main Content */}
          <div className="p-5 pb-10">
            <h1 className="text-2xl font-semibold text-gray-800 mt-4">
              <span className="text-blue-700">Class Subject :</span>{" "}
              {classData?.classSubject}
            </h1>
            <p className="text-gray-600 mt-2 leading-relaxed text-sm">
              <span className="font-semibold text-blue-700">Topics : </span>
              {classData?.topics}
            </p>
            <p className="text-gray-600 mt-2 leading-relaxed text-sm">
              <span className="font-semibold text-blue-700">Class Mode : </span>
              {classData?.classMode || "Offline"}
            </p>

            <p className="text-gray-600 mt-2 leading-relaxed text-sm">
              <span className="text-blue-700 font-semibold">
                Description :{" "}
              </span>
              {classData?.description}
            </p>
            {classData?.link && (
              <div
                onClick={handleCopyLink}
                className="text-blue-700 text-sm underline cursor-pointer"
              >
                Click Copy Online Class Link
              </div>
            )}
          </div>

          {/* Footer Section */}
          <div className="bg-blue-50 p-5">
            <div className="sm:flex sm:justify-between">
              {/* Mentor and Time/Date */}
              <div className="w-full">
                <div className="text-gray-700">
                  <span className="text-gray-900 font-bold">Mentor : </span>{" "}
                  {classData?.mentor}
                </div>
                <div className="flex justify-between mt-3">
                  {/* Time */}
                  <div className="flex gap-2 items-center">
                    <FaClock color="gray" size={20} />
                    <p className="text-gray-600 text-sm">
                      {classData?.classDuration}
                    </p>
                  </div>
                  {/* Date */}
                  <div className="flex gap-2 items-center">
                    <FaRegCalendarAlt color="gray" size={20} />
                    <p className="text-gray-600 text-sm">
                      {classData?.classDate}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 ms-4 pb-4">
            <Link to={`edit/${classData?._id}`}>
              <button className="text-white bg-blue-700 py-2 px-5 rounded">
                Edit
              </button>
            </Link>
           
            <button
              onClick={() => handleDelete(classData._id)}
              className="text-white bg-red-700 py-2 px-5 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ClassCard;
