import { useEffect, useState } from "react";
import Title from "./Title";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import CourseCard from "./CouseCard";
import { axiosSecure } from "../Apis/axios";

const CourseSection = () => {
  // Sample course data - replace with your actual data
  const [courses,setCourses]=useState([]);
  useEffect(()=>{
      axiosSecure("/courses").then((res) => setCourses(res?.data));
  },[])

  const [showAll, setShowAll] = useState(false);
  const displayedCourses = showAll ? courses : courses.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto py-10">
      <Title heading={"Our Courses"} title={"All the courses we provide"} />

      <div className="grid grid-cols-1 sm:grid-cols-2  gap-5 justify-items-center items-center px-4">
        {displayedCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {courses.length > 4 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-blue-700 border border-blue-700 rounded-3xl px-6 mt-10 mx-auto cursor-pointer py-2 text-lg flex justify-center items-center gap-3 hover:bg-blue-50 transition-colors"
        >
          {showAll ? "Show Less" : "See More"}
          {showAll ? <FaArrowUp /> : <FaArrowDown />}
        </button>
      )}
    </div>
  );
};

export default CourseSection;
