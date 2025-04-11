import { useParams } from "react-router";
import Title from "../Components/Title";
import { useEffect, useState } from "react";
import { axiosSecure } from "../Apis/axios";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    axiosSecure.get("/course.json").then((res) => {
      const found = res.data.find((c) => c.id === parseInt(id));
      setCourse(found);
    });
  }, [id]);

  return (
    <div className="container mx-auto pt-20">
      <Title heading={"Course Details"} title={course?.title || "Loading..."} />

      {course && (
        <div className="max-w-5xl mx-auto p-6 text-white">
          {/* Course Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
            <img
              src={course.img}
              alt={course.title}
              className="w-full h-80 object-cover"
            />
          </div>

          {/* Course Info */}
          <div className="bg-[#0F172A] rounded-2xl p-6 shadow-md">
            <h1 className="text-3xl font-bold text-blue-400 mb-4">
              {course.title}
            </h1>
            <p className="mb-4 text-gray-300">{course.description}</p>

            {/* Topics */}
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-blue-300 mb-2">
                What you'll learn:
              </h2>
              <ul className="list-disc list-inside space-y-1 text-gray-200">
                {course.topics.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
            </div>

            {/* Mentor Info */}
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-blue-300 mb-2">
                Mentor
              </h2>
              <p className="text-gray-300">{course.mentor}</p>
            </div>

            {/* Course Meta */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-gray-300">
              <div>
                <strong className="text-blue-400">Modules:</strong>{" "}
                {course.modules}
              </div>
              <div>
                <strong className="text-blue-400">Total Duration:</strong>{" "}
                {course.duration}
              </div>
              <div>
                <strong className="text-blue-400">Class Mode:</strong>{" "}
                {course.mode}
              </div>
            </div>

            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition duration-300">
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
