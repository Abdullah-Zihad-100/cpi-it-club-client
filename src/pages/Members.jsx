import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../Apis/axios";
import ShereBanner from "../Components/ShereBanner";
import { MdOutlineMailOutline } from "react-icons/md";
import Title from "../Components/Title";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Members = () => {
  const { data: members = [] } = useQuery({
    queryKey: ["members"],
    queryFn: async () => {
      const res = await axiosSecure.get("/members");
      return res.data;
    },
  });

  const presidents = members.filter(
    (member) => member.isPresident && !member.isTeacher
  );
  const teachers = members.filter((member) => member.isTeacher);
  const generalMembers = members.filter(
    (member) => !member.isPresident && !member.isTeacher
  );

  return (
    <div className="pb-16 bg-gray-50 overflow-hidden">
      <ShereBanner title={"Members"} />

      <Title
        heading={"Our Advisors"}
        title={"They guide our team with their experience."}
      />

      {/* Teachers & Advisors Section */}
      {teachers.length > 0 && (
        <div className="max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-8 mb-16 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-8 gap-y-12">
            {teachers.map((member, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rainbow-border"
              >
                <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-indigo-500 shadow-md -mt-16 mb-4">
                  <img
                    src={member.profile}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                </div>

                <h3 className="text-2xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-xs text-indigo-600 mt-1">({member.post})</p>
                <p className="text-sm text-gray-600 mt-3">
                  {member.description.slice(0, 200)}...
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-4 mt-5">
                  <a
                    href={member.fbLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="text-indigo-600 hover:text-indigo-800 text-xl transition-colors" />
                  </a>

                  <a
                    href={member.linkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="text-indigo-600 hover:text-indigo-800 text-xl transition-colors" />
                  </a>

                  <div className="relative group cursor-pointer">
                    <MdOutlineMailOutline className="text-indigo-600 hover:text-indigo-800 text-xl transition-colors" />
                    <div className="absolute bottom-full mb-2 bg-white text-black text-xs px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                      {member.email}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <Title
        heading={"Our Team Members"}
        title={"Meet our dedicated team of professionals"}
      />

      {/* President Section */}
      {presidents.length > 0 && (
        <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            {presidents.map((member, index) => (
              <div
                key={index}
                className="rounded-xl p-6 w-full md:w-80 text-center shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-blue-500 to-blue-700  text-white"
              >
                <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 shadow-lg border-white ring-4 ring-yellow-500 -mt-16">
                  <img
                    src={member.profile}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="mt-4">
                  <span className="inline-block text-xs font-bold px-4 py-1 rounded-full bg-yellow-400 text-blue-900">
                    {member.post}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mt-3">{member.name}</h2>
                <h2 className="text-[14px] opacity-90 mt-2">
                  Semester: {member.semester}
                </h2>
                <p className="text-xs opacity-80 mt-2 px-4">
                  {member.description?.slice(0, 110)}...
                </p>
                <div className="flex justify-center gap-4 mt-5">
                  <a
                    href={member.fbLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 text-xl"
                  >
                    <FaFacebook />
                  </a>
                  <div className="relative group flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-gray-600 dark:text-white group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"
                        clipRule="evenodd"
                      ></path>
                    </svg>

                    {/* Tooltip */}
                    <div className="absolute -top-8 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                      {member?.email || "Not Provide"}
                    </div>
                  </div>
                  <a
                    href={member.linkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 text-xl"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* General Members */}
      <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {generalMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 mt-10"
            >
              <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-md ring-2 ring-blue-400 -mt-12">
                <img
                  src={member.profile}
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="mt-4">
                <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {member.post}
                </span>
              </div>
              <h2 className="text-lg font-semibold mt-3 text-gray-800">
                {member.name}
              </h2>
              {member.semester && (
                <h2 className="text-xs font-semibold text-blue-600 mt-1">
                  Semester: {member.semester}
                </h2>
              )}
              <p className="text-xs text-gray-500 mt-2">
                {member.description?.slice(0, 100)}...
              </p>

              <div className="flex justify-center gap-4 mt-5">
                <a
                  href={member.fbLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 text-xl text-blue-500"
                >
                  <FaFacebook />
                </a>
                <div className="relative group flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-gray-600 dark:text-blue-500 group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"
                      clipRule="evenodd"
                    ></path>
                  </svg>

                  {/* Tooltip */}
                  <div className="absolute -top-8 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                    {member?.email || "Not Provide"}
                  </div>
                </div>{" "}
                <a
                  href={member.linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 text-xl text-blue-500"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;
