import { Link } from "react-router";
import { MdAccessTime } from "react-icons/md";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full relative">
      <div className="flex absolute top-2.5 right-2 item-center gap-x-1 text-blue-700 rounded-md p-1.5 bg-white/80">
        <MdAccessTime size={25} /> 1h 30min
      </div>
      <img
        src={course?.img}
        alt="Mountain"
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-blue-700 mb-2">
          {course?.title}
        </h2>
        <p className="text-gray-600 text-sm  mb-4">
          <span className="font-semibold text-blue-700 text-[14px]">
            Description:{" "}
          </span>{" "}
          {course?.description}
        </p>
        {/* button */}
        <div className="flex justify-between items-center gap-5">
          <Link
            to={`/course/${course?.id}`}
            className="relative inline-flex  items-center justify-center px-8 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-blue-700 rounded-full shadow-md group bg-blue-700 hover:bg-transparent hover:text-blue-700"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-blue-700 duration-300 -translate-x-full bg-transparent group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
              Learn More
              <svg
                className="w-5 h-5 ms-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
            <span className="relative invisible">Learn More</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
